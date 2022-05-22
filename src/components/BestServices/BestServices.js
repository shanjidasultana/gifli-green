import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../images/f1.png';
import img2 from '../../images/f2.png';
import img3 from '../../images/f3.png';
import img4 from '../../images/f4.png';
import img5 from '../../images/f5.png';
import img6 from '../../images/f6.png';

const BestServices = () => {
    return (
        <OwlCarousel autoplay='true'
        autoplayTimeout='1000'
        animateIn="true"
        autoplayHoverPause='true'  loop fluidSpeed="5000" >
        <div class='item'>
            <img src={img1} alt=""/>
        </div>
        <div class='item'>
            <img src={img2} alt=""/>
        </div>
        <div class='item'>
           <img src={img3} alt=""/>
        </div>
        <div class='item'>
           <img src={img4} alt=""/>
        </div>
        <div class='item'>
            <img src={img5} alt=""/>
        </div>
        <div class='item'>
           <img src={img6} alt=""/>
        </div>
        <div class='item'>
           <img src={img1} alt=""/>
        </div>
        <div class='item'>
      <img src={img2} alt=""/>
        </div>
        <div class='item'>
          <img src={img3} alt=""/>
        </div>
        <div class='item'>
            <img src={img4} alt=""/>
        </div>
        <div class='item'>
            <img src={img5} alt=""/>
        </div>
        <div class='item'>
          <img src={img6} alt=""/>
        </div>
    </OwlCarousel>
    );
};

export default BestServices;