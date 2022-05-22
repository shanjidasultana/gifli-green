import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SkillBar from 'react-skillbars';

const Skill = () => {
    const skills =[
        {
          "type": "User Experience",
          "level": 100
        },
        {
          "type": "Creative Idea",
          "level": 80
        },
        {
          "type": "Design Quanlity",
          "level":90
        },
        {
          "type": "Greener Environment",
          "level": 45
        },
        {
          "type": "Inovetive Modification",
          "level": 25
        },
        {
          "type": "Decorative Garden",
          "level": 50
        },
        {
          "type": "Tree Farm",
          "level": 20
        }
      ],
      colors = {
        "bar": {
          "hue": 32,
          "saturation": 50,
          "level": {
            "minimum": 30,
            "maximum": 70
          }
        },
        "title": {
          "text": {
            "hue": 45,
            "saturation": {
              "minimum": 30,
              "maximum": 70
            },
            "level": 50
          },
          "background": {
            "hue": 30,
            "saturation": {
              "minimum": 30,
              "maximum": 70
            },
            "level": {
              "minimum": 0,
              "maximum": 50
            }
          }
        }
      }
       
 
  
    return (
        <div className='container mt-5'>
            <h1 className=' mb-5'>OUR SKILLS <span style={{color:'#a3c968'}}>& EXPERTISE</span></h1>
        <Row>
            <Col xs={12} className="my-4" sm={12} md={6}>
             <SkillBar width={290} skills={skills} colors={colors} animationDuration={7000}/>
            </Col>
            <Col  xs={12} className="my-4"  sm={12} md={6}>
              <p>Whether you're interested in extensive installation, garden maintenance, or treating only one area of your garden; our experienced and highly-trained staff of landscape architects and designers will help create the beautiful and functional setting you envision. If you are currently working with a landscape architect, or if you are a landscape architect with a client in need of a contractor, Landscaping WP is prepared to help you throughout the contracting process. Our team will guide you through budgeting, formal estimating, project management and property maintenance to ensure your design reaches its full potential.</p>
            </Col>

        </Row>

        </div>
    );
};

export default Skill;