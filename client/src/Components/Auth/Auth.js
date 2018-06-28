/*eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from 'jwt-decode';
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "daves-auth-server.auth0.com",
    clientID: "4yu9jiQBMHopIqZ5nRG9DpJIkSb9R5ZH",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://daves-auth-server.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
        if (authResults && authResults.accessToken && authResults.idToken) {
            let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
            localStorage.setItem("access_token", authResults.accessToken);
            localStorage.setItem("id_token", authResults.idToken);
            localStorage.setItem("expires_at", expiresAt);
            // location.hash = "";
            // location.pathname = LOGIN_SUCCESS_PAGE;
            history.replace('/');
        } else if (err) {
            // location.pathname = LOGIN_FAILURE_PAGE;
            history.replace('/')
            console.log(err);
        }
    });
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  
  logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem('expires_at');
      // location.pathname = LOGIN_FAILURE_PAGE;
      history.replace('/');
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
        // console.log(jwtDecode(localStorage.getItem("id_token")))
        // console.log(localStorage.getItem("id_token"));
        return jwtDecode(localStorage.getItem("id_token"));
    } else {
        return {
          name: 'Anon',
          nickname: 'Anon',
          picture: 'placeholder',
          uid: null,
        }
    }
  }
}
