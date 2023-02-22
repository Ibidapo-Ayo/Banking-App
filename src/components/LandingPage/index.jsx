import React, { useContext, useEffect } from 'react'
import NavBar from './NavBar';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import { GlobalConText } from '../useContext';
import Spinner from '../Spinner';
import Testimonial from './Testimonial';

function LandingPage() {
  const { Loading } = useContext(GlobalConText);
  const [isLoading, setIsLoading] = Loading

  useEffect(() => {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
    },[]);
  return (
    <div>
   {isLoading ? <Spinner /> : 
    <div>
       <NavBar />
     <Banner />
     <Features />
     <Testimonial />
     <Footer />
    </div>
  }
    </div>
  )
}

export default LandingPage
