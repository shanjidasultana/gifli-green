import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import {useNavigate,Link ,useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MDBAnimation,  MDBInput} from 'mdbreact'
const Login = () => {
  const navigate=useNavigate();
    const location =useLocation();
    const {loginUser, logoutUser,user,isLoading,error,signInWithGoogle}=useAuth()
    const [userData,setUserData]=useState({})
    const handleChange=e=>{
        const textField=e.target.name;
        const inputValue=e.target.value;
        const newData={...userData};
        newData[textField]=inputValue;
        setUserData(newData);
    }
    const handleFormSubmit=e=>{
        loginUser(userData.email,userData.password,navigate,location)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(navigate,location)
    }
    const handleLogout=()=>{
        logoutUser()
    }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className=' light-green darken-1' onClick={handleShow}>
         Login
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Body style={{background:'black'}}>
       
      <MDBRow>
        <MDBCol md="6" lg="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header  dusty-grass-gradient  rounded d-flex">
              <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src="https://i.ibb.co/sRf6Z1m/realistic-green-leaf-isolated-vector-18224375-removebg-preview-1.png" />
            <h3 className="my-3 text-white">
                  <MDBIcon icon="lock" /> Login:
            </h3>
             </MDBAnimation>
                
              </MDBCardHeader>
              <MDBIcon fab icon="google-plus-g"/>
              <form onSubmit={handleFormSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    name="email"
                    onChange={handleChange}
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                    onChange={handleChange}
                  />

              <div className="text-center mt-4">
              <MDBInput label="" checked type="checkbox" id="checkbox2" />                </div>

                <MDBBtn
                  color="success"
                  className="mb-3 border-0"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light text-center">
                  <Link to="/register">Not a member? Register Now</Link>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </Modal.Body>
        <Modal.Footer style={{background:'black'}}>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;

