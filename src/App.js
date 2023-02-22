// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { SecureRoute, useAuthContext } from "@asgardeo/auth-react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import './App.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">PetStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Catalog</Nav.Link>
              <Nav.Link href="/mycart">My Cart</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <RightLoginSignupMenu />
        </Container>
      </Navbar>
    </>
  );
};

const SecureRedirect = (props) => {
  const { component, path } = props;
  const { signIn } = useAuthContext();

  const callback = () => {
    signIn();
  };

  return (<SecureRoute exact path={path} component={component} callback={callback} />);
};

// Main app component
const App = () => {
  const [idToken, setIdToken] = useState(null);
  const { state, getAccessToken } = useAuthContext();
  const { isLoading } = state;

  useEffect(() => {
    document.title = 'PetStore';

    getAccessToken()
      .then((decodedIdToken) => {
        setIdToken(decodedIdToken);
      }).catch((error) => {
        console.log(error);
      })
  });


  if (isLoading || !idToken) {
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
      <PetStoreNav />
      <BrowserRouter>
        <Switch>
          <SecureRedirect exact path="/mycart" component={MyCart} />
          <SecureRedirect exact path="/admin" component={Admin} />
          <Route path="/" component={Catalog} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;