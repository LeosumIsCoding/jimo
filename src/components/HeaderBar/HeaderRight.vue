<template>
  <div id="headerbar-upload">
    
      <HeaderHeadimg v-if="isLogin" :headimg="userInfo.headimg" :isLogin="isLogin"/>

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
        isLogin: false,
        userInfo:{

        }
      };
    },
    components:{HeaderHeadimg, HeaderUpload}
    ,
    beforeCreate(){
      const token = window.localStorage.getItem("token");
      this.$http.get(`/token/${token}`)
      .then(res=>{
        let data = res.data.data;
        console.log(data);
        this.$http.get(`home/getUserInfoById/${data.id}`)
        .then(res=>{
          console.log(res.data.status);
          if(res.data.status === "success"){
            this.userInfo = res.data.data; 
            console.log(this.userInfo);
            this.isLogin = true;
          }else{
            alert(res.data.error);
          }
        })
      })
    }
    
}
</script>

<style >
#headerbar-upload{
  display: flex;
  flex-direction: row;
}


</style>