import * as React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import "./ClientSays.css";
const ClientSays = () => {
  const slides = [
  { 'title': 'First item', 
  'description': 'We are completely awestruck. Speechless. These plans are really stunning. We did not expect something so detailed and absolutely grand. ….thank you so much for all this exceptional work. The house pad design is just inspired.',
   'picture':'https://i.ibb.co/dLrPnm4/waist-up-shot-attractive-young-girlfriend-with-dark-straight-hair-soft-healthy-skin-273609-18318.png'
  },
  { 'title': 'Second item',
   'description': 'Working with Leaves of Green was a pleasure as they were able to give us ideas about planting and enhancing the natural features of our property. We had a vision of what we wanted to achieve and they were able to show us how to implement that plan and make it happen. Guy did a lot of research on our behalf and through his efforts, made things happen.',
   'picture':'https://i.ibb.co/B3r3rkr/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.png'
   },
  {'title': 'Second item',
   'description': '',
   'picture':'https://i.ibb.co/7g1W90D/impressed-smiling-woman-pointing-finger-upper-left-corner-176420-17757.png'
   }
];

  return (
    <Slider  >
  {slides.map((slide, index) => <div   key={index} >
    <div >
  <figure className="swing">
  <img  src={slide.picture} alt="" />
  </figure> 
  <h2>{slide.title}</h2>
  <div className="banner">{slide.description}</div></div>
  <div  className="area" >
            <ul  className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>



 
  )}
</Slider>
  );
};

export default ClientSays;








