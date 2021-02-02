<template>
  <Header />
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <router-link to="/about">About</router-link> -->
  <router-view />
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
</style>
