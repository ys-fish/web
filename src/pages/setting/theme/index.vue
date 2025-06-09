<script lang="ts" setup>
import { ref } from "vue";

const drawer = ref<boolean>(false);

const bgImage = [
  {
    id: 1,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg",
  },
  {
    id: 2,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/24158af023abdbae6125784f7c88dcf2481032482.jpg",
  },
  {
    id: 3,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg",
  },
  {
    id: 4,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg",
  },
  {
    id: 5,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg",
  },
  {
    id: 6,
    image:
      "https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg",
  },
];
</script>

<template>
  <div class="setting">
    <v-navigation-drawer
      v-model="drawer"
      open-delay="4000"
      width="400"
      location="right"
    >
      <div class="rightBox">
        <div style="box-sizing: border-box; padding: 10px">
          <v-icon size="18" @click="drawer = false">mdi-close</v-icon>
        </div>
        <v-divider></v-divider>
        <div class="bgImageText">
          <h4 class="bgImageTitle">背景设置</h4>
          <div class="bgImageDocs">
            在此处可以自定义主题颜色和背景图片，点击右侧的自定义背景按钮即可进行设置。
          </div>
          <div class="bgImageList">
            <v-img
              v-for="(item, index) in bgImage"
              :key="index"
              :src="item.image"
              width="100px"
              height="80px"
            ></v-img>
          </div>
          <v-divider></v-divider>
          <h4 class="bgImageTitle" style="margin-top: 10px">上传背景</h4>
          <div class="bgImageDocs">
            点击下方的上传按钮即可设置自己的背景图片，支持jpg、png格式。
          </div>
          <div class="bgImagePush">
            <v-icon>mdi-plus</v-icon>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <div class="themeBox" :class="{ isTheme: drawer }">
      <div class="exit" @click="$router.back()">
        <v-icon size="28">mdi-chevron-left</v-icon>
        返回设置
      </div>

      <v-card style="margin-top: 20px">
        <v-list style="padding: 0">
          <v-list-item color="primary" key="1" value="1">
            <v-list-item-title style="font-size: 14px">主题</v-list-item-title>
            <template v-slot:append>
              <v-icon size="18" color="#000000">mdi-export-variant</v-icon>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item color="primary" @click="drawer = true">
            <v-list-item-title style="font-size: 14px"
              >自定义背景</v-list-item-title
            >
            <template v-slot:append>
              <v-icon size="18" color="#000000">mdi-export-variant</v-icon>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item color="primary">
            <v-list-item-title style="font-size: 14px">模式</v-list-item-title>
            <template v-slot:append>
              <v-select
                variant="outlined"
                density="compact"
                label="默认"
                width="200px"
                single-line
                hide-details
                :items="['默认', '深色', '浅色']"
              ></v-select>
            </template>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item color="primary">
            <v-list-item-title style="font-size: 14px"
              >显示主页链接组</v-list-item-title
            >
            <template v-slot:append>
              <v-switch
                color="red-darken-3"
                density="compact"
                single-line
                hide-details
              ></v-switch>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item color="primary">
            <v-list-item-title style="font-size: 14px">字号</v-list-item-title>
            <template v-slot:append>
              <v-select
                variant="outlined"
                density="compact"
                label="默认"
                width="200px"
                single-line
                hide-details
                :items="['默认', '深色', '浅色']"
              ></v-select>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
  .isTheme {
    transform: translateX(-190px);
  }
  .themeBox {
    transition: 0.3s;
    width: 700px;
    margin: 0 auto;
    padding-top: 20px;
    .exit {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
    }
  }
}

.rightBox {
  box-sizing: border-box;
  //   padding: 20px;
  .bgImageText {
    box-sizing: border-box;
    padding: 10px;
    .bgImageTitle {
      font-size: 14px;
    }
    .bgImageDocs {
      margin-top: 5px;
      font-size: 12px;
    }
    .bgImageList {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
      padding-bottom: 10px;
    }
    .bgImagePush {
      width: 120px;
      height: 120px;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
  }
}
</style>
