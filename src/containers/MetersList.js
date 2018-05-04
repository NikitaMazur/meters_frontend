import MetersList from '../components/MetersList';
import { connect } from 'react-redux';
import { getMeters } from '../actions/meters';

const mapDispatchToProps = dispatch => {
    return {
        getMeters: data => dispatch(getMeters(data)),
    }
}

const mapStateToProps = state => {
    return {
      meters: state.meters.meters
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MetersList)
