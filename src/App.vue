<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/header/Header";

  export default {
    components: {
      appHeader: Header
    }
  };
</script>

