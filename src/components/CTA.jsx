import { MessageCircle, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const CTA = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
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

    return (
        <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className={`inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                        <Sparkles className="mr-2 animate-pulse" size={16} />
                        <span className="font-medium text-sm">Oferta por tiempo limitado</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        ¿Listo para llevar tu negocio{' '}
                        <span className="text-primary-400">al siguiente nivel?</span>
                    </h2>

                    {/* Subtitle */}
                    <p className={`text-2xl text-gray-300 mb-12 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Agenda una consulta gratuita y te mostraremos cómo podría verse tu página web
                    </p>

                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-5 justify-center mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <a
                            href="https://wa.me/50258660396?text=Hola,%20quiero%20solicitar%20mi%20demo%20gratuita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl font-bold text-lg hover:scale-105"
                        >
                            <MessageCircle className="mr-3 group-hover:scale-110 transition-transform duration-300" size={22} />
                            <span>Solicitar demo gratuita</span>
                        </a>
                        <a
                            href="tel:+50258660396"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg hover:scale-105"
                        >
                            Llamar ahora
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="text-3xl font-bold mb-2 hover:scale-110 transition-transform duration-300 inline-block">⚡ Respuesta rápida</div>
                            <p className="text-gray-400">Contestamos en menos de 1 hora</p>
                        </div>
                        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="text-3xl font-bold mb-2 hover:scale-110 transition-transform duration-300 inline-block">🎨 Demo en 48h</div>
                            <p className="text-gray-400">Ve tu diseño en 2 días</p>
                        </div>
                        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="text-3xl font-bold mb-2 hover:scale-110 transition-transform duration-300 inline-block">✅ Sin compromiso</div>
                            <p className="text-gray-400">Decide después de ver el demo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
