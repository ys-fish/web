<template>
  <div class="banner">
    <div style="display: flex; flex-direction: column; gap: 5px">
      <div
        :class="{
          banner_tab: true,
          banner_tab_active: itemTsg.to == navItemIndex,
        }"
        v-for="(itemTsg, index) in navItem"
        :key="'nav-' + index"
        @click="navItemClick(itemTsg)"
      >
        <v-tooltip activator="parent" location="end">{{
          itemTsg.title
        }}</v-tooltip>

        <div
          :id="itemTsg.to"
          style="
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        ></div>
        <div class="banner_tab_title" v-show="itemTsg.to != navItemIndex">
          {{ itemTsg.title }}
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 5px">
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <div
            :class="{
              banner_tab: true,
            }"
            :key="'nav-' + index"
            v-bind="activatorProps"
          >
            <v-tooltip activator="parent" location="end">新增功能</v-tooltip>

            <div
              id="create_tab"
              style="
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            ></div>
            <div class="banner_tab_title">新增功能</div>
          </div>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="新增功能"> </v-card>
        </template>
      </v-dialog>

      <div
        :class="{
          banner_tab: true,
          banner_tab_active: itemTsg.to == navItemIndex,
        }"
        v-for="(itemTsg, index) in navItemButton"
        :key="'nav-' + index"
        @click="navItemClick(itemTsg)"
      >
        <v-tooltip activator="parent" location="end">{{
          itemTsg.title
        }}</v-tooltip>

        <div
          :id="itemTsg.to"
          style="
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        ></div>
        <div class="banner_tab_title" v-show="itemTsg.to != navItemIndex">
          {{ itemTsg.title }}
        </div>
      </div>
    </div>
  </div>
  <div style="width: 80px"></div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import * as home from "../assets/lottie/money (3).json";
import * as setting from "../assets/lottie/setting.json";
import * as web from "../assets/lottie/Web.json";
import * as link from "../assets/lottie/Link (1).json";
import * as user from "../assets/lottie/approved user.json";
import * as register from "../assets/lottie/";

import lottie from "lottie-web";
import { AutoStore } from "../store/auto";
const navItemIndex = ref("/");
const router = useRouter();

const dialog = ref<boolean>(false);

interface NavItem {
  title: string;
  to: string;
  icon: any;
  use: any;
}

const useAuto = AutoStore();

console.log(useAuto.user);

const years = ref([
  {
    color: "cyan",
    year: "1960",
  },
  {
    color: "green",
    year: "1970",
  },
  {
    color: "pink",
    year: "1980",
  },
  {
    color: "amber",
    year: "1990",
  },
  {
    color: "orange",
    year: "2000",
  },
]);

const navItem = ref<NavItem[]>([
  {
    title: "起始页",
    to: "/",
    icon: home,
    use: null,
  },
  {
    title: "网站组",
    to: "/webs",
    icon: web,
    use: null,
  },
  {
    title: "图鉴列表",
    to: "/links",
    icon: link,
    use: null,
  },
]);

const navItemClick = (e: NavItem) => {
  navItemIndex.value = e.to;
  router.push(e.to);
  e.use.stop();
  e.use.play();
};

const navItemButton = ref<NavItem[]>([
  {
    title: "用户",
    to: "/user",
    icon: user,
    use: null,
  },
  {
    title: "设置",
    to: "/setting",
    icon: setting,
    use: null,
  },
]);

onMounted(async () => {
  nextTick(() => {
    navItem.value.forEach((v: NavItem) => {
      v.use = lottie.loadAnimation({
        container: document.getElementById(v.to) as any,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: v.icon.default,
      });
    });
    navItemButton.value.forEach((v: NavItem) => {
      v.use = lottie.loadAnimation({
        container: document.getElementById(v.to) as any,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: v.icon.default,
      });
    });
  });
});
</script>

<style scoped lang="scss">
.banner {
  width: 80px;
  height: 100vh;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f3f3f3;
  // background: rgba(0, 0, 0, 0.1);
  padding: 0px 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: fixed;
  left: 0px;
  z-index: 999;

  .banner_tab {
    height: 60px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    .banner_tab_title {
      font-size: 12px;
      color: #b0bec5;
    }
  }
  .banner_tab_active {
    background: white;

    &:hover {
      background: white;
    }
  }
}
</style>
