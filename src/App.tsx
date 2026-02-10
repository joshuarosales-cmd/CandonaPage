import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Toaster } from 'sonner';
import { CurrencyProvider } from './context/CurrencyContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Calculator = lazy(() => import('./pages/Calculator'));

const AppWrapper = () => {
    const { theme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <ReadingProgressBar />
            <Navbar />
            <main>
                <Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center bg-background">
                        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calculadora" element={<Calculator />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
            <Analytics />
            <Toaster position="bottom-right" theme={theme as any} />
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <CurrencyProvider>
                <Router>
                    <AppWrapper />
                </Router>
            </CurrencyProvider>
        </ThemeProvider>
    );
}

export default App;
