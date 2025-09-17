'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function CTASection() {
  const { t, locale } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            {t('cta.subtitle')}
          </p>
          
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Register CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('cta.register.title')}</h3>
              <p className="text-blue-100 mb-6">
                {t('cta.register.description')}
              </p>
              <Link
                href={`/${locale}/register`}
                className="inline-flex w-full justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('cta.register.button')}
              </Link>
            </div>

            {/* Tickets CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('cta.tickets.title')}</h3>
              <p className="text-blue-100 mb-6">
                {t('cta.tickets.description')}
              </p>
              <Link
                href={`/${locale}/tickets`}
                className="inline-flex w-full justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-blue-400"
              >
                {t('cta.tickets.button')}
              </Link>
            </div>

            {/* Donate CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('cta.donate.title')}</h3>
              <p className="text-blue-100 mb-6">
                {t('cta.donate.description')}
              </p>
              <Link
                href={`/${locale}/donate`}
                className="inline-flex w-full justify-center bg-transparent text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/30"
              >
                {t('cta.donate.button')}
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 text-sm">
              {t('cta.help')}{' '}
              <Link href={`/${locale}/faq`} className="underline hover:text-white">
                {t('cta.faq')}
              </Link>
              {' '}ou{' '}
              <Link href={`/${locale}/contact`} className="underline hover:text-white">
                {t('cta.contact')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
