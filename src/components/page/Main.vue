<template>
  <div class="page">
    <h4 class="page__title">Hello {{ name }}👋🏼,</h4>
    <!--page__welcome-text -->

    <div>
      <Customers />
    </div>
  </div>
</template>
<script>
import Customers from "@/components/customers/Customers.vue";
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
