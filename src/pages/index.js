import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Abovefooter from '../components/abovefooter';
import Sidebar from '../components/sidebar';
import Dropdowncomp from '../components/dropdowncomp'
import styled from 'styled-components';

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
    <Header />

    <Sidebar />
    <Container>
      <Carousel />
      <Dropdowncomp></Dropdowncomp>
      <Content query="filteredByLatest" />
    </Container>
    <Abovefooter returnTop="/" returnTopText="Return to top" />
    <Footer />
  </div>
)


