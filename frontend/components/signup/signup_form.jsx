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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = {info: "jeffrey.tseng3", password: "123123"};
        this.props.login(demoUser).then(() => this.props.history.push('/main/browse/featured'));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const user = Object.assign({}, this.state);
        user.birth_day = Number(user.birth_day);
        user.birth_year = Number(user.birth_year);
        this.props.signup(user).then(() => this.props.history.push('/main/browse/featured'));
    }

    componentDidMount() {
        // this.forceUpdate();
    }



    render() {    
        let emailError = this.props.errors !== [] ? 
            this.props.errors.includes("email") ? <div className="signup-email-errors"> Please enter your email.</div> : null 
        :null;

        let passwordError = this.props.errors !== [] ? 
             this.props.errors.includes("password") ? <div className="signup-password-errors">Please choose your password.</div> : null 
        :null;

        let usernameError = this.props.errors !== [] ? 
            this.props.errors.includes("username") ? <div className="signup-username-errors">What should we call you?</div> : null
        : null;

        let monthError = this.props.errors !== [] ? 
            this.props.errors.includes("birth_month") ? <div className="signup-month-errors">Please enter your birth month.</div> : null
        : null;

        let dayError = this.props.errors !== [] ? 
            this.props.errors.includes("birth_day") ? <div className="signup-day-errors">Please enter your birth day.</div> : null
        : null;

        let yearError = this.props.errors !== [] ? 
            this.props.errors.includes("birth_year") ? <div className="signup-year-errors">Please enter your birth year.</div> : null 
        : null;

        let genderError = this.props.errors !== [] ? 
            this.props.errors.includes("gender") ? <div className="signup-gender-errors">Please indicate your gender.</div> : null
        : null;

        return (
            <>
                <div className="signup-module"> 
                    
                    <div className="signup-logo-text-combo">
                        <Link to="/">
                        <i className="fas fa-feather fa-4x"></i>

                            {/* <i className="fab fa-spotify fa-3x"></i> */}
                        </Link>
                        <Link to="/"><span className="login-logo-text">DROPIFY</span></Link>
                    </div>
            
            
               
                    
                    <div className="signup-page">
                        <button className="signup-demo" onClick={this.handleDemoLogin}>DEMO LOG IN</button>
                        
                        <div className="signup-or-container">
                            <span className="signup-or-before"></span> <div className="signup-or-text">OR</div>  <span className="sign-or-before"></span>
                        </div>

                        <h1 className="signup-greeting-text">Sign up with your email address</h1>

                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <input
                                className="signup-form-email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                            />
                            {emailError}
                        
                            <input
                                className="signup-form-password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                            />
                            {passwordError}

                        
                            <input
                                className="signup-form-username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="What should we call you?"
                            />
                            {usernameError}

                            <div className="signup-dob-mod">
                                <div className="signup-dob-text">Date of Birth</div>
                                {/* month */}
                                <div className="signup-dob"> 
                                    <select className="signup-form-birth-month-select" onChange={this.handleInput('birth_month')} id="select-months">
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
                    
                                
                            
                                    <input 
                                    className="signup-form-birth-day-select"
                                    type="number"
                                    value={this.state.birth_day}
                                    onChange={this.handleInput('birth_day')}
                                    placeholder="Day"
                                    />
                            
                            
                        
                                    <input 
                                        className="signup-form-birth-year-select"
                                        type="number"
                                        value={this.state.birth_year}
                                        onChange={this.handleInput('birth_year')}
                                        placeholder="Year"
                                    />
                                </div>
                            </div>

                            {monthError}
                            {dayError}
                            {yearError}

                            <div className="gender-btns">
                               
                                <div className="gender-btn"><input className="gender-type" onChange={this.handleInput('gender')} type="radio" name="gender" value="male" /> 
                                    <span className="gender-text">Male</span>
                                </div>
                                <div className="gender-btn"><input className="gender-type" onChange={this.handleInput('gender')} type="radio" name="gender" value="female" />
                                    <span className="gender-text">Female</span> 
                                </div> 
                                <div className="gender-btn"><input className="gender-type" onChange={this.handleInput('gender')} type="radio" name="gender" value="non-binary" />
                                    <span className="gender-text">Non-binary</span> 
                                </div>  
                            </div>
                            {genderError}
                            {/* submit */}
                            <input type="submit" className="signup-submit-btn" value="SIGN UP" />
                        </form>

                        <div className="signup-switch-login">
                            <div className="signup-switch-login-text">Already have an account? </div>
                            <Link className="signup-switch-login-btn" onClick={this.props.clearErrors}  to="/login"> Log In</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default SignupForm