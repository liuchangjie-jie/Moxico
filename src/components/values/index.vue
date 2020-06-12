<template>
   <div class="w content">
       <p class="title wow fadeInUp"  data-wow-duration="1s">{{$t("Values.title")}}</p>
         <div class="row portfolio_area">
                    <div class=" col-12 col-md-12 col-lg-6">
                        <div  class="portfolio_item ">
                            <p class="num ">01</p>
                            <div class="hvr-float">
                                <h4 class="wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="500ms">{{$t("Values.Value1.title")}}</h4>
                                <div class="portfolio_description wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="600ms">
                                	<p class="portfolio_info">{{$t("Values.Value1.content")}}</p>
	                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-12 col-lg-6" >
                        <div  class="portfolio_item">
                            <p class="num" >02</p>
                            <div class="hvr-float">
                            <h4 class="wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">{{$t("Values.Value2.title")}}</h4>
                            <div class="portfolio_description wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">
                            	<p class="portfolio_info">{{$t("Values.Value2.content")}}</p>
	                        
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-12 col-lg-6" >
                        <div  class="portfolio_item">
                            <p class="num" >03</p>
                            <div class="hvr-float">
                            <h4 class="wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="500ms">{{$t("Values.Value3.title")}}</h4>
                            <div class="portfolio_description wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="600ms">
                            	<p class="portfolio_info">{{$t("Values.Value3.content")}}</p>
	                        
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-12 col-lg-6" >
                        <div  class="portfolio_item">
                            <p class="num" >04</p>
                            <div class="hvr-float">
                            <h4 class="wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">{{$t("Values.Value4.title")}}</h4>
                            <div class="portfolio_description wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">
                            	<p class="portfolio_info">{{$t("Values.Value4.content")}}</p>
	                        
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-12 col-lg-6" >
                        <div  class="portfolio_item">
                            <p class="num " >05</p>
                            <div class="hvr-float">
                            <h4 class="wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="500ms">{{$t("Values.Value5.title")}} </h4>
                            <div class="portfolio_description wow fadeInLeft" data-wow-duration="1s"  data-wow-delay="600ms">
                            	<p class="portfolio_info">{{$t("Values.Value5.content")}}</p>
	                        
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-12 col-lg-6 ">
                        <div  class="portfolio_item">
                            <p class="num " >06</p>
                            <div class="hvr-float">
                            <h4 class="wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">{{$t("Values.Value6.title")}}</h4>
                            <div class="portfolio_description wow fadeInRight" data-wow-duration="1s"  data-wow-delay="600ms">
                            	<p class="portfolio_info">{{$t("Values.Value6.content")}}</p>
	                        
                            </div>
                            </div>
                        </div>
                    </div>
          </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .content{
     padding:78px 0;
     .title{
         font-size: 36px;
         font-weight:900;
         color: #fff;
         text-align: center;
         
     }
     .portfolio_area{
          margin: 36px 0;
         .portfolio_item{
              margin: 36px 0;
              
               .num{
                   position: relative;
                   z-index: 1;
                   font-size: 72px;
                   font-weight: 700;
                   color: #fff;
                   text-align: center;
                   opacity: 0.1;
               }
                h4{
                   color: #fff;
                   position: relative;
                    z-index: 2;
                    top: -80px;
                    text-align: center;
                    transition: all 0.23s linear;
                 }
               .portfolio_description{
                   padding:0 54px;
                 p{
                   color: #fff;
                   opacity: 0.8;
                   font-size: 18px;
                   text-align: center;
                   position: relative;
                   top: -40px;
                   transition: all 0.23s linear;
                 }
               }
         
       }
     }
     
 }
</style>