import { ReactElement, useEffect, useState } from 'react'
import { motion } from "framer-motion"

import { bubble, hitArea } from '../classNames';

type Props = {
    startX: number,
    startY: number,
    startDir: boolean,
    size: string
};

export default function Leaf({ startX, startY, startDir, size }: Props): ReactElement<any, any> {
    const viewport_width: number = window.innerWidth;
    const [isDone, setIsDone] = useState<boolean>(startDir);
    const [popped, setPopped] = useState<boolean>(false);

    // Popped bubbles come back after five seconds, wherever they have drifted to.
    useEffect(() => {
        if (!popped) return;
        const timer = setTimeout(() => setPopped(false), 5000);
        return () => clearTimeout(timer);
    }, [popped]);

    const variants = {
        left : { x: viewport_width - viewport_width },
        right : { x: viewport_width - 50 },
    };

    const leftRoight = (latest: any): void => {
        if(latest.x >= viewport_width - 50){
            setIsDone(true);
        }
        if(latest.x < 1){
            setIsDone(false);
        }
    };

    return (
        <motion.div
            initial = {{
                x: startX,
                y: startY
            }}
            animate = { !isDone ?
                "right" :
                "left"
            }
            transition = {{
                x: { duration: Math.floor(Math.random() * (30 - 15) + 15) },
            }}
            variants={variants}
            onUpdate={leftRoight}
            className="w-fit"
        >
            {/* Pop on pointer down: a moving bubble can slide out from under the pointer before a click completes. */}
            <motion.div
                onPointerDown={() => setPopped(true)}
                animate={popped ? { scale: 1.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: popped ? 0.2 : 0.6 }}
                className={
                    (size === "large" ? `w-10 h-10 ring-2 rounded-3xl ${bubble}` :
                    size === "medium" ? `w-7 h-7 ring-2 rounded-2xl ${bubble}` :
                    `w-4 h-4 ring-2 rounded-lg ${bubble}`) +
                    (popped ? "pointer-events-none " : hitArea)
                }
            />
        </motion.div>
    );
}
