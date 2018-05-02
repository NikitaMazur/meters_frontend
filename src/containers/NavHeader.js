import NavHeader from '../components/NavHeader';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch({type: 'AUTH_USER_LOGOUT'})},
    }
}

export default connect(null, mapDispatchToProps)(NavHeader)
