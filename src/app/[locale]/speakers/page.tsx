'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function SpeakersPage() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');

  const speakers = [
    {
      id: 1,
      name: 'Dr. Maria Santos',
      country: 'Brasil',
      flag: '🇧🇷',
      languages: ['pt', 'es'],
      bio: 'Doutora em Filosofia e leitora do Livro de Urântia há mais de 20 anos. Especialista em estudos sobre espiritualidade e crescimento pessoal.',
      topics: ['Fundamentos de Urântia', 'Crescimento Espiritual'],
      days: ['day2', 'day3'],
      image: '/speakers/maria-santos.jpg'
    },
    {
      id: 2,
      name: 'Prof. John Mitchell',
      country: 'Estados Unidos',
      flag: '🇺🇸',
      languages: ['en'],
      bio: 'Professor de Teologia e estudioso dos ensinamentos de Urântia por 25 anos. Autor de diversos artigos sobre a revelação.',
      topics: ['História da Revelação', 'Teologia Urantiense'],
      days: ['day2', 'day4'],
      image: '/speakers/john-mitchell.jpg'
    },
    {
      id: 3,
      name: 'Dra. Sophie Dubois',
      country: 'França',
      flag: '🇫🇷',
      languages: ['fr', 'en'],
      bio: 'Psicóloga especializada em desenvolvimento humano e espiritualidade. Facilitadora de grupos de estudo há 15 anos.',
      topics: ['Psicologia e Espiritualidade', 'Desenvolvimento da Alma'],
      days: ['day3', 'day4'],
      image: '/speakers/sophie-dubois.jpg'
    },
    {
      id: 4,
      name: 'Dr. Carlos Mendoza',
      country: 'Argentina',
      flag: '🇦🇷',
      languages: ['es', 'pt'],
      bio: 'Médico e filósofo, dedicado ao estudo dos aspectos científicos e espirituais do Livro de Urântia há 18 anos.',
      topics: ['Ciência e Espiritualidade', 'Saúde Integral'],
      days: ['day2', 'day3'],
      image: '/speakers/carlos-mendoza.jpg'
    },
    {
      id: 5,
      name: 'Rev. Patricia Williams',
      country: 'Canadá',
      flag: '🇨🇦',
      languages: ['en', 'fr'],
      bio: 'Ministra e educadora espiritual. Pioneira na organização de encontros internacionais de leitores de Urântia.',
      topics: ['Serviço e Missão', 'Liderança Espiritual'],
      days: ['day4'],
      image: '/speakers/patricia-williams.jpg'
    },
    {
      id: 6,
      name: 'Prof. Antonio Silva',
      country: 'Portugal',
      flag: '🇵🇹',
      languages: ['pt', 'es'],
      bio: 'Professor de História das Religiões e coordenador de grupos de estudo. Especialista em tradições espirituais.',
      topics: ['História das Religiões', 'Tradições Espirituais'],
      days: ['day2', 'day4'],
      image: '/speakers/antonio-silva.jpg'
    }
  ];

  const filteredSpeakers = speakers.filter(speaker => {
    const languageMatch = selectedLanguage === 'all' || speaker.languages.includes(selectedLanguage);
    const dayMatch = selectedDay === 'all' || speaker.days.includes(selectedDay);
    return languageMatch && dayMatch;
  });

  const languageOptions = [
    { value: 'all', label: 'Todos os idiomas' },
    { value: 'pt', label: 'Português' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' }
  ];

  const dayOptions = [
    { value: 'all', label: 'Todos os dias' },
    { value: 'day2', label: 'Dia 2' },
    { value: 'day3', label: 'Dia 3' },
    { value: 'day4', label: 'Dia 4' }
  ];

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Palestrantes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Conheça os especialistas e estudiosos que compartilharão seus conhecimentos e experiências conosco durante o evento.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <label htmlFor="language-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por idioma:
              </label>
              <select
                id="language-filter"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="day-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por dia:
              </label>
              <select
                id="day-filter"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {dayOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Speaker Image */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-blue-600">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Speaker Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                    <span className="text-2xl">{speaker.flag}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{speaker.country}</p>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                  
                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Temas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {speaker.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Idiomas:</h4>
                    <div className="flex gap-2">
                      {speaker.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded uppercase font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Days */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Participação:</h4>
                    <div className="flex gap-2">
                      {speaker.days.map((day, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                        >
                          {day === 'day2' ? 'Dia 2' : day === 'day3' ? 'Dia 3' : 'Dia 4'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSpeakers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum palestrante encontrado com os filtros selecionados.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Aprenda com os Melhores
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de aprender com estes especialistas renomados e fazer parte desta experiência única de crescimento espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Inscreva-se Agora
              </a>
              <a
                href="/program"
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Ver Programação Completa
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
