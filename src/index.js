import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider, SecureApp } from "@asgardeo/auth-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="true"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin="true"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true"></script>

    <AuthProvider config={{
      signInRedirectURL: "https://2023-feb-sa-usecase-1-react-app.vercel.app/",
      signOutRedirectURL: "https://2023-feb-sa-usecase-1-react-app.vercel.app/",
      clientID: "DHqsrMxSMeomoWh0LWs2vjg0TRsa",
      baseUrl: "https://api.asgardeo.io/t/asanka2023febsahackathon",
      scope: ["openid", "profile", "groups"],
      storage: "sessionStorage",
      resourceServerURLs: ["https://2c224c5f-1658-4835-8e36-e39a787ada3c-dev.e1-us-east-azure.choreoapis.dev/"]
    }}>
      <SecureApp
        fallback={<div>Loading...</div>}
      >
        <App />
      </SecureApp>
    </AuthProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
