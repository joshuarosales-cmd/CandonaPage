import { useEffect, useRef } from 'react';
import { 
  Server, 
  Shield, 
  RefreshCw, 
  HeadphonesIcon, 
  Eye, 
  Gift,
  CheckCircle2
} from 'lucide-react';

const benefits = [
  {
    icon: Server,
    title: 'Hosting y dominio incluido',
    description: 'Primer año de hosting y dominio completamente gratis. Tu sitio estará en línea desde el día uno.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Certificado SSL gratis',
    description: 'Conexión segura HTTPS para proteger la información de tus visitantes y mejorar tu posicionamiento.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: RefreshCw,
    title: 'Primera actualización gratuita',
    description: 'Realizamos la primera actualización de contenido sin costo adicional después de la entrega.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte inicial 30 días',
    description: 'Te acompañamos durante los primeros 30 días para resolver cualquier duda o ajuste.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Eye,
    title: 'Demo previa sin compromiso',
    description: 'Te mostramos cómo quedará tu página antes de cualquier pago. Sin sorpresas.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Gift,
    title: 'Extras incluidos',
    description: 'SEO básico, integración con Google Business, logo simple y opción de chatbot.',
    color: 'from-red-500 to-red-600',
  },
];

export function Benefits() {
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

  return (
    <section id="benefits" ref={sectionRef} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="w-full section-padding relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Beneficios Incluidos
              </span>
            </div>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas, incluido
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
              Nos encargamos de todo para que tú solo te enfoques en hacer crecer tu negocio.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="group h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 text-center text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                ¿Y después del primer año?
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                El renovar tu hosting y dominio tiene un costo aproximado de Q400 - Q600 por año. 
                Te avisamos con anticipación para que no pierdas tu sitio.
              </p>
              <a
                href="https://wa.me/50258660396?text=Hola%20La%20Candona,%20tengo%20dudas%20sobre%20la%20renovación"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
