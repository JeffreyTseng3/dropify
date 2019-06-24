import React from "react";
import { Link } from 'react-router-dom';
// import logo from "../../../app/assets/images/"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }


    handleDemoLogin(e) {
        e.preventDefault();
        let { demoLogin } = this.props;
        // demoLogin();
        const demoUser = { info: "frey_jay", password: "123123" };
        this.props.login(demoUser).then(() => this.props.history.push('/main/browse/featured'));

    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        this.props.login(user).then(() => this.props.history.push("/main/browse/featured"));
    }

    componentDidUpdate() {
   
    }


    componentDidMount(e) {
    
    }


    render() {
       
        let infoError = this.props.errors.includes("info") ? <div className="info-errors"> Please enter your Dropify username or email address.</div> : null;
        let passwordError = this.props.errors.includes("password") ? <div className="password-errors">Please enter your password.</div> : null;
        let invalidError = this.props.errors.includes("Invalid username/password combination") ? <div className="invalid-errors"><div> Incorrect username or password.</div></div> : null;
        
        return (

            
            
                <div className="login-module"> 
                    <div className="login-logo-text-combo">
                        <Link to="/">
                                <i className="fas fa-feather fa-4x"></i>
                            {/* <i className="fab fa-spotify fa-4x"></i> */}
                        </Link>
                        <Link to="/"><span className="login-logo-text">DROPIFY</span></Link>
                    </div>

                    <div className="login-page">
                    
                        <h1 className="login-form-greeting">
                            To continue, log in to Dropify.
                        </h1>

                        <button className="login-demo" onClick={this.handleDemoLogin}>DEMO LOG IN</button>

                        <div className="login-or-container"> 
                                <span className="login-or-before"></span> <div className="login-or-text">OR</div>  <span className="login-or-before"></span> 
                        </div>

                        {invalidError}
                        
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <div className="login-info">     
                                <input 
                                    type="text"
                                    className={infoError ? "error-login-email-user-input" : "login-email-user-input"  }
                                    value={this.state.info}
                                    onChange={this.handleInput('info')}
                                    placeholder="Email address or username"/>
                                    {infoError}
                                        
                                <input
                                    type="password"
                                    className={passwordError ? "error-login-password-input" : "login-password-input"}
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    placeholder="Password"
                                />
                                {passwordError}
                            </div>
                                
                            <div className="login-submit">
                                <div className="login-remember-me">
                                    <input className="login-remember-me-checkbox" type="checkbox" /> 
                                    <span className="login-remember-me-text">Remember me</span> 
                                </div> 
                                <input type="submit" className="login-submit-btn" value="LOG IN" />
                            </div>
                        </form>

                        
                        <div className="login-no-account-text"> Don't have an account? </div>
                        <form> 
                        <Link className="login-page-sign-up-btn" onClick={this.props.clearErrors} to="/signup">SIGN UP FOR SPOTIFY</Link> 
                        </form>
                    </div>
            </div>
            
        );
    }
}

export default LoginForm;