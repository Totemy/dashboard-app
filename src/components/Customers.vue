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
      <div class="table">
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
                btn__active: product.active,
                btn__inactive: !product.active
              }"
            >
              {{ product.status }}
            </button>
          </div>
        </div>
      </div>
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
  components: {},
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
