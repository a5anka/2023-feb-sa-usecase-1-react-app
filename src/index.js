import React  from 'react';
import ReactDOM from 'react-dom/client';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://2c224c5f-1658-4835-8e36-e39a787ada3c-dev.e1-us-east-azure.choreoapis.dev/cqge/item-service/1.0.0/graphql',
  headers: {
    authorization: 'Bearer ' + 'eyJ4NXQiOiJOemszTlRJM05EQTJOVFJqT1dJMll6YzVaRGczTXpObU0ySTJNVEk1TVRGalptUXpZamhqTUdOaE1UbG1ZVFl4TWpsak1UVmpOVFJpTmpWa05ESTVNQSIsImtpZCI6Ik56azNOVEkzTkRBMk5UUmpPV0kyWXpjNVpEZzNNek5tTTJJMk1USTVNVEZqWm1RellqaGpNR05oTVRsbVlUWXhNamxqTVRWak5UUmlOalZrTkRJNU1BX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkODVhNDY3YS0wNTU0LTQyZGMtYjkwYi03NmY1MGM2MWM1OWMiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkUxNWFfWExZOHFzNDhIQ1MzZDlNcHpLdnNpMGEiLCJuYmYiOjE2NzY5ODI1ODcsImF6cCI6IkUxNWFfWExZOHFzNDhIQ1MzZDlNcHpLdnNpMGEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9hc2Fua2EyMDIzZmVic2FoYWNrYXRob25cL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2NzY5ODYxODcsImlhdCI6MTY3Njk4MjU4NywianRpIjoiNzI1MDM5NTktZjhhOC00NTBhLTliMmUtNzgwMWVmM2QwYTkwIiwiY2xpZW50X2lkIjoiRTE1YV9YTFk4cXM0OEhDUzNkOU1wekt2c2kwYSJ9.NHKFm6wp6-NE9XvvE2FRpY5nDi544tpv8hLpsjIkg75JGR_vhzox_zsEXEBUNdG3zBvX1SaR303hpoa5MyXbK4hMODM3L9BtJgH-c7yCl8d6vuGcY9zXyyYd--wxr09JDJol-kCLxmO9mlvRWjnf-YMjil68o52nSSf1mONZ5SdoVw81xuPkTXOlGXiMfaufMnYOatpQuqL7X0gVHUkGRuOyZK4W-az7vA9OIVFyCWkOHNJmqhFk-12g36JNRTrw7mlrLXHiam2TYbW27BFgvFL7CGy3haPf67PUbT-lKiihmxWVn2u5W8BLv1FsWMylA93OOdNBT8-9KohqteMV7Q'
  },
});

root.render(
  
  <React.StrictMode>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    <ApolloProvider client={client}>

      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
