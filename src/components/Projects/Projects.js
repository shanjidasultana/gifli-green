import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import proimg1 from '../../images/p1.png';
import proimg2 from '../../images/p2.png';
import proimg3 from '../../images/p3.png' ;
import proimg4 from '../../images/p4.png';
import proimg5 from '../../images/p5.png';
import proimg6 from '../../images/p6.png';
import './Project.css'

 
const Projects = () => {
    return (
         <div>  
           
          <div class='container-fluid' >      
           <div className="row " style={{marginBottom: "20px"}} >      
           <h1 className=' text-white my-5  fw-bold ' style={{   backgroundColor: "{rgba(159, 255, 159, 0.397)}"}}>Our  <span style={{color:'#a3c968'}}>Projects </span></h1>
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div className="box">
              <img  src={proimg1} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 1</h3>
                     </div>
                           
              </div>
            </div>  
            <div className="box">
              <img   src={proimg2} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 2</h3>
                     </div>
                           
              </div>
            </div>   
            <div className="box">
              <img   src={proimg3} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 3</h3>
                     </div>
                           
              </div>
            </div>   
            <div className="box">
              <img   src={proimg4} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 4</h3>
                     </div>
                           
              </div>
            </div> 
            <div className="box">
              <img   src={proimg5} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 5</h3>
                     </div>
                           
              </div>
            </div>   
            <div className="box">
              <img   src={proimg6} alt=""/>
              <div className="box-overlay"></div>
                    <div className="box-content">
                        <div className="inner-content">
                            <h3 className="title">project 6</h3>
                     </div>
                           
              </div>
            </div>  
      </OwlCarousel>  
      </div>  
  
      </div> 
    );
};

export default Projects;