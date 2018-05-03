import MetersAdd from '../components/MetersAdd';
import { connect } from 'react-redux';
import { addMeter } from '../actions/meters';

const mapDispatchToProps = (dispatch) => {
    return {
        addMeter: (data) => {dispatch(addMeter(data))},
    }
}

export default connect(null, mapDispatchToProps)(MetersAdd)
