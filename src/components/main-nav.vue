<template>
  <div class="Nav">
  <!-- <section> -->
    <!-- <a href="">Home</a>
    <a href="#/Login" v-if="!isLoggedIn">Login</a>
    <h1>{{ message }}</h1>
    <a href="#" v-if="isLoggedIn" @click="logout">Logout</a> -->
    <!-- <component :is="home"></component> -->
  <!-- </section> -->
  <section>
    <button v-if="!isLoggedIn" v-on:click="onHome()">Home</button>
    <button v-if="!isLoggedIn"><div v-on:click="onLogin()">Login</div></button>
    <button v-if="isLoggedIn" @click="dashboard">Dashboard</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <component :is="maindash" v-on:login="onHome()"></component>
  </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
export default {
  name: 'Nav',
  components: {
    Home, Login, Dashboard 
  },
  data () {
    return {
      maindash: 'Home'
    }
  },
  computed: {
      ...mapGetters(['isLoggedIn','UserData']),
    },
  methods: {
    logout() {
       this.$store.dispatch('logout');
       this.maindash = 'Home'
    },
    onHome: function() {
      if (this.$store.state.isLoggedIn) { 
        this.maindash = 'Dashboard' 
      }
    },
    onLogin: function() {
        this.maindash = 'Login'
    },
    dashboard: function() {
      this.maindash = 'Dashboard'
    }
  },
  mounted: function() {
     if (this.$store.state.isLoggedIn) { 
        this.maindash = 'Dashboard'
    }
  }
}
 //  methods: {
 //   logout() {
 //    this.$store.dispatch('logout');
 //   }
 // },
 // computed: {
 //   isLoggedIn() {
 //     return this.$store.getters.isLoggedIn;
 //   }
 // }
</script>


<!-- 
computed: { mapGetters([
      'isLoggedIn',
      'UserData'
    ]),
    user() {
      this.$store.state.UserData.email;
    }
  }, -->