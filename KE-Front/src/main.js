import { createApp } from "vue";

import App from "@/App.vue";
import HomePage from "@/views/HomePage.vue";
import LocationsList from "@/views/LocationsList.vue";
import AboutPage from "@/views/AboutPage.vue";
import McLainStatePark from "@/views/descriptions/McLainStatePark.vue";

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
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/locations/mclainstatepark",
    name: "McLainStatePark",
    component: McLainStatePark,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
createApp(App).use(router).mount("#app");
