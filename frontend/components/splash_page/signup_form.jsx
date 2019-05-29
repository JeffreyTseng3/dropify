import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            birth_month: "",
            birth_day: "",
            birth_year: "",
            gender: ""
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
                {/* email */}
                <label for="signup-form-email"> 
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="email"
                    />
                </label>
                {/* password */}
                <label for="signup-form-password"> 
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                    />
                </label>
                {/* username */}
                <label for="signup-form-username">
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder="What should we call you?"
                    />
                </label>
                {/* birth date */}
                <p> 
                    {/* month */}
                    <label for="signup-form-birth-month-select">

                    </label>
                    {/* day */}
                    <label for="signup-form-birth-day-select">
                        <input 
                        type="text"
                        value={this.state.birth_day}
                        onChange={this.handleInput('birth_day')}
                        placeholder="Day"
                        />
                    </label>
                    {/* year */}
                    <label for="signup-form-birth-year-select" >

                    </label>
                </p>


                {/* gender */}
                <label > 
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female"/> Female
                    <input type="radio" name="gender" value="non-binary"/> Non-binary 
                </label>
                {/* submit */}
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