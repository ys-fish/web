<template>
  <div class="userBox">
    <v-card class="userCard1">
      <div class="userImage">
        <v-avatar size="120">
          <v-img
            src="https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/3241759216995_.pic_hd.jpg"
          ></v-img>
        </v-avatar>
      </div>

      <div class="userInfo">
        <div class="userName">
          让黎明先野采
          <span style="margin-left: 10px; font-size: 16px">Lv.1</span>
        </div>
        <div class="userDocs">野采达人</div>

        <div class="userMedal">
          <div class="userPlus" v-for="i in 3" :key="i">
            <v-icon color="#d0d7de">mdi-plus</v-icon>
          </div>
        </div>
      </div>

      <div class="userNum">
        <div>
          <div class="userNumItem">
            <div>
              <v-icon size="50">mdi-arch</v-icon>
            </div>
            <h4 class="userN">10</h4>
          </div>
          <div class="userTitle">收集数量</div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.userBox {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  .userCard1 {
    display: flex;
    height: 200px;
    box-sizing: border-box;
    padding: 20px;
    gap: 15px;
    .userImage {
      // width: 100px;
      // height: 100px;
    }
    .userInfo {
      .userName {
        font-size: 20px;
        font-weight: 700;
      }
      .userDocs {
        font-size: 14px;
      }
    }
    .userMedal {
      display: flex;
      gap: 15px;
      margin-top: 20px;
      .userPlus {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #d0d7de;
        cursor: pointer;
      }
    }

    .userNum {
      width: 300px;
      display: flex;
      justify-content: center;
      // align-items: center;
      .userNumItem {
        display: flex;
        align-items: center;
        .userN{
          font-size: 20px;
        }
      }
      .userTitle {
        border-radius: 5px;
        display: inline-block;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, .2);
      }
    }
  }
}
</style>
