import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Dashboard  from '../Dashboard/Dashboard';

const { SetCookie, DeleteCookie, hasCookie } = require('../../Utility/CookieManager.js');

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const App = () => {
  const [user, setUser] = useState({ haslogin: false, accessToken: '' });

  useEffect(() => {
    const cookieObject = hasCookie();
    if (cookieObject.haslogin) {
      setUser({
        haslogin: true,
        accessToken: cookieObject.accessToken
      });
    }
  }, []);

  function login(response) {
    if (response.wc.access_token) {
      setUser({
        ...response.profileObj,
        haslogin: true,
        accessToken: response.wc.access_token
      })
    }
    SetCookie({
      ...response.profileObj,
      accessToken: response.wc.access_token
    });
  }

  function logout(response) {
    setUser({ haslogin: false, accessToken: '' });
    DeleteCookie(['accessToken', 'email', 'givenName', 'familyName', 'imageUrl', 'name', 'googleId']);
  }

  function handleLoginFailure(response) {
    alert('Failed to log in')
  }
  function handleLogoutFailure(response) {
    alert('Failed to log out')
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">FitMeUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            {user.haslogin ?
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText='Logout'
                onLogoutSuccess={logout}
                onFailure={handleLogoutFailure}
              >
              </GoogleLogout> : <GoogleLogin
                clientId={CLIENT_ID}
                buttonText='Login'
                onSuccess={login}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
                responseType='code,token'
              />
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Dashboard user={user}/>
    </>
  );
}

export default App;
