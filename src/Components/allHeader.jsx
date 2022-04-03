import React from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';




const Header = (header) => {
    return(
        <>
        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
           <div className="container">
               <div className="Row text-center header">
                   <h2>{header.title}</h2>
               </div>
           </div>
           </AnimationOnScroll>
        </>
    )
}



const LeftHeader = (Leftheader) => {
    return(
        <>
        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
        <div className="container">
               <div className="Row header">
                   <h2>{Leftheader.title}</h2>
               </div>
           </div>
                   </AnimationOnScroll>
           
        </>
    )
}


export {Header,LeftHeader};

// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////