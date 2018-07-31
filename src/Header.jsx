import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  class Header extends React.Component{
   

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div >
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Android Enthusiast Jakarta</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Card/">Profil</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="">Speaker</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Tutorial
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Android
                      </DropdownItem>
                      <DropdownItem>
                    React
                      </DropdownItem>
                      <DropdownItem divider />
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

  }

  export default Header;