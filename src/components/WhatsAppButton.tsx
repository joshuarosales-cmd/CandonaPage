import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/50258660396?text=%C2%A1Hola!%20%F0%9F%91%8B%20Vi%20el%20sitio%20de%20La%20Candona%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20para%20mi%20p%C3%A1gina%20web%20profesional.%20%C2%BFMe%20podr%C3%ADan%20ayudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contactar por WhatsApp"
        >
            {/* Pulse Effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />

            {/* Button */}
            <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40">
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold hidden sm:inline">¿Hablamos?</span>

                {/* Notification Dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap">
                    ¡Escríbenos ahora!
                    <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                </div>
            </div>
        </a>
    );
}
