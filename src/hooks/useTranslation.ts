'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useTranslation() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt';
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const messages = await import(`../../messages/${locale}.json`);
        setTranslations(messages.default);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to Portuguese
        const fallback = await import(`../../messages/pt.json`);
        setTranslations(fallback.default);
        setIsLoaded(true);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    if (!isLoaded) {
      return key; // Return key during loading to prevent hydration mismatch
    }
    
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    // Ensure we always return a string
    return typeof value === 'string' ? value : key;
  };

  return { t, locale, isLoaded };
}
