import React from 'react'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
// import abovefooter from '../components/abovefooter';

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
    <div style={containerStyle}>
      <Content />
    </div>
    {/* <abovefooter /> */}
    <Footer />
  </div>
);


