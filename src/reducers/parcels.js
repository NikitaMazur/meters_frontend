const initState = {
    parcels: [],
    incomingParcels: [],
    trackParcels: [],
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'GET_PARCELS': {
            return { ...state, parcels: action.parcels, trackParcels: [] }
        }

        case 'GET_INCOMING_PARCELS': {
            return { ...state, incomingParcels: action.incomingParcels, trackParcels: [] }
        }

        case 'TRACK_PARCELS': {
            return { ...state, trackParcels: action.trackParcels }
        }

        default:
            return state
    }
}
