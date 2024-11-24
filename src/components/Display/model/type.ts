import { ReactElement } from "react";

export type InternalPage = {
    name: string,
    content: ReactElement
}

export type Content = {
    current: string,
};

export type ExternalPage = {
    name: string,
    content: string
}

