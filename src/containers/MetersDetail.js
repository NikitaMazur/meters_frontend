import MetersDetail from '../components/MetersDetail';
import { connect } from 'react-redux';
import { getIncomingParcels } from '../actions/parcels';

const mapDispatchToProps = (dispatch) => {
    return {
        getIncomingParcels: () => {dispatch(getIncomingParcels())},
    }
}

const mapStateToProps = state => {
    return {
      parcels: state.parcels.incomingParcels
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MetersDetail)
