import { useEffect, useRef } from 'react';
import { ExternalLink, Eye, Smartphone, Laptop, Globe } from 'lucide-react';

const projects = [
    {
        title: 'Cafe El Injerto',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=60&w=600',
        description: 'Tienda online premium para venta de café de exportación.',
        tags: ['React', 'Web-Vitals', 'Guatemala'],
        icon: Laptop
    },
    {
        title: 'Guate Tours',
        category: 'Turismo',
        image: 'https://guatedriver.com/wp-content/uploads/2025/01/Untitled-design-2025-01-16T024710.536.jpg',
        description: 'Sistema de reservas y portal informativo turístico.',
        tags: ['Interactive', 'Maps', 'Responsive'],
        icon: Globe
    },
    {
        title: 'Inmobiliaria Central',
        category: 'Bienes Raíces',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=60&w=600',
        description: 'Landing page de alta conversión para proyectos habitacionales.',
        tags: ['Landing Page', 'SEO', 'Leads'],
        icon: Smartphone
    },
    {
        title: 'Fitness GT',
        category: 'Salud',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=60&w=600',
        description: 'Plataforma para gimnasios con registro de usuarios.',
        tags: ['Web App', 'Member-Area', 'Custom'],
        icon: Eye
    }
];

export function Portfolio() {
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
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="portfolio" ref={sectionRef} className="py-20 lg:py-28 bg-gray-50/50 relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-red-100/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-200/10 rounded-full blur-[120px]" />

            <div className="w-full section-padding relative">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl text-center md:text-left">
                            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                                <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    <Eye className="w-4 h-4" />
                                    Portafolio Seleccionado
                                </span>
                            </div>
                            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Proyectos que impulsan <span className="text-gradient">negocios reales</span>
                            </h2>
                            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600">
                                Cada sitio que construimos está diseñado con un propósito: convertir visitantes en clientes.
                            </p>
                        </div>

                        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex justify-center">
                            <a
                                href="https://wa.me/50258660396?text=%C2%A1Hola!%20%F0%9F%91%8B%20Vi%20sus%20proyectos%20en%20el%20portafolio%20y%20me%20gust%C3%B3%20mucho%20su%20trabajo.%20Me%20gustar%C3%ADa%20cotizar%20algo%20similar%20para%20mi%20negocio."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline flex items-center gap-2 group"
                            >
                                Ver todos los proyectos
                                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
                                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                            >
                                <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            width="600"
                                            height="375"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                            <div className="flex gap-4">
                                                <button className="bg-white text-gray-900 p-3 rounded-xl shadow-lg hover:bg-red-600 hover:text-white transition-colors">
                                                    <Eye className="w-6 h-6" />
                                                </button>
                                                <button className="bg-white text-gray-900 p-3 rounded-xl shadow-lg hover:bg-red-600 hover:text-white transition-colors">
                                                    <ExternalLink className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Category Overlay */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                                                <project.icon className="w-3 h-3 text-red-600" />
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
