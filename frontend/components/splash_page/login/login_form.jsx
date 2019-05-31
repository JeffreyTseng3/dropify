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
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        this.props.login(user).then(() => this.props.history.push("/main"));
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

            
            <> 
                
                <div className="login-logo-text-combo">
                    <Link to="/">
                        <i className="fab fa-spotify fa-3x"></i>
                    </Link>
                    <Link to="/"><span className="login-logo-text">DROPIFY</span></Link>
                </div>

                <div className="login-page">
                    {/* Login information */}
                   
                        
                        <h1 className="login-form-greeting">
                            To continue, log in to Dropify.
                        </h1>

                        {invalidError}
                    
                        <form onSubmit={this.handleSubmit} className="login-form" >
                            {/* email address or username */}
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
                                {/* submit */}
                                <div className="login">
                                   <label>
                                         <input className="remember-me-checkbox" type="checkbox"/>Remember me
                                    </label> 
                                 <input type="submit" className="login-submit-btn" value="LOG IN" />
                                </div>

                        </form>

                        {/* sign up button */}
                        <div className="login-no-account-text"> Don't have an account? </div>
                        <form> 
                        <Link className="login-page-sign-up-btn" to="/signup">SIGN UP FOR SPOTIFY</Link> 
                         </form>
                </div>
            </>
        );
    }
}

export default LoginForm;