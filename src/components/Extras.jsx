import { useEffect, useRef, useState } from 'react'

const extras = [
    {
        title: 'SEO Básico',
        price: '250',
        description: 'Optimización para buscadores'
    },
    {
        title: 'Google Business',
        price: '200',
        description: 'Perfil empresarial verificado'
    },
    {
        title: 'Logo Profesional',
        price: '400',
        description: 'Diseño de identidad visual'
    },
    {
        title: 'Chatbot WhatsApp',
        price: '500',
        description: 'Respuestas automáticas 24/7'
    },
    {
        title: 'Mantenimiento',
        price: '250',
        description: 'Actualizaciones mensuales'
    },
    {
        title: 'Email Marketing',
        price: '350',
        description: 'Campañas profesionales'
    }
]

const Extras = () => {
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
        <section ref={sectionRef} className="py-32 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-primary-600 font-semibold mb-3 uppercase tracking-wide text-sm">
                        Servicios Adicionales
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Potencia tu presencia digital
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complementa tu página web con servicios profesionales
                    </p>
                </div>

                {/* Extras Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {extras.map((extra, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                    {extra.title}
                                </h3>
                                <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                                    Q{extra.price}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">{extra.description}</p>
                            <a
                                href={`https://wa.me/50258660396?text=Me%20interesa%20${encodeURIComponent(extra.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 inline-flex items-center group-hover:gap-2"
                            >
                                Más información
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <p className="text-gray-600 text-lg">
                        <span className="font-semibold">Descuento especial:</span> Contrata 3 o más servicios y obtén 15% de descuento
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Extras
