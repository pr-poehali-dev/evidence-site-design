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
      className="fixed w-2 h-2 rounded-full bg-primary/40 pointer-events-none z-[10000] mix-blend-screen transition-transform duration-150"
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
        isScrolled ? 'bg-background/40 backdrop-blur-2xl border-b border-white/[0.05]' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[10px] md:text-xs font-light tracking-[0.25em] uppercase text-primary hover-silver"
        >
          Екатерина Дэвиль
        </button>
        <div className="flex gap-6 md:gap-16">
          {['manifest', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-[9px] md:text-xs font-light tracking-[0.2em] transition-all duration-500 hover-silver hidden md:block ${
                activeSection === section ? 'text-primary' : 'text-muted'
              }`}
            >
              {section === 'manifest' && 'Манифест'}
              {section === 'services' && 'Услуги'}
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
    setTimeout(() => setTextVisible(prev => ({ ...prev, line1: true })), 600);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line2: true })), 1400);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line3: true })), 2200);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background breathing-glow" />
      
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://cdn.poehali.dev/files/0044d02c-7f96-4047-bf0d-3172f0aa8556.jpeg"
          alt=""
          className="w-full h-full object-cover grayscale"
          style={{ filter: 'brightness(0.2) contrast(1.5) blur(2px)' }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1
              className={`font-editorial text-5xl md:text-7xl lg:text-[140px] font-normal tracking-tight leading-none text-primary metallic-text transition-all duration-1200 ${
                textVisible.line1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              ЕКАТЕРИНА ДЭВИЛЬ
            </h1>
            
            <p
              className={`text-[11px] md:text-sm tracking-[0.3em] uppercase text-muted/70 font-extralight transition-all duration-1200 delay-200 ${
                textVisible.line2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Частная практика
            </p>
          </div>
          
          <div
            className={`h-px w-24 md:w-40 mx-auto bg-primary/20 transition-all duration-1200 delay-400 ${
              textVisible.line3 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p
            className={`text-xs md:text-base tracking-[0.25em] uppercase text-foreground/80 font-light transition-all duration-1200 delay-600 ${
              textVisible.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Стратегия. Структура. Система.
          </p>
        </div>
      </div>
    </section>
  );
};

const ManifestSection = () => {
  const mainLines = [
    'Я выстраиваю маркетинг и продажи,',
    'чтобы они работали спокойно.'
  ];

  const principles = [
    'Без хаоса.',
    'Без суеты.',
    'Без случайных решений.'
  ];

  return (
    <section id="manifest" className="min-h-screen flex items-center py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-24">
          <div className="space-y-8 md:space-y-12">
            {mainLines.map((line, index) => (
              <p
                key={index}
                className="font-editorial text-3xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-foreground/90 animate-fade-in-slow"
                style={{ animationDelay: `${index * 400}ms`, animationFillMode: 'forwards' }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className="space-y-6 md:space-y-8">
            {principles.map((line, index) => (
              <p
                key={index}
                className="text-xl md:text-3xl font-light text-muted/70 animate-fade-in-slow"
                style={{ animationDelay: `${(index + 2) * 400}ms`, animationFillMode: 'forwards' }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className="pt-12 md:pt-20 space-y-6 animate-fade-in-slow" style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
            <div className="w-32 h-px bg-primary/30 mx-auto" />
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted/60 font-light leading-relaxed px-4">
              Работаю индивидуально. Без шаблонов.
              <br className="hidden md:block" />
              Без показных историй.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const works = [
    {
      title: 'Стратегия',
      text: 'Вижу систему целиком. Определяю, на чём она стоит и куда движется. Формулирую смысл, который делает бизнес устойчивым, а решения — осознанными.'
    },
    {
      title: 'Продажи',
      text: 'Создаю предсказуемость. Убираю хаос. Выстраиваю структуру, где каждый элемент работает на результат, а не создаёт дополнительную нагрузку.'
    },
    {
      title: 'Упаковка',
      text: 'Всё подчинено логике бизнеса, а не моде. Сайт, визуал, коммуникация — каждая деталь отражает суть проекта и усиливает доверие.'
    },
    {
      title: 'Сопровождение',
      text: 'Держу структуру. Слежу за динамикой. Корректирую курс там, где это необходимо, чтобы система продолжала работать без сбоев.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {works.map((work, index) => (
            <div
              key={index}
              className="group animate-fade-in space-y-6 md:space-y-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="font-editorial text-4xl md:text-6xl font-normal text-primary hover-silver transition-all duration-700">
                {work.title}
              </h3>
              <div className="w-20 md:w-28 h-px bg-primary/15 group-hover:bg-primary/40 transition-all duration-700" />
              <p className="text-sm md:text-base leading-loose md:leading-loose text-muted/80 font-light tracking-wide" style={{ lineHeight: '1.8' }}>
                {work.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Стратегическая сессия',
      duration: '60 минут',
      description: 'Диагностика проекта. Определяем точки потерь, выстраиваем систему продаж, формулируем шаги к росту. Формат: онлайн, один на один.',
      price: '15 000 ₽'
    },
    {
      title: 'Разработка системы',
      duration: '9–12 недель',
      description: 'Формирую структуру, смыслы, аналитику. Продуктовая линейка, воронка, коммуникации. Под ключ — без хаоса и ручного контроля.',
      price: 'от 180 000 ₽'
    },
    {
      title: 'Сопровождение',
      duration: 'от 1 до 6 месяцев',
      description: 'Личное участие. Корректирую динамику и стратегию. Держу ритм проекта, слежу за цифрами, принимаю участие в ключевых решениях.',
      price: 'от 80 000 ₽ / месяц'
    },
    {
      title: 'Стратегия роста',
      duration: 'индивидуально',
      description: 'Полный план развития проекта. Продуктовая матрица, коммуникация, система продаж, точки масштабирования. Документ + встреча для внедрения.',
      price: 'от 80 000 ₽'
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:mb-24 space-y-4 animate-fade-in">
            <h2 className="font-editorial text-4xl md:text-6xl font-normal text-primary">Услуги</h2>
            <div className="w-24 h-px bg-primary/20" />
          </div>
          
          <div className="space-y-8 md:space-y-12 mb-16 md:mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-white/[0.06] pb-8 md:pb-12 cursor-pointer group animate-fade-in silver-glow"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-4">
                  <div className="flex-1">
                    <h3 className="font-editorial text-2xl md:text-4xl font-normal text-foreground/90 hover-silver mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted/50 font-light tracking-wide">
                      {service.duration}
                    </p>
                  </div>
                  <p className="text-lg md:text-2xl font-light text-primary tracking-wide whitespace-nowrap">
                    {service.price}
                  </p>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    hoveredIndex === index ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs md:text-sm text-muted/70 font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-12 border-t border-white/[0.06] animate-fade-in">
            <p className="text-xs md:text-sm text-muted/60 font-light leading-relaxed px-4" style={{ lineHeight: '1.8' }}>
              Без шаблонов. Без тарифов.
              <br />
              Только задачи, которые требуют ясности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: '«С тобой стало спокойно.»',
      context: 'Основатель онлайн-школы'
    },
    {
      quote: '«Это не про маркетинг. Это про порядок.»',
      context: 'Владелец сети салонов'
    },
    {
      quote: '«Первый раз за два года всё предсказуемо.»',
      context: 'CEO технологического стартапа'
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.02] via-transparent to-transparent opacity-40" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="text-center space-y-6 animate-fade-in-slow"
              style={{ animationDelay: `${index * 400}ms`, animationFillMode: 'forwards' }}
            >
              <p className="font-editorial text-2xl md:text-4xl font-normal text-foreground/80 italic leading-relaxed">
                {item.quote}
              </p>
              <div className="w-16 h-px bg-primary/20 mx-auto" />
              <p className="text-xs md:text-sm text-muted/50 font-light tracking-wide">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12 md:space-y-20 animate-fade-in-slow">
          <div className="space-y-8">
            <h2 className="font-editorial text-5xl md:text-7xl font-normal text-primary metallic-text">
              Екатерина Дэвиль
            </h2>
            <div className="w-32 h-px bg-primary/30 mx-auto" />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <a
              href="https://t.me/ekaterina_devile"
              className="block text-base md:text-xl font-light tracking-[0.12em] text-foreground/80 hover-silver"
            >
              Telegram — @ekaterina.devile
            </a>
            <a
              href="mailto:info@devile.ru"
              className="block text-base md:text-xl font-light tracking-[0.12em] text-foreground/80 hover-silver"
            >
              Email — info@devile.ru
            </a>
          </div>
          
          <div className="pt-8 space-y-6">
            <div className="w-20 h-px bg-primary/20 mx-auto" />
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted/50 font-light px-4">
              Только системные проекты.
              <br />
              Без срочных задач.
            </p>
          </div>
          
          <div className="pt-12">
            <p className="text-[10px] md:text-xs text-muted/40 font-light tracking-[0.15em] italic">
              Тишина — часть работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'manifest', 'services', 'contact'];
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
      <ManifestSection />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
