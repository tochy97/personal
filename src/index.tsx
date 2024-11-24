import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { localCache } from './components/apollo/apollo';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient ({  
  connectToDevTools: true,
  cache: localCache,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
