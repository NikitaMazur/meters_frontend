import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ needRedirect, redirectTo, component: Component, ...rest }) => (
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

export const AdminRoute = ({ role, redirectTo, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (role === "ADMIN" ? (
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
