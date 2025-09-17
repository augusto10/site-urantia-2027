'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function TicketsPage() {
  const { t } = useTranslation();
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [includeTrip, setIncludeTrip] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roomTypes = [
    {
      id: 'individual',
      name: t('tickets.room_types_list.individual.name'),
      description: t('tickets.room_types_list.individual.description'),
      price: 450,
      features: t('tickets.room_types_list.individual.features').split(',')
    },
    {
      id: 'double',
      name: t('tickets.room_types_list.double.name'),
      description: t('tickets.room_types_list.double.description'),
      price: 380,
      features: t('tickets.room_types_list.double.features').split(',')
    },
    {
      id: 'triple',
      name: t('tickets.room_types_list.triple.name'),
      description: t('tickets.room_types_list.triple.description'),
      price: 320,
      features: t('tickets.room_types_list.triple.features').split(',')
    },
    {
      id: 'shared',
      name: t('tickets.room_types_list.shared.name'),
      description: t('tickets.room_types_list.shared.description'),
      price: 250,
      features: t('tickets.room_types_list.shared.features').split(',')
    }
  ];

  const calculateTotal = () => {
    const selectedRoomType = roomTypes.find(room => room.id === selectedRoom);
    if (!selectedRoomType || !checkIn || !checkOut) return 0;

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    let total = selectedRoomType.price * nights;
    if (includeTrip) total += 150; // Trip cost

    return total;
  };

  const handlePurchase = async () => {
    if (!selectedRoom || !checkIn || !checkOut || !customerName || !customerEmail) {
      alert(t('tickets.fill_required_fields'));
      return;
    }
    
    setIsSubmitting(true);
    
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomType: selectedRoom,
          nights,
          includeTrip,
          checkIn,
          checkOut,
          customerEmail,
          customerName,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(m => m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!));
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe error:', error);
          alert(t('tickets.payment_error'));
          setIsSubmitting(false);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('tickets.purchase_error'));
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('tickets.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {t('tickets.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Event Tickets Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tickets.event_tickets.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('tickets.event_tickets.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Full Event Ticket */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('tickets.event_tickets.full_event.name')}</h3>
                <p className="text-gray-600 mb-6">{t('tickets.event_tickets.full_event.description')}</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">{t('tickets.event_tickets.full_event.price')}</div>
                
                <ul className="text-left space-y-2 mb-8">
                  {t('tickets.event_tickets.full_event.features').split(',').map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Comprar Ingresso Completo
                </button>
              </div>
            </div>
            
            {/* Single Day Ticket */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('tickets.event_tickets.single_day.name')}</h3>
                <p className="text-gray-600 mb-6">{t('tickets.event_tickets.single_day.description')}</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">{t('tickets.event_tickets.single_day.price')}</div>
                
                <ul className="text-left space-y-2 mb-8">
                  {t('tickets.event_tickets.single_day.features').split(',').map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                  Comprar Ingresso Diário
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acomodações</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Escolha sua acomodação para os dias do evento</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Room Types */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('tickets.room_types')}</h2>
              <div className="space-y-6">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                      selectedRoom === room.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="roomType"
                          value={room.id}
                          checked={selectedRoom === room.id}
                          onChange={() => setSelectedRoom(room.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                          <p className="text-gray-600">{room.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">R$ {room.price}</div>
                        <div className="text-sm text-gray-500">{t('tickets.per_night')}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Options */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('tickets.additional_options')}</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="includeTrip"
                    checked={includeTrip}
                    onChange={(e) => setIncludeTrip(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="includeTrip" className="ml-2 flex items-center justify-between w-full">
                    <div>
                      <span className="text-gray-900 font-medium">{t('tickets.optional_trip')}</span>
                      <p className="text-sm text-gray-600">{t('tickets.optional_trip_desc')}</p>
                    </div>
                    <span className="text-lg font-semibold text-blue-600">+ R$ 150</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('tickets.booking_summary')}</h3>
                
                {/* Customer Information */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('tickets.full_name')} *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={t('tickets.full_name_placeholder')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('tickets.email')} *
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder={t('tickets.email_placeholder')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('tickets.check_in')}
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min="2027-07-14"
                      max="2027-07-18"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('tickets.check_out')}
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min="2027-07-15"
                      max="2027-07-20"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Summary */}
                {selectedRoom && checkIn && checkOut && (
                  <div className="border-t pt-4 mb-6">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{t('tickets.room_type')}:</span>
                        <span>{roomTypes.find(r => r.id === selectedRoom)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('tickets.nights')}:</span>
                        <span>{Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('tickets.price_per_night')}:</span>
                        <span>R$ {roomTypes.find(r => r.id === selectedRoom)?.price}</span>
                      </div>
                      {includeTrip && (
                        <div className="flex justify-between">
                          <span>{t('tickets.optional_trip')}:</span>
                          <span>R$ 150</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{t('tickets.total')}:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      R$ {calculateTotal().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {t('tickets.includes_meals')}
                  </p>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={handlePurchase}
                  disabled={!selectedRoom || !checkIn || !checkOut || !customerName || !customerEmail || isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? t('tickets.processing') : t('tickets.finalize_purchase')}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  {t('tickets.secure_payment')}
                </p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('tickets.whats_included')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">{t('tickets.accommodation')}</h4>
                <p className="text-sm text-gray-600">{t('tickets.accommodation_desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">{t('tickets.meals')}</h4>
                <p className="text-sm text-gray-600">{t('tickets.meals_desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">{t('tickets.materials')}</h4>
                <p className="text-sm text-gray-600">{t('tickets.materials_desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">{t('tickets.activities')}</h4>
                <p className="text-sm text-gray-600">{t('tickets.activities_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
