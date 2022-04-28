import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Layout from "../views/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  if (!store.state.userName) {
    console.log("滚去登录");
    return false;
  }
});

export default router;
