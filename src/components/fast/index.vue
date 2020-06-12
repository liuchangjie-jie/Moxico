<template>
       <div class="w">
           <el-row :gutter="0" class="pt80">
              <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <div class="fast">
                          <a class="hvr-float efficient-icon wow fadeInUp"   data-wow-duration="1s"  data-wow-delay="300ms" href="javscript:void(0)"></a>
                          <p class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="400ms">{{$t("Fast.title")}}</p>
                          <span class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="300ms">
                             {{$t("Fast.content")}}
                          </span>
                  </div>
               </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <div class="fast">
                          <a class="hvr-float fast-icon  wow fadeInUp"  data-wow-duration="1s"  data-wow-delay="500ms" href="javscript:void(0)"></a>
                          <p class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="500ms">{{$t("Easy.title")}}</p>
                          <span class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="500ms">
                           {{$t("Easy.content")}}
                          </span>
                  </div>
                </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <div class="fast">
                          <a class="hvr-float cost-effective-icon wow fadeInUp"   data-wow-duration="1s"  data-wow-delay="700ms" href="javscript:void(0)"></a>
                          <p class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="600ms">{{$t("Cost-effective.title")}}</p>
                          <span class=" wow fadeInUp" data-wow-duration="1s"  data-wow-delay="700ms">
                            {{$t("Cost-effective.content")}}
                          </span>
                  </div>
              </el-col>
             
             
            </el-row>
       </div>
</template>

<script>
import WOW from 'wowjs' 
export default {
  mounted() { 
      new WOW.WOW().init() 
      },
}
</script>

<style lang="less" scoped>
     .pt80{
         padding:80px 0;
     }
     .fast{
         padding:16px;
          text-align: center;
              a{
                  display: block;
                   height: 149px;
                  margin: 20px auto;
              }
              p{
                  font-size: 24px;
                  font-weight: 700;
                  line-height: 300%;
              }
              span{
                  color:#777777;
                  line-height: 160%;
              }
     }
  
   .fast-icon{
       width: 122px;
       background: url('../../assets/image/fast-icon.png')no-repeat center; 
    }
    .efficient-icon{
        width: 122px;
        background: url('../../assets/image/efficient-icon.png')no-repeat center; 
    }
    .cost-effective-icon{
        width: 139px;
        background: url('../../assets/image/cost-effective-icon.png')no-repeat center; 
    }
</style>