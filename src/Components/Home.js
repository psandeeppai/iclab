import React from 'react'
import '../Styles.css'
import {Carousel} from 'react-bootstrap'
const Home = () => {
  return (
    <div className=''>
      <div className='backsty vh-100 '>
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros bg-secondary'>
            <Carousel.Item className='car2 text-center'>
              <h3>"TRAVELOSA IS THE BEST TRAVELLING AGENCY"</h3>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <h3>"TRAVEL TO YOUR DREAMS!"</h3>
              <br></br><br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid bg-warning'>
          
          <div className='container-fluid col-6 px-5 pt-5'>
            <h2 className='intro1'>Welcome to TRAVELOSA</h2><br></br>
            <h3 className='intro2'>WE MAKE YOU TRAVEL HIGHER!🥰</h3><br></br>
            
          </div>
        </div>
        <footer className='text-center text-secondary bg-dark foot'>
        <h3 >Developed by TRAVELOSA Team  PVT. LTD. </h3>
        <p>Live with no excuses and travel with no regrets</p>
        <p>--OSCAR WILDE</p>
        </footer>
      </div>
    </div>
  );
  
}

export default Home