import React from 'react';
import { Link } from'react-router-dom';
import about1 from  '../../images/istockphoto-941423342-640_adpp_is.mp4';
// import about2 from  '../../images/istockphoto-941431874-640_adpp_is.mp4';
import './About.css'

const About = () => {
    return ( 
        <header>
        <div className="overlay"></div>

        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={about1} type="video/mp4" />
        </video>
      
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
            <h1 className=' mb-5 display-3 font-weight-bold'>About  <span style={{color:'#a3c968'}}>US</span></h1>
              <p className="lead mb-5 text-white " >Established in 1962, Landscaping WP Company proudly serves all major markets, as one of the leading full-service providers for high-end residential estates and commercial landscaping. Landscaping WP is made up of nearly 200 highly skilled landscape experts, including a permanent team of professional turf grass and horticulture managers, landscape designers, chemical technicians, and floriculturists.</p>
              <Link to="/about" style={{color:'#a3c968',textDecoration:'none',fontWeight:'bold'}}>Learn More about us.</Link>
            </div>
          </div>
        </div>
        </header>
    );
};

export default About;
 