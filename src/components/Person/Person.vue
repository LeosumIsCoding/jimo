<template>
  <div id="person">
    
    
  </div>
</template>

<script>



import {HeadimgMixin} from "./HeadimgMixin"

export default {
    components:{},
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

</style>