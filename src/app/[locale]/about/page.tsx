'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Uma experiência única de comunhão, aprendizado e crescimento espiritual que reunirá leitores do Livro de Urântia de todo o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Objective */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">{t('objective')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                O Encontro Internacional de Leitores do Livro de Urântia 2027 tem como objetivo promover a comunhão entre leitores de diferentes culturas e países, proporcionando um ambiente de aprendizado mútuo, crescimento espiritual e fortalecimento dos laços fraternais que nos unem através dos ensinamentos do Livro de Urântia.
              </p>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">{t('audience')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Este evento é destinado a todos os leitores do Livro de Urântia, independentemente do tempo de estudo ou nível de conhecimento. Sejam bem-vindos estudantes iniciantes, leitores experientes, membros de grupos de estudo, e todos aqueles que buscam uma compreensão mais profunda dos ensinamentos revelados.
              </p>
            </div>

            {/* History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">{t('history')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                O Livro de Urântia, publicado em 1955, representa uma das mais significativas revelações espirituais da era moderna. Seus ensinamentos sobre a natureza de Deus, o universo, a história da humanidade e o destino eterno têm inspirado milhões de leitores ao redor do mundo, criando uma comunidade global unida pela busca da verdade, beleza e bondade.
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">{t('location')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                O evento será realizado em Guarulhos, São Paulo, Brasil, especificamente no Parque Estadual da Mantiqueira - Núcleo Cabuçu. Este local foi escolhido por oferecer um ambiente natural e tranquilo, ideal para reflexão, meditação e comunhão espiritual.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Endereço:</h4>
                <p className="text-gray-600">
                  Parque Estadual da Mantiqueira - Núcleo Cabuçu<br />
                  Guarulhos, São Paulo, Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Dates and Schedule */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">{t('dates')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">2027</div>
                  <div className="text-blue-200">Ano do Evento</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Julho</div>
                  <div className="text-blue-200">Mês Previsto</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5 Dias</div>
                  <div className="text-blue-200">Duração do Evento</div>
                </div>
              </div>
              <p className="mt-8 text-blue-100 max-w-2xl mx-auto">
                As datas exatas serão confirmadas em breve. Mantenha-se atualizado através de nossas redes sociais e newsletter para não perder nenhuma informação importante.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Faça Parte Desta Experiência Única
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de participar deste encontro histórico. Inscreva-se agora e garante sua presença neste momento especial da comunidade Urântia.
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
                Ver Programação
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
