import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider, SecureApp } from "@asgardeo/auth-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      <AuthProvider config={{
        signInRedirectURL: "http://localhost:3000",
        signOutRedirectURL: "http://localhost:3000",
        clientID: "DHqsrMxSMeomoWh0LWs2vjg0TRsa",
        baseUrl: "https://api.asgardeo.io/t/asanka2023febsahackathon",
        scope: ["openid", "profile", "groups"],
        storage: "sessionStorage",
      }}>
        <SecureApp 
            fallback={ <div>Loading...</div> }
        >
            <App />
        </SecureApp>
      </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
