import Cookies from 'cookies-js'
import request from 'superagent'

import { PARCEL_URL } from '../constants/api'

export const getMeters = () => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/meter`)
            .set('Authorization', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const result = JSON.parse(res.text);
                        dispatch({
                            type: 'GET_METERS',
                            meters: result
                        })
                        break;

                    default:
                        break;
                }
            })
    }
}

export const getMetersByLocation = (loc) => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/meter`)
            .query(loc)
            .set('Authorization', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const result = JSON.parse(res.text);
                        dispatch({
                            type: 'GET_METERS_BY_LOCATION',
                            metersByLocation: result
                        })
                        break;

                    default:
                        break;
                }
            })
    }
}

export const getSingleMeter = (id) => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/metrics/${id}`)
            .set('Authorization', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const result = JSON.parse(res.text);
                        dispatch({
                            type: 'GET_METRICS_DATA',
                            metrics: result
                        })
                        break;

                    default:
                        break;
                }
            })
    }
}

export const sendReadings = (data) => {
    return (dispatch) => {
        request
            .post(`${PARCEL_URL}/metrics`)
            .send(data)
            .set('Authorization', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        alert('OK')
                        break;

                    default:
                        break;
                }
            })
    }
}

export const addMeter = (data) => {
    return (dispatch) => {
        request
            .post(`${PARCEL_URL}/meter`)
            .send(data)
            .set('Authorization', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        alert('OK')
                        break;

                    default:
                        break;
                }
            })
    }
}
