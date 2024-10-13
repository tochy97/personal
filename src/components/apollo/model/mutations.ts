import { gql } from "@apollo/client";

export const UPDATE_CONTENT = gql`
    mutation UpdateContent($current: String!) {
        updateContent(current: $current) @client
    }
`