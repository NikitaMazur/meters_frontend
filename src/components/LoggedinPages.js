import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import MetersDetail from '../containers/MetersDetail';
import MetersList from '../containers/MetersList';
import EnterReadings from '../containers/EnterReadings';
import NavHeader from '../containers/NavHeader';
import { Container, FullHeightWrapper } from './App';

export const CompanyLogo = styled.img`
    max-width: 100px;
`;

export default class LoggedinPages extends React.Component {

    render() {
        return (
            <div>
                <NavHeader />
                <FullHeightWrapper>
                    <Container>
                        <div>
                            <Route exact path="/meters/list" component={MetersList} />
                            <Route exact path="/meters/detail/:id" component={MetersDetail} />
                            <Route exact path="/meters/reading" component={EnterReadings} />
                        </div>
                    </Container>
                </FullHeightWrapper>
            </div>
        );
    }
}
