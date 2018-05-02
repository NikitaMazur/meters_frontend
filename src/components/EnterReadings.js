import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Table, FormGroup, FormControl, ControlLabel, HelpBlock , Button} from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import LocationSearchInput from './LocationSearchInput';
import { Container, FullHeightWrapper, MainTitle } from './App';

const TrackingSubmitButton = styled(Button)`
    margin: 15px 0;
`;


export default class EnterReadings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reference: '',
            courier_name: '',
            recipient_last_name: '',
        }
    }

    onChange(event) {
        let key = event.currentTarget;
        this.setState({
            ...this.state,
            [key.name]: key.value
        })
    }

    onSubmit() {
        this.props.searchParcels(this.state)
    }

    render() {
        const { parcels } = this.props;
        return (
            <FullHeightWrapper>
                <Container>
                    <MainTitle>Meters Reading</MainTitle>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Location</ControlLabel>
                        <LocationSearchInput />
                        <HelpBlock></HelpBlock>
                        <ControlLabel>Select meter</ControlLabel>
                        <FormControl
                            type="text"
                            name="courier_name"
                            value={this.state.courier}
                            onChange={this.onChange.bind(this)}
                        />
                        <HelpBlock></HelpBlock>
                        <ControlLabel>Readings</ControlLabel>
                        <FormControl
                            type="text"
                            name="recipient_last_name"
                            value={this.state.recipient_last_name}
                            onChange={this.onChange.bind(this)}
                        />
                        <TrackingSubmitButton bsStyle="primary" type="button" onClick={this.onSubmit.bind(this)}>Submit</TrackingSubmitButton>
                    </FormGroup>
                </Container>
            </FullHeightWrapper>
        );
    }
}
