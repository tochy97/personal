import { ReactElement } from 'react'

import { CurrentNode } from './types';
import Leaf from './Leaf/Leaf';
import { container } from './classNames';

type Props = {}

export default function Floaters({ }: Props): ReactElement<any, any> {
    const viewport_w_delimeter = window.innerWidth / 3;
    const viewport_h_delimeter = window.innerHeight / 5;

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

    const createLeaf = (goingLeft: boolean, size: string, countX: number, countY: number): CurrentNode => ({
        x: getX(countX),
        y: getY(countY),
        goingLeft: goingLeft,
        size: size,
    });

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
    };

    return (
        <div className={container}>
            {
                points.map((element, index) => (
                    <div key={index}>
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