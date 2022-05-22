import React from 'react';
import './Banner.css'
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
import img1 from '../../images/back1.png';
import img2 from '../../images/back2.png';
import img3 from '../../images/bg3.png';

const Banner = () => {
    return (
      <MDBCarousel style={{position:"relative"}}  showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={img1} alt='...' />
          <h3 className=' heading ' >MAKE YOUR HOME LOOK LIVLY <br/> TURN HOME TO A GARDEN </h3>
          <MDBBtn className=' head '> Know More</MDBBtn>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={img2} alt='...' />
          <h3 className='  heading'>WE KNOW THE PLANT BETTER  <br/> AND HELP YOU TO MAKE A DREAM GARDEN</h3>
          <MDBBtn className=' head'> Know More</MDBBtn>
        </MDBCarouselItem>
        <MDBCarouselItem>
    
          <MDBCarouselElement src={img3} alt='...' />
          <h3 className='  heading'>GARDEN GIVES STRENGTH TO YOUR SOUL<br/> LET'S PLAN YOUR GARDEN TOGETHER </h3>
          <MDBBtn className=' head'> Know More</MDBBtn>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
 
    );
};

export default Banner;