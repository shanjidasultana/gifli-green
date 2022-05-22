import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Blog = () => {
    return (
      <MDBRow>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            top
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2821%29.webp'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='white-text' />
            </a>
            <MDBCardTitle>MDBCard Title</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    );
};

export default Blog;
// https://i.ibb.co/D8TwY0c/60257402-team-der-g-rtner-blumen-im-garten-zu-pflanzen.png
// https://i.ibb.co/hd0fHRj/IMG-0857-705x529-1.png
// https://i.ibb.co/gWyhW3W/240-F-297737264-Vp2q-KBkb-JH8-Jzg-DGx-XK8-KI7-Gu-ZKf2mi-O.png

