import React from 'react';
import  About from '../../images/back3.jpg'
import  Skill from './Skill'
import  './About.css'
import Certificate from './Certificate';
import Header from '../Header/Header';
import Staff from './Staff';
import BestServices from '../BestServices/BestServices';

const AboutUsMore = () => {
    return (
        <div>
           <Header/>
           <img src={About} className="img-fluid clip-animation" alt=""/> 
           <Skill/>
           <Staff/>
           <Certificate/>
           <BestServices/>
        </div>
    );
};

export default AboutUsMore;