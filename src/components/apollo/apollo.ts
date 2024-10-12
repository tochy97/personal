import { InMemoryCache, makeVar } from "@apollo/client";
import { Content } from "./model/type";

export const localCache = new InMemoryCache({});

const initialContent: Content = {
    current: "Home",
    loaded: false
};

export const contentVar = makeVar<Content>(
    initialContent
);