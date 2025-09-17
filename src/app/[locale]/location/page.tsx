'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function LocationPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Como Chegar
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Todas as informações necessárias para chegar ao Parque Estadual da Mantiqueira - Núcleo Cabuçu, em Guarulhos, São Paulo.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Address and Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Endereço do Evento</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Parque Estadual da Mantiqueira - Núcleo Cabuçu</h3>
                <p className="text-gray-600 mb-2">Estrada do Cabuçu, s/n</p>
                <p className="text-gray-600 mb-2">Guarulhos, SP - CEP: 07111-970</p>
                <p className="text-gray-600">Brasil</p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Mapa Interativo</p>
                  <p className="text-sm text-gray-400">Google Maps será integrado aqui</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://maps.google.com/?q=Parque+Estadual+da+Mantiqueira+Núcleo+Cabuçu+Guarulhos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Parque+Estadual+da+Mantiqueira+Guarulhos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Abrir no Waze
                </a>
              </div>
            </div>

            {/* Transportation Options */}
            <div className="space-y-8">
              {/* From Airport */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Do Aeroporto Internacional de Guarulhos</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  O aeroporto fica a apenas 15 km do local do evento. Oferecemos transporte gratuito em horários programados.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Transporte gratuito do evento (horários programados)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Táxi: aproximadamente R$ 40-60
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Uber/99: aproximadamente R$ 35-50
                  </li>
                </ul>
              </div>

              {/* By Car */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414A1 1 0 0016 10v6a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2M7 19a2 2 0 002-2m-2 2a2 2 0 01-2-2m2 2h2m-6-4a2 2 0 012-2h2a2 2 0 012 2M9 7h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">De Carro</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Estacionamento gratuito disponível no local (vagas limitadas).
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Principais Rotas:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• De São Paulo: Rodovia Presidente Dutra → Saída Guarulhos</li>
                    <li>• Do Rio de Janeiro: Via Dutra → Saída Guarulhos</li>
                    <li>• De Campinas: Rodovia Dom Pedro I → Guarulhos</li>
                  </ul>
                </div>
              </div>

              {/* Public Transportation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Transporte Público</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Opções de transporte público para chegar ao evento.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Metro + Ônibus:</span>
                    <span>Linha Azul até Tucuruvi → Ônibus 372 até Cabuçu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">CPTM:</span>
                    <span>Linha 7-Rubi até Guarulhos → Ônibus local</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accommodation Nearby */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Hospedagem Próxima</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Hotéis no Aeroporto</h3>
                <p className="text-blue-100 text-sm">
                  Várias opções de hotéis próximos ao Aeroporto Internacional de Guarulhos, a 15 minutos do evento.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Centro de Guarulhos</h3>
                <p className="text-blue-100 text-sm">
                  Hotéis e pousadas no centro da cidade, com fácil acesso ao local do evento.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">São Paulo Capital</h3>
                <p className="text-blue-100 text-sm">
                  Para quem prefere ficar na capital, com transporte diário para o evento.
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-blue-100 text-sm">
                Recomendamos reservar hospedagem com antecedência. Entre em contato para sugestões específicas.
              </p>
            </div>
          </div>

          {/* Important Information */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-yellow-800 mb-4">Informações Importantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Documentação</h3>
                <ul className="space-y-1 text-yellow-700">
                  <li>• Documento de identidade obrigatório</li>
                  <li>• Passaporte para participantes internacionais</li>
                  <li>• Comprovante de inscrição</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">O que levar</h3>
                <ul className="space-y-1 text-yellow-700">
                  <li>• Roupas confortáveis e adequadas ao clima</li>
                  <li>• Calçados para caminhada</li>
                  <li>• Seu Livro de Urântia pessoal</li>
                  <li>• Medicamentos pessoais</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Transportation */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de Ajuda com Transporte?
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar com informações sobre transporte e hospedagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:transporte@urantia2027.com.br"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                E-mail de Transporte
              </a>
              <a
                href="https://wa.me/5511999999999"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
