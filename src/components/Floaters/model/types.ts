import { RefObject } from "react"

export type CurrentNode = {
    x?: number, 
    y?: number, 
    goingLeft?: boolean, 
    size?: string ,
    ref: RefObject<HTMLDivElement>
}

export type NodeRef = {
    currentObject?: CurrentNode,
    currentIndex?: number
}
