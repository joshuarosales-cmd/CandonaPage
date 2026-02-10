import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50/50" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-100/40 to-transparent rounded-full" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 hidden lg:block animate-float">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-red-100">
          <Zap className="w-8 h-8 text-red-500" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-red-100">
          <Shield className="w-8 h-8 text-red-500" />
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-red-100">
          <Clock className="w-8 h-8 text-red-500" />
        </div>
      </div>

      <div className="relative w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Desarrollo Web Profesional en Guatemala</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Tu página web profesional desde{' '}
                <span className="text-gradient">{formatPrice(399)}</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
                  Entrega rápida en Guatemala
                </span>
              </h1>

              {/* Subtitle */}
              <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Diseñamos páginas web modernas para emprendedores y negocios.
                Incluye hosting, dominio y soporte.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://wa.me/50258660396?text=Hola%20La%20Candona,%20quiero%20solicitar%20una%20demo%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-lg group"
                >
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Solicitar demo gratis
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/50258660396?text=Hola%20La%20Candona,%20tengo%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar por WhatsApp
                </a>
              </div>

              {/* Demo Note */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
                <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Creamos una demo completamente gratuita donde mostramos cómo podría verse tu página
                  </span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">+50 clientes satisfechos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 hidden lg:block">
              <div className="relative">
                {/* Main Browser Mockup */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 text-center">
                        lacandona.web
                      </div>
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-6">
                    {/* Hero Section Mockup */}
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white mb-4">
                      <div className="h-4 w-32 bg-white/30 rounded mb-3" />
                      <div className="h-8 w-48 bg-white/20 rounded mb-2" />
                      <div className="h-8 w-32 bg-white/20 rounded mb-4" />
                      <div className="flex gap-2">
                        <div className="h-8 w-24 bg-white rounded" />
                        <div className="h-8 w-24 bg-white/30 rounded" />
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg mb-2" />
                        <div className="h-3 w-full bg-gray-200 rounded" />
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg mb-2" />
                        <div className="h-3 w-full bg-gray-200 rounded" />
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg mb-2" />
                        <div className="h-3 w-full bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">¡Sitio en línea!</div>
                      <div className="text-xs text-gray-500">Entrega completada</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Rápido</div>
                      <div className="text-xs text-gray-500">Entrega en días</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
