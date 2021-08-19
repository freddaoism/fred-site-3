import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import React from 'react';

const contentStyle = {
    height: '1080px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

 export const Gallery2 = (props) => {
     return (
    <Carousel autoplay>
    <div>
      <img
      src='img/welcome/welcome3.png'
      style={contentStyle}
      alt='slide one' />
    </div>
    <div>
      <img
      src='img/welcome/welcome1.png'
      style={contentStyle}
      alt='slide two' />
    </div>
    <div>
      <img
      src='img/welcome/welcome2.png'
      style={contentStyle}
      alt='slide three' />
    </div>
    <div>
      <img
      src='img/welcome/welcome4.png'
      style={contentStyle}
      alt='slide four' />
    </div>
  </Carousel>
     );
  }

  