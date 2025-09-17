import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Here you would typically:
      // 1. Save the booking to your database
      // 2. Send confirmation email to the customer
      // 3. Update inventory/availability
      
      console.log('Payment successful for session:', session.id);
      console.log('Customer email:', session.customer_email);
      console.log('Metadata:', session.metadata);
      
      // Example: Send confirmation email (you would implement this)
      await sendConfirmationEmail({
        email: session.customer_email!,
        customerName: session.metadata?.customerName || 'Participante',
        roomType: session.metadata?.roomType || '',
        nights: session.metadata?.nights || '0',
        checkIn: session.metadata?.checkIn || '',
        checkOut: session.metadata?.checkOut || '',
        includeTrip: session.metadata?.includeTrip === 'true',
        sessionId: session.id,
      });
      
      break;
    
    case 'payment_intent.payment_failed':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('Payment failed:', paymentIntent.id);
      break;
    
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function sendConfirmationEmail(data: {
  email: string;
  customerName: string;
  roomType: string;
  nights: string;
  checkIn: string;
  checkOut: string;
  includeTrip: boolean;
  sessionId: string;
}) {
  // This is a placeholder for email sending functionality
  // You would integrate with services like SendGrid, Nodemailer, etc.
  console.log('Sending confirmation email to:', data.email);
  console.log('Booking details:', data);
  
  // Example email content structure:
  const emailContent = {
    to: data.email,
    subject: 'Confirmação de Inscrição - Encontro Internacional Urântia 2027',
    html: `
      <h1>Confirmação de Inscrição</h1>
      <p>Olá ${data.customerName},</p>
      <p>Sua inscrição foi confirmada com sucesso!</p>
      <h2>Detalhes da Reserva:</h2>
      <ul>
        <li>Tipo de quarto: ${getRoomTypeName(data.roomType)}</li>
        <li>Período: ${data.checkIn} a ${data.checkOut} (${data.nights} noites)</li>
        <li>Passeio opcional: ${data.includeTrip ? 'Sim' : 'Não'}</li>
        <li>ID da sessão: ${data.sessionId}</li>
      </ul>
      <p>Em breve você receberá mais informações sobre o evento.</p>
      <p>Atenciosamente,<br>Equipe Organizadora</p>
    `,
  };
  
  // Here you would actually send the email
  // await emailService.send(emailContent);
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
