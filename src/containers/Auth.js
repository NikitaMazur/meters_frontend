import Auth from '../components/Auth';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(login(user)),
    }
}

const mapStateToProps = state => {
    return {
      login: state.auth.login
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
