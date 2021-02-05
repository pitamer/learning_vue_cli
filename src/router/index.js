import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Lists from "@/views/Lists.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lists",
    name: "Lists",
    component: Lists,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
