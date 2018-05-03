const initState = {
    meters: [],
    metrics: [],
    metersByLocation: [],
    meterData: [],
    warning: false,
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

        case 'SHOW_READING_WARNING': {
            return { ...state, warning: action.warning }
        }

        default:
            return state
    }
}
