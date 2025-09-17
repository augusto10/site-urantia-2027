'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function CountdownTimer() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: October 15, 2027
    const eventDate = new Date('2027-10-15T00:00:00-03:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('countdown.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('countdown.subtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="text-center">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t('countdown.days')}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t('countdown.hours')}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t('countdown.minutes')}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t('countdown.seconds')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            {t('countdown.eventInfo')}
          </p>
          <div className="mt-4 flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
            <div className="flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{t('countdown.dates')}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">{t('countdown.location')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
