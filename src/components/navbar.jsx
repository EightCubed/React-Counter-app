import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return ( 
        <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                No. of Items {" "}
                 <span className="badge badge-pill badge-secondary badge-warning">
                    {this.props.totalCounters}
                 </span>
            </a>
            </div>
            </nav>
        </div>
        );
    }
}
 
export default NavBar;