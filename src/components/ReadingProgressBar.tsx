import { useState, useEffect } from 'react';

export function ReadingProgressBar() {
    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        const el = document.documentElement;
        const ScrollTop = el.scrollTop || document.body.scrollTop;
        const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeight);
        return () => window.removeEventListener('scroll', scrollHeight);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                style={{ width: `${width}%` }}
            />
        </div>
    );
}
