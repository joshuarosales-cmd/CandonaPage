import { useEffect, useRef } from 'react';
import {
  Users,
  Zap,
  Wallet,
  HeartHandshake,
  TrendingUp,
  Award,
  Clock,
  ThumbsUp
} from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    title: 'Ideal para emprendedores',
    description: 'Entendemos las necesidades de quienes están comenzando. Nuestros precios y servicios están pensados para ti.',
  },
  {
    icon: Zap,
    title: 'Entrega rápida',
    description: 'No te hacemos esperar meses. Tu página web lista en días, no en semanas.',
  },
  {
    icon: Wallet,
    title: 'Precios accesibles',
    description: 'Desde Q399 puedes tener tu presencia online profesional. Sin costos ocultos.',
  },
  {
    icon: HeartHandshake,
    title: 'Atención personalizada',
    description: 'Trabajamos directamente contigo. No hay intermediarios, solo comunicación clara.',
  },
];

const stats = [
  { icon: TrendingUp, value: '+50', label: 'Proyectos entregados' },
  { icon: Award, value: '100%', label: 'Clientes satisfechos' },
  { icon: Clock, value: '3+', label: 'Años de experiencia' },
  { icon: ThumbsUp, value: '5.0', label: 'Calificación promedio' },
];

export function Trust() {
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
    <section id="trust" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="w-full section-padding relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Diseñamos webs que ayudan a vender
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-lg text-white/80 max-w-2xl mx-auto">
              No solo creamos páginas bonitas. Creamos herramientas que generan resultados para tu negocio.
            </p>
          </div>

          {/* Trust Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <point.icon className="w-7 h-7 text-red-600" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-white/20 font-serif mb-4">"</div>
              <blockquote className="text-xl lg:text-2xl text-white font-medium mb-6">
                La Candona transformó completamente mi negocio. En menos de una semana tenía mi página web funcionando y recibiendo clientes nuevos.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">María Rodríguez</div>
                  <div className="text-white/70 text-sm">Dueña de tienda online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
