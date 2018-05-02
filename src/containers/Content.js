import Content from '../components/Content'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    login: state.auth.login
  }
}

export default connect(mapStateToProps, null, null, {pure: false})(Content)