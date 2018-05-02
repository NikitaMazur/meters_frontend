import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Table, FormControl, Button, ControlLabel } from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import { MainTitle } from './App';

const ChangeStatusBlock = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const StyledFormControl = styled(FormControl)`
    margin-right: 15px;
    max-width: 300px;
`;

export default class MetersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ids: [],
            status: 'delivered',
        }
    }

    onCheck(item) {
        this.setState({
            ids: [...this.state.ids, item.id],
        })
    }

    changeStatus(event) {
        this.setState({
            status: event.currentTarget.value,
        })
    }

    onSubmit() {
        let obj = {
            ids: this.state.ids.join(','),
            status: this.state.status
        }

        this.props.changeStatus(obj);
    }

    componentWillMount() {
        this.props.getParcels();
    }

    render() {
        const { parcels } = this.props;
        return (
            <div>
                {parcels.length !== 0 && (
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
                                {parcels.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index}</td>
                                            <td><Link to="/meters/detail/23">13612387136</Link></td>
                                            <td>111</td>
                                            <td>222</td>
                                            <td>333</td>
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
