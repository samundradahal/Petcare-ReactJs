import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Hero from "../../components/Hero/Hero";
import About from '../../components/About/About';
import Services from '../../components/Service/Services';
import Client from '../../components/Clients/Client';
import Testimonial from '../../components/Testimonials/Testimonial';
import Contact from '../../components/Contact/Contact';
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Topbar />
      <Hero />
      <About />
      <Services />
      <Client />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
