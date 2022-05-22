import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import image1 from '../../images/projectbg.png';
import { FaHandsHelping,FaAward} from 'react-icons/fa';
import { HiOutlineLightBulb} from 'react-icons/hi';
import {MdOutlineEngineering} from 'react-icons/md';
import {RiLeafFill} from 'react-icons/ri';
import {GiStopwatch} from 'react-icons/gi';

const styles = {
  fontFamily: "sans-serif",
  marginBottom:'30px',
  marginTop:'25px',

};
const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const Features = () => {
    return (

      <div style={styles}>  
        <h1 className='text-white my-5  fw-bold'>  WHY   <span style={{color:'#a3c968'}}>CHOOSE US</span> </h1>

        <Parallax  bgImage={image1} strength={500}>
      <div style={{ height:900 }}>
        <Row style={insideStyles}>
          <Col xs={12} sm={12} md={3}  className="heavy-rain-gradient color-block-5 mb-3 mx-2 " >
            <FaHandsHelping style={{color:"#a3c968",fontSize:'60px'}}/>
          <h1 className="text-white">30 +</h1>
          <h5 className="text-white">Year Of Experience</h5>
          </Col>
          <Col xs={12} sm={12} md={3} className="heavy-rain-gradient color-block-5 mb-3 mx-2 " >
            <RiLeafFill style={{color:"#a3c968",fontSize:'60px'}}/>
            <h1 className="text-white">2345 </h1>
          <h5 className="text-white">Successfull Projects</h5>
          </Col>
          <Col xs={12} sm={12} md={3} className="heavy-rain-gradient color-block-5 mb-3 mx-2 " >
            <MdOutlineEngineering style={{color:"#a3c968",fontSize:'60px',}}/>
            <h1 className="text-white">347 </h1>
          <h5 className="text-white">Team Members</h5>
          </Col>
          <Col xs={12} sm={12} md={3} className="heavy-rain-gradient color-block-5 mb-3 mx-2 ">
            <FaAward style={{color:"#a3c968",fontSize:'60px'}}/>
            <h1 className="text-white">85 </h1>
          <h5 className="text-white">Winning Awards</h5>
          </Col>
          <Col xs={12} sm={12} md={3} className="heavy-rain-gradient color-block-5 mb-3 mx-2 " >
            <HiOutlineLightBulb style={{color:"#a3c968",fontSize:'60px'}}/>
            <h1 className="text-white">Min 300</h1>
          <h5 className="text-white">Innovative Designers</h5>
          </Col>
          <Col xs={12} sm={12} md={3}  outline color="info" className="heavy-rain-gradient color-block-5 mb-3 mx-2 ">
            <GiStopwatch style={{color:"#a3c968",fontSize:'60px'}}/>
            <h1 className="text-white">10 Hours</h1>
          <h5 className="text-white">Proper Timing Work</h5>
          </Col>
        </Row>
      </div>
        </Parallax>
    </div>
    );
};

export default Features;