import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize'

class Nav extends Component {
    
    render() {
        
      return (
        <Navbar brand='Pokemon Go Trading Post' right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    );
}
}

export default Nav;
