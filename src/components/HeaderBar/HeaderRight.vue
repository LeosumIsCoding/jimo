<template>
  <div id="headerbar-upload">
    
      <HeaderHeadimg />

      <HeaderUpload/>

  </div>
</template>

<script>
import HeaderHeadimg from "./HeaderHeadimg.vue"
import HeaderUpload from "./HeaderUpload.vue"


export default {
    name:"HeaderRight",
    data() {
      return {


        
      };
    },

    components:{HeaderHeadimg, HeaderUpload},
    methods:{
    },
    beforeCreate(){
      // console.log(this.$store);

    },

    
}
</script>

<style >
#headerbar-upload{
  display: flex;
  flex-direction: row;
}


</style>