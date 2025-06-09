<template>
  <div class="webInfo">
    <div class="webInfoHeader">
      <div class="webInfoHeaderBox">
        <div class="webInfoLogo">
          <div>
            <v-img width="40" cover src="https://cn.vuejs.org/logo.svg"></v-img>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <h4 class="webInfoTitle">Vue.js</h4>
          <div class="webInfoDocs">黎明xxw</div>
          <div class="webInfoTags">
            <div class="webInfoTag">
              <div>4.1</div>
              <v-icon size="14">mdi-star</v-icon>
            </div>
            <v-divider vertical></v-divider>
            <div class="webInfoTag">74个评级</div>
            <v-divider vertical></v-divider>
            <div class="webInfoTag">高效工作</div>
          </div>
        </div>
      </div>
      <div class="webInfoText">
        adadaadadaswqewqeqweqqwewqeqweqwwwwwwwwwwwwwwwwwww
        qwewqeqweqweqweqw21313122akdkasdkadakdkakdasksakkdakdkasd
        kaskkdkwqewqekqwkrewqkkxckczxkaskrkqewrkqeqweqweqweqweqweqweqweqweqw
      </div>
      <div style="display: flex; align-items: center;margin-top: 20px;gap: 20px;">
        <v-btn flat color="#154599" > Button </v-btn>
        <v-icon size="16">mdi-share-variant-outline</v-icon>
      </div>
      <div style="font-size: 14px;margin-top: 5px;">由黎明xxw提供和更新</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webInfo {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px 25px;
  background: #f9f9f9;
  .webInfoHeader {
    width: 70%;
    margin: 80px auto;
    .webInfoHeaderBox {
      display: flex;
      gap: 20px;
      .webInfoLogo {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .webInfoTitle {
        font-size: 20px;
      }
      .webInfoDocs {
        font-size: 14px;
        color: blue;
      }
    }
    .webInfoTags {
      display: flex;
      gap: 8px;

      .webInfoTag {
        display: flex;
        font-size: 14px;
        align-items: center;
        gap: 5px;
      }
    }

    .webInfoText {
      font-size: 14px;
      width: 500px;
      margin-top: 30px;
    }
  }
}
</style>
