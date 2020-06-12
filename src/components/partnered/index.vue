<template>
   <div>
       <div class="Partnered">
         <span >{{$t("Partnered.title")}}:</span>
       </div>
       <div class="partenr-wrap">
         <ul class="partner-icon">
            <li ><img src="../../assets/image/brand/1.png" alt /></li>
            <li ><img src="../../assets/image//brand/2.png" alt /></li>
            <li ><img src="../../assets/image//brand/3.png" alt /></li>
            <li ><img src="../../assets/image//brand/4.png" alt /></li>
            <li ><img src="../../assets/image//brand/5.png" alt /></li>
            <li ><img src="../../assets/image//brand/6.png" alt /></li>
            <li ><img src="../../assets/image//brand/7.png" alt /></li>
            <li ><img src="../../assets/image//brand/8.png" alt /></li>
            <li ><img src="../../assets/image//brand/9.png" alt /></li>
            <li ><img src="../../assets/image//brand/10.png" alt /></li>
            <li ><img src="../../assets/image//brand/11.png" alt /></li>
         </ul>
        </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Partnered{
    position: absolute;
    padding: 10px;
    height: 58px;
    z-index: 1;
    background-color: #fff;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-size: 18px;
        opacity: 0.8;
    }
}
@media (max-width: 750px) {
  .partenr-wrap{
    width: 100%;
    height: 100px; 
    position: relative; 
    margin: 0 auto; 
    overflow: hidden;
}
.partner-icon{
    position: absolute;
    left: 0; 
    top: 0; 
    margin: 0; 
    padding: 0;    
    -webkit-animation: 15s move infinite linear; 
    width: 500%; 
}
.partner-icon li {
    list-style: none; 
    width: 8%;  
    font: 10%/49px Arial;
    text-align: center;
    float: left;
}
@-webkit-keyframes move{
    0% {
          left: 0;
    }
    100% {
          left: -1000px;
    }
}
}
@media (min-width: 750px) {
  .partenr-wrap{
    width: 100%;
    height: 100px; 
    position: relative; 
    margin: 0 auto; 
    overflow: hidden;
}
.partner-icon{
    position: absolute;
    left: 0; 
    top: 0; 
    margin: 0; 
    padding: 0;    
    -webkit-animation: 15s move infinite linear; 
    width: 500%; 
}
.partner-icon li {
    list-style: none; 
    width: 4%;  
    font: 10%/49px Arial;
    text-align: center;
    float: left;
}
@-webkit-keyframes move{
    0% {
          left: 0;
    }
    100% {
          left: -1000px;
    }
}
}


</style>