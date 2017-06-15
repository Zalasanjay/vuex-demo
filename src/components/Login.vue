<template>
  <div class="Index">
  <!-- <component :is="nav"></component> -->
  <form action="/login" @submit.prevent="login({ email, password })" method="post">
   <input type="text" placeholder="email" v-model="email" required="">
   <input type="password" placeholder="password" v-model="password" required="">
   <button type="submit">Login</button>
  </form>
</div>
</template>

<script>
// import Navi from '@/components/main-nav'
import { mapGetters, mapActions} from 'vuex'
export default {
  // name: 'Index',
  // components: {
  //   Navi
  // },
  data () {
    return {
      email: '',
      password: '',
      // nav: 'Navi'
   }
 },
 // methods: mapActions([
 //   'login'
 // ]),
 computed: mapGetters([
   'isLoggedIn'
 ]),
 methods: {
   login() {
       this.$store.dispatch("login", { email: this.email, password: this.password})
        .then(() => {
         this.$session.start();
         this.$session.set('user', this.email)
         // = this.$session.get(this.email);
         console.log("session status",this.$session.exists())
         console.log("session id",this.$session.id())
        //  this.$router.push("/")
         this.$emit('login');
       });
     }
  }
}
</script>
