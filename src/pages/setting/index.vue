<script lang="ts" setup>
import { ref } from "vue";

const rail = ref(true);
const drawer = ref(true);
</script>

<template>
  <div class="setting">
    <div class="settingBox">
      <div>
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          label="搜索设置内容"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
        <h4 style="margin-top: 20px">用户设置</h4>
        <v-card class="" style="margin-top: 10px">
          <v-list style="padding: 0">
            <v-list-item color="primary">
              <div class="userItem">
                <div>
                  <v-avatar>
                    <v-img
                      alt="John"
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    ></v-img>
                  </v-avatar>
                </div>
                <div class="userInfo">
                  <div class="userName">2313211</div>

                  <div class="userDocs">同步导航到云端</div>
                </div>
                <div>
                  <v-btn flat color="error"> 退出登录 </v-btn>
                </div>
              </div>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item color="primary" key="2" value="2">
              <v-list-item-title style="font-size: 14px"
                >同步导航</v-list-item-title
              >
              <template v-slot:append>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item color="primary" key="3" value="3" to="/setting/theme">
              <v-list-item-title style="font-size: 14px"
                >自定义主题</v-list-item-title
              >
              <template v-slot:append>
                <v-icon color="blue-grey-lighten-4">mdi-chevron-right</v-icon>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </div>
      <div>
        <h4 style="margin-top: 20px;">搜索设置</h4>
        <v-card class="" style="margin-top: 10px">
          <v-list style="padding: 0">
            <v-list-item color="primary" key="2" value="2" to="/setting/engine">
              <v-list-item-title style="font-size: 14px"
                >管理搜索引擎</v-list-item-title
              >
              <template v-slot:append>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </div>
    </div>

    <!-- <div class="settingBox">
      <h4>隐私和安全保护</h4>
      <v-card class="" style="margin-top: 10px">
        <v-list style="padding: 0">
          <v-list-item color="primary" key="2" value="2">
            <v-list-item-title style="font-size: 14px"
              >管理搜索引擎</v-list-item-title
            >
            <template v-slot:append>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        
        </v-list>
      </v-card>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.setting {
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
  .settingBox {
    width: 700px;
    margin: 0 auto;
    padding-top: 20px;
  }
}

.userItem {
  display: flex;
  padding: 10px 10px;
  gap: 20px;
  justify-content: space-between;
  .userInfo {
    flex: 1;
    .userName {
      font-size: 14px;
    }
    .userDocs {
      font-size: 12px;
    }
  }
}
</style>
