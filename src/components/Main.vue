<template>
  <div class="page">
    <h4>Hello,{{ name }}👋🏼, <span class="icon icon-hello"></span></h4>

    <div class="">
      <Customers />
    </div>
  </div>
</template>
<script>
import Customers from "@/components/Customers.vue";
export default {
  components: {
    Customers
  },
  data() {
    return {
      name: "Evano"
    };
  }
};
</script>
