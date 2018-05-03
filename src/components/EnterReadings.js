import React from 'react';
import styled from 'styled-components';
import { FormGroup, FormControl, ControlLabel, HelpBlock , Button} from 'react-bootstrap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import FileBase64 from 'react-file-base64'

import LocationSearchInput from './LocationSearchInput';
import { Container, FullHeightWrapper, MainTitle } from './App';
import { METER_PHOTO } from '../constants/img';
import Modal from './Modal';

const TrackingSubmitButton = styled(Button)`
    margin: 15px 0;
`;


export default class EnterReadings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            geolocation: {
                latitude: 0,
                longitude: 0,
            },
            readings: {
                meterId: '',
                value: '',
                picture: METER_PHOTO,
            }

        }
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState(
                {
                    geolocation: {
                        latitude: latLng.lat,
                        longitude: latLng.lng,
                    }
                },
                () => this.props.getMetersByLocation(this.state.geolocation))
            )
            .catch(error => console.error('Error', error))
    }

    onChange = (event) => {
        let key = event.currentTarget;
        this.setState({
            readings: {
                ...this.state.readings,
                value: key.value,
            }
        })
    }

    selectMeter = (event) => {
        let key = event.currentTarget;
        this.setState({
            readings: {
                ...this.state.readings,
                meterId: key.value,
            }
        })
    }

    onSubmit = () => {
        this.props.sendReadings({...this.state.readings, forceUpdate: false})
    }

    confirmModal = () => {
        this.props.sendReadings({...this.state.readings, forceUpdate: true})
        this.props.closeModal()
    }

    cancelModal = () => {
        this.props.closeModal()
    }

    componentWillReceiveProps(nextProps) {
        nextProps.metersByLocation.length > 0 && this.setState({
            readings: {
                ...this.state.readings,
                meterId: nextProps.metersByLocation[0].id,
            }
        })
    }

    render() {
        console.log(this.state.readings)
        const { metersByLocation, warning } = this.props;
        return (
            <FullHeightWrapper>
                <Container>
                    <MainTitle>Meters Reading</MainTitle>
                    <FormGroup controlId="formBasicText">
                        <div>
                            <ControlLabel>Location</ControlLabel>
                            <LocationSearchInput handleSelect={this.handleSelect} />
                            <HelpBlock></HelpBlock>
                        </div>
                        {metersByLocation.length === 0 && (
                            <p>No meters on this location</p>
                        )}
                        {metersByLocation.length > 0 && (
                            <div>
                                <ControlLabel>Select meter</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" onChange={this.selectMeter}>
                                    {metersByLocation.map((item) => {
                                        return <option value={item.id}>{item.number}</option>
                                    })}
                                </FormControl>
                                <HelpBlock></HelpBlock>
                                <ControlLabel>Readings</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="readings"
                                    value={this.state.readings.value}
                                    onChange={this.onChange}
                                />
                                <HelpBlock></HelpBlock>
                                <FileBase64 />
                                <HelpBlock></HelpBlock>
                                <TrackingSubmitButton bsStyle="primary" type="button" onClick={this.onSubmit}>Submit</TrackingSubmitButton>
                            </div>
                        )}
                    </FormGroup>
                </Container>
                {warning && (
                    <Modal
                        title="Warning"
                        text="The readings of the current month is less than the previous month. Do you want to overwrite them?"
                        onSubmit={this.confirmModal}
                        onCancel={this.cancelModal}
                    />
                )}
            </FullHeightWrapper>
        );
    }
}
