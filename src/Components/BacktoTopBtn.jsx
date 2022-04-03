import React from "react";
import $ from "jquery";


export const BackTopBtn = () => {
    return(
        <>
        
            <div class="backtop"><i class="fas fa-angle-up"></i></div>
        </>
    )
}

  // backtop button
  
  $(document).ready(function(){
    $(".backtop").click(function(){
        $("html,body").animate({
          scrollTop:0,
        },
        )
      },)
});
  

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    
    if(scrolling > 10){
      $(".backtop").fadeIn(1000)
    }else{
       $(".backtop").fadeOut(1000)
    }
   
    
  })


  // //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////