import Auth from '../components/Auth';
import { connect } from 'react-redux';
import { Login } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => {dispatch(Login(user))},
    }
}

const mapStateToProps = state => {
    return {
      login: state.auth.login
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
