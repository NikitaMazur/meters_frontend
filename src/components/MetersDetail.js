import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import { MainTitle } from './App';

export default class MetersDetail extends Component {

    componentDidMount() {
        this.props.getSingleMeter(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearStorage();
    }

    render() {
        const { metrics } = this.props;
        return (
            <div>
                {metrics && metrics.length !== 0 && (
                <div>
                    <MainTitle>Meters Detail ({metrics[0].meter.number})</MainTitle>
                        <Table responsive bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>{metrics[0].meter.type}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {metrics.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{moment(item.createdAt).format('MMMM D Y HH:mm')}</td>
                                            <td>{item.value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                )}
                {metrics && metrics.length === 0 && (
                    <div>
                        <MainTitle>Meters Detail</MainTitle>
                        <p>No readings available</p>
                    </div>
                )}
            </div>
        );
    }
}
