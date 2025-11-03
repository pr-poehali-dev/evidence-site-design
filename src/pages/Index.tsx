import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDesktop) {
        setPosition({ x: e.clientX, y: e.clientY });
        setTimeout(() => {
          setRingPosition({ x: e.clientX, y: e.clientY });
        }, 100);
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
    <>
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-primary/60 pointer-events-none z-[10001] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'none'
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

const LightBeam = () => {
  return <div className="light-beam" />;
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
        isScrolled ? 'bg-background/30 backdrop-blur-3xl border-b border-white/[0.04]' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 py-6 md:py-10 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[9px] md:text-[10px] font-extralight tracking-[0.3em] uppercase text-primary hover-silver"
        >
          Екатерина Дэвиль
        </button>
        <div className="flex gap-8 md:gap-20">
          {['manifest', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-[8px] md:text-[10px] font-extralight tracking-[0.25em] transition-all duration-700 hover-silver hidden md:block ${
                activeSection === section ? 'text-primary' : 'text-muted/60'
              }`}
            >
              {section === 'manifest' && 'МАНИФЕСТ'}
              {section === 'services' && 'УСЛУГИ'}
              {section === 'contact' && 'КОНТАКТ'}
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
    setTimeout(() => setTextVisible(prev => ({ ...prev, line1: true })), 800);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line2: true })), 1600);
    setTimeout(() => setTextVisible(prev => ({ ...prev, line3: true })), 2400);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grain architectural-depth"
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#0F0F11] via-background to-[#0A0A0C]" />
      
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://cdn.poehali.dev/files/0044d02c-7f96-4047-bf0d-3172f0aa8556.jpeg"
          alt=""
          className="w-full h-full object-cover grayscale"
          style={{ filter: 'brightness(0.15) contrast(1.6) blur(3px)' }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
        <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-10">
            <h1
              className={`font-editorial text-6xl md:text-8xl lg:text-[160px] font-normal tracking-tight leading-none text-primary metallic-text text-layer-front transition-all duration-1200 ${
                textVisible.line1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ textShadow: '0 4px 40px rgba(215, 215, 217, 0.15)' }}
            >
              ЕКАТЕРИНА ДЭВИЛЬ
            </h1>
            
            <p
              className={`text-[10px] md:text-xs tracking-[0.35em] uppercase text-muted/60 font-extralight transition-all duration-1200 delay-300 ${
                textVisible.line2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              Частная практика
            </p>
          </div>
          
          <div
            className={`h-px w-32 md:w-48 mx-auto bg-primary/15 transition-all duration-1200 delay-600 ${
              textVisible.line3 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p
            className={`text-sm md:text-lg tracking-[0.28em] uppercase text-foreground/70 font-extralight transition-all duration-1200 delay-900 ${
              textVisible.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ lineHeight: '1.8' }}
          >
            Стратегия. Структура. Система.
          </p>
          
          <div
            className={`pt-12 md:pt-16 flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-1200 delay-1200 ${
              textVisible.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <button
              onClick={scrollToServices}
              className="glass-button px-12 py-5 text-[10px] tracking-[0.3em] uppercase text-foreground/80 font-extralight"
            >
              УСЛУГИ
            </button>
            <button
              onClick={() => document.getElementById('manifest')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-button px-12 py-5 text-[10px] tracking-[0.3em] uppercase text-foreground/80 font-extralight"
            >
              О ПРОЕКТЕ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManifestSection = () => {
  const mainText = 'Я выстраиваю маркетинг и продажи, чтобы они работали спокойно.';
  const principles = ['Без хаоса.', 'Без суеты.', 'Без случайных решений.'];

  return (
    <section id="manifest" className="min-h-screen flex items-center py-32 md:py-48 relative overflow-hidden architectural-depth">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTAsMjEwLDIxMiwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-24 md:space-y-32">
          <div className="space-y-12 md:space-y-16">
            <p
              className="font-editorial text-3xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-foreground/85 animate-fade-in-slow"
              style={{ lineHeight: '1.6', animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              {mainText}
            </p>
            
            <div className="w-40 h-px bg-primary/15 mx-auto" />
          </div>
          
          <div className="space-y-8 md:space-y-10">
            {principles.map((line, index) => (
              <p
                key={index}
                className="text-xl md:text-3xl font-light text-muted/60 animate-fade-in-slow"
                style={{ animationDelay: `${(index + 1) * 400 + 400}ms`, animationFillMode: 'forwards', lineHeight: '1.8' }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className="pt-16 md:pt-24 space-y-8 animate-fade-in-slow" style={{ animationDelay: '2400ms', animationFillMode: 'forwards' }}>
            <div className="w-36 h-px bg-primary/20 mx-auto" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted/50 font-extralight px-4" style={{ lineHeight: '1.8' }}>
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

const PhilosophySection = () => {
  return (
    <section className="min-h-[60vh] flex items-center py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-secondary/30 via-background to-background" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-slow">
          <p className="font-editorial text-4xl md:text-6xl lg:text-7xl font-normal text-primary/90 tracking-tight" style={{ lineHeight: '1.4' }}>
            Я строю не маркетинг.
            <br />
            Я строю порядок.
          </p>
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
    <section className="py-32 md:py-48 architectural-depth">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
          {works.map((work, index) => (
            <div
              key={index}
              className="card-luxury p-8 md:p-12 space-y-6 md:space-y-8 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="font-editorial text-3xl md:text-5xl font-normal text-primary hover-silver transition-all duration-700">
                {work.title}
              </h3>
              <div className="w-20 h-px bg-primary/20" />
              <p className="text-xs md:text-sm leading-loose text-muted/70 font-light tracking-wide" style={{ lineHeight: '1.9' }}>
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
  const services = [
    {
      title: 'Стратегическая сессия',
      duration: '60 минут',
      description: 'Диагностика проекта. Определяем точки потерь, выстраиваем систему продаж, формулируем шаги к росту.',
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
      description: 'Корректирую стратегию, контролирую динамику. Держу ритм проекта, слежу за цифрами, принимаю участие в ключевых решениях.',
      price: 'от 80 000 ₽ / мес'
    },
    {
      title: 'Стратегия роста',
      duration: 'индивидуально',
      description: 'Документ + встреча. Полная структура масштабирования. Продуктовая матрица, коммуникация, система продаж.',
      price: 'от 80 000 ₽'
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-secondary/10 relative overflow-hidden architectural-depth">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 md:mb-32 space-y-6 animate-fade-in text-center">
            <h2 className="font-editorial text-5xl md:text-7xl font-normal text-primary">Услуги</h2>
            <div className="w-32 h-px bg-primary/20 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-luxury p-10 md:p-14 space-y-8 animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="font-editorial text-3xl md:text-4xl font-normal text-foreground/90 hover-silver">
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted/40 font-extralight tracking-[0.2em] uppercase">
                    {service.duration}
                  </p>
                </div>
                
                <div className="w-24 h-px bg-primary/15 group-hover:bg-primary/30 transition-all duration-700" />
                
                <p className="text-xs md:text-sm text-muted/60 font-light leading-relaxed" style={{ lineHeight: '1.9' }}>
                  {service.description}
                </p>
                
                <div className="pt-4">
                  <p className="text-xl md:text-2xl font-light text-primary tracking-wide">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-16 border-t border-white/[0.04] animate-fade-in space-y-8">
            <p className="text-xs md:text-sm text-muted/50 font-light leading-relaxed px-4" style={{ lineHeight: '1.9' }}>
              Без шаблонов. Без тарифов.
              <br />
              Только задачи, которые требуют ясности.
            </p>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-button px-14 py-6 text-[10px] tracking-[0.3em] uppercase text-foreground/80 font-extralight inline-block"
            >
              НАПИСАТЬ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { quote: '«С тобой стало спокойно.»' },
    { quote: '«Это не про маркетинг. Это про порядок.»' },
    { quote: '«Всё стало предсказуемо.»' }
  ];

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.015] via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="text-center space-y-8 animate-fade-in-slow"
              style={{ animationDelay: `${index * 500}ms`, animationFillMode: 'forwards' }}
            >
              <p className="font-editorial text-2xl md:text-4xl lg:text-5xl font-normal text-foreground/75 italic leading-relaxed" style={{ lineHeight: '1.6' }}>
                {item.quote}
              </p>
              <div className="w-20 h-px bg-primary/15 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-32 md:py-48 bg-secondary/15 relative overflow-hidden architectural-depth">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16 md:space-y-24 animate-fade-in-slow">
          <div className="space-y-10">
            <h2 className="font-editorial text-6xl md:text-8xl font-normal text-primary metallic-text">
              Екатерина Дэвиль
            </h2>
            <div className="w-40 h-px bg-primary/25 mx-auto" />
          </div>
          
          <div className="space-y-8 md:space-y-10">
            <a
              href="https://t.me/ekaterina_devile"
              className="block text-base md:text-xl font-light tracking-[0.15em] text-foreground/70 hover-silver"
            >
              Telegram — @ekaterina.devile
            </a>
            <a
              href="mailto:Ekaterina.morozova.smm@gmail.com"
              className="block text-base md:text-xl font-light tracking-[0.15em] text-foreground/70 hover-silver"
            >
              Email — Ekaterina.morozova.smm@gmail.com
            </a>
          </div>
          
          <div className="pt-12 space-y-8">
            <div className="w-24 h-px bg-primary/20 mx-auto" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted/45 font-extralight px-4" style={{ lineHeight: '1.8' }}>
              Только системные проекты.
              <br />
              Без срочных задач.
            </p>
          </div>
          
          <div className="pt-16 border-t border-white/[0.04]">
            <p className="text-[10px] md:text-xs text-muted/30 font-light tracking-[0.2em] italic">
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
      <LightBeam />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ManifestSection />
      <PhilosophySection />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
