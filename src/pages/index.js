import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
import Dropdown from '../components/dropdown';
import Sidebar from '../components/sidebar';
//import 'bootstrap/dist/css/bootstrap.min.css';



import {Badge} from  'react-bootstrap';



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
    <p>
  Badges <Badge>42</Badge>
</p>
    <Dropdown></Dropdown>
      <Content />
    </div>
    <Abovefooter returnTop="/" returnTopText="Return to top"/>
    <Footer />
  </div>
);


