import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
// import Dropdown from '../components/dropdown';
import Sidebar from '../components/sidebar';
import styled from 'styled-components';
import SimpleDropdown from '../components/dropdowncomp';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Badge} from  'react-bootstrap';


//import {Alert, DropdownButton} from  'react-bootstrap';


// const containerStyle = {
//   width: '1000px'
// };

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// const centerStyle = {
//   display: 'flex',
//   justifyContent: 'center'
// };


export default () => (

  

  <div>
    <Header></Header>
    
    <Sidebar/>
    <Container>
    <Carousel />
    <SimpleDropdown></SimpleDropdown>
      <Content />
    </Container>
    <Abovefooter returnTop="/" returnTopText="Return to top"/>
    <Footer />
  </div>
);


