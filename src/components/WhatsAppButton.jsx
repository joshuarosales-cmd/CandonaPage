import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isPulsing, setIsPulsing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000)

        // Stop pulsing after 10 seconds
        const pulseTimer = setTimeout(() => setIsPulsing(false), 10000)

        return () => {
            clearTimeout(timer)
            clearTimeout(pulseTimer)
        }
    }, [])

    const handleClick = () => {
        window.open('https://wa.me/50258660396?text=Hola,%20vengo%20desde%20la%20página%20web', '_blank')
    }

    return (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
            }`}>
            <div className="relative">
                {/* Pulse ring */}
                {isPulsing && (
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                )}

                {/* Button */}
                <button
                    onClick={handleClick}
                    className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Contactar por WhatsApp"
                >
                    <MessageCircle size={24} className="sm:w-7 sm:h-7 animate-pulse" />
                </button>

                {/* Tooltip - Hidden on mobile */}
                <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    ¡Chatea con nosotros!
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
                </div>
            </div>
        </div>
    )
}

export default WhatsAppButton
