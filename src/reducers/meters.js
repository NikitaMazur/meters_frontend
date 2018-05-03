const initState = {
    meters: [],
    metrics: [],
    metersByLocation: [],
    meterData: [],
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'GET_METERS': {
            return { ...state, meters: action.meters }
        }

        case 'GET_METERS_BY_LOCATION': {
            return { ...state, metersByLocation: action.metersByLocation }
        }

        case 'METER_DATA': {
            return { ...state, meterData: action.meterData }
        }

        case 'GET_METRICS_DATA': {
            return { ...state, metrics: action.metrics }
        }

        default:
            return state
    }
}
