import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
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
        this.props.login(user);
        // ADD HISTORY TO BROWSE
    }

    render() {

        return (<>
       
            <h1>Sign up with your email address</h1>

            <form onSubmit={this.handleSubmit}>
                <label> Email
                            <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="email"
                    />
                </label>
                <label> PASSWORD
                            <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                </label>
                <label> What should we call you?
                            <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                    />
                </label>
            
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female"/> Female
                    <input type="radio" name="gender" value="other"/> Non-binary 
             
                <input type="submit" value="SIGN UP" />

            </form>

            <div>
                <p>Already have an account? LoginButton
                </p>
            </div>

        </>)
    }


}

export default SignupForm