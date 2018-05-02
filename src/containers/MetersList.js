import MetersList from '../components/MetersList';
import { connect } from 'react-redux';
import { getParcels, changeStatus } from '../actions/parcels';

const mapDispatchToProps = (dispatch) => {
    return {
        getParcels: (data) => {dispatch(getParcels(data))},
        changeStatus: (data) => {dispatch(changeStatus(data))},
    }
}

const mapStateToProps = state => {
    return {
      parcels: state.parcels.parcels
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MetersList)
