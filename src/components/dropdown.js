import React, { Fragment } from 'react';
import {
  UncontrolledButtonDropdown, ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return <Fragment>
            <br />
            <UncontrolledButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>Button Dropdown</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Sort Posts</DropdownItem>
                <DropdownItem>Sort Posts by Newest</DropdownItem>
                <DropdownItem>Sort Posts by Oldest</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <br />
          </Fragment>
    }
}