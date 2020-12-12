import React from "react";

import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';
import { Carousel } from '3d-react-carousal';


let slides = [
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img1} alt="1" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img2} alt="2" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img3} alt="3" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img4} alt="4" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img5} alt="5" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={img6} alt="5" />
];

const CarouselSlider = () => (
    <div className='my-4 text-white' id='portfolio' style={{ backgroundColor: '#111430', padding: "40px", margin: "30px 0"}}>
        <h3 className='p-4 text-center'>Here are some of <h3 className='text-success d-inline'>our clients</h3></h3>
        <Carousel slides={slides} autoplay={true} interval={1000} />
    </div>

);
export default CarouselSlider;