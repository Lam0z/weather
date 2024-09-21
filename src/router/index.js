import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CityPage from "../pages/CityPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/city/:id",
            name: "city",
            component: CityPage,
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../views/AboutView.vue')
        // }
    ],
});

export default router;
