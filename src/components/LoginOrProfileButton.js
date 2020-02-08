import React from 'react'
import { Link } from 'react-router-dom'

class LoginOrProfileButton extends React.Component {
    state = {
        loggedIn: false,
        renderLoginForm: false,
        loginInput: {
            username: "",
            password: ""
        }
    }

    clickHandler = () => {
        // if (!this.state.loggedIn) {
        this.setState({ renderLoginForm: !this.state.renderLoginForm })
        // } else {
        //     //go to profile
        //     // this.props.goToUserProfile()
        //     <Link to='/profile' />
        // }


    }

    loginInputHandler = (e) => {
        this.setState({
            loginInput: {
                ...this.state.loginInput,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.loginInput)
        let userObj = this.state.loginInput
        this.props.logUserIn(userObj)
        this.setState({ loggedIn: true })
        this.setState({ renderLoginForm: false })
    }

    render() {
        return (
            <div className="login-profile-button">
                {this.state.renderLoginForm ?
                    <form onSubmit={this.submitHandler} >
                        <input onChange={this.loginInputHandler} type="text" name="username" placeholder="Enter Username" value={this.state.loginInput.username} />
                        <input onChange={this.loginInputHandler} type="text" name="password" placeholder="Enter Password" value={this.state.loginInput.password} />
                        <input type="submit" />
                    </form>
                    :
                    this.state.loggedIn ? <Link to="/profile">Go To Profile</Link> : <button onClick={this.clickHandler}>Login</button>
                }
            </div>
        )
    }
}

export default LoginOrProfileButton 