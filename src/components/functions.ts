import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export async function streamToJSON(stream: ReadableStream<Uint8Array>): Promise<string> {
    return JSON.parse(await new Response(stream).text());
}

export function lightColorScheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return false;
    }
    return true;
}