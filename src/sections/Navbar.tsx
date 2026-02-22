import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, Calculator, ArrowRight } from 'lucide-react';
import { useCurrency, CurrencyCode } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currency, setCurrency, availableCurrencies } = useCurrency();
  const { theme, toggleTheme } = useTheme();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      if (location.pathname === '/') {
        const sections = ['hero', 'packages', 'portfolio', 'faq'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Paquetes', id: 'packages' },
    { label: 'Portafolio', id: 'portfolio' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group relative"
          >
            <div className="absolute -inset-2 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/favicon.png"
              alt="La Candona"
              width="40"
              height="40"
              className="h-10 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10"
            />
            <span className="text-xl font-black tracking-tighter text-foreground hidden sm:block">
              LA<span className="text-red-600"> CANDONA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-muted/50 dark:bg-muted/20 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl relative group ${activeSection === link.id && location.pathname === '/'
                  ? 'text-red-600'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {link.label}
                {activeSection === link.id && location.pathname === '/' && (
                  <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-600 rounded-full animate-in zoom-in duration-300" />
                )}
              </button>
            ))}
            <div className="w-px h-4 bg-border mx-2" />
            <Link
              to="/calculadora"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl ${location.pathname === '/calculadora'
                ? 'bg-red-600 text-white'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Calculator className="w-4 h-4" />
              Calculadora
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme & Currency Group */}
            <div className="flex items-center bg-muted/50 dark:bg-muted/20 rounded-xl p-1 border border-border/50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-background hover:shadow-sm transition-all text-foreground"
                title="Cambiar tema"
              >
                {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-yellow-500" />}
              </button>

              <div className="w-px h-4 bg-border mx-1" />

              <div className="relative">
                <button
                  onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:bg-background hover:shadow-sm text-foreground uppercase tracking-wider"
                >
                  <Globe className="w-3.5 h-3.5 text-red-600" />
                  <span>{currency.code}</span>
                </button>

                {isCurrencyMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsCurrencyMenuOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-card rounded-2xl shadow-2xl border border-border py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                      <div className="px-4 py-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest border-b border-border mb-1">
                        Seleccionar moneda
                      </div>
                      {availableCurrencies.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setCurrency(c.code as CurrencyCode);
                            setIsCurrencyMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-all hover:bg-red-500 hover:text-white flex items-center justify-between group ${currency.code === c.code ? 'text-red-600 font-bold bg-red-50/50 dark:bg-red-500/10' : 'text-foreground'
                            }`}
                        >
                          <span className="flex items-center gap-2">
                            {c.label}
                          </span>
                          <span className="text-xs opacity-50 font-mono">{c.symbol}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <a
              href="https://wa.me/50258660396?text=%C2%A1Hola!%20%F0%9F%9A%80%20Me%20encantar%C3%ADa%20solicitar%20una%20*demo%20gratuita*%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-glow text-sm whitespace-nowrap px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 group"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 border border-border/50 text-foreground"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 font-bold" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${isMobileMenuOpen
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-muted/50 border border-border/50 text-foreground'
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 mt-4 translate-y-0' : 'opacity-0 h-0 pointer-events-none -translate-y-4'
            }`}
        >
          <div className="bg-card/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-6 space-y-3 border border-border/50">
            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 px-4">Navegación</div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center justify-between w-full text-left px-4 py-4 rounded-2xl transition-all ${activeSection === link.id && location.pathname === '/'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-muted/30 text-foreground hover:bg-muted font-bold'
                  }`}
              >
                <span className="font-bold">{link.label}</span>
                {activeSection === link.id && location.pathname === '/' && <ArrowRight className="w-4 h-4" />}
              </button>
            ))}

            <Link
              to="/calculadora"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-4 rounded-2xl transition-all ${location.pathname === '/calculadora'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                }`}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5" />
                <span className="font-black italic uppercase tracking-tighter">Calculadora Pro</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Moneda</span>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full">{currency.code}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {availableCurrencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code as CurrencyCode);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${currency.code === c.code
                      ? 'bg-foreground text-background shadow-xl'
                      : 'bg-muted/30 text-foreground hover:bg-muted'
                      }`}
                  >
                    <span>{c.label}</span>
                    <span className="opacity-40">{c.symbol}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/50258660396?text=%C2%A1Hola!%20%F0%9F%9A%80%20Me%20encantar%C3%ADa%20solicitar%20una%20*demo%20gratuita*%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full btn-primary py-5 rounded-[1.5rem] font-black uppercase tracking-wider text-sm mt-4 shadow-xl shadow-red-600/30"
            >
              <Globe className="w-5 h-5" />
              Solicitar mi Demo Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
