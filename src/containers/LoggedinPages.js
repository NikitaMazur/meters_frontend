import LoggedinPages from '../components/LoggedinPages';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    login: state.auth.login
  }
}

export default connect(mapStateToProps)(LoggedinPages)
