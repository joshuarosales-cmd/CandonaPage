import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Trigger animations after component mounts
        setTimeout(() => setIsLoaded(true), 100)
    }, [])

    return (
        <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 md:pt-40 md:pb-40 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className={`absolute inset-0 opacity-5 transition-opacity duration-1000 ${isLoaded ? 'opacity-5' : 'opacity-0'}`}>
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(220, 38, 38) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className={`inline-flex items-center bg-primary-50 border border-primary-200 text-primary-700 px-4 py-2 sm:px-5 rounded-full mb-6 sm:mb-8 font-medium text-xs sm:text-sm transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
                        <span className="hidden sm:inline">Desarrollo Web Profesional en Guatemala</span>
                        <span className="sm:hidden">Desarrollo Web en Guatemala</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-2 sm:px-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                        }`} style={{ transitionDelay: '400ms' }}>
                        Tu presencia digital{' '}
                        <span className="text-primary-600 inline-block">desde Q550</span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                        }`} style={{ transitionDelay: '600ms' }}>
                        Creamos páginas web modernas que convierten visitantes en clientes.
                        <span className="hidden sm:inline"> Hosting, dominio y soporte incluidos.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-8 sm:mb-12 px-4 sm:px-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
                        }`} style={{ transitionDelay: '800ms' }}>
                        <a
                            href="https://wa.me/50258660396?text=Hola,%20quiero%20solicitar%20una%20demo%20gratuita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-primary-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold text-base sm:text-lg inline-flex items-center justify-center"
                        >
                            <MessageCircle className="mr-2 sm:mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" size={20} />
                            <span className="hidden sm:inline">Solicitar demo gratuita</span>
                            <span className="sm:hidden">Demo gratuita</span>
                        </a>
                        <a
                            href="#servicios"
                            className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 font-semibold text-base sm:text-lg"
                        >
                            Ver paquetes
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-gray-600 px-4 sm:px-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`} style={{ transitionDelay: '1000ms' }}>
                        <div className="flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:text-primary-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 transition-transform duration-300 hover:scale-125 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-sm sm:text-base">Demo 100% gratuita</span>
                        </div>
                        <div className="flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:text-primary-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 transition-transform duration-300 hover:scale-125 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-sm sm:text-base">Entrega en 7-15 días</span>
                        </div>
                        <div className="flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:text-primary-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 transition-transform duration-300 hover:scale-125 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-sm sm:text-base">Sin compromiso</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative animated elements */}
            <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary-100 rounded-full blur-3xl transition-all duration-1500 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: '300ms' }}></div>
            <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary-200 rounded-full blur-3xl transition-all duration-1500 ${isLoaded ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: '500ms' }}></div>
        </section>
    )
}

export default Hero
