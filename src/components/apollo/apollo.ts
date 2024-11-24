import { InMemoryCache, makeVar } from "@apollo/client";

import { Content } from "./type";

const initialContent: Content = {
  current: ""
};

export const contentVar = makeVar<Content>(initialContent);

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
      }
    }
});