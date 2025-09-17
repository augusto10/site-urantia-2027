import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { roomType, nights, includeTrip, checkIn, checkOut, customerEmail, customerName } = body;

    // Room prices
    const roomPrices = {
      individual: 450,
      double: 380,
      triple: 320,
      shared: 250,
    };

    const roomPrice = roomPrices[roomType as keyof typeof roomPrices];
    if (!roomPrice) {
      return NextResponse.json({ error: 'Invalid room type' }, { status: 400 });
    }

    let totalAmount = roomPrice * nights;
    if (includeTrip) {
      totalAmount += 150;
    }

    // Convert to cents for Stripe
    const amountInCents = Math.round(totalAmount * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: `Encontro Urântia 2027 - ${getRoomTypeName(roomType)}`,
              description: `${nights} noites (${checkIn} a ${checkOut})${includeTrip ? ' + Passeio opcional' : ''}`,
              images: ['https://your-domain.com/event-image.jpg'], // Add your event image
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
      customer_email: customerEmail,
      metadata: {
        roomType,
        nights: nights.toString(),
        includeTrip: includeTrip.toString(),
        checkIn,
        checkOut,
        customerName,
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['BR', 'US', 'CA', 'AR', 'CL', 'CO', 'PE', 'UY', 'PY', 'ES', 'FR', 'IT', 'DE', 'GB', 'AU'],
      },
      payment_intent_data: {
        description: `Encontro Internacional Urântia 2027 - ${customerName}`,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getRoomTypeName(roomType: string): string {
  const names = {
    individual: 'Quarto Individual',
    double: 'Quarto Casal',
    triple: 'Quarto Triplo',
    shared: 'Quarto Compartilhado',
  };
  return names[roomType as keyof typeof names] || roomType;
}
