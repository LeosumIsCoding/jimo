<template>
  <div id="big-headerbar">

            <HeaderLeft/>

            <HeaderMid/>


            <HeaderRight/>

  </div>
</template>

<script>
import HeaderLeft from "./HeaderBar/HeaderLeft.vue"
import HeaderMid from "./HeaderBar/HeaderMid.vue"
import HeaderRight from "./HeaderBar/HeaderRight.vue"

export default {
    name:"HeaderBar",
    components:{HeaderLeft, HeaderMid, HeaderRight},
}
</script>

<style>
#big-headerbar{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: beige;
}
</style>