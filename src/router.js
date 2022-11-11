import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/page/Main.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Customers from "@/components/customers/Customers.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
