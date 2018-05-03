import NavHeader from '../components/NavHeader';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch({type: 'AUTH_USER_LOGOUT'})},
    }
}

const mapStateToProps = (state) => {
    return {
        role: state.auth.role,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
