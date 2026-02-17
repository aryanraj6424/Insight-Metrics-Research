
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import ServiceDetailView from './views/ServiceDetailView';
import ProductsView from './views/ProductsView';
import ProductDetailView from './views/ProductDetailView';
import CustomersView from './views/CustomersView';
import GalleryView from './views/GalleryView';
import TestimonialsView from './views/TestimonialsView';
import PromotionsView from './views/PromotionsView';
import NewsView from './views/NewsView';
import FAQView from './views/FAQView';
import ContactView from './views/ContactView';
import Footer from './components/Footer';

export type Page = 
  | 'home' | 'about' | 'services' | 'service-detail' 
  | 'products' | 'product-detail' | 'customers' 
  | 'gallery' | 'testimonials' | 'promotions' 
  | 'news' | 'faq' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activeItemId]);

  const handleNavigate = (page: Page, id?: string) => {
    setCurrentPage(page);
    setActiveItemId(id || null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView onNavigate={handleNavigate} />;
      case 'about': return <AboutView />;
      case 'services': return <ServicesView onNavigate={handleNavigate} />;
      case 'service-detail': return <ServiceDetailView id={activeItemId} onNavigate={handleNavigate} />;
      case 'products': return <ProductsView onNavigate={handleNavigate} />;
      case 'product-detail': return <ProductDetailView id={activeItemId} onNavigate={handleNavigate} />;
      case 'customers': return <CustomersView />;
      case 'gallery': return <GalleryView />;
      case 'testimonials': return <TestimonialsView />;
      case 'promotions': return <PromotionsView />;
      case 'news': return <NewsView />;
      case 'faq': return <FAQView />;
      case 'contact': return <ContactView />;
      default: return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
