import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Packages } from './sections/Packages';
import { Benefits } from './sections/Benefits';
import { Process } from './sections/Process';
import { Trust } from './sections/Trust';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toaster } from '@/components/ui/sonner';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Navbar />
            <main>
                <Hero />
                <Packages />
                <Benefits />
                <Process />
                <Trust />
                <CTA />
            </main>
            <Footer />
            <WhatsAppButton />
            <Toaster position="bottom-right" />
        </div>
    );
}

export default App;
