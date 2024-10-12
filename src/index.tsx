import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient ({  
  uri: 'http://localhost:8080/graphql/',
  cache: new InMemoryCache(),
})

const localCache = new InMemoryCache({
  typePolicies: {
    Content: {
      fields: {
        current: {
          read (value = "Home") {
            return value;
          }
        },
      },
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
