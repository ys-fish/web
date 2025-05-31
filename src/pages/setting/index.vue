<template>
  <div class="setting">
    <div class="settingBox">
      <h4>用户设置</h4>
      <v-card class="" style="margin-top: 10px">
        <v-list style="padding: 0;">
          <v-list-item color="primary"  >
            <div class="userItem">
              <div>
                <v-avatar>
                  <v-img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  ></v-img>
                </v-avatar>
              </div>
              <div>2313211</div>
            </div>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item color="primary" key="2" value="2">
            <template v-slot:prepend>
              <v-icon></v-icon>
            </template>

            <v-list-item-title>12312312</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item color="primary" key="3" value="3">
            <template v-slot:prepend>
              <v-icon></v-icon>
            </template>

            <v-list-item-title>12312312</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item color="primary" key="4" value="4">
            <template v-slot:prepend>
              <v-icon></v-icon>
            </template>

            <v-list-item-title>12312312</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <div class="settingBox">
      <h4>搜索设置</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  background: #f9f9f9;
  width: 100%;
  .settingBox {
    width: 700px;
    margin: 0 auto;
    margin-top: 20px;
  }
}

.userItem {
  display: flex;
  padding: 5px 10px;
  gap: 20px;
}
</style>
