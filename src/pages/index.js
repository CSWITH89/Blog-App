import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
import Dropdown from '../components/dropdown';
import Sidebar from '../components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Alert, DropdownButton} from  'react-bootstrap';



const containerStyle = {
  width: '1000px'
};

// const centerStyle = {
//   display: 'flex',
//   justifyContent: 'center'
// };


export default () => (

  

  <div>
    <Header></Header>
    <Carousel />

    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

    <br/>
    <Sidebar/>
    <div style={containerStyle}>
    <Dropdown></Dropdown>
      <Content />
    </div>
    <Abovefooter returnTop="/" returnTopText="Return to top"/>
    <Footer />
  </div>
);


