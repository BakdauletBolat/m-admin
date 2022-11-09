<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './Header.vue';

</script>
<template>
  <div class="wrapper">
    <Toast/>
    <Header></Header>
    <RouterView />
  </div>
</template>
<style>
body {
  padding:0px;
  margin: 0px;
  color: #293241CC;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.container {
  padding: 0px 20px;
}
.card {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
}
.wrapper {
  background-color: #f8f9fa!important;
  min-height: 100vh;
  
}
</style>
