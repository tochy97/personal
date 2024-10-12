import React, { ReactElement, RefObject } from 'react'
import { motion } from "framer-motion"

import { CurrentNode, NodeRef } from './model/types';
import Leaf from './Leaf/Leaf';

type Props = {}

export default function Floaters({ }: Props): ReactElement<any, any> {
    const viewport_w_delimeter = window.screen.width / 5;
    const viewport_h_delimeter = window.screen.height / 6;

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

    const createLeaf = (goingLeft: boolean, size: string, countX: number, countY: number): CurrentNode => {
        return {
          ref: React.createRef(),
          x: getX(countX),
          y: getY(countY),
          goingLeft: goingLeft,
          size: size,
          recreatePoint: async function (this: CurrentNode) {
            const oldX =
              this.ref.current?.style.getPropertyValue("offsetWidth");
            const oldY = this.ref.current?.style.getPropertyValue("offsetTop");

            this.ref.current?.style.setProperty("opacity", "0");
            this.ref.current?.style.setProperty("offsetWidth", "0");
            this.ref.current?.style.setProperty("offsetTop", "0");

            setTimeout(() => {
              this.ref.current?.style.setProperty("opacity", "oldX");
              this.ref.current?.style.setProperty("offsetWidth", "oldY");
              this.ref.current?.style.setProperty("offsetTop", "1");
            }, 5000);
          },
        };
    }

    let count_x = 1;
    let count_y = 1;
    const points: CurrentNode[] = [];
    while (count_x <= 3) {
        while (count_y <= 5) {
            let goingLeft = false;
            if (count_y % 2 === 0) {
                goingLeft = true;
            }
            points.push(createLeaf(goingLeft, "small", count_x, count_y));
            points.push(createLeaf(goingLeft, "medium", count_x, count_y));
            points.push(createLeaf(goingLeft, "large", count_x, count_y));
            count_y++;
        }
        count_y = 1;
        count_x++;
    };debugger

    return (
        <div className='fixed top-[95px] bottom-[95px] left-[10px] right-[20px] w-fit h-fit'>
            {
                points.map((element, index) => (
                    <div ref={element.ref} key={index} onClick={() => element.recreatePoint(index)}>
                        <Leaf
                            startX={element.x}
                            startY={element.y}
                            startDir={element.goingLeft}
                            size={element.size}
                        />
                    </div>
                ))
            }
        </div>
    );
}