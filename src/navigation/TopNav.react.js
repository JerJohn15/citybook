import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, form, FormGroup, FormControl, Glyphicon, Row } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import '../../styles/styles.scss';

export default class TopNav extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: ''
    }
  }

  _onSelect(){
    console.log('New slection!')
  }

  render() {
    let
      filterOptions,
      searchFilter;
    if(this.props.loaded){
      searchFilter = (
        <Dropdown
          options={this.props.filterOptions}
          onChange={this._onSelect}
          placeholder="All Categories"
        />
      )

    } else {
      filterOptions = <NavItem eventKey={1} href="#">Loading...</NavItem>
    }
    return (
      <div>
        <Navbar className="citybook-header affix">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://www.citybook.io">CityBook</a>
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Row>
            <Navbar.Form className='main-search' pullLeft>
                <FormGroup style={{display: 'inline'}}>
                  <FormControl onChange={this.props.setSearchInput} type="text" placeholder="Search..." />
                </FormGroup>
            </Navbar.Form>
          <Navbar.Collapse>

            <Nav pullRight>
              <NavItem eventKey={1} href={this.props.spreadsheetId} target="_blank"><Glyphicon glyph='th-list'/> Data Source</NavItem>
              <NavItem eventKey={2} href="#" onClick={ ()=> window.print()}><Glyphicon glyph='print'/> Print</NavItem>
            </Nav>
          </Navbar.Collapse>
          </Row>
        </Navbar>
        </div>
    );
  }
}
