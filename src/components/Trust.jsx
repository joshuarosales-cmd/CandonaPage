import { useEffect, useRef, useState } from 'react'

const Trust = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, days: 0 })
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Animate numbers
                    animateNumbers()
                }
            },
            { threshold: 0.3 }
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

    const animateNumbers = () => {
        const duration = 2000
        const steps = 60
        const projectsTarget = 150
        const satisfactionTarget = 98
        const daysTarget = 10

        let currentStep = 0
        const interval = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounts({
                projects: Math.floor(projectsTarget * progress),
                satisfaction: Math.floor(satisfactionTarget * progress),
                days: Math.floor(daysTarget * progress)
            })

            if (currentStep >= steps) {
                clearInterval(interval)
                setCounts({
                    projects: projectsTarget,
                    satisfaction: satisfactionTarget,
                    days: daysTarget
                })
            }
        }, duration / steps)
    }

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
                            Resultados que hablan por sí solos
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto px-4 sm:px-0">
                            Ayudamos a emprendedores y negocios a crecer en el mundo digital
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                        <div className={`text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3">{counts.projects}+</div>
                            <div className="text-sm sm:text-base md:text-xl text-primary-100">Proyectos completados</div>
                        </div>
                        <div className={`text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3">{counts.satisfaction}%</div>
                            <div className="text-sm sm:text-base md:text-xl text-primary-100">Clientes satisfechos</div>
                        </div>
                        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3">{counts.days}</div>
                            <div className="text-sm sm:text-base md:text-xl text-primary-100">Días promedio</div>
                        </div>
                        <div className={`text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3">24/7</div>
                            <div className="text-sm sm:text-base md:text-xl text-primary-100">Soporte técnico</div>
                        </div>
                    </div>

                    {/* Trust badges */}
                    <div className={`mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                            <div className="transform hover:scale-110 transition-transform duration-300">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-float">🏆</div>
                                <p className="text-primary-100 text-sm sm:text-base">Calidad garantizada</p>
                            </div>
                            <div className="transform hover:scale-110 transition-transform duration-300">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-float" style={{ animationDelay: '0.5s' }}>⚡</div>
                                <p className="text-primary-100 text-sm sm:text-base">Entrega rápida</p>
                            </div>
                            <div className="transform hover:scale-110 transition-transform duration-300">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-float" style={{ animationDelay: '1s' }}>💼</div>
                                <p className="text-primary-100 text-sm sm:text-base">Profesionalismo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trust
