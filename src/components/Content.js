import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../containers/Auth';
import LoggedinPages from '../containers/LoggedinPages';
import { PrivateRoute, AdminRoute } from './LoggedinRoutes'

const Content = (props) => {
    const { login, role } = props;
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
            <AdminRoute
                path='/meters/list'
                redirectTo='/meters/reading'
                role={role}
                component={LoggedinPages}
                admin={role === 'ADMIN'}
            />
            <AdminRoute
                path='/meters/detail/:id'
                redirectTo='/meters/reading'
                role={role}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/meters/reading'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <AdminRoute
                path='/meters/add'
                redirectTo='/meters/reading'
                role={role}
                component={LoggedinPages}
            />
        </div>
    )
}

export default Content
