import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import Nav from './view/Nav/Nav'
import Content from './view/Content/Content'
import Footer from './view/Footer/Footer'
import { ExternalPage, InternalPage } from "./model/type";
import { localCache } from "./controller/apollo/apollo";

type Props = {
    contentList: Array<InternalPage>,
    title: string,
}


export default function Display({ contentList, title }: Props) {
    return (
        <>
            <Nav list={contentList} title={title} />
            <Content list={contentList} />
            <Footer />
        </>
    )
}