import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Footer from '../Footer/Footer';
import HeaderPart from '../HeaderPart/HeaderPart';
import MainPageNav from '../MainPageNav/MainPageNav'

const HomePage = () => {
    return (
        <>
            {/* <MainPageNav></MainPageNav> */}
            <MainPageNav></MainPageNav>
            <HeaderPart></HeaderPart>
            <CarouselSlider></CarouselSlider>
            <Footer></Footer>
        </>
    );
};

export default HomePage;