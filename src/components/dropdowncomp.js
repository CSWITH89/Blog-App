import React from 'react';
 
import { Button } from 'styled-button-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
 
export class SimpleDropdown extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }
 
  handleOpenCloseDropdown() {
      this.setState({
        hidden: !this.state.hidden,
      });
  }
 
  render() {
    const { hidden } = this.state;
    return (
      <Dropdown>
      <br></br>
        <Button
          secondary
          dropdownToggle
          onClick={() => this.handleOpenCloseDropdown()}
        >
          Dropdown Button
        </Button>
        <DropdownMenu hidden={hidden}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default SimpleDropdown;