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
            path: "/class/:id",
            name: "classIndex",
            component: () => import("../pages/home/class.vue"),
          },
          {
            path: "/type/:id",
            name: "typeIndex",
            component: () => import("../pages/home/fish.vue"),
          },
          {
            path: "/webs",
            name: "websIndex",
            component: () => import("../pages/webs/index.vue"),
          },
          {
            path: "/web/:id",
            name: "webIDIndex",
            component: () => import("../pages/webs/id.vue"),
          },
          // 设置分类导航路由
          {
            path: "/setting",
            name: "settingIndex",
            component: () => import("../pages/setting/index.vue"),
          },
          {
            path: "/setting/engine",
            name: "settingEngineIndex",
            component: () => import("../pages/setting/engine/index.vue"),
          },
          {
            path: "/setting/theme",
            name: "settingThemeIndex",
            component: () => import("../pages/setting/theme/index.vue"),
          },
          // 用户相关路由
          {
            path: "/user",
            name: "userIndex",
            component: () => import("../pages/user/index.vue"),
          },
          {
            path: "/register",
            name: "registerIndex",
            component: () => import("../pages/user/register/index.vue"),
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
  {
    path: "/welcome",
    name: "welcomeIndex",
    component: () => import("../pages/welcome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
