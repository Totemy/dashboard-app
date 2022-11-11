<template>
  <div class="table">
    <div class="table-wrapper">
      <div class="row">
        <div class="col table__th">Customer Name</div>
        <div class="col table__th">Company</div>
        <div class="col table__th">Phone number</div>
        <div class="col table__th">Email</div>
        <div class="col table__th">Country</div>
        <div class="col table__th">Status</div>
      </div>
      <div
        class="row table__item"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="col table__td d-lg-none">Customer Name</div>
        <div class="col table__td">
          {{ product.name }}
        </div>
        <div class="col table__td d-lg-none">Company</div>
        <div class="col table__td">{{ product.company }}</div>
        <div class="col table__td d-lg-none">Phone number</div>
        <div class="col table__td">{{ product.phone }}</div>
        <div class="col table__td d-lg-none">Email</div>
        <div class="col table__td">{{ product.email }}</div>
        <div class="col table__td d-lg-none">Country</div>
        <div class="col table__td">{{ product.country }}</div>
        <div class="col table__td d-lg-none">Status</div>
        <div class="col table__td">
          <button
            class="btn"
            :class="{
              btn__active: product.status.toLowerCase() == 'active',
              btn__inactive: product.status.toLowerCase() == 'inactive'
            }"
          >
            {{ product.status }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productsData from "@/json/products.json";
export default {
  components: {},
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = productsData;
  }
};
</script>
