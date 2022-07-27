<template>
  <div id="headerbar-upload">
    <router-link to="/person" id="headerbar-headimg">
      <img v-if="isLogin" src="http://localhost:4536/photo/defaultHeadimg.png" alt="">

      <div v-else>
        登录
      </div>
    </router-link>
    <router-link to="/upload">
      <div>投稿</div>
    </router-link>
  </div>
</template>

<script>
export default {
    name:"HeaderRight",
    data() {
      return {
        isLogin: false,
      };
    },
    
}
</script>

<style>
#headerbar-upload{
  display: flex;
}
#headerbar-upload a{
  width: 80px;
  height: 40px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  color: aliceblue;
}

#headerbar-upload a:hover{
  color: #42d995;
}

#headerbar-headimg img{
  width: 40px;

}
</style>