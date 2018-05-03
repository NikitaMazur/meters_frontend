import Cookies from 'cookies-js'

const initState = {
    login: Cookies.get('AuthToken') ? true : false,
    role: Cookies.get('AuthRole') ? Cookies.get('AuthRole') : '',
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'AUTH_USER_SUCCESS': {
            return { ...state, login: true, role: action.role }
        }
        
        case 'AUTH_USER_LOGOUT': {
            Cookies.expire('AuthToken');
            return { ...state, login: false, role: '' }
        }

        default:
            return state
    }
}
