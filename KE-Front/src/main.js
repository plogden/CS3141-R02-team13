import { createApp } from "vue";

import App from "@/App.vue";
import HomePage from "@/views/HomePage.vue";
import LocationsList from "@/views/LocationsList.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/locations",
    name: "LocationsList",
    component: LocationsList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
createApp(App).use(router).mount("#app");
