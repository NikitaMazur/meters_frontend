import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { MainTitle } from './App';

export default class MetersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ids: [],
            status: 'delivered',
        }
    }

    getMeterData = (data) => {
        this.props.meterData(data);
    }

    componentWillMount() {
        this.props.getMeters();
    }

    render() {
        const { meters } = this.props;
        return (
            <div>
                {meters.length !== 0 && (
                    <div>
                        <MainTitle>Meters List</MainTitle>
                        <Table responsive bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Meters</th>
                                    <th>Water</th>
                                    <th>Gas</th>
                                    <th>Electric</th>
                                </tr>
                            </thead>
                            <tbody>
                                {meters.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index}</td>
                                            <td><Link to={`/meters/detail/${item.id}`} onClick={() => this.getMeterData(item)}>{item.number}</Link></td>
                                            <td>{item.type === 'WATER' && item.lastMetrics ? item.lastMetrics.value : '-'}</td>
                                            <td>{item.type === 'GAS' && item.lastMetrics ? item.lastMetrics.value : '-'}</td>
                                            <td>{item.type === 'ELECTRIC' && item.lastMetrics ? item.lastMetrics.value : '-'}</td>
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
