'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { loadStripe } from '@stripe/stripe-js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function DonatePage() {
  const { t } = useTranslation();
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedAmounts = [50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount.toString());
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setDonationAmount(value);
  };

  const handleDonate = async () => {
    if (!donationAmount || !donorName || !donorEmail) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const amount = parseFloat(donationAmount);
    if (amount < 10) {
      alert('O valor mínimo para doação é R$ 10,00.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          donorName,
          donorEmail,
          message,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe error:', error);
          alert('Erro ao processar pagamento. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao processar doação. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Faça uma Doação
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Sua contribuição ajuda a tornar este evento ainda mais especial e acessível para leitores de todo o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Donation Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contribua com o Evento</h2>
              
              {/* Suggested Amounts */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Escolha um valor ou digite um valor personalizado
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-colors ${
                        donationAmount === amount.toString()
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      R$ {amount}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">R$</span>
                  <input
                    type="number"
                    placeholder="Valor personalizado"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="10"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="donorName"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="donorEmail"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Deixe uma mensagem de apoio ou motivação..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={isLoading || !donationAmount || !donorName || !donorEmail}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Processando...' : `Doar R$ ${donationAmount || '0'}`}
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Pagamento seguro via Stripe. Você receberá um recibo por e-mail.
              </p>
            </div>

            {/* Why Donate */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Por que doar?</h3>
                <p className="text-blue-100 mb-6">
                  Suas doações ajudam a tornar este evento acessível para leitores de diferentes condições financeiras 
                  e contribuem para a qualidade das atividades oferecidas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">Bolsas de estudo para participantes</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">Materiais de estudo de qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">Infraestrutura e equipamentos</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">Atividades culturais especiais</span>
                  </div>
                </div>
              </div>

              {/* Donation Impact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Impacto das Doações</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-green-600 font-bold">R$ 50</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Materiais de Estudo</h4>
                      <p className="text-gray-600 text-sm">Cobre apostilas e materiais para um participante</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">R$ 150</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Bolsa Parcial</h4>
                      <p className="text-gray-600 text-sm">Ajuda um participante com custos de alimentação</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-purple-600 font-bold">R$ 500</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Bolsa Completa</h4>
                      <p className="text-gray-600 text-sm">Patrocina a participação completa de alguém</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recognition */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reconhecimento</h3>
                <p className="text-gray-600 mb-4">
                  Doadores que contribuírem com R$ 200 ou mais serão reconhecidos como apoiadores do evento 
                  (mediante autorização) em nossos materiais de divulgação.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Todas as doações são seguras e confidenciais
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
