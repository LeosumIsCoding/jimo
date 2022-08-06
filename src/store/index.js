import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const state = {

  isLogin:false,

  userInfo:{
    id:null,
    nickname:null,
    headimg:null,
    tele:null
  },

  tokenInfo:{
    
  }
}


const mutations = {
  updateUserInfo(state, userInfo){
    state.userInfo = userInfo
  },
  login(state){
    state.isLogin = true;
  },
  logout(state){
    state.isLogin = false;
  }
}

const actions = {
  // context 是复制的一份store
  async updateUserInfo(context, token){
    // console.log(token);
    if(token === null){
      // alert("token jiade")
      return;
    }

    axios.get(`/token/isCorrect/${token}`)
    .then(res=>{
      let status = res.data;
      if(!status){
        alert("token 错误")
        return;
      }

      axios.get(`/token/userInfo/${token}`)
      .then(res=>{
        context.commit("updateUserInfo", res.data.data);
        context.commit("login");
      })

    }, err=>{
      alert("网络异常",err);

    })
  }
}

const getters = {

}




Vue.use(Vuex)


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
  