import { useState, useEffect } from 'react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-20 py-10 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[9px] font-extralight tracking-[0.35em] uppercase hover:text-muted-foreground transition-all duration-700"
        >
          Екатерина Дэвиль
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="text-[8px] font-extralight tracking-[0.3em] uppercase hover:text-muted-foreground transition-all duration-700"
        >
          Контакты
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-32"
    >
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div className="space-y-12 text-center lg:text-left order-2 lg:order-1 animate-fade-in">
              <h1 className="font-editorial text-[42px] md:text-6xl lg:text-7xl font-extralight leading-[1.08] tracking-[-0.02em] text-foreground">
                Маркетинг<br />без хаоса
              </h1>
              
              <p className="text-[11px] md:text-[12px] text-muted-foreground/70 max-w-md mx-auto lg:mx-0 leading-[2] tracking-[0.02em] font-light">
                Стратегия. Структура. Система.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-slow">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/files/f7905930-6d3a-453f-a899-5d771857aab3.jpeg"
                  alt="Екатерина Дэвиль"
                  className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover object-[center_20%] grayscale contrast-110 brightness-95"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                    clipPath: 'inset(0 0 0 0 round 2px)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-52 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[2.4] tracking-[0.01em] font-light animate-fade-in">
            Я выстраиваю маркетинг и продажи так,<br />
            чтобы они работали спокойно.<br />
            Без хаоса. Без суеты. Без случайных решений.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-28">
          
          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Стратегическая сессия
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              60 минут. Диагностика проекта.<br />
              Определяем точки потерь, выстраиваем систему продаж.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              15 000 ₽
            </div>
          </div>

          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Консультация
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              120 минут. Глубокая проработка задачи.<br />
              Анализ, рекомендации, план действий.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              25 000 ₽
            </div>
          </div>

          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Разработка системы
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              Стратегия, структура, аналитика, смыслы.<br />
              Системная настройка маркетинга и продаж.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              от 180 000 ₽
            </div>
          </div>

          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Стратегическое сопровождение
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              Совместная работа над проектом.<br />
              Я держу стратегию, корректирую курс, контролирую динамику.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              от 80 000 ₽ / месяц
            </div>
          </div>

          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Стратегия
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              Полная стратегия развития: продуктовая матрица, точки масштабирования, коммуникация.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              от 50 000 ₽
            </div>
          </div>

          <div className="space-y-10 animate-fade-in">
            <h3 className="text-[22px] md:text-[26px] font-light tracking-[-0.01em] text-foreground">
              Партнерство
            </h3>
            <p className="text-[11px] md:text-[12px] text-muted-foreground leading-[2.2] tracking-[0.01em] font-light max-w-2xl">
              Обсуждается индивидуально.
            </p>
            <div className="text-[13px] font-light tracking-wide text-foreground/90">
              чек от 150 000 ₽
            </div>
          </div>

          <div className="pt-8">
            <a
              href="https://t.me/m/FM24xut5MTUy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 border border-border/40 text-[10px] tracking-[0.25em] uppercase font-light hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-700"
            >
              Связаться
            </a>
          </div>



        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-52 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="max-w-2xl mx-auto space-y-16 animate-fade-in">
          <div className="space-y-10">
            <div className="text-[11px] md:text-[12px] font-light tracking-[0.02em] text-foreground">
              Екатерина Дэвиль
            </div>
            
            <div className="space-y-5 text-[10px] md:text-[11px] text-muted-foreground leading-[2.4] tracking-[0.01em] font-light">
              <div>
                <a 
                  href="https://t.me/ekaterina_devile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-700"
                >
                  Telegram — @ekaterina_devile
                </a>
              </div>
              <div>
                <a 
                  href="https://www.instagram.com/ekaterina.devile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-700"
                >
                  Instagram — @ekaterina.devile
                </a>
              </div>
              <div>
                <a 
                  href="https://www.tiktok.com/@ekaterina.devile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-700"
                >
                  TikTok — @ekaterina.devile
                </a>
              </div>
              <div>
                <a 
                  href="mailto:ekaterina.morozova.smm@gmail.com"
                  className="hover:text-foreground transition-all duration-700"
                >
                  Email — ekaterina.morozova.smm@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-border/20">
            <p className="text-[9px] md:text-[10px] text-muted-foreground/40 leading-[2.2] tracking-[0.02em] font-light">
              Только системные проекты. Без срочных задач.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;