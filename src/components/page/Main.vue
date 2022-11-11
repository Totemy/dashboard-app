<template>
  <div class="page">
    <h4 class="page__welcome-text">Hello {{ name }}👋🏼,</h4>
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
