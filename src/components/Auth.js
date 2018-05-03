import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import Login from './Login';
import { FullHeightWrapper } from './App';

export const AuthForm = styled.div`
    background-color: white;
    padding: 40px 20px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .15);
    flex: 0 0 300px;
`;

export const LoginButton = styled(Button)`
    margin-top: 30px;
`;

export const AuthTitle = styled.h2`
    margin: 0 0 30px 0;
    text-align: center;
`;

export default class Auth extends Component {
    render() {
        return (
            <FullHeightWrapper>
                <AuthForm>
                    <Login login={this.props.loginUser} />
                </AuthForm>
            </FullHeightWrapper>
        );
    }
}
