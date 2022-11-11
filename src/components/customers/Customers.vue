<template>
  <div class="container">
    <div class="main">
      <div class="main__content">
        <CustomersHeader />
        <Table />
        <CustomersFooter />
      </div>
    </div>
  </div>
</template>
<script>
import Table from "@/components/customers/Table.vue";
import CustomersFooter from "@/components/customers/CustomersFooter.vue";
import CustomersHeader from "@/components/customers/CustomersHeader.vue";
export default {
  components: {
    Table,
    CustomersFooter,
    CustomersHeader
  }
};
</script>
