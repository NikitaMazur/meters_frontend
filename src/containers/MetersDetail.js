import MetersDetail from '../components/MetersDetail';
import { connect } from 'react-redux';
import { getSingleMeter } from '../actions/meters';

const mapDispatchToProps = dispatch => {
    return {
        getSingleMeter: id => dispatch(getSingleMeter(id)),
    }
}

const mapStateToProps = state => {
    return {
      metrics: state.meters.metrics,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MetersDetail)
