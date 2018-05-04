import EnterReadings from '../components/EnterReadings';
import { connect } from 'react-redux';
import { getSingleMeter, getMetersByLocation, sendReadings } from '../actions/meters';

const mapDispatchToProps = dispatch => {
    return {
        getSingleMeter: data => dispatch(getSingleMeter(data)),
        getMetersByLocation: loc => dispatch(getMetersByLocation(loc)),
        sendReadings: data => dispatch(sendReadings(data)),
        closeModal: () => dispatch({type: 'SHOW_READING_WARNING', warning: false}),
        clearStorage: () => dispatch({type: 'GET_METERS_BY_LOCATION', metersByLocation: []}),
    }
}

const mapStateToProps = state => {
    return {
      metersByLocation: state.meters.metersByLocation,
      warning: state.meters.warning,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EnterReadings)
