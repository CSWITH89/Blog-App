import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
import Dropdown from '../components/dropdown';
import Sidebar from '../components/sidebar';
//import 'bootstrap/dist/css/bootstrap.min.css';


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
    <Sidebar/>
    <div style={containerStyle}>
    <Dropdown></Dropdown>
      <Content />
    </div>
    <Abovefooter returnTop="/" returnTopText="Return to top"/>
    <Footer />
  </div>
);


