import React,{Component} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MiniSlickCard,FlashDealCard,CustomerFeedBackCard,Blogcard,ShopSliderCard } from "./AllKindOfCards";




const PreviousArrow = ( props) =>{
       const {className,onClick} = props                   
    return(
        <>
            <div  className="fa-solid fa-left-long slick_button previous_btn" onClick={onClick}>
   
            </div>
        </>
    )
}
const NextArrow = ( props) =>{
       const {className,onClick} = props                   
    return(
        <>
            <div   className="fa-solid fa-right-long slick_button next_btn" onClick={onClick}>
            
            </div>
        </>
    )
}


// mini card slick start


export const MiniCardSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ],
        prevArrow: <PreviousArrow/>,
        nextArrow: <NextArrow/>,
        autoplay: true,
        autoplaySpeed: 2000
      };
   
      return(
        <div>
     
        <Slider {...settings}>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/DfcrfXVH/favicon.png"
          productName="Orange"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/GpSQZMBr/tomato.png"
          productName="Tomatoo"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/YCLq6013/cauliflower.png"
          productName="Cauliflower"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/s23qV0Dh/lemon.png"
          productName="Lemon"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/qqnHt6fh/strawberry.png"
          productName="Strawberry"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/VstxWtT5/onion.png"
          productName="Onion"
        />
          </div>
          <div>
          <MiniSlickCard
             cardImg="https://i.postimg.cc/qqnHt6fh/strawberry.png"
          productName="Strawberry"
        />
          </div>
          <div>
          <MiniSlickCard
          cardImg="https://i.postimg.cc/YCLq6013/cauliflower.png"
          productName="Cauliflower"
        />
          </div>
        </Slider>
      </div>

      )
    }

// mini card slick end



// flash Feals start
export const FlashDealSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  }  
  return(
    <div>
    
    <Slider {...settings}>
      <div className="col-lg-6">
        <FlashDealCard
           imgsrc="https://i.postimg.cc/66cLPnGf/flash-Deal-Peach.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
            imgsrc="https://i.postimg.cc/fLdSYH3D/Bideshi-Lichu.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
           imgsrc="https://i.postimg.cc/66cLPnGf/flash-Deal-Peach.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
            imgsrc="https://i.postimg.cc/fLdSYH3D/Bideshi-Lichu.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
           imgsrc="https://i.postimg.cc/66cLPnGf/flash-Deal-Peach.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
            imgsrc="https://i.postimg.cc/fLdSYH3D/Bideshi-Lichu.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
           imgsrc="https://i.postimg.cc/66cLPnGf/flash-Deal-Peach.png"
        />
      </div>
      <div className="col-lg-6">
        <FlashDealCard
            imgsrc="https://i.postimg.cc/fLdSYH3D/Bideshi-Lichu.png"
        />
      </div>
     
    </Slider>
  </div>
    )
}
// flash Feals end

// customer feedback start
export const CustomerFeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  }  
  return(
    <div>
    
    <Slider {...settings}>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      <div className="col-lg-6">
       <CustomerFeedBackCard
         Customerimg="https://i.postimg.cc/Pxsv67F3/owner-favicon.jpg"
         CustomerName="Hamza Altamas"
         position="Front-End Developer"
       />
      </div>
      
    </Slider>
  </div>
    )
}
// customer feedback end


// blog slider start
export const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
 
    autoplay:true,
    autoplaySpeed:1500
  }  
  return(
    <div>
    
    <Slider {...settings}>
      <div className="col-lg-4 col-md-4 col-sm-6">
       <Blogcard
         imgsrc="https://i.postimg.cc/vmLVtGLm/Rectangle-3030.png"
       />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
        imgsrc="https://i.postimg.cc/636F9L9f/Rectangle-3030-1.png"
      />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
        imgsrc="https://i.postimg.cc/QMmnn9p9/Rectangle-3030-2.png"
      />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
        imgsrc="https://i.postimg.cc/636F9L9f/Rectangle-3030-1.png"
      />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
         imgsrc="https://i.postimg.cc/vmLVtGLm/Rectangle-3030.png"
       />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
        imgsrc="https://i.postimg.cc/636F9L9f/Rectangle-3030-1.png"
      />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <Blogcard
        imgsrc="https://i.postimg.cc/636F9L9f/Rectangle-3030-1.png"
      />
      </div>
      
    </Slider>
  </div>
    )
}
// blog slider end

// product hover zoom slider
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
     
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          fade= {true}
        >
    
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/zvwYfnTQ/Rectangle-3041.png"/>
          </div>
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/vZMC0g5Y/Rectangle-3039.png"/>
          </div>
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/gJXYGXS9/Rectangle-3040.png"/>
          </div>
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/vZMC0g5Y/Rectangle-3039.png"/>
          </div>
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/zvwYfnTQ/Rectangle-3041.png"/>
          </div>
          <div className="col-lg-12 ProductChooseimg">
          <img className="img-fluid" src="https://i.postimg.cc/gJXYGXS9/Rectangle-3040.png"/>
          </div>
        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
              <img className="img-fluid" src="https://i.postimg.cc/zvwYfnTQ/Rectangle-3041.png"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
          <img className="img-fluid" src="https://i.postimg.cc/vZMC0g5Y/Rectangle-3039.png"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
          <img className="img-fluid" src="https://i.postimg.cc/gJXYGXS9/Rectangle-3040.png"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
          <img className="img-fluid" src="https://i.postimg.cc/vZMC0g5Y/Rectangle-3039.png"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
          <img className="img-fluid" src="https://i.postimg.cc/zvwYfnTQ/Rectangle-3041.png"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 productImgSlide">
          <img className="img-fluid" src="https://i.postimg.cc/gJXYGXS9/Rectangle-3040.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}
// product hover zoom slider



// shop slider start
export const ShopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
 
    // autoplay:true,
    // autoplaySpeed:1500
  }  
  return(
    <div>
    
    <Slider {...settings}>
      <div className="ShopSlideCArdOuter">
         <ShopSliderCard
           imgsrc="https://i.postimg.cc/0QQ3Nc6r/Rectangle-3053.png"
         />
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/JhD86rqp/Rectangle-3011.png"
         />
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/j2XYwLxS/Rectangle-3061.png"
         />
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/nc3tnjSd/Rectangle-3065-1.png"
         />
      
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/j50pMzCj/Rectangle-3062.png"
         />
      
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/cCdVS0Ry/Rectangle-3066.png"
         />
      </div>
      <div className="ShopSlideCArdOuter">
      <ShopSliderCard
           imgsrc="https://i.postimg.cc/4xjq3z61/Rectangle-3055.png"
         />
      </div>
      
      
    </Slider>
  </div>
    )
}
// shop slider end


// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////