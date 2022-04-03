import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SectionCommonBanner } from "../allSectionCommonBanner";
import { CustomerFeedBackCard } from "./AllKindOfCards";
import { LeftHeader } from "./allHeader";
import { CustomerFeedbackSlider,BlogSlider } from "./allSlickSlider";
import { Header } from "./allHeader";
import { Container , Nav ,Navbar,FormControl,Offcanvas,Form,Button,Col,Tab,Row} from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const About = () => {
    return(
        <>
            <title>About | Organic </title>
          <SectionCommonBanner
              PageNAme="About Us"
              Path="Home-about us"
          /> 
         {/* few word start */}
         <div style={{marginTop:"80px",marginBottom:"80px"}}  className="container ">
             <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 d d-flex align-items-center">
                     <img className="img-fluid" src="https://i.postimg.cc/cJ597qRP/pngwing-1.png"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 FewWords">
                  <h6>
                  A Few Words About Us
                  </h6>
                  
                  <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                  <h2 className="mt-3 mb-3">
                  A shop for good people
                   by good people
                  </h2>
                   </AnimationOnScroll>
                  <span>
                  Buy natural, sustainable and chemicalfree products from local sellers across the country.
                  We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.        
                  </span>
                  <div className="row mt-3">
               <div className="col-lg-3 col-md-3 col-sm-3 mt-3">
                  <img  className="Founderimg img-fluid" src="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg" />
               </div>
               <ul className="col-lg-8 col-md-8 col-sm-8 mt-3 mb-0 d-flex flex-column justify-content-center">
                   <li>  
                   <h5>
                      Hamza Altamas
                   </h5> 
                   </li>
                   
                 <li>
                 <h6>
                     Founder
                   </h6>
                 </li>
               </ul>
             </div>
                </div>
             </div>
          </div>
         {/* few word end */}
         {/* what makes us different start */}
         <div className="container">
         <span className="whychosseHeader">Why Choose Us</span>
         </div>
         <LeftHeader
            title="What makes us different"
         />
         <div className="container">
           <span className="whychosseHeader">Buy natural, sustainable and chemicalfree products from local sellers across the country.</span>
          </div>
          <div className="container mt-5 mb-5 about_tab_container">
          <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">100% Organic</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Modern Farm</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Always Fresh</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Expert Team Member</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content className="mt-4">
        <Tab.Pane eventKey="first">
          <h6>100% Organic</h6>
          <h2>What makes us different</h2>
          <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul type="disk" className="mt-5">
             <li>Consectetur adipiscing elit, sed do Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
             <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
             <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>

          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <h6>Modern Farm</h6>
          <h2>What makes us different</h2>
          <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul type="disk" className="mt-5">
             <li>Consectetur adipiscing elit, sed do Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
             <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
             <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>

          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <h6>Alway Fresh</h6>
          <h2>What makes us different</h2>
         
          <ul type="disk" className="mt-5">
             <li>Consectetur adipiscing elit, sed do Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
             <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
             <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>

          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <h6>Expert Team Member</h6>
          <h2>What makes us different</h2>
          <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
         
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


          </div>
          <div className="container mt-5 mb-5">
              <LeftHeader
                title="Testimonial"
              />
            <CustomerFeedbackSlider/>
          </div>


         {/* what makes us different end */}
           {/* latest blog start */}
      <div className="container blog_slider_container">
      <Header
            title="Latest Blog"  
      />
      <div className="row mt-5 mb-5">
         <BlogSlider/>
      </div>
      </div>
      {/* latest blog end */}
        </>
    )
}


export default About;

// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////