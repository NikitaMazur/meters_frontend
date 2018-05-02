import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        }
    }

    isVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {
        console.log('BUMB')
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Meters</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li><Link to="/meters/list">Meters List</Link></li>
                        <li><Link to="/meters/reading">Meters Reading</Link></li>
                        <li><a onClick={this.props.logout}>Logout</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        );
    }
}
