import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDesktop) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

const Navigation = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        isScrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/[0.08]' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[10px] md:text-xs font-light tracking-[0.2em] uppercase text-primary hover-gold"
        >
          Екатерина Дэвиль
        </button>
        <div className="flex gap-6 md:gap-16">
          {['approach', 'services', 'results', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-[9px] md:text-xs font-light tracking-[0.15em] transition-all duration-500 hover-gold hidden md:block ${
                activeSection === section ? 'text-primary' : 'text-muted'
              }`}
            >
              {section === 'approach' && 'О подходе'}
              {section === 'services' && 'Услуги'}
              {section === 'results' && 'Результаты'}
              {section === 'contact' && 'Контакт'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState({ line1: false, line2: false, line3: false });

  useEffect(() => {
    setTimeout(() => setTextVisible(prev => ({ ...prev, line1: true })), 400);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line2: true })), 1200);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line3: true })), 2000);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 breathing-glow" />
      
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://cdn.poehali.dev/files/0044d02c-7f96-4047-bf0d-3172f0aa8556.jpeg"
          alt=""
          className="w-full h-full object-cover grayscale"
          style={{ filter: 'brightness(0.25) contrast(1.3)' }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
          <h1
            className={`font-editorial text-5xl md:text-7xl lg:text-[120px] font-normal tracking-tight leading-none text-primary text-glow transition-all duration-1000 ${
              textVisible.line1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ЕКАТЕРИНА ДЭВИЛЬ
          </h1>
          
          <div className="h-px w-20 md:w-32 mx-auto bg-primary/30 my-8 md:my-12" />
          
          <p
            className={`text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase text-primary/90 font-light transition-all duration-1000 delay-300 ${
              textVisible.line2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            СТРАТЕГИЯ. СТРУКТУРА. СИСТЕМА.
          </p>
        </div>
        
        <p
          className={`absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase text-muted/60 font-light transition-all duration-1000 delay-700 ${
            textVisible.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Частная практика. Индивидуальные проекты.
        </p>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  const lines = [
    'Я строю маркетинг и продажи,',
    'чтобы они работали спокойно.',
    '',
    'Без хаоса.',
    'Без суеты.',
    'Без случайных решений.'
  ];

  return (
    <section id="approach" className="min-h-screen flex items-center py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-12">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`font-editorial text-2xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground/90 animate-fade-in-slow ${
                line === '' ? 'my-4 md:my-8' : ''
              }`}
              style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}
            >
              {line}
            </p>
          ))}
          
          <div className="pt-12 md:pt-16">
            <div className="w-16 md:w-24 h-px bg-primary/40 mx-auto mb-6 md:mb-8" />
            <p className="text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase text-muted/70 font-light px-4">
              Работаю индивидуально. Без шаблонов. Без показных решений.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const works = [
    { title: 'СТРАТЕГИЯ', text: 'вижу систему целиком. определяю, что и зачем.' },
    { title: 'ПРОДАЖИ', text: 'создаю предсказуемость. убираю хаос.' },
    { title: 'УПАКОВКА', text: 'всё подчинено логике, а не моде.' },
    { title: 'СОПРОВОЖДЕНИЕ', text: 'держу структуру. слежу за динамикой.' }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-20">
          {works.map((work, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="font-editorial text-3xl md:text-5xl font-normal mb-4 md:mb-6 text-primary hover-gold">
                {work.title}
              </h3>
              <div className="w-12 md:w-16 h-px bg-primary/20 mb-4 md:mb-6" />
              <p className="text-xs md:text-sm leading-loose text-muted/80 font-light lowercase tracking-wide">
                {work.text}
              </p>
            </div>
          ))}
          
          <div className="pt-8 md:pt-12 border-t border-white/[0.08]">
            <p className="text-[10px] md:text-xs text-muted/50 font-light leading-relaxed">
              Техническую архитектуру проектов ведёт Даня — сайт, CRM, интеграции.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'СТРАТЕГИЧЕСКАЯ СЕССИЯ',
      price: '15 000 ₽',
      description: '60 минут. Диагностика проекта. Определяем точки потерь, выстраиваем систему продаж, формулируем шаги к росту.'
    },
    {
      title: 'РАЗРАБОТКА СИСТЕМЫ',
      price: 'от 180 000 ₽',
      description: '9–12 недель. Формирование стратегии, структуры, смыслов. Продуктовая линейка, воронка, коммуникации, аналитика.'
    },
    {
      title: 'СТРАТЕГИЧЕСКОЕ СОПРОВОЖДЕНИЕ',
      price: 'от 80 000 ₽ / мес',
      description: 'От 1 до 6 месяцев. Совместная работа над проектом. Держу стратегию, корректирую действия, контролирую динамику.'
    },
    {
      title: 'РАЗБОР ПРОЕКТА',
      price: '20 000 ₽',
      description: '7–10 рабочих дней. Точечный анализ. Выявляю узкие места, точки потерь, нестыковки в логике продаж.'
    },
    {
      title: 'СТРАТЕГИЯ РОСТА',
      price: 'от 80 000 ₽',
      description: 'Полная стратегия развития проекта. Продуктовая матрица, коммуникация, система продаж, точки масштабирования.'
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8 mb-16 md:mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-white/[0.08] pb-6 md:pb-8 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 md:mb-4 gap-2">
                  <h3 className="font-editorial text-lg md:text-2xl font-normal text-foreground/90 hover-gold">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-lg font-light text-primary tracking-wide">
                    {service.price}
                  </p>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[10px] md:text-xs text-muted/70 font-light leading-relaxed pt-3 md:pt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8 md:pt-12 border-t border-white/[0.08]">
            <p className="text-[10px] md:text-xs text-muted/50 font-light leading-relaxed px-4">
              Некоторые проекты реализуются совместно с Даней.
              <br />
              Я — стратегия, он — архитектура.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  const results = [
    {
      metric: '+27% к выручке',
      context: 'за первый месяц после настройки системы продаж.',
      detail: 'Заявки перестали теряться.'
    },
    {
      metric: '−3 часа рутины ежедневно',
      context: 'после автоматизации.',
      detail: 'Команда работает в одном ритме.'
    }
  ];

  const quotes = [
    '«С тобой стало спокойно.»',
    '«Это не про маркетинг. Это про порядок.»'
  ];

  return (
    <section id="results" className="min-h-screen flex items-center py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
            {results.map((result, index) => (
              <div
                key={index}
                className="space-y-4 md:space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="font-editorial text-3xl md:text-5xl font-normal text-primary leading-tight">
                  {result.metric}
                </h3>
                <p className="text-xs md:text-sm text-muted/70 font-light leading-relaxed">
                  {result.context}
                </p>
                <p className="text-[10px] md:text-xs text-muted/50 font-light italic">
                  {result.detail}
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-6 md:space-y-8 pt-8 md:pt-12 border-t border-white/[0.08]">
            {quotes.map((quote, index) => (
              <p
                key={index}
                className="font-editorial text-lg md:text-2xl font-normal text-muted/60 italic text-center animate-fade-in-slow px-4"
                style={{ animationDelay: `${(index + 2) * 300}ms` }}
              >
                {quote}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-12 md:space-y-16 animate-fade-in-slow">
          <div className="space-y-6 md:space-y-8">
            <a
              href="https://t.me/ekaterina_devile"
              className="block text-sm md:text-lg font-light tracking-[0.08em] md:tracking-[0.1em] text-foreground hover-gold"
            >
              Telegram — @ekaterina.devile
            </a>
            <a
              href="mailto:info@devile.ru"
              className="block text-sm md:text-lg font-light tracking-[0.08em] md:tracking-[0.1em] text-foreground hover-gold"
            >
              Email — info@devile.ru
            </a>
          </div>
          
          <div className="w-12 md:w-16 h-px bg-primary/30 mx-auto" />
          
          <p className="text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase text-muted/50 font-light px-4">
            Только системные проекты. Без срочных задач.
          </p>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'approach', 'services', 'results', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ApproachSection />
      <WorkSection />
      <ServicesSection />
      <ResultsSection />
      <ContactSection />
    </div>
  );
};

export default Index;