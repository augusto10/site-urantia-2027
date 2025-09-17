'use client';

import { useTranslation } from '../../../hooks/useTranslation';

export default function ProgramPage() {
  const { t } = useTranslation();

  const program = [
    {
      day: t('program.day1.date'),
      title: t('program.day1.title'),
      activities: [
        { time: '09:00', title: t('program.day1.activity1.title'), description: t('program.day1.activity1.description') },
        { time: '11:00', title: t('program.day1.activity2.title'), description: t('program.day1.activity2.description') },
        { time: '14:00', title: t('program.day1.activity3.title'), description: t('program.day1.activity3.description') },
        { time: '16:00', title: t('program.day1.activity4.title'), description: t('program.day1.activity4.description') }
      ]
    },
    {
      day: t('program.day2.date'),
      title: t('program.day2.title'),
      activities: [
        { time: '09:00', title: t('program.day2.activity1.title'), description: t('program.day2.activity1.description') },
        { time: '11:00', title: t('program.day2.activity2.title'), description: t('program.day2.activity2.description') },
        { time: '14:00', title: t('program.day2.activity3.title'), description: t('program.day2.activity3.description') },
        { time: '16:00', title: t('program.day2.activity4.title'), description: t('program.day2.activity4.description') }
      ]
    },
    {
      day: t('program.day3.date'),
      title: t('program.day3.title'),
      activities: [
        { time: '09:00', title: t('program.day3.activity1.title'), description: t('program.day3.activity1.description') },
        { time: '11:00', title: t('program.day3.activity2.title'), description: t('program.day3.activity2.description') },
        { time: '14:00', title: t('program.day3.activity3.title'), description: t('program.day3.activity3.description') },
        { time: '16:00', title: t('program.day3.activity4.title'), description: t('program.day3.activity4.description') }
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
              {t('program.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {t('program.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {program.map((day, dayIndex) => (
              <div key={dayIndex} className="border-t border-gray-200 pt-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {day.day}
                </h2>
                <h3 className="mt-2 text-lg font-medium text-gray-600">
                  {day.title}
                </h3>
                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                  {day.activities.map((activity, activityIndex) => (
                    <div
                      key={activityIndex}
                      className="relative flex gap-x-4 rounded-xl bg-white p-6 shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
                        {activity.time}
                      </div>
                      <div className="flex-auto">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {activity.title}
                        </h4>
                        <p className="mt-2 text-gray-600">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
