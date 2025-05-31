<script lang="ts" setup></script>

<template>
  <div class="webs">
    <div class="web_recommend">
      <v-card class="web_left_carousel">
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-card>
      <div></div>
    </div>
    <div class="web_hot">
      <h4>热门网页</h4>
      <div class="web_hot_list">
        <v-card
          class="web_hot_card"
          flat
          border
          color="white"
          v-for="n in 10"
          :key="n"
        >
          <div class="web_box">
            <div class="web_logo">
              <div>
                <v-img
                  width="60"
                  cover
                  src="https://cn.vuejs.org/logo.svg"
                ></v-img>
              </div>
            </div>
            <div class="web_info">
              <div class="name">VueJs</div>
              <div class="tag">技术工具</div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webs {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  background: #f9f9f9;
  .web_recommend {
    display: flex;
    .web_left_carousel {
      flex: 0 0 55%;
      height: 460px;
    }
  }
  .web_hot {
    margin-top: 20px;
    h4 {
      font-size: 20px;
    }
    .web_hot_list {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px; /* 间隔 20px */
      .web_hot_card {
        flex: 1 0 calc((100% - 4 * 20px) / 5); /* 一行5个，间隔4个20px */
        box-sizing: border-box;
        height: 110px; /* 你可以根据需要修改 */
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        .web_box {
          display: flex;
          align-items: center;
          gap: 20px;
          .web_logo {
            width: 80px;
            height: 80px;
            background: red;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
