import { useEffect, useRef, useState } from 'react'

const steps = [
    {
        number: '01',
        title: 'Contacto inicial',
        description: 'Conversamos sobre tu negocio, objetivos y necesidades específicas'
    },
    {
        number: '02',
        title: 'Análisis y propuesta',
        description: 'Evaluamos tu proyecto y creamos una propuesta personalizada'
    },
    {
        number: '03',
        title: 'Demo gratuita',
        description: 'Te mostramos un diseño preliminar sin compromiso'
    },
    {
        number: '04',
        title: 'Aprobación y anticipo',
        description: 'Confirmas el proyecto y pagas el 50% para iniciar'
    },
    {
        number: '05',
        title: 'Desarrollo',
        description: 'Creamos tu página web con diseño profesional y funcional'
    },
    {
        number: '06',
        title: 'Revisión y ajustes',
        description: 'Revisamos juntos y hacemos los cambios necesarios'
    },
    {
        number: '07',
        title: 'Lanzamiento',
        description: 'Publicamos tu sitio y pagas el 50% restante'
    },
    {
        number: '08',
        title: 'Soporte continuo',
        description: 'Te acompañamos con soporte técnico incluido'
    }
]

const Process = () => {
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
        <section ref={sectionRef} id="proceso" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-primary-600 font-semibold mb-3 uppercase tracking-wide text-sm">
                        Nuestro Proceso
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Simple, transparente y efectivo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        8 pasos claros desde el primer contacto hasta el lanzamiento exitoso
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                                    <div className="flex items-start gap-6">
                                        {/* Step Number */}
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            <span className="text-white font-bold text-xl">{step.number}</span>
                                        </div>

                                        <div className="flex-1">
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Info */}
                <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="inline-block bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-900 text-lg mb-2">
                            <span className="font-bold text-primary-700">⏱️ Tiempo de entrega:</span> Entre 7 y 15 días hábiles
                        </p>
                        <p className="text-gray-600">
                            Dependiendo de la complejidad del proyecto y tus requerimientos
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
