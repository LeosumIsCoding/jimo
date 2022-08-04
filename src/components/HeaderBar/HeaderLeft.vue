<template>
  <div id="home">
    <router-link to="/home">
      主页
    </router-link>
  </div>
</template>

<script>
export default {
    name:"HeadLeft",
}
</script>

<style scoped>
#home a{
  text-decoration: none;
  color: aliceblue;
}

#home a:hover{
  color: #42d995;
}
</style>