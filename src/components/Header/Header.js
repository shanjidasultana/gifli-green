import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import Login from '../Login/Login';
// import '../Banner/Banner.css'
const Header = () => {
    return (
        <Navbar id="head"  className='navbar navbar-expand-md ' style={{background:'#a3c968',}} collapseOnSelect expand="lg"  >
  <Container >
  <Navbar.Brand  href="#home"><div  style={{fontSize:"40px",color:'white',fontFamily:"'Nosifer', cursive",display:'flex',alignItems:'center',justifyContent:"center",}}><img className='mr-3' src={logo} alt=""/><span style={{color:'forestgreen'}}> GIFLI GREEN </span></div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="text-white">
    <Nav style={{}}>
     <Link  style={{color:'forestgreen',textDecoration:"none",marginRight:"8px"}} to="/" className='text-white ml-5 fw-bold'>Home</Link>
      <Link  style={{color:'forestgreen',textDecoration:"none",marginRight:"8px"}} to="about" className='text-white  fw-bold' >About Us</Link>
      <Link  style={{color:'forestgreen',textDecoration:"none",marginRight:"8px"}} to="contact"  className='text-white  fw-bold' >Contact Us</Link>
      <Link style={{color:'forestgreen',textDecoration:"none",marginRight:"8px"}} to="blog" className='text-white  fw-bold' >Blog</Link>
       <Link style={{color:'forestgreen',textDecoration:"none",marginRight:"8px"}} to=""><Login/></Link>
      {/* <Link to="dashboard" className='text-white  fw-bold' >Dashboard</Link> */}
      {/* <Link to="shop" className='text-white  fw-bold' >Shop</Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
