import React from "react";
import { Link } from 'react-router-dom';
// import logo from "../../../app/assets/images/"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "",
            password: "",
            
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
        this.props.login(user);
        // ADD HISTORY TO BROWSE
    }


    render() {
        return (
            <> 
                <Link to="/">  <i className="fab fa-spotify"></i> </Link>
                {/* Login information */}
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* email address or username */}
                    <label> 
                        <input type="text"
                            value={this.state.info}
                            onChange={this.handleInput('info')}
                            placeholder="Email address or username"/>
                    </label>
                    {/* password */}
                    <label> 
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                        />
                    </label>
                    {/* submit */}
                    <input type="submit" value="LOG IN" />
                </form>

                {/* sign up button */}
                <div>
                    <p>Don't have an account? SignupButton</p>    
                </div>
            </>
        );
    }
}

export default LoginForm;