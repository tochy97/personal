import { gql } from "@apollo/client";

export const UPDATE_CONTENT = gql`
    mutation UpdateContent($type: String!) {
        updateContent(type: $Content) {
            current
        }
    }
`