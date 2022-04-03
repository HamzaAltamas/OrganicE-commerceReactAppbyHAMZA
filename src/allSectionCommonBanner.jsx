import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


export const SectionCommonBanner = (CommonBanner) => {
    return(
       <>
           <div className="container-fluid Common_banner">
              <div className="container">
                  <h2>{CommonBanner.PageNAme}</h2>
                  <p>{CommonBanner.Path}</p>
              </div>
           </div>
       </>       
    )
}