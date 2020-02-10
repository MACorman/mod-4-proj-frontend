import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'semantic-ui-react'

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
                    <Form onSubmit={this.submitHandler} >
                        <Input onChange={this.loginInputHandler} type="text" name="username" placeholder="Enter Username" value={this.state.loginInput.username} />
                        <Input onChange={this.loginInputHandler} type="password" name="password" placeholder="Enter Password" value={this.state.loginInput.password} />
                        <Input type="submit" />
                    </Form>
                    :
                    this.state.loggedIn ? <Button as={Link} to="/profile">Go To Profile</Button> : <Button onClick={this.clickHandler}>Login</Button>
                }
            </div>
        )
    }
}

export default LoginOrProfileButton 