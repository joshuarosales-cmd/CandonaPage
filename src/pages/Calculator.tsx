import { useState, useEffect } from 'react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { useCurrency } from '../context/CurrencyContext';
import { Calculator as CalcIcon, Plus, Minus, Store, Mail, Layout, ChevronRight, MessageCircle } from 'lucide-react';

const PAGE_PRICE = 150;
const STORE_PRICE = 500;
const EMAIL_PRICE = 50;

export default function Calculator() {
    const { formatPrice } = useCurrency();
    const [pages, setPages] = useState(1);
    const [hasStore, setHasStore] = useState(false);
    const [hasEmail, setHasEmail] = useState(false);
    const [total, setTotal] = useState(399);

    useEffect(() => {
        let base = 399; // Minimum base price

        // Extra pages beyond the first one
        if (pages > 1) {
            base += (pages - 1) * PAGE_PRICE;
        }

        if (hasStore) base += STORE_PRICE;
        if (hasEmail) base += EMAIL_PRICE;

        setTotal(base);
    }, [pages, hasStore, hasEmail]);

    const whatsappMessage = encodeURIComponent(
        `¡Hola La Candona! 🚀 Acabo de usar la calculadora de presupuesto.\n\n` +
        `Mi proyecto estimado:\n` +
        `- Páginas: ${pages}\n` +
        `- Tienda Online: ${hasStore ? "Sí" : "No"}\n` +
        `- Correo Profesional: ${hasEmail ? "Sí" : "No"}\n\n` +
        `*Presupuesto Estimado: ${total}*\n\n` +
        `¿Podemos platicar sobre cómo empezar?`
    );

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="section-padding">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <CalcIcon className="w-4 h-4" />
                                <span>Planificador de Proyectos</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                                Calcula el costo de tu <span className="text-gradient">éxito digital</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Selecciona las características que necesitas y obtén una estimación instantánea para tu nueva página web profesional.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Controls */}
                            <div className="space-y-8">
                                {/* Pages Selector */}
                                <div className="bg-card border border-border p-6 rounded-3xl shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                                            <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">¿Cuántas secciones?</h3>
                                            <p className="text-sm text-muted-foreground">Inicio, Nosotros, Servicios, etc.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-muted p-4 rounded-2xl">
                                        <button
                                            onClick={() => setPages(Math.max(1, pages - 1))}
                                            className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <Minus className="w-5 h-5" />
                                        </button>
                                        <span className="text-3xl font-bold text-foreground">{pages}</span>
                                        <button
                                            onClick={() => setPages(pages + 1)}
                                            className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setHasStore(!hasStore)}
                                        className={`p-6 rounded-3xl border-2 transition-all text-left group ${hasStore ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-border bg-card hover:border-red-200'}`}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${hasStore ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-red-100 dark:group-hover:bg-red-900/20'}`}>
                                            <Store className="w-6 h-6" />
                                        </div>
                                        <div className="font-bold text-foreground mb-1">Tienda / Catálogo</div>
                                        <p className="text-xs text-muted-foreground">Venta de productos online</p>
                                    </button>

                                    <button
                                        onClick={() => setHasEmail(!hasEmail)}
                                        className={`p-6 rounded-3xl border-2 transition-all text-left group ${hasEmail ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-border bg-card hover:border-red-200'}`}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${hasEmail ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-red-100 dark:group-hover:bg-red-900/20'}`}>
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="font-bold text-foreground mb-1">Correo Pro</div>
                                        <p className="text-xs text-muted-foreground">tu_nombre@empresa.com</p>
                                    </button>
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl sticky top-32">
                                <h3 className="text-2xl font-bold mb-8">Resumen estimado</h3>

                                <div className="space-y-4 mb-10 pb-10 border-b border-white/10">
                                    <div className="flex justify-between items-center text-gray-300">
                                        <span>Base (1 página + Hosting)</span>
                                        <span className="font-bold">{formatPrice(399)}</span>
                                    </div>
                                    {pages > 1 && (
                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>{pages - 1} Secciones adicionales</span>
                                            <span className="font-bold">+{formatPrice((pages - 1) * PAGE_PRICE)}</span>
                                        </div>
                                    )}
                                    {hasStore && (
                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Módulo E-commerce</span>
                                            <span className="font-bold">+{formatPrice(STORE_PRICE)}</span>
                                        </div>
                                    )}
                                    {hasEmail && (
                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Correo Profesional</span>
                                            <span className="font-bold">+{formatPrice(EMAIL_PRICE)}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-end mb-10">
                                    <div>
                                        <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Inversión total</div>
                                        <div className="text-5xl font-black text-white">{formatPrice(total)}</div>
                                    </div>
                                    <div className="text-right text-gray-400 text-sm">
                                        Incluye Hosting y<br />Dominio .com 1 año
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/50258660396?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-600/25 group"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Solicitar este presupuesto
                                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>

                                <p className="mt-6 text-center text-gray-500 text-xs">
                                    Este es un presupuesto estimado. El costo final puede variar según requerimientos específicos de diseño.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
