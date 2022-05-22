import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Features from '../Features/Features';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import ClientSays from '../ClientsSays/ClientSays';
const Home = () => {
   
    return (
        <div style={{background:'#e7eee5'}}>
            <Header/>
            <Banner/>
            <Service/>
            <Features/>
            <Projects></Projects>
            <Shop/>
            <About/>
            <ClientSays/>
            <Footer/>
        </div>
    );
};

export default Home;