<template>

    <div id="register">
        <div class="register-headimg">
            <img ref="headimg" :src="tempHeadimg" alt="">
            <input @change="exchangeHeadimg" ref="headimgInput" type="file" name="headimg" >
            <b @click="$refs.headimgInput.click()">选择头像</b>
        </div>

        <div class="register-inputs">

            <div class="register-nickname">
                <b>你的昵称</b> <br>
                <input v-model="userInfo.nickname"  type="text" placeholder="昵称不能为空" required maxlength="10">
                <div v-show="!nickName.isNickNameCorrect" class="tag tagError" title="昵称不能为空">!</div>
                <div v-show="nickName.isNickNameCorrect" class="tag tagCorrect" title="昵称符合要求">√</div>
            </div>
            
            <div class="register-password">
                <b>密码</b> <br>
                <input v-model="userInfo.password" type="password" placeholder="密码应大于6位数并小于15位数" required minlength="6" maxlength="15">
                <div v-show="!password.isPasswordCorrect" class="tag tagError" title="密码不符合要求">!</div>
                <div v-show="password.isPasswordCorrect" class="tag tagCorrect" title="密码符合要求">√</div>
            </div>

            <div class="register-nickname">
                <b>你的手机号</b> <br>
                <input v-model="userInfo.tele" type="tel" placeholder="请输入手机号" required>
                <div v-show="!tele.isTeleCorrect" class="tag tagError" :title="tele.title">!</div>
                <div v-show="tele.isTeleCorrect" class="tag tagCorrect" title="号码符合要求">√</div>
            </div>         

            <!-- <div class="idenCode">
 
                <input v-model="userInfo.tele" type="tel" placeholder="请输入验证码" required>
                <button>发送验证码</button>
            </div>        -->
        </div>

        <div class="register-buttons">
            <div  class="button">
                <button @click="submitInfo" v-show="!registerButton.isRegisterSuccess" >{{ registerButton.registerButtonText}}</button>
                <button id="register-successButton" v-show="registerButton.isRegisterSuccess" >注册成功</button>
            </div>

            <div @click="go2Login"  class="button">
                <button >{{loginButton.loginButtonText}}</button>
            </div>
        </div>

        <div v-show="registerSuccessDiv.isSuccess" class="register-success">
            <p>注册成功!你的账号为</p>

            <p>{{userInfo.id}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register",
    data() {
        return {
            userInfo:{
                nickname:"",
                password:"",
                tele:"",
                headimg:"",
                id:null
            },
            tempHeadimg: "http://localhost:4536/photo/defaultHeadimg.png",
            nickName:{
                isNickNameCorrect:false,

            },
            password:{
                isPasswordCorrect:false,
            },
            tele:{
                isTeleCorrect:false,
                title:"你的号码不符合要求"
            },
            loginButton:{
                loginButtonText:"登 录"
            },
            registerButton:{
                registerButtonText:"注 册",
                isRegisterSuccess:false
            },
            registerSuccessDiv:{
                isSuccess:false
            }
        };
    },
    watch:{
        "userInfo.nickname":function(n){
            if(n === ""){
                this.nickName.isNickNameCorrect = false;

            }else{
                this.nickName.isNickNameCorrect = false;
                // console.log(n);
                for(let c of n){
                    if(c !== " "){
                        this.nickName.isNickNameCorrect = true;
                    }
                }           
            }
            // console.log(o,n);
        },
        "userInfo.password":function(n){
            if(n.length <6 || n.length > 15){
                this.password.isPasswordCorrect = false;
            }else{
                this.password.isPasswordCorrect = true;
            }
            console.log(this.password.isPasswordCorrect);
        },
        "userInfo.tele":function(n){
            if(n.length <6 || n.length > 15){
                this.tele.isTeleCorrect = false;
            }else{
                this.$http.get(`/register/get/isTeleExist/${n}`)
                .then(res=>{

                    this.tele.title = "你的号码不符合要求";

                    let boolResult = res.data.boolResult;

                    if (boolResult === true) {
                        this.tele.isTeleCorrect = false;
                        this.tele.title = "你输入的号码已被注册";
                    }else{
                        this.tele.isTeleCorrect = true;
                    }
                })

            }
        }
    },

    computed:{
        canSubmit(){
            if(this.nickName.isNickNameCorrect && this.password.isPasswordCorrect && this.tele.isTeleCorrect){
                return true;
            }else{
                return false;
            }
        }
    },

    methods:{
        
        go2Login(){
            this.$router.push("/login")
        },
        exchangeHeadimg(){

            this.userInfo.headimg = this.$refs.headimgInput.files[0];

            let reader = new FileReader();
            reader.readAsDataURL(this.$refs.headimgInput.files[0])
            reader.onload = ()=>{
                this.tempHeadimg = reader.result;
            }
        },
        submitInfo(){
            console.log(this.canSubmit);
            
            if(this.canSubmit){
                this.registerButton.registerButtonText = "...";
                let headimg = "defaultHeadimg.png";
                if(this.$refs.headimgInput.files.length !== 0){
                    headimg = this.tempHeadimg;
                }
                // console.log(headimg);

                this.$http.post(`/register/user/add`,{
                    nickname:this.userInfo.nickname,
                    password:this.userInfo.password,
                    tele:this.userInfo.tele,
                    headimg:headimg
                }).then(res=>{
                    if(res.data.status === "success"){
                        this.registerButton.isRegisterSuccess = true;
                        this.registerButton.registerButtonText = "注 册"
                        console.log(res);
                        let id = res.data.data.id;
                        this.userInfo.id = id;
                        this.registerSuccessDiv.isSuccess = true;
                    }else{
                        alert(res.data.error);
                    }
                    
                })
            }else{
                alert("无法注册");
            }


        },
    },
    mounted(){
        console.dir(this.$refs.headimgInput);
        let fileReader = new FileReader();
        fileReader.rea
        console.log(fileReader);

    }
}
</script>

<style>
#register{
    position: absolute;
    top: 50px;
    left: 50%;  
    transform: translateX(-50%);
    /* background-color: aqua; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#register > div{
    margin-top: 10px;
}
.register-inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
}
.register-inputs > div{
    margin-top: 10px;
}
.register-headimg{
    position: relative;
}
.register-headimg img{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0px 1px 10px rgb(185, 185, 185);
}
.register-inputs input{
    height: 30px;
    width: 350px;
    outline: none;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}

.register-buttons>div{
    margin-top: 10px;
}

.register-buttons button{
    width: 375px;
    height: 40px;
    border-radius: 5px;
    background-color: aliceblue;
    opacity: 1;
    color: rgb(93, 93, 93);
    font-size: 15px;
}

#register button:hover{
   opacity: 0.9;
   color: rgb(53, 53, 53);
}

#register button:active{
    opacity: 0.8;
}

.register-headimg input{
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    top: 0px;
    left: 0px;
    border-radius: 100px;
    opacity: 0;
}
.register-headimg b{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.307);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.register-headimg b:hover{
    background-color: rgba(0, 0, 0, 0.051);

}

.button input{
    width: 370px;
    height: 40px;
    border-radius: 5px;
    background-color: aliceblue;
    opacity: 1;
    color: rgb(93, 93, 93);
    font-size: 15px;
}

.button input:hover{
    opacity: 0.9;
    color: rgb(53, 53, 53);
}
.button input:active{
    opacity: 0.8;
}
.register-nickname{
    position: relative;
}

.tagCorrect{
    color:aquamarine;
    border: 3px solid aquamarine;
}

.tagError{
    color: red;
    border: 3px solid red;
}
.tag{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
}
.register-nickname .tag{
    
    
    top: 25px;
    right: -35px;
    width: 25px;
    height: 25px;
    /* background-color: antiquewhite; */

    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
}
.register-password{
    position: relative;
}
.register-password .tag{
    top: 25px;
    right: -35px;
    width: 25px;
    height: 25px;
    /* background-color: antiquewhite; */

    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
}

.idenCode{
    display: flex;
}
.idenCode input{
    height: 20px;
    width: 250px;
}
.idenCode button{
    display: inline-block;
    background-color: aliceblue;
    border-radius: 5px;
    height: 30px;
    width: 100px; 
}

#register-successButton{
    background-color:aquamarine;
    color: rgb(0, 0, 0);
}

.register-success{
    height: 100px;
    width: 300px;
    background-color:rgb(0, 0, 0);
    border: 1px solid white;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}
/* .register-success>p:nth-child(1){

} */
.register-success>p:nth-child(2){
    font-size: 25px;
}
</style>