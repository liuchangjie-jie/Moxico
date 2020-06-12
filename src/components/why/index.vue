<template>
   <div class="why">
       <p>{{$t("why.title")}}</p>
       <p>{{$t("why.why1")}}</p>
       <p>{{$t("why.why2")}}</p>
       <p>{{$t("why.why3")}}</p>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.why{
    padding: 80px 16px;
    p:nth-child(1){
        font-weight:900;
        font-size: 36px;
    }
    p:nth-child(2),
    p:nth-child(3),
    p:nth-child(4){
        font-size: 20px;
    }
}
</style>