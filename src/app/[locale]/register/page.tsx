'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function RegisterPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    preferredLanguage: 'pt',
    participateTrip: false,
    specialNeeds: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    howDidYouHear: '',
    expectations: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Inscrição realizada com sucesso! Você receberá um e-mail de confirmação em breve.');
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Inscrição no Evento
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo para garantir sua participação no Encontro Internacional de Leitores do Livro de Urântia 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações Pessoais</h2>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp/Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+55 11 99999-9999"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  País/Nacionalidade *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione seu país</option>
                  <option value="BR">Brasil</option>
                  <option value="US">Estados Unidos</option>
                  <option value="CA">Canadá</option>
                  <option value="AR">Argentina</option>
                  <option value="CL">Chile</option>
                  <option value="CO">Colômbia</option>
                  <option value="PE">Peru</option>
                  <option value="UY">Uruguai</option>
                  <option value="PY">Paraguai</option>
                  <option value="ES">Espanha</option>
                  <option value="FR">França</option>
                  <option value="IT">Itália</option>
                  <option value="DE">Alemanha</option>
                  <option value="UK">Reino Unido</option>
                  <option value="AU">Austrália</option>
                  <option value="OTHER">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-2">
                  Idioma Preferido *
                </label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  required
                  value={formData.preferredLanguage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>

              {/* Event Preferences */}
              <div className="md:col-span-2 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferências do Evento</h2>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="participateTrip"
                    name="participateTrip"
                    checked={formData.participateTrip}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="participateTrip" className="ml-2 block text-sm text-gray-700">
                    Desejo participar do passeio opcional (sujeito a custos adicionais)
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                  Necessidades Especiais
                </label>
                <textarea
                  id="specialNeeds"
                  name="specialNeeds"
                  rows={3}
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  placeholder="Descreva qualquer necessidade especial (acessibilidade, medicamentos, etc.)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                  Restrições Alimentares
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  rows={3}
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  placeholder="Vegetariano, vegano, alergias, intolerâncias, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Emergency Contact */}
              <div className="md:col-span-2 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contato de Emergência</h2>
              </div>

              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Contato *
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone do Contato *
                </label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações Adicionais</h2>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                  Como soube do evento?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="website">Site oficial</option>
                  <option value="social-media">Redes sociais</option>
                  <option value="friend">Indicação de amigo</option>
                  <option value="study-group">Grupo de estudo</option>
                  <option value="email">E-mail marketing</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-2">
                  O que você espera do evento?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={4}
                  value={formData.expectations}
                  onChange={handleInputChange}
                  placeholder="Compartilhe suas expectativas e objetivos para o evento..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Concordo com os{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    termos e condições
                  </a>{' '}
                  e autorizo o uso dos meus dados conforme a{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    política de privacidade
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Inscrição'}
              </button>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Após a inscrição, você receberá um e-mail de confirmação com instruções para pagamento e informações adicionais.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
