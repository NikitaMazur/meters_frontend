import React, { Component } from 'react';
import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';

const DropdownWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0px 3px rgba(0,0,0,.3);

  & > div {
    padding: 10px;
  }
`;

export default class LocationSearchInput extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      address: '',
    }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.props.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'form-control'
              })}
            />
            <DropdownWrapper>
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </DropdownWrapper>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}