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
          <v-card title="Dialog">
            <v-timeline >
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
              >
                <template v-slot:opposite>
                  <div
                    :class="`pt-1 headline font-weight-bold text-${year.color}`"
                    v-text="year.year"
                  ></div>
                </template>
                <div>
                  <h2
                    :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
                  >
                    Lorem ipsum
                  </h2>
                  <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card>
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
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import * as home from "../assets/lottie/money (3).json";
import * as setting from "../assets/lottie/setting.json";
import lottie from "lottie-web";
const navItemIndex = ref("/");
const router = useRouter();

const dialog = ref<boolean>(false);

interface NavItem {
  title: string;
  to: string;
  icon: any;
  use: any;
}

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
    icon: home,
    use: null,
  },
  {
    title: "网站",
    to: "/application",
    icon: home,
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
    icon: home,
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
  padding: 0px 5px;
  padding-top: 5px;
  padding-bottom: 5px;
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
