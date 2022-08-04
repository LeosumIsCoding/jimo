<template>
  <div @resize="sizeChange" id="app">
    <HeaderBar/>

    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Home from "./components/Home.vue"
import HeaderBar from "./components/HeaderBar.vue"
export default {
  name: 'App',
  components: { HeaderBar
  },
  beforeCreate(){
    // this.$router.push("/login");
    
  },
  methods:{
    sizeChange(e){
      console.log(e);
    }
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: rgb(55, 55, 55);
  color: aliceblue;
  padding: 0;
  height: 100%;
}
#main{
  padding-top: 60px;
}
#app{
  margin-left: 50%;
  transform: translateX(-50%);
  
  position: relative;
  /* background-color: aqua; */

}

@media screen and (min-width:1080px) {
  #app{
    width: 1100px;
    /* background-color: aqua; */
  }
}

@media screen and (max-width:1080px) {
  #app{
    width: 100%;
    /* background-color: aquamarine; */
  }
}
</style>
