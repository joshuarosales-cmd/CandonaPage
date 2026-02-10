import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useCurrency, CurrencyCode } from '../context/CurrencyContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currency, setCurrency, availableCurrencies } = useCurrency();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Paquetes', id: 'packages' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Proceso', id: 'process' },
    { label: 'Contacto', id: 'cta' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/favicon.png"
              alt="favicon.png"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />

          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-red-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Currency Selector Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 ${isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
              >
                <Globe className="w-4 h-4 text-red-600" />
                <span>{currency.code}</span>
              </button>

              {isCurrencyMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {availableCurrencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code as CurrencyCode);
                        setIsCurrencyMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-600 ${currency.code === c.code ? 'text-red-600 font-bold' : 'text-gray-700'
                        }`}
                    >
                      {c.label} ({c.symbol})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/50258660396?text=Hola%20La%20Candona,%20quiero%20solicitar%20una%20demo%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="text-xs font-semibold text-gray-400 px-4 mb-2 uppercase tracking-wider">Moneda</p>
              <div className="grid grid-cols-2 gap-2 px-2">
                {availableCurrencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code as CurrencyCode);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${currency.code === c.code
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                  >
                    <span>{c.code}</span>
                    <span className="opacity-60">({c.symbol})</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/50258660396?text=Hola%20La%20Candona,%20quiero%20solicitar%20una%20demo%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-primary mt-4"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
