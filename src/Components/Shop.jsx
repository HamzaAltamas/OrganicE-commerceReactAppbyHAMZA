import React from "react";
import "../index.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SectionCommonBanner } from "../allSectionCommonBanner";
import { CustomerFeedBackCard } from "./AllKindOfCards";
import { LeftHeader } from "./allHeader";
import { CustomerFeedbackSlider,BlogSlider } from "./allSlickSlider";
import { Header } from "./allHeader";
import { Container , Nav ,Navbar,FormControl,Offcanvas,Form,Button,Col,Tab,Row} from "react-bootstrap";
import AsNavFor from "./allSlickSlider";
import {ClickerApp} from "./countBtn"
import { ShopSlider } from "./allSlickSlider";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Shop = () => {
    return(
        <>
           <title>Shop | Organic </title>
           <div className="container shop_container  mb-5" >
               <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                   <AsNavFor/>
               </div>
               <div className="col-lg-8 col-md-8 col-sm-8 mt-4">
                   <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                        
                         <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                         <h3>
                         Organic Fruits Tenders
                         </h3>
                   </AnimationOnScroll>
                         <p><i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;&nbsp;&nbsp;10 Reviews&nbsp;&nbsp;&nbsp;<span>Brand: </span>Organic</p>
                         <h2 className="">
                         $250.00
                         </h2>
                         <p className="mt-3">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         </p>
                         <div className="col-lg-6 mt-4">
                         <div className="row">
                         <div className="col-lg-6 col-md-4 col-sm-4 mt-3">
                         <ClickerApp/>
                         </div>
                         <div className="col-lg-6 col-md-4 col-sm-4 mt-3">
                             <div className="ShopAddCartBtn">
                             <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to Cart
                             </div>
                         </div>
                         </div>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 mt-3 ">
                               <div className="buy_now_btn">
                                   Buy Now
                               </div>
                         </div>
                         <div className="col-lg-6 ">
                         <div className="row">
                         <div className="col-lg-6 col-md-4 col-sm-4 mt-3 ">
                            <div className="commom_butn">
                            <i class="fa-solid fa-heart"></i>&nbsp;Add to wishlist
                             </div>
                         </div>
                         <div className="col-lg-6 col-md-4 col-sm-4 mt-3 mb-3">
                             <div className="commom_butn">
                             <i class="fa-solid fa-repeat"></i>&nbsp;Add to Compare
                             </div>
                         </div>
                         </div>
                         
                         </div>
                         <div className="shop_icon_list">
                             <p>Category: <span>Organic</span></p>
                             <p>Tags: <span>Tags: Food,organic,vegetables,fresh</span></p>
                             <div className="row">
                             <ul className="d-flex" style={{display:"inline-block"}}>
                                               <li style={{marginLeft:"0"}}><p>Share: </p></li>
                                               <li style={{backgroundColor:"#4267B2"}}><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                                               <li style={{backgroundColor:"#1DA1F2"}}><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                               <li style={{backgroundColor:"#E60023"}}><a href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
                                               <li style={{backgroundColor:"#f23f7e"}}><a href=""><i class="fa-solid fa-basketball"></i></a></li>
                                             </ul>
                             </div>
                             
                         </div>
                         <div className="shopDottedlist row mt-3 mb-5 pt-5 pb-5">
                            <h3>Sold by : WPDISDB</h3>
                            <ul>
                                <li> 100% Natural</li>
                                <li>Increases resistance</li>
                                <li>No growth hormones are used</li>
                                <li>No artificial Chemicals</li>
                                
                            </ul>
                         </div>
                      </div>
                   </div>
               </div>
               </div>
           </div>
           <div className="container shopTab  mb-5">   
           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          
            <Nav variant="pills" className="flex-row justify-content-around">
           
               <Nav.Item>
          <Nav.Link className="col" eventKey="first">Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="col" eventKey="second">Additional information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="col" eventKey="third">Reviews (10+)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="col" eventKey="fourth">Vendor information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="col" eventKey="fifth">More products</Nav.Link>
        </Nav.Item>
    
            </Nav>
            <div className="container mt-4 mb-5">
            <Tab.Content>
        <Tab.Pane eventKey="first">
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <ul className="mt-4 mb-4"> 
                  <li><p> High-Neck Style</p></li>
                  <li><p>Drop Shoulders</p></li>
                  <li><p>Flared Cuffs</p></li>
                  <li><p>Asymmetrical Hem</p></li>

               </ul>
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <ul className="mt-4 mb-4"> 
                  <li><p> High-Neck Style</p></li>
                  <li><p>Drop Shoulders</p></li>
                  <li><p>Flared Cuffs</p></li>
                  <li><p>Asymmetrical Hem</p></li>

               </ul>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
       
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
       
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <ul className="mt-4 mb-4"> 
                  <li><p> High-Neck Style</p></li>
                  <li><p>Drop Shoulders</p></li>
              

               </ul>
               <p>
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
       
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <ul className="mt-4 mb-4"> 
                  <li><p> High-Neck Style</p></li>
                  <li><p>Drop Shoulders</p></li>
                  <li><p>Flared Cuffs</p></li>
                  <li><p>Asymmetrical Hem</p></li>

               </ul>
              
        </Tab.Pane>
        
      </Tab.Content>
            </div>
            
           
           
           
           </Tab.Container>
           </div>
           {/* shopslider start */}
             
            <div className="container ShopsliderContainer mt-5 mb-5">
                <LeftHeader
                   title="Related Product"
                />
                <ShopSlider/>
            </div>
           {/* shopslider end */}
        </>
    )
}


export default Shop;


// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////