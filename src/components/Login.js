import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { AuthTitle, LoginButton } from './Auth';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                login: '',
                password: '',
            }
        }
    }

    onChangeHandler = (event)  => {
        let field = event.currentTarget;

        this.setState({
            form: {
                ...this.state.form,
                [field.name]: field.value,
            }
        })
    }

    onSubmit = (event) => {
        this.props.login(this.state.form)
    }

    render() {
        return (
            <FormGroup>
                <AuthTitle>Log In</AuthTitle>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    name="login"
                    type="text"
                    value={this.state.form.email}
                    onChange={this.onChangeHandler}
                />
                <HelpBlock></HelpBlock>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    name="password"
                    type="password"
                    value={this.state.form.password}
                    onChange={this.onChangeHandler}
                />
                <HelpBlock></HelpBlock>
                <HelpBlock></HelpBlock>
                <LoginButton block bsStyle="primary" type="submit" onClick={this.onSubmit}>Log In</LoginButton>
            </FormGroup>
        );
    }
}