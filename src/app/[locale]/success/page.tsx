'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from '../../../hooks/useTranslation';

export default function SuccessPage() {
  const { t, locale } = useTranslation();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Fetch session details from Stripe
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching session:', err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Processando sua compra...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-green-600 px-8 py-12 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Pagamento Realizado com Sucesso!
            </h1>
            <p className="text-green-100 text-lg">
              Sua inscrição no Encontro Internacional de Urântia 2027 foi confirmada.
            </p>
          </div>

          {/* Booking Details */}
          <div className="px-8 py-8">
            {sessionData && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detalhes da sua Reserva</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">ID da Sessão:</span>
                      <p className="text-gray-900 font-mono text-sm">{sessionId}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Email:</span>
                      <p className="text-gray-900">{sessionData.customer_email}</p>
                    </div>
                    {sessionData.metadata && (
                      <>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Tipo de Quarto:</span>
                          <p className="text-gray-900">{getRoomTypeName(sessionData.metadata.roomType)}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Período:</span>
                          <p className="text-gray-900">
                            {sessionData.metadata.checkIn} a {sessionData.metadata.checkOut} 
                            ({sessionData.metadata.nights} noites)
                          </p>
                        </div>
                        {sessionData.metadata.includeTrip === 'true' && (
                          <div className="md:col-span-2">
                            <span className="text-sm font-medium text-gray-500">Extras:</span>
                            <p className="text-gray-900">Passeio opcional incluído</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Passos</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Confirmação por Email</h3>
                    <p className="text-gray-600">Você receberá um email de confirmação com todos os detalhes da sua reserva em alguns minutos.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Informações Adicionais</h3>
                    <p className="text-gray-600">Em breve enviaremos informações sobre transporte, programação detalhada e orientações para o evento.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Prepare-se para o Evento</h3>
                    <p className="text-gray-600">Marque em seu calendário: 15-19 de Julho de 2027, Guarulhos/SP, Brasil.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Precisa de Ajuda?</h3>
              <p className="text-gray-600 mb-4">
                Se você tiver alguma dúvida sobre sua reserva ou o evento, entre em contato conosco:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> contato@urantia2027.com.br
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">WhatsApp:</span> +55 (11) 99999-9999
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}`}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
              >
                Voltar ao Início
              </a>
              <a
                href={`/${locale}/program`}
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-center font-semibold hover:bg-gray-200 transition-colors"
              >
                Ver Programação
              </a>
              <button
                onClick={() => window.print()}
                className="bg-green-100 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors"
              >
                Imprimir Confirmação
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function getRoomTypeName(roomType: string): string {
  const names = {
    individual: 'Quarto Individual',
    double: 'Quarto Casal',
    triple: 'Quarto Triplo',
    shared: 'Quarto Compartilhado',
  };
  return names[roomType as keyof typeof names] || roomType;
}
