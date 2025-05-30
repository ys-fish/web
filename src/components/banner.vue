<template>
  <div class="banner">
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
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import * as home from "../assets/lottie/money (3).json";
import lottie from "lottie-web";
const navItemIndex = ref("/");
const router = useRouter();
interface NavItem {
  title: string;
  to: string;
  icon: any;
  use: any;
}

const navItem = ref<NavItem[]>([
  {
    title: "起始页",
    to: "/",
    icon: home,
    use: null,
  },
  {
    title: "网站组",
    to: "/links",
    icon: home,
    use: null,
  },
  {
    title: "网站",
    to: "/application",
    icon: home,
    use: null,
  },
  {
    title: "网站组",
    to: "/linkSearch",
    icon: home,
    use: null,
  },
  {
    title: "我的消息",
    to: "/message",
    icon: home,
    use: null,
  },
]);

const navItemClick = (e: NavItem) => {
  navItemIndex.value = e.to;
  //   router.push(e.to);
  e.use.stop();
  e.use.play();
};

const navItemButton = ref<NavItem[]>([
  {
    title: "用户",
    to: "/user",
    icon: home,
    use: null,
  },
  {
    title: "设置",
    to: "/setting",
    icon: home,
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
  gap: 10px;
  background: #f3f3f3;
  padding: 0px 5px;
  padding-top: 5px;
  .banner_tab {
    height: 60px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
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
    svg {
      color: blue;
    }
    &:hover {
      background: white;
    }
  }
}
</style>
