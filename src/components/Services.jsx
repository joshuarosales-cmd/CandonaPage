import { Check, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const packages = [
    {
        name: 'Básico',
        subtitle: 'Ideal para empezar',
        price: '399',
        period: 'pago único',
        features: [
            'Página web de 1 sección',
            'Diseño responsive',
            'Formulario de contacto',
            'Hosting gratis 1 año',
            'Dominio .com incluido',
            'Certificado SSL'
        ],
        cta: 'Comenzar ahora'
    },
    {
        name: 'Emprendedor',
        subtitle: 'Para negocios en crecimiento',
        price: '599',
        period: 'pago único',
        popular: true,
        features: [
            'Hasta 3 páginas',
            'Diseño personalizado',
            'Botón WhatsApp flotante',
            'Correo profesional',
            'SEO básico incluido',
            'Hosting + Dominio 1 año',
            'Soporte 30 días'
        ],
        cta: 'Más popular'
    },
    {
        name: 'Profesional',
        subtitle: 'Solución completa',
        price: '999',
        period: 'pago único',
        features: [
            'Hasta 5 páginas',
            'Diseño premium',
            'Portafolio/Catálogo',
            'Integración redes sociales',
            'Google Maps integrado',
            'SEO optimizado',
            'Hosting + Dominio 1 año',
            'Soporte 60 días'
        ],
        cta: 'Solicitar cotización'
    },
    {
        name: 'Negocio',
        subtitle: 'Para empresas establecidas',
        price: '1,200',
        period: 'pago único',
        features: [
            'Hasta 8 páginas',
            'Diseño corporativo',
            'Sistema de blog',
            'Formularios avanzados',
            'Analytics integrado',
            'SEO avanzado',
            'Hosting + Dominio 1 año',
            'Soporte 90 días'
        ],
        cta: 'Contactar'
    },
    {
        name: 'E-Commerce',
        subtitle: 'Tienda online completa',
        price: '2,000',
        period: 'pago único',
        features: [
            'Hasta 20 productos',
            'Carrito de compras',
            'Pasarela de pagos',
            'Panel administrativo',
            'Gestión de inventario',
            'SEO para productos',
            'Hosting + Dominio 1 año',
            'Soporte 120 días'
        ],
        cta: 'Iniciar tienda'
    },
    {
        name: 'Premium',
        subtitle: 'Solución empresarial',
        price: 'Personalizado',
        period: 'según proyecto',
        features: [
            'Páginas ilimitadas',
            'Diseño a medida',
            'Funcionalidades custom',
            'Integraciones API',
            'Sistema de usuarios',
            'SEO empresarial',
            'Hosting + Dominio 1 año',
            'Soporte prioritario'
        ],
        cta: 'Agendar consulta'
    }
]

const Services = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} id="servicios" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-primary-600 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">
                        Nuestros Paquetes
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                        Soluciones para cada necesidad
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                        Desde emprendedores hasta empresas establecidas, tenemos el paquete perfecto para tu proyecto
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } ${pkg.popular
                                    ? 'border-2 border-primary-600 shadow-2xl sm:scale-105 z-10 hover:scale-110'
                                    : 'border border-gray-200 hover:border-primary-200 hover:shadow-xl hover:scale-105'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 animate-float">
                                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                                        ⭐ Recomendado
                                    </div>
                                </div>
                            )}

                            {/* Package Header */}
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">{pkg.subtitle}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-6 sm:mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-gray-900 text-base sm:text-lg font-semibold mr-1">Q</span>
                                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">{pkg.price}</span>
                                </div>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">{pkg.period}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start group">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <Check className="text-primary-600" size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href={`https://wa.me/50258660396?text=Hola,%20me%20interesa%20el%20paquete%20${encodeURIComponent(pkg.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center justify-center w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${pkg.popular
                                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                            >
                                {pkg.cta}
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center px-4 sm:px-0 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4">
                            ¿Necesitas algo diferente? <span className="font-bold text-gray-900 block sm:inline">Creamos soluciones a tu medida</span>
                        </p>
                        <a
                            href="https://wa.me/50258660396?text=Necesito%20una%20cotización%20personalizada"
                            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group text-sm sm:text-base"
                        >
                            Solicitar cotización personalizada
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
