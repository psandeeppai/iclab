import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abt bg-total'>
        <div className='abtbg '>
            <h1 className='org text-center'>travel high....</h1>
        </div><br></br><br></br><br></br>
        <h2 className='text-center vision'>Contact and About Us</h2>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Organisation Name</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          TRAVELOSA PVT. LTD
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Location & Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Adyar, Mangalore, Karnataka
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          cccvvvtttee
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          travelosa@gmail.com
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>

        <div>
            <h2 className='text-center bg-danger'>Our Vision</h2>
            <h4 className='text-center vision1 px-5 '>To provide best and comfortable travel experience to all our customers</h4>
        </div><br></br><br></br><br></br>
        <div>
            <h2 className='text-center bg-info'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>Enhance the beauty of TRAVELLING</h4>
        </div><br></br><br></br>

        
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Developed by TRAVELOSA Team PVT. LTD. </h3>
        </footer>
    </div>
  )
}

export default About