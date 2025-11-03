import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-card/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 py-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2"
        >
          <div className="w-11 h-11 rounded-full border border-primary flex items-center justify-center">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em]">ED</span>
          </div>
        </button>
        
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-5 h-px bg-foreground" />
            <div className="w-5 h-px bg-foreground" />
          </div>
        </button>

        <div className="hidden md:flex gap-12 items-center">
          {['philosophy', 'services', 'process', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-[10px] font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300"
            >
              {section === 'philosophy' && 'Философия'}
              {section === 'services' && 'Услуги'}
              {section === 'process' && 'Процесс'}
              {section === 'contact' && 'Контакт'}
            </button>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border/50 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6 space-y-5">
            {['philosophy', 'services', 'process', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-[10px] font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors py-2"
              >
                {section === 'philosophy' && 'Философия'}
                {section === 'services' && 'Услуги'}
                {section === 'process' && 'Процесс'}
                {section === 'contact' && 'Контакт'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-border/20 hidden xl:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border border-border/20 hidden xl:block" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="inline-block">
            <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-primary flex items-center justify-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em]">ED</span>
            </div>
          </div>
          
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
            Екатерина Дэвиль
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Маркетолог-стратег. Помогаю бизнесу выстроить систему маркетинга,<br />
            которая работает без хаоса и приносит предсказуемый результат.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-primary text-primary-foreground text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Мои услуги
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 border border-primary text-foreground text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Связаться
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-border" />
        <div className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">Прокрутите</div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/20 to-transparent" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-border/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
            Философия
          </div>

          <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-center mb-20">
            Я выстраиваю маркетинг<br />и продажи, чтобы они<br />работали спокойно
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-border flex items-center justify-center">
                <Icon name="Target" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Без хаоса</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Четкая стратегия вместо спонтанных решений
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-border flex items-center justify-center">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Без суеты</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Системный подход к каждой задаче
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-border flex items-center justify-center">
                <Icon name="CheckCircle" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Без случайных решений</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Данные и аналитика в основе каждого шага
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

          <div className="space-y-0">
            <div className="border-t border-border py-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  #01
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">Стратегия маркетинга</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Провожу аудит текущих маркетинговых активностей, анализирую целевую аудиторию и конкурентов. 
                  Разрабатываю стратегию позиционирования и план продвижения на 6-12 месяцев вперед.
                </p>
              </div>
            </div>

            <div className="border-t border-border py-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  #02
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">Настройка системы продаж</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Выстраиваю воронку продаж от первого касания до сделки. Настраиваю процессы лидогенерации, 
                  квалификации лидов и работы с возражениями. Внедряю CRM и автоматизирую рутину.
                </p>
              </div>
            </div>

            <div className="border-t border-border py-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  #03
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">Аналитика и оптимизация</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Настраиваю сквозную аналитику и отчетность. Регулярно анализирую показатели эффективности 
                  каждого канала. Оптимизирую бюджеты и масштабирую то, что работает.
                </p>
              </div>
            </div>

            <div className="border-t border-b border-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Услуги
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium mb-8">
              Как я работаю<br />с клиентами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Маркетинговый аудит
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Комплексный анализ текущей маркетинговой активности вашего бизнеса. Выявляю точки роста 
                и зоны оптимизации. Готовлю детальный отчет с рекомендациями и планом действий.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4">
                <Icon name="Map" size={24} className="text-primary" />
              </div>
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Разработка стратегии
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Создаю индивидуальную маркетинговую стратегию под ваши бизнес-цели. Определяю позиционирование, 
                каналы продвижения, медиаплан и KPI. Составляю дорожную карту на 6-12 месяцев.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4">
                <Icon name="Settings" size={24} className="text-primary" />
              </div>
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Внедрение системы
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Помогаю внедрить разработанную стратегию: настраиваю процессы, обучаю команду, запускаю 
                рекламные кампании. Контролирую выполнение и корректирую план при необходимости.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Постоянное сопровождение
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Регулярные встречи для анализа результатов и корректировки стратегии. Оптимизация бюджетов, 
                тестирование гипотез, масштабирование успешных каналов. Отчетность и прозрачность процессов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-background relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Процесс
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium">
              Этапы работы
            </h2>
          </div>

          <div className="space-y-16">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-medium">01</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-medium mb-4">Знакомство и диагностика</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Созваниваемся, обсуждаем ваш бизнес, цели и задачи. Я задаю вопросы, чтобы понять текущую 
                  ситуацию, проблемы и ожидания. Определяем формат сотрудничества и план первых шагов.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-medium">02</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-medium mb-4">Глубокий анализ</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Провожу аудит всех маркетинговых активностей, изучаю целевую аудиторию, конкурентов и рынок. 
                  Анализирую воронку продаж и точки роста. Готовлю детальный отчет с выводами.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-medium">03</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-medium mb-4">Стратегия и план</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Разрабатываю маркетинговую стратегию с четкими целями, метриками и планом действий. 
                  Презентую вам стратегию, обсуждаем детали, вносим корректировки при необходимости.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-medium">04</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-medium mb-4">Внедрение и рост</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Запускаем стратегию в работу: настраиваю процессы, обучаю команду, контролирую выполнение. 
                  Регулярно анализируем результаты, оптимизируем и масштабируем успешные решения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Свяжитесь с нами
          </div>
          
          <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium mb-12">
            Готовы начать проект?
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-12" />
          
          <p className="text-sm text-muted-foreground mb-16 leading-relaxed max-w-xl mx-auto">
            Напишите нам, и мы обсудим ваш проект. Разработаем стратегию и поможем воплотить ваши идеи в жизнь.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ekaterinadevillle.com"
              className="px-12 py-4 bg-primary text-primary-foreground text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon name="Mail" size={16} />
              Написать письмо
            </a>
            <a
              href="tel:+79991234567"
              className="px-12 py-4 border border-primary text-foreground text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-11 h-11 rounded-full border border-primary flex items-center justify-center">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em]">ED</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Екатерина Дэвиль<br />
                Маркетолог-стратег
              </p>
            </div>

            <div>
              <h4 className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Навигация
              </h4>
              <div className="space-y-3">
                <a href="#philosophy" className="block text-xs hover:text-primary transition-colors">Философия</a>
                <a href="#services" className="block text-xs hover:text-primary transition-colors">Услуги</a>
                <a href="#process" className="block text-xs hover:text-primary transition-colors">Процесс</a>
                <a href="#contact" className="block text-xs hover:text-primary transition-colors">Контакт</a>
              </div>
            </div>

            <div>
              <h4 className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Контакты
              </h4>
              <div className="space-y-3">
                <a href="mailto:contact@ekaterinadevillle.com" className="block text-xs hover:text-primary transition-colors">
                  contact@ekaterinadevillle.com
                </a>
                <a href="https://t.me/ekaterinadevillle" target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-primary transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              © 2024 Екатерина Дэвиль
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em] uppercase">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;