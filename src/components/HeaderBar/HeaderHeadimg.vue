<template>
<div>
    <div v-if="$store.state.isLogin" id="header-headimg"  >
        <div id="header-headimg-sel">
            <div class="header-userinfo">
                <b>{{$store.state.userInfo.nickname}}</b>
            </div>

            <div class="header-headimg-buttons">
                <button @click="quitLogin">退出登录</button>
            </div>
        </div>
        <router-link to="/person" id="headerbar-headimg">
            <img  :src="'http://localhost:4536/media/photo/'+ $store.state.userInfo.headimg" alt="">
        </router-link>

    </div>

    <div v-else>
        <router-link to="/person" >
            登录
        </router-link>
    </div>
</div>
</template>

<script scoped>



export default {
    name:"HeaderHeadimg",
    methods:{
        quitLogin(){
            window.localStorage.removeItem("token");
            this.$store.commit("logout")
        }
    },
    computed:{

    },

}
</script>

<style>
#headerbar-headimg img{
  width: 40px;

}

#header-headimg{
  position: relative;
  height: 40px;
  width: 80px;
  border-radius: 50px;
  /* border: 1px solid white; */
  /* overflow: hidden; */


}
#header-headimg img{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.441);
    left: 0px;
    top: 0px;
    transition-duration: 0.5s;
}
#header-headimg a{
    width: 40px;
}
#header-headimg-sel{
    position: absolute;
    height:300px;
    width: 200px;
    top: 50px;
    left: -100px;
    border-radius: 10px;
    visibility:hidden;
    opacity: 0.00;
    background-color: aliceblue;
    transition-duration: 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    
}

#header-headimg:hover img{
    width: 60px;
    height: 60px;
    left: -30px;
    top: 15px;
    border-radius: 60px;
    
    background-color: aquamarine;
    transition-duration: 0.5s;
}
#header-headimg:hover #header-headimg-sel{
    visibility: visible;    
     opacity: 1;
     transition-delay: 0.1s;
    transition-duration: 0.3s;
}

.header-userinfo{
    margin-top: 30px;
}

.header-headimg-buttons button{
    margin-top:20px ;
    width: 80px;
    height: 20px;
    font-size: 12px;
    outline: none;
    border: none;
    color: aliceblue;
    border-radius: 5px;
    background-color: rgba(217, 53, 53, 0.871);
}
.header-headimg-buttons button:hover{
    background-color: rgba(255, 0, 0, 1);
}
.header-headimg-buttons button:active{
    background-color: rgb(197, 1, 1);
}
</style>