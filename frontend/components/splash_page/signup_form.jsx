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
        user.birth_day = Number(user.birth_day);
        user.birth_year = Number(user.birth_year);
        
        
        this.props.signup(user).then(() => this.props.history.push('/main'));
        
    }

    render() {
        return (<>
                <div className="signup-logo-text-combo">
                    <Link to="/">
                        <i className="fab fa-spotify fa-3x"></i>
                    </Link>
                    <Link to="/"><span className="login-logo-text">DROPIFY</span></Link>
                </div>
                
            <div className="signup-master"> 
                <div className="signup-page">
                    <h1 className="signup-greeting-text">Sign up with your email address</h1>

                    <form className="signup-form"onSubmit={this.handleSubmit}>
                        {/* email */}
                        <label> 
                            <input
                                className="signup-form-email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
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

                        <div className="signup-dob">
                            {/* month */}
                            <label className="signup-form-birth-month-select">
                                <select onChange={this.handleInput('birth_month')} id="select-months">
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
                        </div>


                        {/* gender */}
                        <div className="gender-btns">
                            
                            <div className="gender-btn"><input className="gender-male" onChange={this.handleInput('gender')} type="radio" name="gender" value="male" />Male</div>
                            <div className="gender-btn"><input className="gender-female" onChange={this.handleInput('gender')} type="radio" name="gender" value="female" />Female</div> 
                            <div className="gender-btn"><input className="gender-non-binary" onChange={this.handleInput('gender')} type="radio" name="gender" value="non-binary" />Non-binary </div>  
                            
                        </div>
                        {/* submit */}
                        <input type="submit" className="signup-submit-btn" value="SIGN UP" />
                    </form>

                    <div className="signup-switch-login">
                        <div className="signup-switch-login-text">Already have an account? </div>
                        <Link className="signup-switch-login-btn" to="/login"> Log In</Link>
                    </div>
                </div>
            </div>
        </>)
    }


}

export default SignupForm