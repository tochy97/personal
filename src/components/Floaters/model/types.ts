import { RefObject } from "react"

export type CurrentNode = {
    x: number, 
    y: number, 
    goingLeft: boolean, 
    size: string ,
    ref: RefObject<HTMLDivElement>,
    recreatePoint: Function
}