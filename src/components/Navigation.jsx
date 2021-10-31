﻿import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link class="navbar-brand" to="/">
                        RNAMake
                    </Link>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item  /about`}>
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item  /contact`}>
                                <Link class="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className={`nav-item  /documentation`}>
                                <Link class="nav-link" to="/documentation">
                                    Documentation
                                </Link>
                            </li>
                            <li className={`nav-item  /Workspace`} >
                                <Link class="nav-link" to="/Workspace">
                                    Workspace
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
