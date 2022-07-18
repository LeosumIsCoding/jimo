<template>
  <div id="person">
    <div id="controls">
      <div>
        <Headimg id="haha" :headimgSize="70"/>
        组件
      </div>

      <div>
        ds
      </div>
    </div>
    
  </div>
</template>

<script>
import Headimg from "./Headimg.vue"


import {HeadimgMixin} from "./HeadimgMixin"

export default {
    components:{Headimg},
    name:"Person",
    data() {
      return {
        copyEl: "",
      };
    },

    methods:{

    },
    mounted(){
      console.log(this.property);
    },

    mixins:[HeadimgMixin]
}
</script>

<style>
  #controls{
    position: fixed;
    bottom: 0px;
    height: 200px;
    width: 50%;
    background-color: aqua;
    display: flex;
    flex-wrap: wrap;
  }

  #haha{
    position: fixed;
    top: 0px;
  }
</style>