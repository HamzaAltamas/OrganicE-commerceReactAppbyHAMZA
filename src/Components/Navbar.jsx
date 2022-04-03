import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container , Nav ,Navbar,FormControl,Offcanvas,Form,Button} from "react-bootstrap";
import $ from "jquery";
import { useState } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";



const Topbar = () => {
     return(
       <>
      <Container fluid className="topbar">
           <Container>
             <div className="row d-flex  justify-content-between">
             <div className="col-lg-5 col-md-5 col-sm-5 topbartxt">
             <span>
             Welcome To Our Organsio Store.
             </span>
             </div>
             
             </div>
            
           </Container>
      </Container>
       </>
     )
}

const NavDekstop = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    
     <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="img-fluid"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/1zVTJmFm/Rectangle-3124.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Orange</h5>
                <h6>$9.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/tTp0r1H3/Rectangle-3124-1.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Strawberry</h5>
                <h6>$18.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/gjjT58tZ/Rectangle-3124-2.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Onion</h5>
                <h6>$5.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row mt-3 mb-3 pt-2 pb-2 totalbox">
             <h5>Total : $32</h5>
             <div className="cartbtn  mt-3 mb-2">
                 Buy Now
             </div>
             <div className="cartbtn chekbtn mb-2">
                 Checkout
             </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar className="Navdekstop bothNav" expand="lg">
  <Container >
    <Navbar.Brand href="#"><img src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="img-fluid navBrand"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link style={{marginLeft:"0"}} as={Link} to="/" className="navItems" href="#action1">Home</Nav.Link>
        <Nav.Link as={Link} to="/accessories" className="navItems" href="#action2">Accessories</Nav.Link>
        <Nav.Link as={Link} to="/category" className="navItems" href="#action3">Category</Nav.Link>
        <Nav.Link as={Link} to="/shop" className="navItems" href="#action4">Shop</Nav.Link>
        <Nav.Link as={Link} to="/about" className="navItems" href="#action5">About </Nav.Link>
        <Nav.Link as={Link} to="/faqs" className="navItems" href="#action6">Faqs</Nav.Link>
        
      
      </Nav>
      <img onClick={handleShow} style={{marginRight:"15px"}} src="https://i.postimg.cc/1X9Dh72z/nav-bag-icon.png"/>
      <Form className="d-flex navSearchForm">
        <FormControl 
          type="search"
          placeholder="Search"
          className="me-2 navInput"
          aria-label="Search"
        />
        <img className="search_btn" src="https://i.postimg.cc/L8y64CWW/magnifyglass.png"/>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
// jquery for navbar dekstop

  $(document).ready(function(){
    $(".search_btn").click(function(){
      $(".navInput").toggleClass("formShow");
    });
    
  });

// jquery for navbar dekstop
// nav scroll fixed start
// navv scroll

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 10){
    $("nav").addClass("navdown")
    $(".navBrand").addClasss("navBrandzoomOut")
  }else{
     $("nav").removeClass("navdown")
     $(".navBrand").removeClasss("navBrandzoomOut");

  }
  if(scrolling > 10){
  
    $(".navBrand").addClasss("navBrandzoomOut")
  }else{
   
     $(".navBrand").removeClasss("navBrandzoomOut");

  }
  
 
  
})
// nav scroll fixed end


const Navbars = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <>
      
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="img-fluid"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/1zVTJmFm/Rectangle-3124.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Orange</h5>
                <h6>$9.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/tTp0r1H3/Rectangle-3124-1.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Strawberry</h5>
                <h6>$18.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row cartItems d-flex justify-content-between flex-row"> 
             <div className="col-lg-3 mt-2 mb-2 col-md-3 col-sm-3">
             <img src="https://i.postimg.cc/gjjT58tZ/Rectangle-3124-2.png"/>
             </div>
             <div className="col-lg-5 mt-2 col-md-5 col-sm-5 d-flex justify-content-center nameAndPriceCArt flex-column">
                <h5>Onion</h5>
                <h6>$5.00</h6>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 dltbtn d-flex align-items-center">
             <i class="fa-solid fa-trash-can"></i>
             </div>
           </div>
           <div className="row mt-3 mb-3 pt-2 pb-2 totalbox">
             <h5>Total : $32</h5>
             <div className="cartbtn  mt-3 mb-2">
                 Buy Now
             </div>
             <div className="cartbtn chekbtn mb-2">
                 Checkout
             </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>



   <Navbar id="navOffcanvas" className="bothNav" bg="light" expand={false}>
  <Container>
    <Navbar.Brand href="#"><img src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="navBrand"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img  src="https://i.postimg.cc/Gp6Hxgdf/logo.png" className="img-fluid "/></Offcanvas.Title>
      </Offcanvas.Header>
      

      <Offcanvas.Body>
      

<Nav className="justify-content-end flex-grow-1 pe-3">

<Nav.Link style={{marginLeft:"0"}} as={Link} to="/"  className="navItems" href="#action1">Home</Nav.Link>

        
<Nav.Link style={{marginLeft:"0"}} as={Link} to="/accessories" className="navItems" href="#action2">Accessories</Nav.Link>
<Nav.Link style={{marginLeft:"0"}} as={Link} to="/category"  className="navItems" href="#action3">Category</Nav.Link>
<Nav.Link style={{marginLeft:"0"}} as={Link} to="/shop" className="navItems" href="#action4">Shop</Nav.Link>
<Nav.Link style={{marginLeft:"0"}}  as={Link} to="/about" className="navItems" href="#action5">About </Nav.Link>
<Nav.Link style={{marginLeft:"0"}} as={Link} to="/faqs"  className="navItems" href="#action6">Faqs</Nav.Link>
                
       

        </Nav>
              
       
       
        <img onClick={handleShow} style={{marginRight:"15px"}} src="https://i.postimg.cc/1X9Dh72z/nav-bag-icon.png"/>
      <Form className="d-flex navSearchForm mt-3">
        <FormControl 
          type="search"
          placeholder="Search"
          className="me-2 navInputoffcanvas"
          aria-label="Search"
         
        />
        <img className="search_btn_offcanvas" src="https://i.postimg.cc/L8y64CWW/magnifyglass.png"/>
      </Form>
      </Offcanvas.Body>
  
    </Navbar.Offcanvas>
  </Container>
</Navbar>

      </>
    )
   
}

export {NavDekstop, Navbars ,Topbar};


// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////