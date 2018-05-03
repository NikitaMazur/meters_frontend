import EnterReadings from '../components/EnterReadings';
import { connect } from 'react-redux';
import { getSingleMeter, getMetersByLocation, sendReadings } from '../actions/meters';

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleMeter: (data) => {dispatch(getSingleMeter(data))},
        getMetersByLocation: (loc) => {dispatch(getMetersByLocation(loc))},
        sendReadings: (data) => {dispatch(sendReadings(data))},
    }
}

const mapStateToProps = state => {
    return {
      meters: state.meters.incomingmeters,
      metersByLocation: state.meters.metersByLocation,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EnterReadings)
