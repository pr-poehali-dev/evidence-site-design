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
          {['manifest', 'services', 'examples', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-[10px] font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300"
            >
              {section === 'manifest' && 'Манифест'}
              {section === 'services' && 'Услуги'}
              {section === 'examples' && 'Примеры'}
              {section === 'contact' && 'Контакт'}
            </button>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border/50 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6 space-y-5">
            {['manifest', 'services', 'examples', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-[10px] font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors py-2"
              >
                {section === 'manifest' && 'Манифест'}
                {section === 'services' && 'Услуги'}
                {section === 'examples' && 'Примеры'}
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
            Примеры наших работ<br />на Тильде
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Дизайн и верстка сайта для сети кофеен в Чехии на двух языках.<br />
            Также подготовлено техническое задание на фотосъемку и копирайтинг.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-primary text-primary-foreground text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Перейти на сайт
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

const ManifestSection = () => {
  return (
    <section id="manifest" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/20 to-transparent" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-border/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-12 text-center">
            #01
          </div>
          
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-8 text-center">
            У нас с клиентом одна цель — сделать так, чтобы бизнес клиента развивался
          </p>

          <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-center mb-20">
            Для чего переделывать сайт<br />и переносить его на Тильду?
          </h2>

          <div className="space-y-0">
            <div className="border-t border-border py-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  #01
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">Повысить продажи с сайта</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Запроектируем и реализуем эффективный дизайн и обновим структуру сайта и страниц, 
                  с учетом каналов привлечения клиентов, с сохранением SEO-настроек
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
                <h3 className="text-xl md:text-2xl font-medium">Создать и улучшить имидж</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Разработаем фирменный стиль, концепцию сайта и UI-Kit, сформируем привлекательный 
                  образ бренда в digital-среде, с учетом задач бизнеса и портретов аудитории
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
                <h3 className="text-xl md:text-2xl font-medium">Отстроиться от конкурентов</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Изучим ваших конкурентов, выявим их сильные стороны и донесем до ваших клиентов, 
                  почему следует обратиться к вам, а не в другие компании
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
              Преимущества Тильды,<br />в сравнении с другими CMS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Оперативность разработки
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Тильда позволяет реализовать все задумки дизайнера без программирования, за счет чего 
                исключается звено между дизайном и маркетингом и конечным продуктом – готовым сайтом. 
                Мы изначально можем довольно точно просчитать трудозатраты и предусмотреть все нюансы.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Оптимальный бюджет на разработку
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Благодаря архитектуре платформы мы можем предложить оптимальную стоимость разработки 
                без ущерба качеству. Сокращение времени на технические задачи позволяет больше внимания 
                уделить дизайну и пользовательскому опыту.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Простота управления
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Интуитивный интерфейс Тильды позволяет вам самостоятельно вносить изменения в контент, 
                добавлять новые страницы и блоки. Не нужно обращаться к программистам для простых правок.
              </p>
            </div>

            <div className="bg-card p-10 md:p-12 space-y-6">
              <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Адаптивность и производительность
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Все сайты автоматически адаптируются под любые устройства и оптимизированы для быстрой 
                загрузки. Это критично важно для SEO и конверсии посетителей в клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-32 bg-background relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Портфолио
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-medium">
              Материал по теме
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-card overflow-hidden mb-6 border border-border">
                <img
                  src="https://cdn.poehali.dev/files/fabc59f1-3626-4dfe-b5e6-7c10a31f6a8f.png"
                  alt="Материал по теме"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  Материал по теме
                </div>
                <h3 className="text-xl font-medium leading-tight">
                  Почему сайт не продает? ТОП-14 заблуждений и решений для повышения продаж
                </h3>
                <button className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors">
                  Читать
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-card overflow-hidden mb-6 border border-border">
                <img
                  src="https://cdn.poehali.dev/files/d44c4380-6c56-4024-b6e0-43cb970f599e.png"
                  alt="Редизайн сайта Bagel Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  Кейс
                </div>
                <h3 className="text-xl font-medium leading-tight">
                  Редизайн сайта сети кофеен Bagel Lounge
                </h3>
                <button className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors">
                  Подробнее
                  <Icon name="ArrowRight" size={14} />
                </button>
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
                Частная практика
              </p>
            </div>

            <div>
              <h4 className="text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Навигация
              </h4>
              <div className="space-y-3">
                <a href="#manifest" className="block text-xs hover:text-primary transition-colors">Манифест</a>
                <a href="#services" className="block text-xs hover:text-primary transition-colors">Услуги</a>
                <a href="#examples" className="block text-xs hover:text-primary transition-colors">Примеры</a>
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
                <a href="tel:+79991234567" className="block text-xs hover:text-primary transition-colors">
                  +7 (999) 123-45-67
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
      <ManifestSection />
      <ServicesSection />
      <ExamplesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
