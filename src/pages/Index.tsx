import { useState, useEffect } from 'react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-sm font-light tracking-[0.15em] uppercase hover:text-muted transition-colors duration-300"
        >
          Екатерина Дэвиль
        </button>
        <div className="flex gap-12">
          {['approach', 'work', 'results', 'contact', 'vision'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-light tracking-[0.1em] transition-colors duration-300 relative group ${
                activeSection === section ? 'text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              <span className="relative">
                {section === 'approach' && 'О подходе'}
                {section === 'work' && 'Работа'}
                {section === 'results' && 'Результаты'}
                {section === 'contact' && 'Контакт'}
                {section === 'vision' && 'Vision'}
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Екатерина
              <br />
              Дэвиль
            </h1>
            <p className="text-sm tracking-[0.2em] uppercase text-muted font-light">
              стратегия. структура. система.
            </p>
            <div className="w-12 h-px bg-foreground/30 my-8" />
            <p className="text-lg font-light leading-relaxed max-w-md text-balance">
              Я выстраиваю маркетинг и продажи так, чтобы они работали спокойно.
              <br />
              <br />
              Без хаоса. Без суеты. Без случайных решений.
            </p>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/432114c7-05dd-48cc-b85c-4282aadd919f.jpeg"
                alt="Екатерина Дэвиль"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-xs tracking-[0.15em] uppercase text-muted/60 font-light">
            частная практика. индивидуальная работа.
          </p>
        </div>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section id="approach" className="min-h-screen flex items-center py-24 bg-secondary/10">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-light tracking-tight mb-20 animate-fade-in">Мой подход</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fade-in">
          {[
            {
              title: 'Стратегия',
              text: 'Вижу бизнес целиком. Определяю, на чём он стоит и куда движется. Формулирую смысл, который делает систему устойчивой.'
            },
            {
              title: 'Система',
              text: 'Выстраиваю процессы, чтобы всё работало без ручного контроля. Продажи становятся предсказуемыми, решения — осознанными.'
            },
            {
              title: 'Контроль',
              text: 'Создаю структуру, которая не требует постоянного вмешательства. Система держится сама.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="space-y-6 p-8 border border-border/30 hover:border-border transition-colors duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-light tracking-wide">{item.title}</h3>
              <div className="w-8 h-px bg-foreground/20" />
              <p className="text-sm leading-relaxed text-muted font-light">{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-sm text-muted/80 font-light">
            Работаю индивидуально. Без групповых форматов и шаблонов.
          </p>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-light tracking-tight mb-20 animate-fade-in">Формат работы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
          {[
            {
              title: 'Стратегия',
              text: 'Диагностика бизнеса, позиционирование, структура продукта. Определяем, что продавать, кому и как.'
            },
            {
              title: 'Система продаж',
              text: 'Воронки, CRM, автоматизация, аналитика. Создаю порядок, где раньше были хаотичные действия.'
            },
            {
              title: 'Упаковка',
              text: 'Сайт, контент, визуал. Всё подчинено логике бизнеса, а не моде.'
            },
            {
              title: 'Сопровождение',
              text: 'Поддерживаю проект до результата. Слежу за цифрами и ритмом.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="space-y-4 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-3xl font-light tracking-wide group-hover:text-muted transition-colors duration-300">
                {item.title}
              </h3>
              <div className="w-12 h-px bg-foreground/30 group-hover:w-24 transition-all duration-500" />
              <p className="text-sm leading-relaxed text-muted/90 font-light max-w-md">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-sm text-muted/60 font-light tracking-wide">
            Без тарифов. Без пакетов. Под задачу.
          </p>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section id="results" className="min-h-screen flex items-center py-24 bg-secondary/10">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-light tracking-tight mb-20 animate-fade-in">Результаты</h2>
        
        <div className="space-y-16 max-w-4xl mx-auto animate-fade-in">
          {[
            {
              metric: '+27% к выручке',
              context: 'за первый месяц после настройки системы продаж.',
              detail: 'Заявки перестали теряться.'
            },
            {
              metric: 'Минус 3 часа',
              context: 'ручной рутины ежедневно после автоматизации.',
              detail: 'Команда работает в одном ритме.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-8 border-b border-border/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div>
                <p className="text-4xl font-light tracking-tight mb-2">{item.metric}</p>
                <p className="text-sm text-muted/70 font-light">{item.context}</p>
              </div>
              <p className="text-sm text-muted/90 font-light italic">{item.detail}</p>
            </div>
          ))}
          
          <div className="space-y-6 py-12 animate-fade-in">
            {[
              '"С тобой стало спокойно."',
              '"Первый раз за два года всё предсказуемо."',
              '"Это не про маркетинг. Это про порядок."'
            ].map((quote, index) => (
              <p
                key={index}
                className="text-lg font-light italic text-muted/80 text-center"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                {quote}
              </p>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-sm text-muted/70 font-light">
            Работаю с теми, кто готов перестраивать систему, а не латать дыры.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center space-y-12 animate-fade-in">
          <h2 className="text-5xl font-light tracking-tight">Связь</h2>
          
          <div className="w-16 h-px bg-foreground/20 mx-auto" />
          
          <p className="text-lg font-light leading-relaxed text-muted/90">
            Я беру ограниченное количество проектов.
            <br />
            Если готовы выстроить систему — напишите.
          </p>
          
          <div className="space-y-4 pt-8">
            <a
              href="https://t.me/yourusername"
              className="block text-lg hover:text-muted transition-colors duration-300 relative group"
            >
              <span className="relative">
                Telegram → @yourusername
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="mailto:hello@yourdomain.com"
              className="block text-lg hover:text-muted transition-colors duration-300 relative group"
            >
              <span className="relative">
                Email → hello@yourdomain.com
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
          
          <div className="pt-12">
            <p className="text-xs tracking-[0.15em] uppercase text-muted/50 font-light">
              Без групп. Без марафонов. Без публичных форматов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  return (
    <section id="vision" className="min-h-screen flex items-center py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/files/22f0f7db-4077-46ed-acba-18a973849e92.jpeg"
          alt="Vision"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-16 animate-fade-in-slow">
          <h2 className="text-6xl font-light tracking-tight">Vision</h2>
          
          <div className="space-y-12 pt-12">
            {[
              'Тишина',
              'Порядок — роскошь.',
              'Молчание — форма силы.',
              'Когда система выстроена,',
              'не нужно доказывать.'
            ].map((line, index) => (
              <p
                key={index}
                className="text-2xl md:text-3xl font-light tracking-wide opacity-0 animate-fade-in-slow"
                style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}
              >
                {line}
              </p>
            ))}
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
      const sections = ['hero', 'approach', 'work', 'results', 'contact', 'vision'];
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
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ApproachSection />
      <WorkSection />
      <ResultsSection />
      <ContactSection />
      <VisionSection />
    </div>
  );
};

export default Index;
