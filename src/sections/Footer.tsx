import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { formatPrice } = useCurrency();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Paquetes', id: 'packages' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Proceso', id: 'process' },
    { label: 'Contacto', id: 'cta' },
  ];

  const services = [
    'Páginas web',
    'Tiendas online',
    'Landing pages',
    'Portafolios',
    'SEO básico',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-3 mb-6 group">
                <img
                  src="/LogoCandona.png"
                  alt="La Candona Logo"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              </a>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Desarrollo web profesional para emprendedores y negocios en Guatemala.
                Tu presencia online desde {formatPrice(399)}.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm">Guatemala</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Enlaces rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hola@lacandona.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm">joshuarosales2210207@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/50258660396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm">+502 5866 0396</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/50258660396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors mt-2"
                  >
                    <span>Escríbenos por WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} La Candona. Desarrollo Web Guatemala. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                  Términos de servicio
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                  Política de privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
