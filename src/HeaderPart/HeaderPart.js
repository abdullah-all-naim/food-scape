import React from 'react';
import frame from '../frame.png'


const HeaderPart = () => {
    return (
        <div className='container mt-5' style={{marginBottom: '100px'}}>
            <div className='row  d-flex justify-content-center align-items-center'>
                <div className='col-md-4 text-left' data-aos='fade-right'>
                    <h1 className='font-weight-bold'>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                    <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsa corporis dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis?</p>
                    <button className='btn px-5 py-3 mb-2 bg-info' style={{borderRadius:'40px', fontWeight:'bold'}} >Get Started</button>
                </div>
                <div className='col-md-8' data-aos='fade-left'>
                    <img style={{ width: '100%' }} src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderPart;