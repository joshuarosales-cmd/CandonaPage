import { useEffect, useRef } from 'react';
import { Check, Star, ShoppingCart, Briefcase, Store, User, Building2, Rocket } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
  color: string;
}

const packages: Package[] = [
  {
    id: 'basico',
    name: 'Combo Básico',
    price: 'Q399 - Q599',
    description: 'Perfecto para comenzar tu presencia online',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
    features: [
      '1 página tipo landing',
      'Diseño responsive',
      'Formulario de contacto',
      'Hosting + dominio 1 año',
      'Certificado SSL',
    ],
  },
  {
    id: 'empresarial',
    name: 'Combo Empresarial',
    price: 'Q699 - Q999',
    description: 'Ideal para empresas que necesitan más páginas',
    icon: Building2,
    color: 'from-red-500 to-red-600',
    popular: true,
    features: [
      'Hasta 4 páginas',
      'Botón WhatsApp directo',
      'SEO básico',
      'Mapa integrado',
      'Formulario avanzado',
      'Hosting + dominio 1 año',
      'Certificado SSL',
    ],
  },
  {
    id: 'emprendedor',
    name: 'Combo Emprendedor',
    price: 'Q499',
    description: 'El equilibrio perfecto calidad-precio',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    features: [
      'Página básica profesional',
      'Botón WhatsApp',
      'Correo profesional',
      'Diseño responsive',
      'Hosting + dominio 1 año',
    ],
  },
  {
    id: 'negocio-local',
    name: 'Combo Negocio Local',
    price: 'Q799',
    description: 'Diseñado para negocios locales',
    icon: Store,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Inicio, Servicios, Nosotros, Contacto',
      'SEO básico optimizado',
      'Mapa de ubicación',
      'Formulario de contacto',
      'Botón WhatsApp',
      'Hosting + dominio 1 año',
    ],
  },
  {
    id: 'profesional',
    name: 'Combo Profesional Independiente',
    price: 'Q599',
    description: 'Para freelancers y profesionales',
    icon: User,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Portafolio / CV online',
      'Links a redes sociales',
      'Sistema de reservas',
      'Diseño personalizado',
      'Hosting + dominio 1 año',
    ],
  },
  {
    id: 'tienda',
    name: 'Tienda Básica',
    price: 'Q1499 - Q1999',
    description: 'Vende tus productos online',
    icon: ShoppingCart,
    color: 'from-pink-500 to-pink-600',
    features: [
      'Hasta 10 productos',
      'Pedidos por WhatsApp',
      'Carrito de compras simple',
      'Gestión de inventario básico',
      'Pasarela de pagos',
      'Hosting + dominio 1 año',
    ],
  },
];

export function Packages() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="py-20 lg:py-28 bg-white relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-50/50 to-transparent" />

      <div className="w-full section-padding relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4" />
                Paquetes Disponibles
              </span>
            </div>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Elige el plan perfecto para tu negocio
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
              Todos nuestros paquetes incluyen hosting, dominio y certificado SSL el primer año.
              Sin costos ocultos.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className={`relative h-full bg-white rounded-2xl border-2 ${pkg.popular ? 'border-red-500 shadow-xl shadow-red-500/10' : 'border-gray-100 hover:border-red-200'} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden group`}>
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                      MÁS POPULAR
                    </div>
                  )}

                  {/* Card Header */}
                  <div className={`p-6 bg-gradient-to-br ${pkg.color}`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <pkg.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-white/80 text-sm">{pkg.description}</p>
                  </div>

                  {/* Price */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">{formatPrice(pkg.price)}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-red-600" />
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/50258660396?text=%C2%A1Hola%20La%20Candona!%20%F0%9F%91%8B%20Me%20interesa%20el%20plan%20*${encodeURIComponent(pkg.name)}*.%20%C2%BFQu%C3%A9%20informaci%C3%B3n%20necesito%20enviarles%20para%20comenzar?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 block ${pkg.popular
                        ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                        }`}
                    >
                      Solicitar información
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-12 text-center">
            <p className="text-gray-500 text-sm">
              ¿Necesitas algo personalizado?{' '}
              <a
                href="https://wa.me/50258660396?text=Hola%2C%20necesito%20un%20*presupuesto%20personalizado*%20para%20un%20proyecto%20web%20especial.%20Me%20gustar%C3%ADa%20platicar%20sobre%20mis%20requerimientos.%20%F0%9F%92%BB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:underline"
              >
                Contáctanos para un presupuesto a tu medida
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
