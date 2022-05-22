import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard,  } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdbreact';
import {  Link,useNavigate} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
  const {registerUser,}=useAuth();
  const navigate=useNavigate()
  const [userData,setUserData]=useState({})
  const handleChange=e=>{
    const textField=e.target.name;
    const inputValue=e.target.value;
    const newData={...userData};
    newData[textField]=inputValue;
    setUserData(newData);
}
const handleFormSubmit=e=>{
    if(userData.password!==userData.passwordRecheck){
        alert('Your password did not match')
        
    }
    registerUser(userData.email,userData.password,userData.name,navigate)
    e.preventDefault();

}

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://image.freepik.com/free-photo/colorful-refreshing-green-garden-flowers-there-are-many-kinds-garden-chiang-mai_115980-411.jpg)',
              width: '28rem',  backgroundSize:'cover',
              backgroundRepeat:"no-repeat",
              backgroundPosition:'center center',
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>Regi</strong>
                    <strong className='green-text font-weight-bold'>ster </strong>
                </h3>
              </div>
              <form onSubmit={handleFormSubmit}>
              <MDBInput
                label='Your Name'
                group
                type='text'
                validate
                name="name"
                onChange={handleChange}
                labelClass='white-text'
              />
              <MDBInput
                label='Your email'
                group
                type='email'
                validate
                name="email"
                onChange={handleChange}
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                name="password"
                labelClass='white-text'
                onChange={handleChange}
              />
              <MDBInput
                label='Re-Check Password'
                name="passwordRecheck"
                group
                type='password'
                validate
                labelClass='white-text'
                onChange={handleChange}
              />

              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  
                  <MDBBtn
                    color="success"
                    rounded
                    type="submit" 
                    className='btn-block z-depth-1'
                  >
                   Register
                  </MDBBtn>
                </div>

              </MDBRow>
              </form>
              <MDBCol md='12'>
                <div className=' green-text font-weight-bold'>
                  <MDBInput className=' ' label="Accept the&nbsp;Terms and Conditions" type="checkbox" id="checkbox1" />

                </div>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <Link to="/login" className='green-text ml-1 font-weight-bold'>
                    Log in
                  </Link>
                </p>

              </MDBCol>
            </div>
            
          </MDBCard>
         </MDBCol>
       </MDBRow>
     </MDBContainer>
  );
};

export default Register;