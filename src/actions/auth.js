import Cookies from 'cookies-js'
import request from 'superagent'

import { PARCEL_URL } from '../constants/api'

export const Login = (user) => {
    return (dispatch) => {
        request
            .post(`${PARCEL_URL}/auth`)
            .send(user)
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        Cookies.set('AuthToken', res.text)
                        dispatch({
                            type: 'AUTH_USER_SUCCESS'
                        })
                        break;

                    default:
                        break;
                }
            })
    }
}
