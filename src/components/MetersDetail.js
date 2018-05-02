import React from 'react';
import { Table } from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import { MainTitle } from './App';

export default class MetersDetail extends React.Component {

    componentWillMount() {
        this.props.getIncomingParcels();
    }

    render() {
        const { parcels } = this.props;
        return (
            <div>
                {parcels.length !== 0 && (
                <div>
                    <MainTitle>Meters Detail</MainTitle>
                        <Table responsive bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Meter</th>
                                    <th>Date</th>
                                    <th>Water</th>
                                </tr>
                            </thead>
                            <tbody>
                                {parcels.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>256663</td>
                                            <td>April 2018</td>
                                            <td>3333</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        );
    }
}
