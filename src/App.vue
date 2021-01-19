<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <div class="row">
      <div class="col-md-12">
        
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/header/Header";

  export default {
    created(){
      this.$store.dispatch('autoSignin')
      if (!this.$store.state.idToken) {
        this.$router.push('/signin')
      }
    },
    components: {
      appHeader: Header
    }
  };
</script>

