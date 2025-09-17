'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function FAQPage() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: t('faq.categories.general'),
      questions: [
        {
          question: t('faq.general.q1'),
          answer: t('faq.general.a1')
        },
        {
          question: t('faq.general.q2'),
          answer: t('faq.general.a2')
        },
        {
          question: t('faq.general.q3'),
          answer: t('faq.general.a3')
        }
      ]
    },
    {
      category: t('faq.categories.registration'),
      questions: [
        {
          question: t('faq.registration.q1'),
          answer: t('faq.registration.a1')
        },
        {
          question: t('faq.registration.q2'),
          answer: t('faq.registration.a2')
        },
        {
          question: t('faq.registration.q3'),
          answer: t('faq.registration.a3')
        }
      ]
    },
    {
      category: t('faq.categories.accommodation'),
      questions: [
        {
          question: t('faq.accommodation.q1'),
          answer: t('faq.accommodation.a1')
        },
        {
          question: t('faq.accommodation.q2'),
          answer: t('faq.accommodation.a2')
        },
        {
          question: t('faq.accommodation.q3'),
          answer: t('faq.accommodation.a3')
        }
      ]
    },
    {
      category: t('faq.categories.program'),
      questions: [
        {
          question: t('faq.program.q1'),
          answer: t('faq.program.a1')
        },
        {
          question: t('faq.program.q2'),
          answer: t('faq.program.a2')
        },
        {
          question: t('faq.program.q3'),
          answer: t('faq.program.a3')
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('faq.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{t('faq.still_questions')}</h2>
            <p className="text-blue-100 mb-6">
              {t('faq.contact_us')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@urantia.org.br"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('faq.contact_button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
