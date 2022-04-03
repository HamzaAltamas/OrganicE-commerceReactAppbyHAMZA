import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { SectionCommonBanner } from "../allSectionCommonBanner";
import { Container , Nav ,Navbar,FormControl,Offcanvas,Form,Button,Dropdown,DropdownButton} from "react-bootstrap";
import { AccessoriesListCard } from "./AllKindOfCards";
import { DoubleRangeSlider } from "./priceRange";

const Accessories = () => {
    return(
        <>
        <title>Accessories | Organic</title>
        <SectionCommonBanner
            PageNAme="Accessories"
            Path="Home-Accessories"
        />
        <div className="container  mt-4 mb-4">
             <div className="row">
                 <div className="col-lg-6  col-md-6 mt-4 col-sm-6">
                    <div className="row">
                       <div className="col-lg-7 col-md-7 col-sm-7">
                       <Form className="d-flex Accessories_form">
                           <FormControl
                                type="search"
                                placeholder="Search Products"
                                className="me-2 accessories_input"
                                aria-label="Search"
                             />
                              <img className="searchbaricon img-fluid" src="https://i.postimg.cc/28hhpbQg/Vector-1.png"/>
                        </Form>
                       </div>
                       <div className="col-lg-5 col-md-5 col-sm-5 text-end d-flex itemsCount align-items-center pt-2 pb-2">
                             <span>Showing 1-15 of 30 results</span>
                       </div>
                    </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-6 mt-4 dropDown">
                     <div className="row d-flex justify-content-end">
                       <div className="col-lg-6 d-flex justify-content-end"> 
                           <img className="miniIcons" src="https://i.postimg.cc/25gTFqnG/Group-20279.png" />
                           <img className="miniIcons" src="https://i.postimg.cc/t4ZxdBD0/Group-20278.png" />
                           <DropdownButton id="dropdown-basic-button" title="Sort by latest">
                                        <Dropdown.Item href="#/action-1">Apple</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">grape</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Onion</Dropdown.Item>
                                       <Dropdown.Item href="#/action-4">Vegetable</Dropdown.Item>
                                       <Dropdown.Item href="#/action-5">Lemon</Dropdown.Item>
                                       <Dropdown.Item href="#/action-6">Mango</Dropdown.Item>
                         </DropdownButton>
                       </div>
                     </div> 
                 </div>
             </div>
        </div>
        <div className="container mt-3 mb-5">
           <div className="row">
             <div className="col-lg-3 col-md-3 col-sm-3">
                 <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="catagory mt-3">
                        <h4>Categories</h4>
                        <ul className="mt-3 catagory_list"> 
                           <li><span> Beverages (5)</span></li>
                           <li><span>Butter & Eggs (9)</span></li>
                           <li><span>Dried</span></li>
                           <li><span>Food (6)</span></li>
                           <li><span>Fresh Meat</span></li>
                           <li><span>Fruits (6)</span></li>
                           <li><span>Juice</span></li>
                           <li><span>Vegetables (25)</span></li>
                           <li><span>Meats</span></li>
                           <li><span>Supplements (6)</span></li>

                        </ul>
                     </div>
                     <div className="price mt-3 catagory">
                     <h4>Price</h4>
                     <div className="priceRAnge mt-3">
                          <DoubleRangeSlider/>
                     </div>
                     </div>
                     <div className="price mt-3 catagory">
                     <h4>Price</h4>
                     <div className="priceRAnge radioPrice mt-3">
                          <div className=" d-flex align-items-center Check_start mt-3">
                          <Form.Check aria-label="option 1" />&nbsp;&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>&nbsp; &nbsp;(5)
                          </div>
                          <div className=" d-flex align-items-center Check_start mt-3">
                          <Form.Check aria-label="option 1" />&nbsp;&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span>&nbsp; &nbsp;(4)
                          </div>
                          <div className=" d-flex align-items-center Check_start mt-3">
                          <Form.Check aria-label="option 1" />&nbsp;&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>&nbsp; &nbsp;(3)
                          </div>
                          <div className=" d-flex align-items-center Check_start mt-3">
                          <Form.Check aria-label="option 1" />&nbsp;&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>&nbsp; &nbsp;(2)
                          </div>
                          <div className=" d-flex align-items-center Check_start mt-3">
                          <Form.Check aria-label="option 1" />&nbsp;&nbsp;<i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>&nbsp; &nbsp;(1)
                          </div>
                     </div>
                     </div>
                     <div className="price mt-3 catagory">
                     <h4>Tags</h4>
                     <div className="priceRAnge  radioPrice mt-3">
                         <div className="row d-flex p-3">
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  apple
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  orange
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  bread
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  cheese
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  fruit
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  fish
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-6 tags d-flex justify-content-center mt-2">
                               <div className="tagname">
                                  meat
                               </div>
                           </div>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div className="col-lg-9 col-md-9 col-sm-9">
                  <div className="row">
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/6QvsSmtr/Rectangle-3011-1.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/wMHZPxjJ/Rectangle-3061-1.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/Wb5CWvLF/Rectangle-3054.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/85Tbg7L1/Rectangle-3055-1.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/13ZnjLGS/Rectangle-3056.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/x1ygCrnj/Rectangle-3057.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/PJwQn9Sj/Rectangle-3058.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/Zqn3hXqM/Rectangle-3059.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/qqVCyRxP/Rectangle-3060.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/KcBTFPZx/Rectangle-3067.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/DZK2cbRP/Rectangle-3062-1.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/hGBwybPv/Rectangle-3063.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/x1KpzJy2/Rectangle-3064.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/C53JZSR5/Rectangle-3065-2.png"
                       />
                       <AccessoriesListCard
                           imgsrc="https://i.postimg.cc/s2fFf4F8/Rectangle-3066-1.png"
                       />
                  </div>
                  <div className="row mt-5 mb-5 d-flex justify-content-center">
                       <ul className="pageNumber d-flex justify-content-center">
                          <li style={{marginLeft:"0"}}><span>1</span></li>
                          <li><span>2</span></li>
                          <li><span>3</span></li>
                          <li><span><i class="fa-solid fa-angle-right"></i></span></li>
                       </ul>
                  </div>
             </div>
             </div>
        </div>
            
        </>
    )
}


export default Accessories;


// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////