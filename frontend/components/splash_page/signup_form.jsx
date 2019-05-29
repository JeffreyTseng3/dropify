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
            <Link to="/">  <i className="fab fa-spotify"></i> </Link>
            
            <h1>Sign up with your email address</h1>

            <form onSubmit={this.handleSubmit}>
                {/* email */}
                <label> 
                    <input
                        className="signup-form-email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="email"
                    />
                </label>
                {/* password */}
                <label > 
                    <input
                        className="signup-form-password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                    />
                </label>
                {/* username */}
                <label>
                    <input
                        className="signup-form-username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder="What should we call you?"
                    />
                </label>
                {/* birth date */}
                <p> <label htmlFor="dob-label">Date of Birth</label> 
                    {/* month */}
                    <label className="signup-form-birth-month-select">
                        <select id="select-months">
                            <option value="">Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </label>
                    {/* day */}
                    <label >
                        <input 
                        className="signup-form-birth-day-select"
                        type="number"
                        value={this.state.birth_day}
                        onChange={this.handleInput('birth_day')}
                        placeholder="Day"
                        />
                    </label>
                    {/* year */}
                    <label>
                        <input 
                            className="signup-form-birth-year-select"
                            type="number"
                            value={this.state.birth_year}
                            onChange={this.handleInput('birth_year')}
                            placeholder="Year"
                        />
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