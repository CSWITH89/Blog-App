import React from 'react';
import Carousel from 'nuka-carousel';

const divStyle = {
    height: '263px',
    width: '723px'
  };



export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <Carousel
      style={divStyle}
        slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >
        <img  src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
        <img src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
        <img src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
        <img src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
        <img src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
        <img src="https://www.canterburybid.co.uk/wp-content/uploads/2015/12/Small-Business-Saturday-UK-Facebook-Banner-2015.jpg" />
      </Carousel>
    );
  }
}