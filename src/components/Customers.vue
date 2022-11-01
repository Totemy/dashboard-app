<template>
  <div class="page__contnent">
    <div class="page__header">
      <div class="page__article">
        <div>
          <h2 class="page__article_level_2">All Customers</h2>
        </div>
        <div>
          <h4 class="page__article_level_3">
            <span class="subtext">Active Members</span>
          </h4>
        </div>
      </div>
      <div class="searchbar">
        <span class="icon icon-search"></span>
        <input class="searchbar__input" type="text" placeholder="Search" />
      </div>
    </div>

    <div class="table-wrapper table-responsive">
      <table class="table">
        <tr>
          <th scope="col">Customer Name</th>
          <th scope="col">Company</th>
          <th scope="col">Phone number</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
          <th scope="col">Status</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td>
            {{ product.name }}
          </td>
          <td>{{ product.company }}</td>
          <td>{{ product.phone }}</td>
          <td>{{ product.email }}</td>
          <td>{{ product.country }}</td>
          <td>
            <button
              class="btn"
              :class="{
                btn__active: product.active,
                btn__inactive: !product.active
              }"
            >
              {{ product.status }}
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="page__header">
      <div class="page__info">Showing data 1 to 8 of 256K entries</div>
      <div>
        <ul class="pagination">
          <li class="pagination__item">
            <a class="pagination__link" href="#" aria-label="Previous">
              <span aria-hidden="true">&lt;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link_active" href="#">1</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">2</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">3</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">4</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__dot" href="#">...</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">40</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#" aria-label="Next">
              <span aria-hidden="true">&gt;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import productsData from "@/json/products.json";
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = productsData;
  },
  checkActive() {}
};
</script>
