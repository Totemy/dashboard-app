<template>
  <div class="navigation">
    <div class="row">
      <div class="col">
        <div class="">
          <button class="burger-btn navigation__toggler" @click="showMenu()">
            <span class="burger-btn__item"></span>
            <span class="burger-btn__item"></span>
            <span class="burger-btn__item"></span>
          </button>
        </div>
      </div>
      <div class="col-auto">
        <h2 class="navigation__heading_mobile">
          <span class="navigation__logo"></span>Dashboard
          <span class="navigation__version">v.01</span>
        </h2>
      </div>
    </div>

    <div
      class="navigation__content"
      :class="
        this.showMobileMenu
          ? 'navigation__open-menu'
          : 'navigation__closed-menu'
      "
    >
      <div>
        <h2 @click="goMain()" class="navigation__heading">
          Dashboard
          <span class="navigation__version">v.01</span>
        </h2>
      </div>
      <div class="navigation__items">
        <div @click="goDashboard()" class=" navigation__item">
          <span class="icon icon-dashboard navigation__icon"></span>
          Dashboard
        </div>
        <div class=" navigation__item">
          <span class="icon icon-product navigation__icon"></span> Product
          <span class="icon icon__right-arrow navigation__icon"></span>
        </div>
        <div
          @click="goCustomers()"
          class=" navigation__item navigation__item_active"
        >
          <span class="icon icon-customers navigation__icon"></span> Customers
          <span class="icon icon__right-arrow-active navigation__icon"></span>
        </div>
        <div class=" navigation__item">
          <span class="icon icon-income navigation__icon"></span> Income
          <span class="icon icon__right-arrow navigation__icon"></span>
        </div>
        <div class=" navigation__item">
          <span class="icon icon-promote navigation__icon"></span> Promote
          <span class="icon icon__right-arrow navigation__icon"></span>
        </div>
        <div class=" navigation__item">
          <span class="icon icon-help navigation__icon"></span> Help
          <span class="icon icon__right-arrow navigation__icon"></span>
        </div>
      </div>
      <div class="profile">
        <div class="profile__img">
          <img src="images/navbar/avatar.png" />
        </div>
        <div class="profile__title">
          <div>
            Name
          </div>
          <div>
            Project Manager
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    goMain() {
      this.$router.push({ name: "Main" });
    },
    goDashboard() {
      this.$router.push({ name: "Dashboard" });
    },
    goCustomers() {
      this.$router.push({ name: "Customers" });
    }
  }
};
</script>
