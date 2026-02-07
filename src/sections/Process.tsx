import { useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  ClipboardList, 
  FileText, 
  CreditCard, 
  Palette, 
  Eye, 
  Rocket, 
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contacto',
    description: 'Nos escribes por WhatsApp o llenas el formulario con tus datos.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Recopilación',
    description: 'Nos cuentas sobre tu negocio, tus servicios y lo que necesitas.',
    color: 'bg-green-500',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Propuesta',
    description: 'Te enviamos una propuesta en PDF con el alcance y precio.',
    color: 'bg-yellow-500',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Anticipo',
    description: 'Realizas el 50% de anticipo para comenzar el proyecto.',
    color: 'bg-orange-500',
  },
  {
    number: '05',
    icon: Palette,
    title: 'Diseño',
    description: 'Creamos el diseño de tu página web con tu identidad.',
    color: 'bg-purple-500',
  },
  {
    number: '06',
    icon: Eye,
    title: 'Revisión',
    description: 'Revisas la demo y solicitas los ajustes necesarios.',
    color: 'bg-pink-500',
  },
  {
    number: '07',
    icon: Rocket,
    title: 'Entrega',
    description: 'Pagas el 50% restante y entregamos tu sitio web.',
    color: 'bg-red-500',
  },
  {
    number: '08',
    icon: LifeBuoy,
    title: 'Soporte',
    description: 'Te brindamos soporte durante 30 días después de la entrega.',
    color: 'bg-indigo-500',
  },
];

export function Process() {
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
    <section id="process" ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full section-padding relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Rocket className="w-4 h-4" />
                Cómo Trabajamos
              </span>
            </div>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Proceso simple y transparente
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
              Desde el primer contacto hasta la entrega, te acompañamos en cada paso.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="relative group">
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow - Desktop */}
                    {index < steps.length - 1 && index % 4 !== 3 && (
                      <div className="hidden lg:flex absolute top-24 -right-4 z-10">
                        <ArrowRight className="w-8 h-8 text-red-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Info */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">3-7</div>
                  <div className="text-gray-600">Días para landing page</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">7-14</div>
                  <div className="text-gray-600">Días para sitio completo</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">14-21</div>
                  <div className="text-gray-600">Días para tienda online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
