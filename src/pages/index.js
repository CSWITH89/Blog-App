import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
import Sidebar from '../components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Alert} from  'react-bootstrap';



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

    <Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>

    <br/>
    <Sidebar/>
    <div style={containerStyle}>
      <Content />
    </div>
    <Abovefooter returnTop="/" returnTopText="Return to top"/>
    <Footer />
  </div>
);


