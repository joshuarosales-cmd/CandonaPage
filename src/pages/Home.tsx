import { Hero } from '../sections/Hero';
import { Packages } from '../sections/Packages';
import { Benefits } from '../sections/Benefits';
import { Portfolio } from '../sections/Portfolio';
import { Process } from '../sections/Process';
import { Trust } from '../sections/Trust';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <Packages />
            <Benefits />
            <Portfolio />
            <Process />
            <Trust />
            <FAQ />
            <CTA />
        </>
    );
}
