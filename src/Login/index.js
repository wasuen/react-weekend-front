import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';


class Login extends Component {

    responseGoogle = (response) => {
        console.log(response);
      }

    render() {
        return (
            <main>
                <GoogleLogin
                clientId="943884177518-5f139p2o3hsjsdsn0a2qm8rb6gt3aekf.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}/>
            </main>
        )
    }
}


export default Login;