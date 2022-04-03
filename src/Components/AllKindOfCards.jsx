import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FlashDealCountDownClock } from "./CountDown";
import Tilt from 'react-parallax-tilt';


// discount card component start
const DiscountCard = (dcardProp) => {
    return(
        <>
       
            <div className="col-lg-3 col-md-3 col-sm-3 discount_card_body ">
            <Tilt>
               <div className="DiscountCardItem">
                    <img src={dcardProp.imgsourse}/>
                    <h5 className="mt-3">{dcardProp.Cardheader}</h5>
                    <span>
                    {dcardProp.cardTitle}
                    </span>
               </div>
            </Tilt>
            </div>
        
        </>

    )
}
// discount card component end

// mini item slick card start
const MiniSlickCard = (miniCardProps) =>{
    return(
       <>
          <div className="mini_card_outer_div">
             <Tilt>
             <div className="mini_slick_card">
                 <img className="mb-3" src={miniCardProps.cardImg}/>
                 <span >
                     <a href="">
                         {miniCardProps.productName}
                     </a>
                 </span>
              </div>
             </Tilt>
          </div>
       </>
    )
}

// mini item slick card end

// trendy product category card start
const TrendyProductCard = (trendyprops) => {
    return(
          <>
             <div className="col-lg-4 col-md-4 col-sm-4 trendy">
            <Tilt>
            <div className="Trendyproduct_card">
                  <div className="trendy_img_box">
                  <div className="staricon">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                  </div>
                     <img src={trendyprops.imgsrc}/>
                     
                    <div className="trendy_overlay">
                         <ul className="d-flex trendyIcons">
                             <li style={{marginLeft:"0"}}><a href=""><i class="fa-solid fa-heart"></i></a></li>
                             <li><a href=""><i class="fa-solid fa-lock"></i></a></li>
                             <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                         </ul>
                    </div>
                    
                  </div>
                
                  <h5 className="mt-2">{trendyprops.trendyheading}</h5>
                    <h6>$8.00-9.00&nbsp;$8.00-9.00</h6>
                
              </div>
            </Tilt>

             </div>
          </>
    )
}
// trendy product category end


// discover our product card start

const DiscoverProductCard = (dProductProps) => {
   return(
       <>
         <div className="col-lg-4 col-md-6">
           <Tilt>
           <div className="discoverProductItems">
             <div className="D_productOverlay">
             <ul className="d-flex trendyIcons">
                             <li style={{marginLeft:"0"}}><a href=""><i class="fa-solid fa-heart"></i></a></li>
                             <li><a href=""><i class="fa-solid fa-lock"></i></a></li>
                             <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                         </ul>
             </div>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5 d_productimg">
                       <img src={dProductProps.imgsource} />
                    </div>
                    <div className=" DProductTxt col-lg-7 col-md-7 col-sm-7 d-flex justify-content-center flex-column">
                        <h5>
                        Organic  Vegetables
                        </h5>
                        <span ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                        <h6 className="mt-2">$8.00&nbsp;<del>$10.00</del></h6>
                    </div>
                </div>
            </div>
           </Tilt>
         </div>
       </>
   )
}



// discover our product card end

// flash deal card start

const FlashDealCard = (FlashDealsProps) => {
    return(
        <>
         <div className="flash_deal_card">
            <Tilt>
            <div className="flash_deal_card_inner">
               <img src={FlashDealsProps.imgsrc} className="img-fluid" />
               <div className="flashDealContent">
               <FlashDealCountDownClock/>
               <h5 className="mt-4 mb-2">Diamond Halo Stud Earrings</h5>
             <span>  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <h6 className="mt-2">$8.00-9.00</h6>
               <a href="">
                 <div   className="mt-4 banner_btn">
                        Add to Cart
                    </div>
                 </a>
               </div>
            </div>
            </Tilt>
         </div>
        </>
    )
}

// flash deal card end

// why Chose Us CArd start
export const WhyChooseCard = (WhychooseProps) => {
     return(
         <div className="col-lg-4 col-md-4 col-sm-4 mt-md-3 text-center Whychoosecard">
             <img src={WhychooseProps.imgsrc} />
             <h5 className="mt-4 mb-4">
             {WhychooseProps.header}
             </h5>
             <span>
             {WhychooseProps.text}
             </span>
         </div>
     )
}
// why Chose Us CArd end

export const CustomerFeedBackCard = (CustomerProps) => {
    return(
        <>
           <div className="col CFeedCard">
            <Tilt>
            <div className="CcardInner">
             <img className="img-fluid Colonimg" src="https://i.postimg.cc/bNpn14K3/colonImg.png" />
             <span>  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
             <p className="mt-3 C_card_txt">
             Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
             <div className="row mt-3">
               <div className="col-lg-3 col-md-3 col-sm-3 mt-3">
                  <img className="customerPic img-fluid" src={CustomerProps.Customerimg} />
               </div>
               <ul className="col-lg-8 col-md-8 col-sm-8 mt-3 mb-0 d-flex flex-column justify-content-center">
                   <li>  
                   <h5>
                       {CustomerProps.CustomerName}
                   </h5> 
                   </li>
                   
                 <li>
                 <h6>
                      {CustomerProps.position}
                   </h6>
                 </li>
               </ul>
             </div>
             </div>
            </Tilt>
           </div>
        </>
    )
}




// blog card start
const Blogcard = (BlogProps) => {
    return(
        <>
          <div className="blogcardItem">
              <Tilt>
              <img className="img-fluid" src={BlogProps.imgsrc}/>
              <div className="Blog_content">
               <span><i class="fa-solid fa-user"></i>&nbsp;By admin</span>&nbsp;&nbsp;<span><i class="fa-solid fa-tags"></i>&nbsp;Vegetable</span>
               <h5 className="mt-3 pb-5  blogheader">
               How and when to replace 
               brake rotors 
               </h5>
               <div className="row mt-3 mb-3">
                 <div className="col-lg-6">
                   <span><i class="fa-solid fa-calendar-days"></i>&nbsp;June 24, 2021</span>
                 </div>
                 <div className="col-lg-6 text-end ">
                    <a href="">
                       Read More
                    </a>
                 </div>
               </div>
              </div>
              </Tilt>
          </div>
        </>
    )
}
// blog card end

// shop slider card start
const ShopSliderCard = (ShopSlideProps) => {
    return(
        <>
         <div className="shopSliderCard">
           <Tilt>
           <img src={ShopSlideProps.imgsrc} />
            <p  className="mt-3 ShopsliderIcon"><i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i></p>
            <h6>$8.00-9.00</h6>
            <h5>Organic Fresh Fruits</h5>
            <ul className="d-flex">
                <li style={{marginLeft:"0"}}><a href=""><i class="fa-solid fa-heart"></i></a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                <li><a href=""><i class="fa-solid fa-repeat"></i></a></li>
                <li><a href=""><i class="fa-solid fa-lock"></i></a></li>
            </ul>
           </Tilt>
             
         </div>
        </>
    )
}
// shop slider card end

// accessories list card start
const AccessoriesListCard = (ShopSlideProps) => {
    return(
        <>
        <div className="col-lg-4 col-md-4 col-sm-4">
        <Tilt>
        <div className="shopSliderCard mt-3">
            <img src={ShopSlideProps.imgsrc} />
       
            <ul className="d-flex ulsicons">
                <li style={{marginLeft:"0"}}><a href=""><i class="fa-solid fa-heart"></i></a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                <li><a href=""><i class="fa-solid fa-repeat"></i></a></li>
                <li><a href=""><i class="fa-solid fa-lock"></i></a></li>
            </ul>
             
         </div>
        </Tilt>
        </div>
        </>
    )
}
// accessories list card end


export {DiscountCard,MiniSlickCard,TrendyProductCard,DiscoverProductCard,FlashDealCard,Blogcard,ShopSliderCard,AccessoriesListCard}



// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////