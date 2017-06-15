<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
  	// if (!this.$store.state.isLoggedIn) { 
   //      this.$router.push("/")
   //  }
    return {
      message: "you have login successful "
    }
  },
  computed: mapGetters([
    'isLoggedIn',
    'UserData'
  ])
}

</script>
