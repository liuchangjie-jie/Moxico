<template>
<div class="w contact-content">
       <p class="title color-fa5a59 fz36 fw900">{{$t("Contact.Contact")}}</p>
       <div class="row">
           <div class=" col-12 col-md-12 col-lg-6">
                 <P class="color-fff">{{$t("Contact.title")}}</P>
                 <el-form  :model="form" >
                     <el-form-item  >
                       <el-input v-model="form.input1" :placeholder="contact.title1"></el-input>
                     </el-form-item>
                     <el-form-item >
                       <el-input v-model="form.input2" :placeholder="contact.title2"></el-input>
                     </el-form-item>
                     <el-form-item >
                       <el-input v-model="form.input3" :placeholder="contact.title3"></el-input>
                     </el-form-item>
                     <el-form-item >
                       <el-input  type="textarea" style="resize:none"  :autosize="{ minRows: 6, maxRows: 6}" v-model="form.desc" :placeholder="contact.title4"></el-input>
                     </el-form-item>
                     <el-form-item >
                       <a class="botton hvr-float fz16 wow fadeInUp"  data-wow-duration="1s"  data-wow-delay="800ms" href="javscript:void(0)">{{$t("Contact.bottom")}}</a>
                     </el-form-item>

                 </el-form>
           </div>
           <div class=" col-12 col-md-12 col-lg-6">
                  <footer class="contact">
                         <i class="phone phone-icon"></i>
                         <p class="mt16">{{$t("Contact.phone")}}</p>
                         <p class=" fz36 fw700">(404)666-6551</p>
                  </footer>
                  <footer class="contact">
                         <i class="phone mailbox-icon"></i>
                         <p class="mt16">{{$t("Contact.mailbox")}}</p>
                         <p class="fw700">support@giraf.com</p>
                  </footer>
           </div>
        </div>
</div>
   
</template>

<script>
export default {
   data() {
    return {
           form:{
              input1: '' ,
              input2: '' ,
              input3: '' ,
              desc:""
           },
            contact:{
              title1: this.$t("Contact.input1"),
              title2: this.$t("Contact.input2"),
              title3: this.$t("Contact.input3"),
              title4: this.$t("Contact.input4"),
            }
      
    }
  },
}
</script>

<style lang="less" scoped>
/deep/ .el-input__inner,
/deep/ .el-textarea__inner {
    color: #fff;
  }
@media (min-width: 750px){
  .botton{
    width: 180px;
  }
}
  .contact-content {
      padding:32px 0 70px;
     .title{
       text-align: center;
     }   
      .botton{
        display: block;
        height: 50px;
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
      .contact{
           color:#fff;
           text-align: center;
            margin-top:32px;
           .phone{
             margin: 0 auto;
             display: block;
             text-align: center;
          }  
      }
      
  } 
  .phone-icon{
     width: 59px;
     height: 59px;
    background: url('../../assets/image/phone.png')no-repeat center;
  }
  .mailbox-icon{
     width: 64px;
     height: 50px;
    background: url('../../assets/image/mailbox.png')no-repeat center;
  }
 /deep/ .el-input__inner,
  /deep/  .el-textarea__inner {
   background-color: #253b63; 
 }
</style>