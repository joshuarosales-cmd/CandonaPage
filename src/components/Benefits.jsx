import { useEffect, useRef, useState } from 'react'

const benefits = [
    {
        title: 'Hosting incluido',
        description: 'Primer año de hosting profesional completamente gratis'
    },
    {
        title: 'Dominio .com',
        description: 'Tu dominio personalizado incluido el primer año'
    },
    {
        title: 'Certificado SSL',
        description: 'Seguridad HTTPS para proteger a tus visitantes'
    },
    {
        title: 'Diseño responsive',
        description: 'Perfecto en móviles, tablets y computadoras'
    },
    {
        title: 'Soporte incluido',
        description: 'Asistencia técnica durante los primeros 30 días'
    },
    {
        title: 'Actualizaciones',
        description: 'Primera actualización de contenido sin costo'
    }
]

const Benefits = () => {
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
        <section ref={sectionRef} id="beneficios" className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-primary-600 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">
                        Beneficios Incluidos
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                        Todo lo que necesitas
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                        Sin costos ocultos. Todo transparente desde el primer día.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Number indicator */}
                            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold text-xs sm:text-sm group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="pr-10 sm:pr-12">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Hover effect line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
