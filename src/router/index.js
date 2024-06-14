import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByIng from "../views/MealsByIng.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    path: "/",
    name: "default-layout",
    component: DefaultLayout,
    children: [
      { path: "/", name: "home", component: Home },
      // {
      //   // path: "/letter/:letter",
      //   // name: "byLetter",
      //   // component: MealList,
      // },
      { path: "/by-name/:name?", name: "byName", component: MealsByName },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIng,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
