import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import {store} from './utils/appStore.ts';
import { ApolloProvider } from '@apollo/client';
import client from  './utils/apolloClient.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Provider>
  </StrictMode>,
)
