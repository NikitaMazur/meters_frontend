import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default (props) => {
    const { role, logout } = props;
    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Meters</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav navbar-right">
                    {
                        role === "ADMIN" && (
                            <React.Fragment>
                                <li><Link to="/meters/list">Meters List</Link></li>
                                <li><Link to="/meters/add">Add Meter</Link></li>
                            </React.Fragment>
                        )
                    }
                    <li><Link to="/meters/reading">Meters Reading</Link></li>
                    <li><a href="/login" onClick={logout}>Logout</a></li>
                </ul>
            </Navbar.Collapse>
        </Navbar> 
    );
}
