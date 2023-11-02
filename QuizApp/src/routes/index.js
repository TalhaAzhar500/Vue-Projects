import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizeView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: QuizesView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizeView,
    },
  ],
});

export default router;
