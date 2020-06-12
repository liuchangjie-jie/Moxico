<template>
   <div class="w">
        <p class="title fz36 fw900 wow fadeInUp">{{$t("service.title")}}</p>
       <div class="row portfolio_area">
                    <div class="grid-sizer"></div>
                    <div class=" col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/airfreight.png" alt="">
                            <div class="portfolio_description ">
								<h2>{{$t("service.service1.title")}}</h2>
                            	<p class="portfolio_info" >{{$t("service.service1.content")}}</p>
	                        
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/overland.png" alt="">
                            <div class="portfolio_description">
                            	<h2>{{$t("service.service2.title")}}</h2>
                            	<p class="portfolio_info">{{$t("service.service2.content")}}</p>
	                          
                            </div>
                        </div>
                    </div>
                 <div class="element-item apps ui_ux col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/customsClearance.png" alt="">
                            <div class="portfolio_description">
                            	<h2>{{$t("service.service3.title")}}</h2>
                            	<p class="portfolio_info">{{$t("service.service3.content")}}</p>
	                          
                            </div>
                        </div>
                    </div>
                    <div class="element-item apps ui_ux col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/warehousing.png" alt="">
                            <div class="portfolio_description">
                            	<h2>{{$t("service.service4.title")}}</h2>
                            	<p class="portfolio_info">{{$t("service.service4.content")}}</p>
	                       
                            </div>
                        </div>
                    </div>
                    <div class="element-item apps ui_ux col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/heavy.png" alt="">
                            <div class="portfolio_description">
                            	<h2>{{$t("service.service5.title")}}</h2>
                            	<p class="portfolio_info">{{$t("service.service5.content")}}</p>
	                       
                            </div>
                        </div>
                    </div>
                    <div class="element-item apps ui_ux col-12 col-md-12 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div  class="portfolio_item">
                            <img src="../../assets/image/FBAService.png" alt="">
                            <div class="portfolio_description">
                            	<h2>{{$t("service.service6.title")}}</h2>
                            	<p class="portfolio_info">{{$t("service.service6.content")}}</p>
	                         
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
 
  .title{
      margin:80px 0;
      text-align: center;
  }
.portfolio_area .portfolio_item {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
}

.portfolio_area .portfolio_item::before,
.portfolio_area .portfolio_item .portfolio_description p{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
}

.portfolio_area .portfolio_item::before {
    content: '';
    background-color: #fa5a59;
    top: 100%;
    transition: all .5s;
}



.portfolio_area .portfolio_item:hover::before {
    top: 0;
}
@media (max-width: 750px){
	.portfolio_area .portfolio_item .portfolio_description p{
    padding: 80px 30px;
  }
  .portfolio_area .portfolio_item .portfolio_info {
    font-size: 12px;
  }
  .portfolio_description h2{
      font-size: 28px;
  }
}
@media (min-width: 750px) and (max-width: 992px) {
	.portfolio_area .portfolio_item .portfolio_description p{
    padding:180px 20px
  }
 .portfolio_area .portfolio_item .portfolio_info {
    font-size: 14px;
 }
}
@media (min-width: 992px) and (max-width: 1200px)  {
	.portfolio_area .portfolio_item .portfolio_description p{
    padding: 110px 30px;
  }

 .portfolio_area .portfolio_item .portfolio_info {
    font-size: 16px;
 }
}
@media (min-width: 1200px){
	.portfolio_area .portfolio_item .portfolio_description p{
    padding: 140px 30px;
  }
	.portfolio_area .portfolio_item .portfolio_info {
    font-size: 16px;
 }
}
.portfolio_area .portfolio_item .portfolio_description p{
    text-align: center;
    top: 0;
    opacity: 0;
    transition: all 0.33s;
 }

.portfolio_area .portfolio_item:hover .portfolio_description p{
	opacity: 1;
	color: #fff;
}

.portfolio_area .portfolio_item img {
    width: 100%;
}


.portfolio_area .portfolio_item .portfolio_info {
    color: #e5e5e5;
    margin-bottom: 20px;
}
.portfolio_description h2 {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	color: #fff;
	text-align: center;
	-webkit-transition: -webkit-transform 0.6s, color 0.6s;
	transition: transform 0.6s, color 0.6s;
	-webkit-transform: translate3d(0,-50%,0);
	transform: translate3d(0,-50%,0);
}
.portfolio_description:hover h2 {
	color: #fff;
	-webkit-transform: translate3d(0,-50%,0) translate3d(0,-90px,0);
	transform: translate3d(0,-50%,0) translate3d(0,-90px,0);
}
.apps{
	cursor:pointer;
}
  </style>