<template>
  <div class="m-0">
    <Dasboard />
    <Main />
  </div>
</template>

<script>
import Dasboard from "./components/navbar/Navbar.vue";
import Main from "./components/page/Main.vue";

export default {
  components: {
    Main,
    Dasboard
  }
};
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>
