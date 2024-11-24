import { ReactElement } from "react";

export type InternalPage = {
    name: string,
    content: ReactElement
}

export type ExternalPage = {
    name: string,
    content: string
}

