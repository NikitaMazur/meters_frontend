import React from 'react';
import styled from 'styled-components';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { FormGroup, FormControl, ControlLabel, HelpBlock , Button} from 'react-bootstrap';

import LocationSearchInput from './LocationSearchInput';
import { Container, FullHeightWrapper, MainTitle } from './App';

const TrackingSubmitButton = styled(Button)`
    margin: 15px 0;
`;


export default class MetersAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newMeter: {
                number: '',
                type: 'WATER',
                latitude: 0,
                longitude: 0,
            }
        }
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState(
                {
                    newMeter: {
                        ...this.state.newMeter,
                        latitude: latLng.lat,
                        longitude: latLng.lng,
                    }
                })
            )
            .catch(error => console.error('Error', error))
    }

    onChange = (event) => {
        let key = event.currentTarget;
        this.setState({
            newMeter: {
                ...this.state.newMeter,
                number: key.value,
            }
        })
    }

    selectMeter = (event) => {
        let key = event.currentTarget;
        this.setState({
            newMeter: {
                ...this.state.newMeter,
                type: key.value,
            }
        })
    }

    onSubmit = () => {
        this.props.addMeter(this.state.newMeter)
    }

    render() {
        console.log(this.state.newMeter)
        return (
            <FullHeightWrapper>
                <Container>
                    <MainTitle>Add Meter</MainTitle>
                    <FormGroup controlId="formBasicText">
                            <ControlLabel>Location</ControlLabel>
                            <LocationSearchInput handleSelect={this.handleSelect} />
                            <HelpBlock></HelpBlock>
                            <ControlLabel>Serial number</ControlLabel>
                            <FormControl
                                type="text"
                                name="readings"
                                value={this.state.newMeter.value}
                                onChange={this.onChange}
                            />
                            <HelpBlock></HelpBlock>
                            <ControlLabel>Select type</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={this.selectMeter}>
                                <option value="WATER">Water</option>
                                <option value="GAS">Gas</option>
                                <option value="ELECTRIC">Electric</option>
                            </FormControl>
                            <HelpBlock></HelpBlock>
                            <TrackingSubmitButton bsStyle="primary" type="button" onClick={this.onSubmit}>Submit</TrackingSubmitButton>
                    </FormGroup>
                </Container>
            </FullHeightWrapper>
        );
    }
}
