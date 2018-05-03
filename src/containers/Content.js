import Content from '../components/Content'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    role: state.auth.role,
  }
}

export default connect(mapStateToProps, null)(Content)