<template>
  <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
          <img :src="language? Mexico : en" />
          <i class="el-icon-caret-bottom"></i>
        </div>
         <el-dropdown-menu slot="dropdown">
               <el-dropdown-item class="hvr-underline-from-left" @click.native="changeLanguage">
                <div>
                     <img :src="language? en : Mexico" style="padding:10px" />
                    <span v-if="!language">Mexico</span>
                    <span v-if="language">English</span>
                </div>
               </el-dropdown-item>
         </el-dropdown-menu>
   </el-dropdown> 
</template>

<script>
import en from '@/assets/image/en.png'
import Mexico from '@/assets/image/Mexico.png'
export default {
    name:"internationalization",
    data(){
        return{
            en:en,
            Mexico:Mexico,
            //判断localStorage是否有值
            language: JSON.parse(window.localStorage.getItem("lang")) === "en" ? false : true,
        }
    },
   methods:{
       changeLanguage(){
        this.language = !this.language;
        let lang = this.$i18n.locale === 'es' ? 'en' : 'es';
        //设置到localStorage存储里
        let jsonStr = JSON.stringify(lang);
         window.localStorage.setItem('lang',jsonStr);
         //刷新页面
         location.reload();
      },
   }
}
</script>

<style lang="less" scoped>
 .avatar-container {
     cursor: pointer;
     line-height: 80px;
     padding: 0 18px;
     .avatar-wrapper{
         i{
             margin-left:8px;
             color: #fff;
         }
     }
  }
</style>