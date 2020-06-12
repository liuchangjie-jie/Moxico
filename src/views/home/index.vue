<template>
    <div class="home">
        <div class="nav bc-253b63 height-80">
            <div class="w n-content">
                <a href="javscript:void(0)" title="logo" class="logo"></a>
                <div class="float-r"> 
                   <internationalization/>
                 </div>
                <ul class="none-min750 float-r">
                    <li><a class="hvr-underline-from-left" href="javscript:void(0)" >{{$t("common.home")}}</a></li>
                    <li><a class="hvr-underline-from-left" @click="Service" href="javscript:void(0)" >{{$t("common.service")}}</a></li>
                    <li><a  class="hvr-underline-from-left" @click="aboutUS" href="javscript:void(0)" >{{$t("common.About")}}</a></li>
                    <li><a  class="hvr-underline-from-left" @click="Contact" href="javscript:void(0)" >{{$t("common.Contact")}}</a></li>
                </ul>
            </div>
        </div>
         <el-carousel height="640px" indicator-position="none" :autoplay=true :interval="5000" >
           <el-carousel-item >
            <section class="section-home section-img">
                 <div class="w">
                   <div class="glass">
                      <p class=" fz36  fw900 wow lh150 fadeInUp"  data-wow-duration="1s"  data-wow-delay="300ms">{{$t("title.title1")}}</p>
                      <p class=" fz36 fw900 wow lh150 fadeInUp"  data-wow-duration="1s"  data-wow-delay="500ms">{{$t("title.title2")}}</p>
                      <a class="botton hvr-float fz16 wow fadeInUp" @click="centerDialogVisible =true" data-wow-duration="1s"  data-wow-delay="800ms" href="javscript:void(0)">{{$t("title.botton")}}</a>
                   </div>
                 </div>
              </section>
           </el-carousel-item>
           <el-carousel-item >
            <section class="section-home section-img1">
                 <div class="w">
                   <div class="glass">
                      <p class=" fz36  fw900 wow lh150 fadeInUp"  data-wow-duration="1s"  data-wow-delay="300ms">{{$t("title.title1")}}</p>
                      <p class=" fz36 fw900 wow lh150 fadeInUp"  data-wow-duration="1s"  data-wow-delay="500ms">{{$t("title.title2")}}</p>
                      <a class="botton hvr-float fz16 wow fadeInUp" @click="centerDialogVisible = true" data-wow-duration="1s"  data-wow-delay="800ms" href="javscript:void(0)">{{$t("title.botton")}}</a>
                   </div>
                 </div>
              </section>
           </el-carousel-item>
           <el-carousel-item >
            <section class="section-home section-img2">
                 <div class="w">
                   <div class="glass">
                      <p class=" fz36  fw900 lh150 wow fadeInUp"  data-wow-duration="1s"  data-wow-delay="300ms">{{$t("title.title1")}}</p>
                      <p class=" fz36 fw900 wow lh150 fadeInUp"  data-wow-duration="1s"  data-wow-delay="500ms">{{$t("title.title2")}}</p>
                      <a class="botton hvr-float fz16 wow fadeInUp" @click="centerDialogVisible = true" data-wow-duration="1s"  data-wow-delay="800ms" href="javscript:void(0)">{{$t("title.botton")}}</a>
                   </div>
                 </div>
              </section>
           </el-carousel-item>
        
         </el-carousel>
        
         <fast/>
         <div  ref="scrollOne">
               <service class="pd-l-r16"/>
         </div>
         
         <div class="about-us" ref="scrollTwo">
             <div class="w Nipic" >
                <span  class="fz36 fw900  lh200">{{$t("aboutUs.title")}}</span>
                 <p>{{$t("aboutUs.content")}}</p>
              
             </div>
         </div>
         <div class="values" >
            <values/>
         </div>
          <div class="w" >
             <why/>
          </div>
          <div class="w mb120">
             <partnered/>
          </div>
          <div class="contact-us pd-l-r16 ">
             <a  class="logo " @click="home" href="javscript:void(0)"></a>
              <contact-us />
          </div>
          <div class="nav bc-242b2e">
            <div class="w">
                <ul class="height-96">
                    <li ><a  @click="home" href="javscript:void(0)" >{{$t("common.home")}}</a></li>
                    <li> <a @click="Service" href="javscript:void(0)" >{{$t("common.service")}}</a></li>
                    <li><a @click="aboutUS" href="javscript:void(0)" >{{$t("common.About")}}</a></li>
                    <li><a href="javscript:void(0)" >{{$t("common.Contact")}}</a></li>
                </ul>
            </div>
        </div>
        <el-dialog
          :title="title"
          :visible.sync="centerDialogVisible"
          width="400px"
          center>
           <el-form  :model="form" ref="form" :rules="rules">
               <el-form-item  prop="input1" >
                 <el-input v-model="form.input1" :placeholder="contact.title1" ></el-input>
               </el-form-item>
                 <el-form-item prop="input2" >
                 <el-input v-model="form.input2" :placeholder="contact.title2"></el-input>
               </el-form-item>
               <el-form-item prop="input3">
                 <el-input v-model="form.input3" :placeholder="contact.title3"></el-input>
               </el-form-item>
               <el-form-item >
                 <el-input  type="textarea" style="resize:none"  :autosize="{ minRows: 4, maxRows: 8}" v-model="form.desc" :placeholder="contact.title4"></el-input>
               </el-form-item>
               <a class="dialogbotton fz12 wow fadeInUp"  @click="formData('form')"  data-wow-duration="1s"  data-wow-delay="800ms" href="javscript:void(0)">{{$t("title.botton")}}</a>
          </el-form>
        </el-dialog>
    </div>
</template>

<script>
import WOW from 'wowjs' 
import { scrollTo } from '@/utils/scroll-to'
import fast from '@/components/fast'
import service from '@/components/service'
import values from '@/components/values'
import why from "@/components/why"
import partnered from "@/components/partnered"
import contactUs from '@/components/contactUs'
import internationalization from '@/components/internationalization'
export default {
    components:{ fast,service,values,why,partnered,contactUs,internationalization },
     data(){
        return{
            serviceHeight:"",
            aboutHeight:"",
            centerDialogVisible : false,
            form:{
              input1:"",
              input2:"",
              input3:"",
              desc:""
            },
            contact:{
              title1: this.$t("Contact.input1"),
              title2: this.$t("Contact.input2"),
              title3: this.$t("Contact.input3"),
              title4: this.$t("Contact.input4"),
            },
            title:this.$t("title.botton"),
             rules:{
              input1:[
                { required: true, message: this.$t("Contact.dialog1"), trigger: 'blur'}
              ],
              input2:[
                { required: true, message: this.$t("Contact.dialog2"), trigger: 'blur'}
              ],
              input3:[
                { required: true, message: this.$t("Contact.dialog3"), trigger: 'blur'}
              ]
          }
        }
     },
     created(){
     },
    mounted() { 
       new WOW.WOW().init({
　　　　boxClass: 'wow',
　　　　animateClass: 'animated',
　　　　offset: 0,
　　　　mobile: true,
　　　　live: true,
       scrollContainer: ".home"
　　});
       this.scrollTwoScroll()
    },
    methods:{
     formData(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.centerDialogVisible = false;
            this.$message({ message: this.$t("message.hint1") , type: 'success' });
          }
       })
     },
       home(){
        scrollTo(0,1000)
      },
      Service(){
        scrollTo( this.$refs.scrollOne.offsetHeight,800)
      },
      aboutUS(){
        scrollTo(parseInt(this.$refs.scrollTwo.offsetHeight)+2250,1000)
      },
      Contact(){
        scrollTo(10000,1500)
      },
       scrollTwoScroll() {
      //监听浏览器高度
        this.aboutHeight = parseInt(this.$refs.scrollTwo.offsetHeight);
        console.log(this.aboutHeight);
        
       }

    }
    
}
</script>

<style lang="less" scoped>

   .nav{
     line-height: 40px;
     display: flex;
     justify-content: center;
     line-height: center;
     .n-content{
       margin: 0 16px;
     }
     .logo{
       margin-left:16px;
        float: left;
       display: block;
       width: 173px;
       height: 40px;
       background: url('../../assets/image/logo.png')no-repeat center;
       margin:18px 0;
     }
   
     ul{
        text-align:center;
         li{
           display: inline;
           line-height:80px;
           padding: 0 14px;
          a{
            color: #fff;
            
          }
         }
     }
   }
   .active{
     z-index: 1;
   }
   .section-img{
       background-image: url("../../assets/image/OCEANVESSEL.jpg");
   }
   .section-img1{
       background-image: url("../../assets/image/OCEANVESSEL1.jpg");
       position:absolute;
   }
   .section-img2{
       background-image: url("../../assets/image/OCEANVESSEL2.jpg");
       position:absolute;
   }

   @media (max-width: 750px){
     .section-home{
        .glass{
         padding: 56px 16px;
         p:nth-child(2){
           margin-top: 32px;
         }
       }
     }
   }
   @media (min-width: 750px){
     .botton{
        width: 230px;
     }
     .glass{
          padding-top:180px;
       }
       
   }
   .section-home {
    height: 640px;
    position: relative;
    background-size: cover;
    background-position: center;
    .glass {
      position: relative;
      z-index: 41;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      line-height: 200%;
      .botton{
        display: block;
        height: 50px;
        
        margin: 32px 0;
        /* text-decoration: none; */
        text-align: center;
        border-radius: 4px;
        line-height: 50px;
        color: #fff;
        background-color: #fa5a59;
        /*添加过度效果*/
        transition: all 0.3s linear;
        position: relative;
        &:hover{
           opacity: 0.6;
        }
      }
    }

}
.about-us{
    margin-top: 100px;
    height: 640px;
    position: relative;
    background-image: url("../../assets/image/Nipic.jpg");
    background-size: cover;
    background-position: center;
    .Nipic{
      text-align: center;
      padding:40px 42px 0;
      line-height: 200%;
      p{
        font-size: 18px;
      }
    }
}
.values{
  background-color: #253b63;
}
.contact-us{
  background-color: #253b63;
  .logo{
       display: block;
       width: 78px;
       height: 78px;
       background: url('../../assets/logo/logo.png')no-repeat center;
       position: relative;
       top:-34px;
       margin: 0 auto;
  }
}
 ul{
  margin-bottom: none;
}
/deep/ .el-dialog--center .el-dialog__body {
    padding:6px 12px;
}


.dialogbotton{
   display: block;
        height: 45px;
        margin: 6px 0;
        /* text-decoration: none; */
        text-align: center;
        border-radius: 6px;
        line-height: 45px;
        color: #fff;
        background-color: #fa5a59;
        /*添加过度效果*/
        transition: all 0.3s linear;
        position: relative;
        &:hover{
           opacity: 0.6;
        }
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  a {
    text-decoration: none;
    color: #000;
}
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>