<template>
  <div id="login">

    <div class="login-headimg">
        <img :src="loginHeadimg" alt="">
    </div>

    <div class="login-inputs">
        <div class="login-account">
            <b>账号</b> <br>
            <input v-model="userInfo.id" type="text" placeholder="请输入账号">
        </div>

        <div class="login-password">
            <b>密码</b> <br>
             <input v-model="userInfo.password" type="password" placeholder="请输入密码">
        </div>
        <a id="forget-password" href="#">忘记密码？</a>
    </div>

    <div class="login-buttons">
        <div @click="login" class="button">
            <button>登 录</button>
        </div>

        <div @click="go2Register" class="button">
            <button>注 册</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"Login",
    data() {
        return {
            loginHeadimg: "http://localhost:4536/photo/defaultHeadimg.png",
            userInfo:{
                id:"",
                password:""
            }
        };
    },
    watch:{
        "userInfo.id":function(n){
            this.$http.get(`/login/get/headimg/${n}`)
            .then(res=>{
                console.log(res);
                let headimg = res.data.data.headimg;
                if(headimg === "defaultHeadimg.png"){
                    this.loginHeadimg = "http://localhost:4536/photo/defaultHeadimg.png";
                }else{
                    this.loginHeadimg = `http://localhost:4536/login/get/media/photo/${headimg}`
                }
            })
        }
    },

    methods:{
        go2Register(){
            this.$router.push("/register");
            var body = document.getElementById("backgroundImage");
            body.style.backgroundColor = "#666";
        },
        login(){
            this.$http.get(`/login/${this.userInfo.id}/${this.userInfo.password}`)
            .then(res=>{
                let isError = res.data.status;
                console.log(isError);
                if(isError === "error"){
                    alert(res.data.error);
                }else{
                    let status = res.data.data.status;
                    if(status === "password error"){
                        alert("密码错误");
                        return;
                    }
                    let token = res.data.data.token;
                    console.log(token);
                    window.localStorage.setItem("token", token);
                    this.$router.push("/home");
                }
            })
        }
    }
}
</script>

<style>
#login{
    position: absolute;
    top: 50px;
    left: 50%;  
    transform: translateX(-50%);
    /* background-color: aqua; */
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#login > div{
    margin-top: 10px;
}
.login-inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-inputs > div{
    margin-top: 10px;
}
.login-headimg img{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0px 1px 10px rgb(185, 185, 185);
}
.login-inputs input{
    height: 30px;
    width: 350px;
    outline: none;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
.login-buttons>div{
    margin-top: 10px;
}

.login-buttons button{
    width: 370px;
    height: 40px;
    border-radius: 5px;
    background-color: aliceblue;
    opacity: 1;
    color: rgb(93, 93, 93);
    font-size: 15px;
}

.login-buttons button:hover{
   opacity: 0.9;
   color: rgb(53, 53, 53);
}

.login-buttons button:active{
    opacity: 0.8;
}

#forget-password{
    margin-left: 290px;
    margin-top: 10px;
    color: aquamarine;
    opacity: 0.5;
}

#forget-password:hover{
    opacity: 1;
}

#forget-password:active{
    opacity: 0.8;
}
</style>