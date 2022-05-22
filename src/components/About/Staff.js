import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MDBRipple , MDBBtn, MDBIcon} from 'mdb-react-ui-kit';

const Staff = () => {
    return (
        <div className='container my-5'>
        <h1 className=' mb-5'>MEET  <span style={{color:'#a3c968'}}>OUR STAFFS</span></h1>
        <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="swing">
                  <img height={240}  className="img-thumbnail img-fluid hover-shadow"src="https://i.ibb.co/9TBBKsB/farmer-man-holding-organic-plants-showing-ok-sign-young-caucasian-bio-vegetables-garden-136188340.png"  className="img-fluid" alt="" />

               <h3>James Johnson</h3>
               <h6>Support Staff</h6>
                   <div className="d-flex  align-item-center justify-content-center mr-1">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='/'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='/'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='/'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

               </div> 
            
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="swing">
      
            <img height={240} className="img-thumbnail img-fluid hover-shadow" src="https://i.ibb.co/Ph3Dr1m/woman-agricultural-expert-standing-garden-tablet-172603912.png" className="img-fluid"  alt="" />

               
                     <h3>James Johnson</h3>
               <h6>Assistent Maneger</h6> 
               <div className="d-flex  align-item-center justify-content-center mr-1">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='/'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='/'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='/'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

               </div>           
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="swing">
            
                <img height={240} className="img-thumbnail img-fluid hover-shadow" src="https://i.ibb.co/RhcfLhs/sexy-farmer-hold-shovel-muscular-ranch-man-farming-agriculture-cultivation-garden-tools-eco-farm-wor.png"  className="img-fluid" alt="" />
               
                     <h3>Michel Black</h3>
               <h6>CEO</h6>  
                   <div className="d-flex  align-item-center justify-content-center mr-1">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='/'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='/'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='/'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

               </div>           
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="swing">
            
                <img  height={240} className="img-thumbnail img-fluid hover-shadow"src="https://i.ibb.co/52PJ4L7/woman-lettuce-standing-hydropohonic-farm-pretty-muslim-woman-lettuce-standing-hydropohonic-farm-fema.png"  className="img-fluid" alt="" />
                
                     <h3>Paurilo Smiti</h3>
               <h6>Support Staff</h6>  
                   <div className="d-flex  align-item-center justify-content-center mr-1">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='/'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='/'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='/'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

               </div>           
            </Col>
  
        </Row>

        


    </div>
    );
};

export default Staff;