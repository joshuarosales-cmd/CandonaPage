import { useState, useEffect, useRef } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: '¿Qué necesito para empezar mi página web?',
        answer: '¡Solo tu idea! Nosotros nos encargamos del logo básico, el hosting, el dominio .com y el diseño. Solo necesitaremos información sobre tu negocio y fotos si tienes (si no, usamos profesionales de stock).',
    },
    {
        question: '¿El pago es mensual o cobro único?',
        answer: 'Nuestros paquetes son un pago único por el desarrollo. El hosting y dominio están incluidos gratis el primer año. A partir del segundo año, solo pagas una renovación anual muy económica para mantener tu sitio activo.',
    },
    {
        question: '¿Puedo actualizar mi página después?',
        answer: '¡Sí! Todas nuestras páginas son escalables. Puedes empezar con un combo básico y luego agregar más secciones, una tienda online o un sistema de reservas conforme tu negocio crezca.',
    },
    {
        question: '¿Cuánto tiempo tarda el proceso?',
        answer: 'El tiempo de entrega promedio es de 3 a 7 días hábiles para el Combo Básico. Proyectos más complejos pueden tomar hasta 15 días, pero siempre trabajamos con rapidez sin sacrificar la calidad.',
    },
    {
        question: '¿Mi página aparecerá en Google?',
        answer: 'Sí, incluimos SEO básico en todos nuestros paquetes para que Google pueda indexar tu sitio correctamente. También te ayudamos a configurar tu ficha de Google Business si tienes local físico.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="faq" ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="w-full section-padding relative">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <HelpCircle className="w-4 h-4" />
                                Centro de Ayuda
                            </span>
                        </div>
                        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Preguntas Frecuentes
                        </h2>
                        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                            Todo lo que necesitas saber para dar el salto digital con tu negocio.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                            >
                                <div className={`group rounded-2xl border-2 transition-all duration-300 ${openIndex === index ? 'border-red-500 bg-red-50/30' : 'border-gray-100 bg-white hover:border-red-200'}`}>
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full text-left p-6 flex items-center justify-between gap-4"
                                    >
                                        <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-red-700' : 'text-gray-900'}`}>{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-red-500 text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-red-600'}`}>
                                            {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 px-6' : 'max-h-0'}`}>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still Have Questions? */}
                    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-center relative overflow-hidden group">
                        {/* Background elements for CTA */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />

                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">¿Aún tienes dudas?</h3>
                        <p className="text-gray-300 mb-8 relative z-10">
                            Estamos listos para ayudarte personalmente por WhatsApp. Respondemos de inmediato.
                        </p>
                        <a
                            href="https://wa.me/50258660396?text=Hola%20equipo%20de%20La%20Candona%2C%20tengo%20una%20duda%20espec%C3%ADfica%20que%20no%20encontr%C3%A9%20en%20las%20FAQ.%20%C2%BFPodr%C3%ADan%20apoyarme%3F%20%F0%9F%A4%94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 relative z-10"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chatear con un experto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
