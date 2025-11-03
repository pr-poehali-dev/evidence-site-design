import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-card/60 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-20 py-8 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[11px] font-light tracking-[0.3em] uppercase hover:text-primary/70 transition-all duration-500"
        >
          Екатерина Дэвиль
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="text-[9px] font-light tracking-[0.25em] uppercase hover:text-primary/70 transition-all duration-500"
        >
          Связаться
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-border/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tighter">
            Маркетинг<br />без хаоса
          </h1>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mx-auto" />
          
          <p className="text-[13px] md:text-[15px] text-muted-foreground/60 max-w-md mx-auto leading-loose tracking-wide font-light">
            Стратегия и система для предсказуемого роста
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-border/0 to-border/60" />
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/8 to-transparent" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-border/8 to-transparent" />
      </div>

      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-light mb-16 leading-tight tracking-tight">
              Что я делаю
            </h2>
          </div>

          <div className="space-y-0">
            <div className="border-t border-border/30 py-16 grid md:grid-cols-12 gap-12 items-start hover:bg-card/20 transition-all duration-700 px-8 -mx-8">
              <div className="md:col-span-1">
                <div className="text-[10px] font-light tracking-[0.3em] uppercase text-muted-foreground/40">
                  01
                </div>
              </div>
              <div className="md:col-span-11 space-y-5">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight">Маркетинговая стратегия</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-loose max-w-2xl font-light">
                  Анализирую бизнес, аудиторию, конкурентов. Создаю стратегию позиционирования 
                  и дорожную карту развития.
                </p>
              </div>
            </div>

            <div className="border-t border-border/30 py-16 grid md:grid-cols-12 gap-12 items-start hover:bg-card/20 transition-all duration-700 px-8 -mx-8">
              <div className="md:col-span-1">
                <div className="text-[10px] font-light tracking-[0.3em] uppercase text-muted-foreground/40">
                  02
                </div>
              </div>
              <div className="md:col-span-11 space-y-5">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight">Система продаж</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-loose max-w-2xl font-light">
                  Выстраиваю воронку от касания до сделки. Настраиваю процессы, 
                  CRM и автоматизацию.
                </p>
              </div>
            </div>

            <div className="border-t border-border/30 py-16 grid md:grid-cols-12 gap-12 items-start hover:bg-card/20 transition-all duration-700 px-8 -mx-8">
              <div className="md:col-span-1">
                <div className="text-[10px] font-light tracking-[0.3em] uppercase text-muted-foreground/40">
                  03
                </div>
              </div>
              <div className="md:col-span-11 space-y-5">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight">Постоянное сопровождение</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-loose max-w-2xl font-light">
                  Регулярная аналитика, оптимизация и масштабирование. 
                  Прозрачная отчетность по результатам.
                </p>
              </div>
            </div>

            <div className="border-t border-b border-border/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      </div>

      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-20">
          <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            Обсудим<br />ваш проект
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mx-auto" />

          <div className="flex flex-col gap-6 items-center">
            <a
              href="mailto:contact@ekaterinadevillle.com"
              className="text-[11px] font-light tracking-[0.25em] uppercase hover:text-primary/70 transition-all duration-500"
            >
              contact@ekaterinadevillle.com
            </a>
            <a
              href="https://t.me/ekaterinadevillle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-light tracking-[0.25em] uppercase hover:text-primary/70 transition-all duration-500"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/20">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase font-light">
            © 2024 Екатерина Дэвиль
          </p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
