import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Trust from './components/Trust'
import Extras from './components/Extras'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
    const [isPageLoaded, setIsPageLoaded] = useState(false)

    useEffect(() => {
        // Page load animation
        setIsPageLoaded(true)
    }, [])

    return (
        <div className={`min-h-screen transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
            <main>
                <Hero />
                <Services />
                <Benefits />
                <Process />
                <Trust />
                <Extras />
                <CTA />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
