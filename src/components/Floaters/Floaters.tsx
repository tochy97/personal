import React, { ReactElement, RefObject } from 'react'
import { motion } from "framer-motion"

import { CurrentNode, NodeArray, NodeRef } from './model/types';

type Props = {}

export default function Floaters({}: Props): ReactElement<any, any> {
    const viewport_w_delimeter = window.screen.width/5;
    const viewport_h_delimeter = window.screen.height/6;

    const getX = (count: number): number => {
        const border_1 = viewport_w_delimeter * (count - 1);
        const border_2 = viewport_w_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const getY = (count: number): number => {
        const border_1 = viewport_h_delimeter * (count - 1);
        const border_2 = viewport_h_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const points: NodeArray = [];
    let count_x = 1;
    let count_y = 1;

    let nodePushObject: CurrentNode;

    while(count_x <= 3){
        while(count_y <= 5){
            if(count_y % 2 === 0){
                nodePushObject = React.createRef();
                nodePushObject.x = getX(count_x);
                nodePushObject.y = getY(count_y);
                nodePushObject.done = true;
                nodePushObject.size = "small";
                points.push(nodePushObject);
                nodePushObject.size = "medium";
                points.push(nodePushObject);
                nodePushObject.size = "large";
                points.push(nodePushObject);
            }
            else{
                nodePushObject = React.createRef();
                nodePushObject.x = getX(count_x);
                nodePushObject.y = getY(count_y);
                nodePushObject.done = false;
                nodePushObject.size = "small";
                points.push(nodePushObject);
                nodePushObject.size = "medium";
                points.push(nodePushObject);
                nodePushObject.size = "large";
                points.push(nodePushObject);
            }
            count_y++;
        }
        count_y = 1;
        count_x++;
    };

    const recreatePoint = async (index: number) => {
        if (points[index] !== null) {
            const oldX = points?[index].current.style.offsetWidth;
            const oldY = points?[index].current.style.offsetTop;
            
            points[index].current.style.opacity = 0;
            points[index].current.style.offsetWidth = 0;
            points[index].current.style.offsetTop = 0;

            setTimeout(()=>{
                points[index].current.style.offsetWidth = oldX;
                points[index].current.style.offsetTop = oldY;
                points[index].current.style.opacity = 1;
            },5000);
        }
    }

    return (
        <div className='fixed top-[95px] bottom-[95px] left-[10px] right-[20px] w-fit h-fit'>
        {
            points.map((element, index) => (
                <div ref={points[index]} key={index} onClick={() => recreatePoint(index)}>
                    <Node
                        startX={element.x} 
                        startY={element.y}
                        startDir={element.done}
                        size={element.size}
                    />
                </div>
            ))
        }
        </div>
    );
}
}