import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGOUT = "LOGOUT"

const state = {
  isLoggedIn: localStorage.getItem('token'),
  UserData: {}
}

const mutations = {
  LOGIN (state, creds) {
    state.pending = true;
    state.UserData = creds;
    console.log("login user",state.UserData.email);
    console.log("login pass",state.UserData.password);
    // console.log("state.session = ",state.session);
  },
  LOGIN_SUCCESS (state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  LOGOUT (state) {
    state.isLoggedIn = false;
  }
}

const actions = {
 login({ commit }, creds) {
   commit(LOGIN, creds); // show spinner
   return new Promise(resolve => {
     setTimeout(() => {
       localStorage.setItem("token", "JWT");
      //  localStorage.setItem(creds);
      //  console.log(localStorage.user);
       commit(LOGIN_SUCCESS);
       resolve();
     }, 500);
   });
 },
 logout({ commit }) {
   localStorage.removeItem("token");
   commit(LOGOUT);
   console.log("login status",state.isLoggedIn);
 }
}

const getters = {
 isLoggedIn: state => {
   return state.isLoggedIn
  },
  UserData: state => {
    return state.UserData
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
