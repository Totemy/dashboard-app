<template>
  <div class="m-0">
    <Navbar />
    <Main />
    <router-view :key="$route.path" class="page" />
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import Main from "./components/page/Main.vue";

export default {
  components: {
    Main,
    Navbar
  }
};
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>
