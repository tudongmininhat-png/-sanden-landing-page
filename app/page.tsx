import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { PainPoints, ValueProp } from '@/components/MainSections';
import { TechFeatures, Clients, ComparisonTable, Testimonials } from '@/components/FeatureSections';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <ValueProp />
      <TechFeatures />
      <Clients />
      <ComparisonTable />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
