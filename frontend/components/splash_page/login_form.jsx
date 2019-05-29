import React from "react";
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
                {/* Login information */}
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* email address or username */}
                    <label> 
                        <input type="text"
                            value={this.state.email}
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
                    {/* <Link to="/browse"></Link> */}
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