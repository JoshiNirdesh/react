import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/nepal1.jpg'
import image2 from '../assets/nepal2.jpg'
import image3 from '../assets/nepal3.jpg'


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className='car'>
                    <img src={image1} />
                    <p className='car-text'>Nepal is beautifull</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className='car-text'>Nepal is beautifull</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className='car-text'>Nepal is beautifull</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;