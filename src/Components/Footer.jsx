import React  from "react";

import "../index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";

  

const Footer = () => {
    return(
          <>
             <Container fluid className="footer_container">
                <Container>
                      <div className="row">
                      <div className="col-lg-3 col-md-4">
                          <div className="footeritems">
                          <img src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="img-fluid"/>
                          <div className="row mt-5">
                              <div className="col-lg-3">
                                  <div className="footerIcon">
                                  <i class="fa-solid fa-phone"></i>
                                  </div>
                              </div>
                              <div  className="col-lg-8" style={{padding:'3px 0'}}>
                                  <span>
                                      Class US 27/4
                                  </span> <br/>
                                  <span>
                                      <a href="">(1800)-1088-88</a>
                                  </span>
                              </div>

                          </div>
                          <div className="row mt-3">
                              <div className="col-lg-3">
                                  <div className="footerIcon">
                                  <i class="fa-solid fa-location-dot"></i>
                                  </div>
                              </div>
                              <div style={{padding:'3px 0'}}  className="col-lg-9">
                                  <span>
                                      Address
                                  </span> <br/>
                                  <span>
                                      <a href="">100 Mcevoy st, alexandria
                                          Nsw 2010, Australia</a>
                                  </span>
                              </div>

                          </div>
                          <ul className="d-flex footerSocialIcons mt-4">
                              <li style={{marginLeft:"0"}}><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                              <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                              <li><a href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
                              <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                          </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                          <div className="footeritems">
                               <h5 className="footerHeader">
                               Customer Service
                               </h5>
                               <ul className="mt-5 footerList">
                              <li style={{marginTop:'0'}}><a href="">  Contact us</a></li> 
                              <li><a href="">Track your order</a></li> 
                              <li><a href="">Return policy</a></li> 
                              <li><a href="">Delivery Information</a></li> 
                              <li><a href="">Help & FAQ</a></li> 
                              <li><a href="">Warranty & Repair</a></li> 
                        

                               </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                          <div className="footeritems">
                               <h5 className="footerHeader">
                               Categories
                               </h5>
                               <ul className="mt-5 footerList">
                              <li style={{marginTop:'0'}}><a href="">   Fruitls & Vegetables</a></li> 
                              <li><a href="">Dairy Products</a></li> 
                              <li><a href="">Package Foods</a></li> 
                              <li><a href="">Beverage</a></li> 
                         
                              <li><a href="">Health & Wellness</a></li> 
                               </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                          <div className="footeritems">
                          <h5 className="footerHeader">
                          Newsletter
                         </h5>
                         <div className="mt-5">
                         <span>
                         Signup and get a voucher of worth $250.00
                         </span>

                         <form className="mt-3 footrtForm">
                            <div className="row">
                            <input className="NewsLetterInput" type="text" placeholder="Your Email Address..."/><a href=""><div className="submit_btn">Send</div></a>
                            </div>
                         </form>

                         </div>
                          </div>
                       </div>
                      </div>
                </Container>
             </Container>
          </>
    )
}

export default Footer;



// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////