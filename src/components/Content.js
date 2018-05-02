import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../containers/Auth';
import LoggedinPages from '../containers/LoggedinPages';

const PrivateRoute = ({ needRedirect, redirectTo, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (needRedirect ? (
                <Component {...props}>
                    {rest.children}
                </Component>
            ) : (
                <Redirect
                    to={{ pathname: redirectTo }}
                />
            ))
        }
    />
);

const Content = (props) => {
    const { login } = props;
    return (
        <div>
            <Route
                exact path='/'
                render={() => (<Redirect to='login' />)}
            />
            <PrivateRoute
                path='/login'
                redirectTo='/meters/list'
                needRedirect={!login}
                component={Auth}
            />
            <PrivateRoute
                path='/meters/list'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/meters/:id'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/meters/reading'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
        </div>
    )
}

export default Content
