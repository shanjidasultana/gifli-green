import React, { useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBAnimation } from 'mdbreact';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const Shop = () => {
  const [shops,setShops]=useState([]);
  fetch('http://localhost:1000/shops')
  .then(res=>res.json())
  .then(data=>setShops(data));
    return (
      <>
      <div className='text-center'>
                <h1  style={{   backgroundColor: "{rgba(159, 255, 159, 0.397)}"}} className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>Shop</strong>
                    <strong style={{color:'#a3c968'}} className=' font-weight-bold'> Now </strong>
                </h1>
      </div>
      <OwlCarousel autoplay='true'
        autoplayTimeout='1000'
        animateIn="true"
        autoplayHoverPause='true'  loop fluidSpeed="5000">  
          {shops.map(shop=>
           <MDBCard className='bg-image hover-zoom' wide cascade style={{ maxWidth: '540px',background:'#e7eee5' }} >
      <MDBRow>
        <MDBCol>
        <MDBAnimation tag="i" reset={true} animation="slide-out-right" duration={500} >
          <MDBCardImage   hover
              overlay='white-slight'
              className='card-img-top hover-shadow' src={shop.picture} alt='...' fluid />
        </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  
          
        )
         
}
       </OwlCarousel>  
       </>
         
    );
};

export default Shop;