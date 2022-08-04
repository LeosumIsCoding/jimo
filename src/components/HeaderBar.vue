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
  position: fixed;
  display: flex;
  top: 0px;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: cadetblue;
  align-items: center;
}
</style>