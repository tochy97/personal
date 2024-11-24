import { ReactElement, useState } from 'react'
import { motion } from "framer-motion"

import { bubble } from '../classNames';

type Props = { 
    startX: number,
    startY: number, 
    startDir: boolean, 
    size: string
};

export default function Leaf({ startX, startY, startDir, size }: Props): ReactElement<any, any> {
    const viewport_width: number = window.screen.width;
    const [isDone, setIsDone] = useState<boolean>(startDir);

    const variants = {
        left : { x: viewport_width - viewport_width, opacity:1 },
        right : { x: viewport_width - 50, opacity:1 },
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
            className={
                size === "large" ? `w-10 h-10 ring-2 rounded-3xl ${bubble}` :
                size === "medium" ? `w-7 h-7 ring-2 rounded-2xl ${bubble}` :
                `w-4 h-4 ring-2 rounded-lg ${bubble}`}
        >
        </motion.div>
    );
}