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

  changeQuery() {
    
  }
 
  render() {
    const { hidden } = this.state;
    return <Dropdown>
        <br />
        <Button secondary dropdownToggle onClick={() => this.handleOpenCloseDropdown()}>
          SORT POSTS
        </Button>
        <DropdownMenu hidden={hidden}>
          <DropdownItem  path="/hello">
           Sort Posts by Newest
          </DropdownItem>
          <DropdownItem>Sort Posts by Oldest</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  }
};

export default SimpleDropdown;