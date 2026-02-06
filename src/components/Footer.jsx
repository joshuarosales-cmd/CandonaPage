import { Mail, MessageCircle, MapPin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-white border-t border-gray-200 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <img
                            src="/LogoCandona.png"
                            alt="La Candona"
                            className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 mx-auto sm:mx-0"
                        />
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Desarrollo web profesional para emprendedores y negocios en Guatemala.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">Contacto</h3>
                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="mailto:info@lacandona.com"
                                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
                            >
                                <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                                <span>info@lacandona.com</span>
                            </a>
                            <a
                                href="https://wa.me/50258660396"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
                            >
                                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                                <span>+502 5866-0396</span>
                            </a>
                            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-gray-600 text-sm sm:text-base">
                                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                                <span>Guatemala, Guatemala</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">Enlaces</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => scrollToSection('servicios')}
                                className="block w-full sm:w-auto text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
                            >
                                Servicios
                            </button>
                            <button
                                onClick={() => scrollToSection('beneficios')}
                                className="block w-full sm:w-auto text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
                            >
                                Beneficios
                            </button>
                            <button
                                onClick={() => scrollToSection('proceso')}
                                className="block w-full sm:w-auto text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
                            >
                                Proceso
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-6 sm:pt-8">
                    <p className="text-gray-500 text-xs sm:text-sm text-center px-4 sm:px-0">
                        © {currentYear} La Candona - Desarrollo Web Guatemala. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
