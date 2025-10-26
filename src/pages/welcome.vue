<template>
  <div>
    <div class="bgImage">
      <v-img
        cover
        src="https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg"
      >
        <div class="bgHome">
          <div class="wTitle">原生水族</div>
          <div class="wText">
            本网站是专注于收集原生鱼种图鉴的网站，希望大家可以一起保护好环境
            <br />
            保护好原生鱼种，不要随意捕捞和破坏生态环境。
          </div>
          <div style="margin-top: 20px">
            <v-btn
              prepend-icon="$vuetify"
              variant="outlined"
              color="white"
              to="/"
            >
              点击进入
            </v-btn>
          </div>
          <div
            id="bid"
            style="width: 40px; height: 40px; margin-top: 20px;"
          ></div>
        </div>
      </v-img>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import * as user from "../assets/lottie/arrow from bottom.json";
import lottie from "lottie-web";
const bottomRef = ref<any>(null);

onMounted(async () => {
  nextTick(() => {
    bottomRef.value = lottie.loadAnimation({
      container: document.getElementById("bid") as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: (user as any).default,
    });
  });
});
</script>

<style lang="scss" scoped>
.bgImage {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  // z-index: -1;
}
.bgHome {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 111;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wTitle {
    font-size: 90px;
    font-weight: 900;
    letter-spacing: 40px;
    margin-top: 200px;
    color: white;
  }
  .wText {
    color: white;
    font-size: 20px;
  }
}
</style>
