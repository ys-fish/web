<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { get } from "../../utils/axios-request";

const titleSelete = ref<string>("1");

const games = [
  {
    img: "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/5e8372f0d0b9edd691f1d680f8d783c8.jpg",
    title: "The Sci-Fi Shooter Experience",
    subtitle:
      "Dive into a futuristic world of intense battles and alien encounters.",
    advanced: false,
    duration: "8 minutes",
  },
  {
    img: "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/5dab47503d04109b693b618d0ae3d201481032482.jpg",
    title: "The Sci-Fi Shooter Experience",
    subtitle:
      "Dive into a futuristic world of intense battles and alien encounters.",
    advanced: false,
    duration: "8 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png",
    title: "Epic Adventures in Open Worlds",
    subtitle:
      "Embark on a journey through vast, immersive landscapes and quests.",
    advanced: true,
    duration: "10 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png",
    title: "Surviving the Space Station Horror",
    subtitle:
      "Navigate a haunted space station in this chilling survival horror game.",
    advanced: false,
    duration: "9 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
    title: "Neon-Lit High-Speed Racing Thrills",
    subtitle:
      "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
    advanced: true,
    duration: "12 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
    title: "Retro-Style Platformer Adventures",
    subtitle:
      "Jump and dash through pixelated worlds in this classic-style platformer.",
    advanced: false,
    duration: "11 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
    title: "Neon-Lit High-Speed Racing Thrills",
    subtitle:
      "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
    advanced: true,
    duration: "12 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
    title: "Retro-Style Platformer Adventures",
    subtitle:
      "Jump and dash through pixelated worlds in this classic-style platformer.",
    advanced: false,
    duration: "11 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
    title: "Neon-Lit High-Speed Racing Thrills",
    subtitle:
      "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
    advanced: true,
    duration: "12 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
    title: "Retro-Style Platformer Adventures",
    subtitle:
      "Jump and dash through pixelated worlds in this classic-style platformer.",
    advanced: false,
    duration: "11 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png",
    title: "Medieval Strategic War Campaigns",
    subtitle:
      "Lead armies into epic battles and conquer kingdoms in this strategic game.",
    advanced: true,
    duration: "10 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png",
    title: "Underwater VR Exploration Adventure",
    subtitle:
      "Dive deep into the ocean and discover the mysteries of the underwater world.",
    advanced: true,
    duration: "11 minutes",
  },
  {
    img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png",
    title: "1920s Mystery Detective Chronicles",
    subtitle: "Solve crimes and uncover secrets in the glamorous 1920s era.",
    advanced: false,
    duration: "9 minutes",
  },
];

const list = ref();

const fetch = async () => {
  const data = await get("/types");
  list.value = data.data;
};

onMounted(() => {
  fetch();
});
</script>

<template>
  <div class="SearchBox">
    <div class="indexBox">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="indexInner">
            <h4>中国原生鱼图鉴</h4>
            <v-icon>mdi-chevron-down</v-icon>
          </div>
        </template>

        <v-list
          width="200"
          nav
          density="compact"
          v-model:selected="titleSelete"
        >
          <v-list-item value="1">
            <v-list-item-title>中国原生鱼图鉴</v-list-item-title>
          </v-list-item>
          <v-list-item value="2">
            <v-list-item-title>原生龟类图鉴</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="IllustratedGuideList">
        <v-card class="pb-3" border flat v-for="item in list" :key="item.title">
          <v-img height="130" cover :src="item.image"></v-img>

          <v-list-item :subtitle="item.docs" class="mb-2">
            <template v-slot:title>
              <strong class="text-h6 mb-2">{{ item.title }}</strong>
            </template>
          </v-list-item>

          <div class="d-flex justify-space-between px-4">
            <div
              class="d-flex align-center text-caption text-medium-emphasis me-1"
            >
              <v-icon icon="mdi-clock" start></v-icon>

              <div class="text-truncate">{{ item.updateAt }}更新过</div>
            </div>

            <v-btn
              class="text-none"
              size="small"
              text="查看"
              variant="flat"
              border
              @click="$router.push(`/type/${item.id}`)"
            >
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgImage {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  // z-index: -1;
}
.SearchBox {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  background: #f9f9f9;
  .indexInner {
    display: flex;
    // margin-top: 20px;
    gap: 10px;
    align-items: center;
    h4 {
      font-size: 18px;
    }
  }
  .IllustratedGuideList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 10px;
    gap: 10px;
  }
}
</style>
