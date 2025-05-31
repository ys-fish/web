import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    component: () => import("../App.vue"),
    children: [
      {
        path: "/",
        name: "homeIndex",
        component: () => import("../pages/index.vue"),
        children: [
          {
            path: "/",
            name: "searchIndex",
            component: () => import("../pages/home/search.vue"),
          },
          {
            path: "/webs",
            name: "websIndex",
            component: () => import("../pages/webs/index.vue"),
          },
          {
            path: "/setting",
            name: "settingIndex",
            component: () => import("../pages/setting/index.vue"),
          },
          {
            path: "/links",
            name: "linksIndex",
            component: () => import("../pages/links/links.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
