import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, donorName, donorEmail, message } = body;

    // Validate amount (minimum R$ 10)
    if (!amount || amount < 10) {
      return NextResponse.json({ error: 'Minimum donation amount is R$ 10' }, { status: 400 });
    }

    // Convert to cents for Stripe
    const amountInCents = Math.round(amount * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Doação - Encontro Internacional Urântia 2027',
              description: message ? `Mensagem: ${message}` : 'Contribuição para o evento',
              images: ['https://your-domain.com/donation-image.jpg'], // Add your donation image
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
      customer_email: donorEmail,
      metadata: {
        type: 'donation',
        donorName,
        donorEmail,
        message: message || '',
        amount: amount.toString(),
      },
      billing_address_collection: 'auto',
      payment_intent_data: {
        description: `Doação Encontro Urântia 2027 - ${donorName}`,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating donation checkout session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
