import Footer from "components/Footer/Footer";
import AboutUs from "components/Sections/AboutUs";
import ContactUs from "components/Sections/ContactUs";
import Header from "components/Sections/Header";
import Nav from "components/Sections/Nav";
import Services from "components/Sections/Services";
import React from "react";
import styled from "styled-components";

const Home =()=>{
    return(<>
    <Nav />
    <Header />
    <Services />
    <AboutUs />
    <ContactUs />
    <Footer />
    </>
    );
}

export default Home;

const Container = styled.div``