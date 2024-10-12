import { InMemoryCache, makeVar } from "@apollo/client";

import { Content } from "./model/type";

export const localCache: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          content: {
            read () {
              return contentVar();
            }
          }
        }
      },
      Mutation: {

      }
    }
});

const initialContent: Content = {
    current: "History",
    loaded: false
};

export const contentVar = makeVar(
    initialContent
);