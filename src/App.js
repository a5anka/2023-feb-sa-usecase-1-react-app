// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import './App.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Catalog from './components/Catalog/Catalog.js';
import MyCart from './components/MyCart/Cart.js';
import Admin from './components/Admin/Admin.js';


// Component to render the login/signup/logout menu
const RightLoginSignupMenu = () => {
  const { state, signIn, signOut } = useAuthContext();

  // Based on Asgardeo SDK, set a variable like below to check and conditionally render the menu
  let isLoggedIn = state.isAuthenticated;

  // Host the menu content and return it at the end of the function
  let menu;

  // Conditionally render the following two links based on whether the user is logged in or not
  if (isLoggedIn) {
    menu = <>
      <Nav>
        <Nav.Link href="#deets" onClick={() => signOut()}>Logout</Nav.Link>
        <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} /></Nav.Link></Nav>
    </>
  } else {
    menu = <>
      <Nav>
        <Nav.Link href="#deets" onClick={() => signIn()}>Login</Nav.Link>
        <Nav.Link href="#deets">Sign Up</Nav.Link></Nav>
    </>
  }
  return menu;
}

// Component to render the navigation bar
const PetStoreNav = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const { getDecodedIDToken } = useAuthContext();

  useEffect(() => {
    getDecodedIDToken().then((response) => {
      if (response.groups === undefined) {
        setIsAdmin(false);
      } else if (response.groups.includes("admin")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }).catch((error) => {
      console.error(error);
    });
  });
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">PetStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/catalog" className="nav-link">Catalog</Link>
              <Link to="/mycart" className="nav-link">My Cart</Link>
              {isAdmin ? <Link to="/admin" className="nav-link">Admin</Link> : null}
            </Nav>
          </Navbar.Collapse>
          <RightLoginSignupMenu />
        </Container>
      </Navbar>
    </>
  );
};

// Main app component
const App = () => {
  const [idToken, setIdToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const { state, getAccessToken, getDecodedIDToken } = useAuthContext();
  const { isLoading } = state;

  //console.log(state.allowedScopes);

  useEffect(() => {
    document.title = 'PetStore';

    getAccessToken()
      .then((decodedIdToken) => {
        setIdToken(decodedIdToken);
      }).catch((error) => {
        console.log(error);
      });

    getDecodedIDToken().then((response) => {
      if (response.groups === undefined) {
        setIsAdmin(false);
      } else if (response.groups.includes("admin")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }).catch((error) => {
      console.error(error);
    });
  });


  if (isLoading || !idToken || isAdmin === null) {
    return <h1>Loading</h1>;
  }

  const client = new ApolloClient({
    uri: 'https://2c224c5f-1658-4835-8e36-e39a787ada3c-dev.e1-us-east-azure.choreoapis.dev/cqge/item-service/1.0.0/graphql',
    headers: {
      authorization: 'Bearer ' + idToken,
    },
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <PetStoreNav />
        <Switch>
          <Route path="/mycart" component={MyCart} />
          <Route path="/admin" component={Admin} />
          <Route path="/catalog" component={Catalog} />
          {isAdmin ? <Route path="/" component={Admin} /> : <Route path="/" component={Catalog} />}
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;