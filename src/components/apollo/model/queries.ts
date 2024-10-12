import { gql } from "@apollo/client";

export const GET_CONTENT = gql`
    query GET_CONTENT {
        content {
            current
            loaded
        }
    }
`