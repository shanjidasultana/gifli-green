import React, { useState } from 'react';
import { Card, Col, Row,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leaf from '../../images/leaf.png';
import './Service.css'
const Service = () => {
    const [services,setServices]=useState([]);
    fetch('http://localhost:1000/services')
    .then(res=>res.json())
    .then(data=>setServices(data));

    return (
      <div className='my-5 container '>
               <h1  style={{   backgroundColor: "{rgba(159, 255, 159, 0.397)}"}} className=' text-white my-5 fw-bold'>OUR  <span style={{color:'#a3c968'}}>SERVICES</span></h1>
       <a  href="#head" ><img style={{position:'fixed',zIndex:'11',padding:'5px 10px', background:'white',borderRadius:'10%',transition:' all .3s ease-in-out 0s',bottom:' 25px', right:' 45px',}} className='hover-shadow'  src={leaf} alt=""/></a>
      <Row xs={1} sm={2} md={3} className="g-3 ">

        {services.map(service=>
        <Col>
            <Card className="border-0 my-3 mx-2 shadow-lg card">
              <Card.Img variant="top"  src={service.picture} className='img-fluid hover-shadow'  />
              <div className="backgroundEffect"></div>
              <Card.Body  className='content'>
                <Card.Title className=' hea'>Name</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Link  to={`/${service._id}`}><button  style={{background:'#a3c968'}} className="text-white btn fs-5 fw-bold py-2  border-0"size="sm">
                  Book Now 
              </button>
              </Link>
              
            </Card>
          </Col>
          
        )
         
}
        </Row> 

        
</div>
    );
};

export default Service;