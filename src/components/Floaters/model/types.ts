import { RefObject } from "react"

export interface CurrentNode extends RefObject<HTMLDivElement> {
    x?: number, 
    y?: number, 
    done?: boolean, 
    size?: string 
}

export type NodeRef = {
    currentObject?: CurrentNode,
    currentIndex?: number
}

export type NodeArray = Array<CurrentNode>;