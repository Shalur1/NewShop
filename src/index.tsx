import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store/store";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </Provider>
);

reportWebVitals();
