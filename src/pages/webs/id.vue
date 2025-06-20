<template>
  <div class="webInfo">
    <div class="webInfoMock"></div>
    <div class="webInfoHeader">
      <div class="webInfoHeaderBox">
        <div class="webInfoLogo">
          <div>
            <v-img width="60" cover src="https://cn.vuejs.org/logo.svg"></v-img>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <h4 class="webInfoTitle">黎明起始页</h4>
          <div class="webInfoDocs">深圳市黎明科技有限公司</div>
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
      <div class="webInfoText">科技改变世界</div>
      <div
        style="display: flex; align-items: center; margin-top: 10px; gap: 20px"
      >
        <v-btn flat color="#154599"> 进入网站 </v-btn>
        <v-icon size="16">mdi-share-variant-outline</v-icon>
      </div>
      <div style="font-size: 12px; margin-top: 5px">由黎明xxw提供和更新</div>

      <div class="centen">
        <div class="centenLeft">
          <div class="couselBox">
            <div class="couselBoxHeader">
              <div style="font-weight: 700">屏幕截图</div>
              <div><v-icon>mdi-chevron-right</v-icon></div>
            </div>
            <v-divider></v-divider>
            <div style="padding: 20px 0px">
              <v-slide-group show-arrows>
                <v-slide-group-item v-for="n in 3" :key="n" v-slot="{ toggle }">
                  <v-img
                    class="ma-2"
                    @click="toggle"
                    width="560px"
                    height="330px"
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                  ></v-img>
                </v-slide-group-item>
              </v-slide-group>
            </div>
          </div>

          <div class="couselBox">
            <div class="couselBoxHeader">
              <div style="font-weight: 700">描述</div>
              <div><v-icon>mdi-chevron-right</v-icon></div>
            </div>
            <v-divider></v-divider>
            <div style="padding: 20px 20px;font-size: 14px;">
              抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让生活更美好。
              抖音电脑版，新功能上线，快来体验！<br /> 【小窗播放，自由切换】
              视频变小窗，精彩不占屏，学习娱乐两不误；
              全屏or小窗，随你所想，屏幕空间尽在掌握。 【抖音视频，秒变壁纸】
              选择你喜欢的视频，设置为桌面壁纸，陪伴一天好心情。
              还可以点击“看抖音”、“看作者”，一键观看更省心。
            </div>
          </div>

            <div class="couselBox">
            <div class="couselBoxHeader">
              <div style="font-weight: 700">评分和评价</div>
              <div><v-icon>mdi-chevron-right</v-icon></div>
            </div>
            <v-divider></v-divider>
            <div style="padding: 20px 20px;font-size: 14px;">
              抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让生活更美好。
              抖音电脑版，新功能上线，快来体验！<br /> 【小窗播放，自由切换】
              视频变小窗，精彩不占屏，学习娱乐两不误；
              全屏or小窗，随你所想，屏幕空间尽在掌握。 【抖音视频，秒变壁纸】
              选择你喜欢的视频，设置为桌面壁纸，陪伴一天好心情。
              还可以点击“看抖音”、“看作者”，一键观看更省心。
            </div>
          </div>
        </div>
        <div class="centenRight"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webInfo {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  background: #f9f9f9;
  .webInfoHeader {
    width: 84%;
    margin: 80px auto;
    .webInfoHeaderBox {
      display: flex;
      gap: 20px;
      .webInfoLogo {
        width: 86px;
        height: 86px;
        border-radius: 10px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .webInfoTitle {
        font-size: 30px;
        margin: 0;
        padding: 0;
      }
      .webInfoDocs {
        font-size: 14px;
        color: #1565c0;
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

  .centen {
    display: flex;
    gap: 60px;
    .centenLeft {
      width: 78%;
      position: relative;
    }
  }

  .webInfoMock {
    position: fixed;
    width: 100vw;
    height: 300px;
    left: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 128, 0, 0.1) 30%,
      rgba(0, 128, 0, 0) 70%
    );
  }

  .couselBox {
    box-sizing: border-box;
    // padding: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 10px;
    .couselBoxHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
    }
  }
}
</style>
