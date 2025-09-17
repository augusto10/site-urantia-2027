'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t, locale } = useTranslation();

  const footerNavigation = {
    event: [
      { name: t('navigation.about'), href: `/${locale}/about` },
      { name: t('navigation.program'), href: `/${locale}/program` },
      { name: t('navigation.speakers'), href: `/${locale}/speakers` },
      { name: t('navigation.workshops'), href: `/${locale}/workshops` },
    ],
    participate: [
      { name: t('navigation.register'), href: `/${locale}/register` },
      { name: t('navigation.tickets'), href: `/${locale}/tickets` },
      { name: t('navigation.donate'), href: `/${locale}/donate` },
      { name: t('navigation.faq'), href: `/${locale}/faq` },
    ],
    info: [
      { name: t('navigation.location'), href: `/${locale}/location` },
      { name: t('navigation.organizers'), href: `/${locale}/organizers` },
      { name: t('navigation.sponsors'), href: `/${locale}/sponsors` },
      { name: t('navigation.downloads'), href: `/${locale}/downloads` },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/urantia.brasil',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/urantia.brasil',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 00-2.134 1.404A5.916 5.916 0 00.42 4.058C.222 4.73.087 5.493.048 6.71.01 7.929 0 8.396 0 12.017s.01 4.087.048 5.306c.039 1.217.174 1.98.372 2.652a5.916 5.916 0 001.404 2.134 5.916 5.916 0 002.134 1.404c.672.198 1.435.333 2.652.372 1.219.038 1.686.048 5.306.048s4.087-.01 5.306-.048c1.217-.039 1.98-.174 2.652-.372a5.916 5.916 0 002.134-1.404 5.916 5.916 0 001.404-2.134c.198-.672.333-1.435.372-2.652.038-1.219.048-1.686.048-5.306s-.01-4.087-.048-5.306c-.039-1.217-.174-1.98-.372-2.652a5.916 5.916 0 00-1.404-2.134A5.916 5.916 0 0019.708.42c-.672-.198-1.435-.333-2.652-.372C16.087.01 15.62 0 12.017 0zm-.017 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@UrantiaBrasil',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t('footer.heading')}
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                {t('footer.title')}
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{t('footer.sections.event')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.event.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{t('footer.sections.participate')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.participate.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{t('footer.sections.info')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.info.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{t('footer.sections.contact')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="mailto:contato@urantia.org.br" className="text-sm leading-6 text-gray-300 hover:text-white">
                      contato@urantia.org.br
                    </a>
                  </li>
                  <li>
                    <a href="tel:+551132591019" className="text-sm leading-6 text-gray-300 hover:text-white">
                      +55 11 3259-1019
                    </a>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">
                      {t('footer.address')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-400">
              {t('footer.copyright')}
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <Link href={`/${locale}/privacy`} className="text-xs leading-5 text-gray-400 hover:text-gray-300">
                {t('footer.privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-xs leading-5 text-gray-400 hover:text-gray-300">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
