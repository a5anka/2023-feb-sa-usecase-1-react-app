// import logo from './logo.svg';
import React, { useEffect } from 'react';
import { SecureRoute, AuthProvider, useAuthContext } from "@asgardeo/auth-react";
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
  const { state, signIn, signOut } = useAuthContext();
  let isLoggedIn = state.isAuthenticated;

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
  useEffect(() => {
    document.title = 'PetStore';
  }, []);
  return (
    <AuthProvider config={{
      signInRedirectURL: "http://localhost:3000",
      signOutRedirectURL: "http://localhost:3000",
      clientID: "OSTKXaC1NmXV0oYFIoFkZ7yOLWga",
      baseUrl: "https://api.asgardeo.io/t/asanka2023febsahackathon",
      scope: ["openid", "profile"]
    }}>
      <PetStoreNav />
      <BrowserRouter>
        <Switch>
          <SecureRedirect exact path="/mycart" component={MyCart} />
          <SecureRedirect exact path="/admin" component={Admin} />
          <Route path="/" component={Catalog} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;