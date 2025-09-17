import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Encontro Internacional de Leitores do Livro de Urântia 2027",
  description: "Junte-se a leitores de todo o mundo em Guarulhos, SP, Brasil para uma experiência única de comunhão, aprendizado e crescimento espiritual.",
};

const locales = ['pt', 'en', 'es', 'fr'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
