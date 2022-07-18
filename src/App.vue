<template>
  <div id="app">
    <HeaderBar/>

    <router-view />
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
    this.$router.push("/home");
  }
}
</script>

<style>
body{
  /* background-color: #756767; */
  height: 100%;

  margin: 0px;
  





  
}

#app {

  position: relative;

  width: 100%;
  /* width: 1100px; */
  height: 100%;
  /* background-color: rgb(46, 63, 78); */

  
  

  /* width: 100px; */

  /* background-color: #2c3e50; */

}
</style>
