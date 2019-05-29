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
                <h1>Login</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label> Email
                        <input type="text"
                            value={this.state.email}/>
                    </label>
                    <label> Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    
                    <input type="submit" value="LOG IN" />
                    {/* <Link to="/browse"></Link> */}
                </form>
                <div>
                    <p>Don't have an account? SignupButton</p>
                    
                </div>
            </>
        );
    }
}

export default LoginForm;