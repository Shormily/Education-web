import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./AutoPlayFadeSlider.css"
import { useEffect, useState } from 'react';



const AutoPlayFadeSlider = () => {
    
    const settings = {
        dots: true, // Show navigation dots
        infinite: true,
        speed: 1000, // Animation speed in milliseconds
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
        fade: true, // Enable the fade effect
        arrows: true, // Show next/prev arrows
        lazyLoad: 'ondemand',
      };
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        // Trigger the fade-in animation after a delay
        const timeout = setTimeout(() => {
          setIsVisible(true);
        }, 4000);
    
        // Trigger the fade-out animation after a duration
        const timeout2 = setTimeout(() => {
          setIsVisible(false);
        }, 4000);
    
        // Clear the timeouts when the component unmounts or when the animations complete
        return () => {
          clearTimeout(timeout);
          clearTimeout(timeout2);
        };
      }, []);
    
     
    return (
        <>
        
        <div className="autoplay-fade-slider">
      <Slider {...settings} >
        <div className="slider-item banner">
       
        <div className="fade-in-out-text">
        <p className='text-4xl'>This is some text that will fade in from the top and fade out towards the bottom.</p>
    </div>
        
        </div>
        <div className="slider-item banner1">
        <p className={`fade-in-down ${isVisible ? 'fade-out-down' : ''}`}>
        This text will fade in from the top and fade out towards the bottom.
      </p>
        </div>
        <div className="slider-item banner2">
        <p className={`fade-in-down ${isVisible ? 'fade-out-down' : ''}`}>
        This text will fade in from the top and fade out towards the bottom.
      </p>
        </div>
        
      </Slider>
    </div>
   
   
        </>
    );
};

export default AutoPlayFadeSlider;