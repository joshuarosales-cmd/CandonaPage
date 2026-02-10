import { useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Demo gratuita sin compromiso',
    'Propuesta personalizada en 24h',
    'Soporte durante todo el proceso',
  ];

  return (
    <section id="cta" ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl" />
      </div>

      <div className="w-full section-padding relative">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>¡Comienza hoy mismo!</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Solicita tu demo gratuita hoy
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                  No esperes más para tener tu presencia online. Te mostramos cómo quedará tu página antes de cualquier compromiso.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/50258660396?text=%C2%A1Hola!%20%F0%9F%9A%80%20Me%20encantar%C3%ADa%20solicitar%20una%20*demo%20gratuita*%20para%20mi%20negocio.%20Vi%20que%20ofrecen%20desarrollo%20r%C3%A1pido%20y%20profesional%20en%20Guatemala."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/25 hover:scale-105 group"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp directo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Note */}
                <p className="mt-6 text-gray-500 text-sm">
                  Respuesta garantizada en menos de 2 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
