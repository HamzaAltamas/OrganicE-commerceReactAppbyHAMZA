import React, { useState } from "react";
import "../index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { DiscountCard, MiniSlickCard,TrendyProductCard,DiscoverProductCard,WhyChooseCard } from "./AllKindOfCards";
import { MiniCardSlick,FlashDealSlider,CustomerFeedbackSlider,BlogSlider } from "./allSlickSlider";
import { Container , Nav ,Navbar,FormControl,Offcanvas,Form,Button,Col,Tab,Row} from "react-bootstrap";
import { Header,LeftHeader } from "./allHeader";
import {CountdownClock,DealofWeekCountDownClock} from "./CountDown";


const Home = () => {








    return(
           
        <>
        <title>Home | Organic </title>
        {/* banner start */}
        
            <div className="container-fluid banner_conatiner">
               <div className="container bannerInnerContainer">
                   
                 <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                 <div className="col-lg-6 col-md-6">
                          <h1>
                          ORGANIC FLAVORS 
                           FROM <span>FARM</span>
                          </h1>
                     </div>
                     <div className="col-lg-5 col-md-5 mt-3">
                     Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                     </div>
                    
                 <a href="">
                 <div   className="mt-4 banner_btn">
                        Shop Now
                    </div>
                 </a>
                </AnimationOnScroll>
              
                    
                   
                     
               </div>
            </div>
        {/* banner end */}

        {/* discount cards start */}
         <div className="container discount_card_container">
                <div className="row d-flex justify-content-center">
                <DiscountCard
                    imgsourse="https://i.postimg.cc/L5XkRdPs/discount-Icon.png"
                    Cardheader="Discount Offer"
                    cardTitle="Every week new sales"
                />
                <DiscountCard
                    imgsourse="https://i.postimg.cc/DwXr2kCC/headphone.png"
                    Cardheader="Support 24/7"
                    cardTitle="Dedicated support Team"
                />
                <DiscountCard
                    imgsourse="https://i.postimg.cc/Vv2JT5cz/truck.pngv"
                    Cardheader="Free Delivery"
                    cardTitle="For all orders over $99"
                />
                <DiscountCard
                    imgsourse="https://i.postimg.cc/pLJD9YH8/credit-card.png"
                    Cardheader="Secure Payment"
                    cardTitle="100% Secure payment"
                />
                
                </div>
         </div>
        {/* discount cards end */}

        {/* mini item slick start */}
        <div className="container mini_item_slick_container">
             <MiniCardSlick/>
        </div>
        {/* mini item slick end */}

        {/* trending product catagory tab start */}
        <Header
               title="Trending Products Category"
        />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
         <div className="container trending_product_container">
            <div className="row">
               <div className="col-lg-3 col-md-3">
                     
                    <div className="col-lg-12">
                        <div className="tendingt_tab_buttons">
                    
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
           <Nav.Link eventKey="first"><img  className="img-fluid" src="https://i.postimg.cc/RV0bmjSH/tabBtn.png"/> <span>Vegetable</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="second"><img  className="img-fluid" src="https://i.postimg.cc/kGyQtX7y/tabbtn2.png"/> <span>Fruits</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="third"><img  className="img-fluid" src="https://i.postimg.cc/rshdkd87/tab3.png"/> <span>Green Vegetable</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="fourth"><img  className="img-fluid" src="https://i.postimg.cc/TP6fwRHw/tab4.png"/> <span>Onion</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="fifth"><img  className="img-fluid" src="https://i.postimg.cc/c41K1Gb0/tabbtn5.png"/> <span>Lemon</span></Nav.Link>
        </Nav.Item>
        
      </Nav>
    
                              
    
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                        <div className="foods_for_live">
                            <h4>
                            Fruits For Live 
                               Healthy
                            </h4>
                            <span className="mt-3">
                            Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            </span> <br/><br/>
                            <a href=""> 
                               Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="foods_for_live2">
                            <h4>
                            Fruits For Live 
                               Healthy
                            </h4>
                            <span className="mt-3">
                            Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            </span> <br/><br/>
                            <a href=""> 
                               Shop Now
                            </a>
                        </div>
                    </div>
               </div>
               <div className="col-lg-9 col-md-9">
                    
             
  
  

      <Tab.Content>
        <Tab.Pane eventKey="first">
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/26yfVThc/fulcopi.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/026TwcjF/orange-Tab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/BvNYyKt2/strawberrytab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3JMs22Gw/yellow-Lemontab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/4xW22cYV/peachtab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/yYBfVj90/tomatotab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
                             <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/26yfVThc/fulcopi.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/026TwcjF/orange-Tab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/BvNYyKt2/strawberrytab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3JMs22Gw/yellow-Lemontab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/4xW22cYV/peachtab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/yYBfVj90/tomatotab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3JMs22Gw/yellow-Lemontab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/4xW22cYV/peachtab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/yYBfVj90/tomatotab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/26yfVThc/fulcopi.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/026TwcjF/orange-Tab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/BvNYyKt2/strawberrytab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                               
                               
        </Tab.Pane>
      </Tab.Content>
  
    
            
               </div>
            </div>
         </div>
        </Tab.Container>
        {/* trending product catagory tab end */}

        {/* Flash Deals Of The Week start */}
        <div className="container-fluid weekStart_Container mb-5">
             <div className="container"> 
                <div className="row">
                   <div className="col-lg-6 col-md-6">
                   <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                   <h3>Flash Deals Of The Week</h3>
                   </AnimationOnScroll>
                      
                      <h6 className="mb-2 mt-2">
                      Hurry Up And Get 25% Discount
                      </h6>
                      <span >
                      Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                      </span>
                      <a href="">
                           <div   className="mt-4 banner_btn">
                                 Shop Now
                           </div>
                      </a>
                     
                     <CountdownClock/>
                   </div>
                </div>
             </div>
        </div>
     {/* Flash Deals Of The Week end */}

      {/* discover our product start */}
      <Header
               title="Discover Our Products"
        />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  
      <div className="container ">
         <div className="row d-flex justify-content-center mt-3 discover_product_header_container">
         <Nav variant="pills" className="d-flex justify-content-center">
        <Nav.Item>
          <Nav.Link style={{marginLeft:"0"}} eventKey="first"><span>Fruits</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Vegetables</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Juice</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Meat</Nav.Link>
        </Nav.Item>
      </Nav>
         </div>
      </div>

       <div className="container discover_tab_item_container mt-5 mb-5">
       <Tab.Content>
        <Tab.Pane eventKey="first">
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MKRZzwzt/hr-Card-Berry.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/QxQcyRKK/Dlemon.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Njbmgm4g/Dpeach.png"
             />
             </div>
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/2y2rqkXB/Dcauli-Flower.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MHK88kKZ/Dfruit.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             </div>
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Z5g3BZ1g/DGinger.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Njbmgm4g/Dpeach.png"
             />
             </div>
             
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/2y2rqkXB/Dcauli-Flower.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MHK88kKZ/Dfruit.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             </div>
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Z5g3BZ1g/DGinger.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Njbmgm4g/Dpeach.png"
             />
             </div>
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MKRZzwzt/hr-Card-Berry.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/QxQcyRKK/Dlemon.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Njbmgm4g/Dpeach.png"
             />
             </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/2y2rqkXB/Dcauli-Flower.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MHK88kKZ/Dfruit.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             </div>
             <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Z5g3BZ1g/DGinger.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/Njbmgm4g/Dpeach.png"
             />
             </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <div className="row">
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/2y2rqkXB/Dcauli-Flower.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/MHK88kKZ/Dfruit.png"
             />
             <DiscoverProductCard
                    imgsource="https://i.postimg.cc/PJF0sPRK/dtomato.png"
             />
             </div>
        </Tab.Pane>
      </Tab.Content>
       </div> 
       </Tab.Container>
      {/* discover our product end */}
      {/* Flash deal start */}
      <Header
            title="Flash Deals of the Week"  
      />
      <div className="container mt-5 mb-5 flasdDeal-Slider_container">
          <FlashDealSlider/>
      </div>
      {/* Flash deal end */}
      {/* left banner tab start */}
      <LeftHeader
             title="Top Rating Products"    
      />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <div className="container-fluid mb-5 Left_banner_tab_container">
          <img className="img-fluid leftbannerimg" src="https://i.postimg.cc/R0FQ33k9/tab-left-banner.png" />
          <div className="container left_banner_tab_inner_coontainer">
                <div className="row">
                <div className="col-lg-4"></div>
                 <div className="col-lg-8">
                 <div className="col-lg-12">
                    
                    <Nav  variant="pills" className="flex-column">
                    <div className="row">
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                            <Nav.Link eventKey="first">Top Rated</Nav.Link>
                         </Nav.Item>
                       </div>
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                           <Nav.Link eventKey="second">Best Selling</Nav.Link>
                       </Nav.Item> 
                       </div>
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                          <Nav.Link eventKey="third">On sale</Nav.Link>
                        </Nav.Item>
                       </div>
                       </div>
                     </Nav>
                    
                 </div>
                 <div style={{marginLeft:"25px"}} className="col-lg-12 mt-2 ">
                 <Tab.Content>
                    <Tab.Pane eventKey="first">
                    
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3JMs22Gw/yellow-Lemontab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/4xW22cYV/peachtab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/yYBfVj90/tomatotab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                               
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                   <div className="row">
                   <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div> 
                   </Tab.Pane>
                   <Tab.Pane eventKey="third">
                   <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                   <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                               
                   </Tab.Pane>
      </Tab.Content>
                 </div>
                     
                 </div>
                </div>
          </div>
      </div>
      </Tab.Container>
      {/* left banner tab end */}


       {/* left banner tab start */}
       <LeftHeader
             title="Top Trending Products"    
      />
      <Tab.Container className="mb-5" id="left-tabs-example" defaultActiveKey="first">
      <div className="container-fluid mb-5 Left_banner_tab_container">
          <img className="img-fluid rightbannerimg" src="https://i.postimg.cc/ZYG4HnhL/rightbannertab.png" />
          <div className="container left_banner_tab_inner_coontainer">
                <div className="row flex-row-reverse">
                <div className="col-lg-4"></div>
                 <div className="col-lg-8">
                 <div className="col-lg-12">
                    
                    <Nav  variant="pills" className="flex-column">
                    <div className="row">
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                            <Nav.Link style={{marginLeft:"0"}} eventKey="first">Latest Item</Nav.Link>
                         </Nav.Item>
                       </div>
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                           <Nav.Link style={{marginLeft:"0"}}  eventKey="second">Trendy Item</Nav.Link>
                       </Nav.Item> 
                       </div>
                       <div className="col-lg-4 leftPills">
                       <Nav.Item>
                          <Nav.Link style={{marginLeft:"0"}}  eventKey="third">Top Sale</Nav.Link>
                        </Nav.Item>
                       </div>
                       </div>
                     </Nav>
                    
                 </div>
                 <div style={{marginRight:"25px"}} className="col-lg-12 mt-2 ">
                 <Tab.Content>
                    <Tab.Pane eventKey="first">
                    
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3JMs22Gw/yellow-Lemontab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/4xW22cYV/peachtab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/yYBfVj90/tomatotab.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                               
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                   <div className="row">
                   <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                                <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div> 
                   </Tab.Pane>
                   <Tab.Pane eventKey="third">
                   <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/2SY39qsk/cut-Tomatotab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sDd21QDY/green-Fulkopitab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/3wR8z2nT/oniontab.pngv"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                   <div className="row">
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/02cC9s9q/grapetab.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/RFLHG7Fz/cherrytab.png.png"
                                        trendyheading="Organic Vegetables"
                                />
                                <TrendyProductCard
                                       imgsrc="https://i.postimg.cc/sfKWh4qY/lemontab.png.png"
                                        trendyheading="Organic Vegetables"
                                />

                                </div>
                               
                   </Tab.Pane>
      </Tab.Content>
                 </div>
                     
                 </div>
                </div>
          </div>
      </div>
      </Tab.Container>
      {/* left banner tab end */}


      {/* Why chose us start */}
      <div style={{marginTop:"80px"}} className="container ">
      <Header
             title="Why Choose Us"
      />
      </div>
      <div className="container mt-2 mb-5 whyChooseContainer">
      <div className="row">
         <WhyChooseCard
                imgsrc="https://i.postimg.cc/br3Stpk2/Whychose-Icon1.png"
                header="100% Natural"
                text="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur."
         />
         <WhyChooseCard
                imgsrc="https://i.postimg.cc/SRcR6955/why-Chooseicon2.png"
                header="Fresh Vegetables"
                text="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur."
         />
         <WhyChooseCard
                imgsrc="https://i.postimg.cc/3NZ7rFzK/Whychooseicon3.png"
                header="Organic Farming"
                text="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur."
         />
        
      </div>
     
      </div>
      {/* Why chose us end */}

      {/* fruit basket count down start */}
      <div className="container " style={{marginTop:"80px"}}>
          <div className="row">
             <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
             <div className="Row header">
             <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
             <h2>Deal of The Week</h2>
                   </AnimationOnScroll>
                 
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-6 mt-4 d-flex align-content-center justify-content-end">
                <div className="row d-flex align-items-center">
                   <DealofWeekCountDownClock/>
                </div>
             </div>
          </div>
          <div className="row countdownBanner ">
              <h2 className="header mb-1">
              Fresh vegetable &
Fruit basket
              </h2>
              <span>
              Fresh Packed to orderFresh Packed to order
              </span>
              <a href="">
                 <div style={{backgroundColor:"#477018"}}   className="mt-4 banner_btn count_doun_btn">
                        Shop Now
                    </div>
                 </a>
          </div>
      </div>
      {/* fruit basket count down end */}
      {/* some customer feedback start */}
       <div className="mt-5 mb-4" style={{marginBottom:"80px"}}>
       <Header
            title="Some Customers Feedback"  
      />
      <div className="mt-3 container">
        <CustomerFeedbackSlider/>
      </div>
       </div>
       
      {/* some customer feedback end */}
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


export default Home;



// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////



