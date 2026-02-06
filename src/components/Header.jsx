import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Trigger load animation
        setTimeout(() => setIsLoaded(true), 50)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'
            } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className={`flex items-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`} style={{ transitionDelay: '100ms' }}>
                        <img
                            src="/LogoCandona.png"
                            alt="La Candona"
                            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('servicios')}
                            className={`text-gray-700 hover:text-primary-600 transition-all duration-500 font-medium ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            Paquetes
                        </button>
                        <button
                            onClick={() => scrollToSection('beneficios')}
                            className={`text-gray-700 hover:text-primary-600 transition-all duration-500 font-medium ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                }`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            Beneficios
                        </button>
                        <button
                            onClick={() => scrollToSection('proceso')}
                            className={`text-gray-700 hover:text-primary-600 transition-all duration-500 font-medium ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            Proceso
                        </button>
                        <a
                            href="https://wa.me/50258660396?text=Hola,%20quiero%20solicitar%20una%20demo%20gratuita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-500 font-semibold shadow-lg hover:shadow-xl hover:scale-105 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`}
                            style={{ transitionDelay: '500ms' }}
                        >
                            Contactar
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden text-gray-700 hover:text-primary-600 transition-all duration-500 p-2 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-6 pb-6 space-y-4 border-t border-gray-100 pt-6 animate-fade-in-down">
                        <button
                            onClick={() => scrollToSection('servicios')}
                            className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 hover:translate-x-2 duration-300"
                        >
                            Paquetes
                        </button>
                        <button
                            onClick={() => scrollToSection('beneficios')}
                            className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 hover:translate-x-2 duration-300"
                        >
                            Beneficios
                        </button>
                        <button
                            onClick={() => scrollToSection('proceso')}
                            className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 hover:translate-x-2 duration-300"
                        >
                            Proceso
                        </button>
                        <a
                            href="https://wa.me/50258660396?text=Hola,%20quiero%20solicitar%20una%20demo%20gratuita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all text-center font-semibold shadow-lg hover:scale-105 duration-300"
                        >
                            Contactar
                        </a>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header
