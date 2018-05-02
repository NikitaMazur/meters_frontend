import Cookies from 'cookies-js'

const initState = {
    login: Cookies.get('AuthToken') ? true : false,
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'AUTH_USER_SUCCESS': {
            return { ...state, login: true }
        }
        
        case 'AUTH_USER_LOGOUT': {
            Cookies.expire('AuthToken');
            return { ...state, login: false }
        }

        default:
            return state
    }
}
