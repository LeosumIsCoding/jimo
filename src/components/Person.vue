<template>
  <div id="person">
    <div @mousedown="moveBox" id="box">
        123123
    </div>
  </div>
</template>

<script>
export default {
    name:"Person",

    methods:{
      moveBox(event){
        let el = event.toElement
        let m_x = event.layerX;
        let m_y = event.layerY;
        
        console.log(event,m_x,m_y, "box");
        console.dir(el.offsetTop);
      }
    }
}
</script>

<style>
#person{
  display: flex;

}

#box{
  position: absolute;
  background-color: aquamarine;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
}
</style>