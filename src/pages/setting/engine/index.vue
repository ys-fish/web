<script lang="ts" setup>
import { ref } from "vue";
import { get } from "../../../utils/axios-request";

interface SearchItem {
  id: number;
  title: string;
  link: string;
}

const drawer = ref<boolean>(false);
const search_list = ref<SearchItem[]>([]);

const searchFetch = async () => {
  const { data } = await get("search");
  search_list.value = data.data.map((item: SearchItem) => ({
    id: item.id,
    title: item.title,
    link: item.link,
  }));
  console.log(search_list.value);
};

searchFetch();
</script>

<template>
  <div class="setting">
    <div class="engineBox">
      <div class="exit" @click="$router.back()">
        <v-icon size="28">mdi-chevron-left</v-icon>
        返回设置
      </div>

      <div class="engineBoxList">
        <v-card class="" style="margin-top: 10px">
          <v-list style="padding: 0">
            <div class="engineTitle">
              <h4>键盘快捷键设置</h4>
              <div class="engineTitleText">
                在地址栏中，将此键盘快捷键与用于搜索引擎和网站搜索的快捷字词结合使用
              </div>
            </div>
            <v-radio-group>
              <v-list-item color="primary" key="2" value="2">
                <template v-slot:prepend="{}">
                  <v-list-item-action start>
                    <v-radio value="one">
                      <template v-slot:label>
                        <div class="enginItem">
                          <div class="enginItemTitle">空格或Tab键</div>
                        </div>
                      </template>
                    </v-radio>
                  </v-list-item-action>
                </template>
                <template v-slot:append> </template>
              </v-list-item>
              <v-list-item color="primary" key="3" value="3">
                <template v-slot:prepend="{}">
                  <v-list-item-action start>
                    <v-radio value="one1">
                      <template v-slot:label>
                        <div class="enginItem">
                          <div class="enginItemTitle">Tab键</div>
                        </div>
                      </template>
                    </v-radio>
                  </v-list-item-action>
                </template>
                <template v-slot:append> </template>
              </v-list-item>
            </v-radio-group>

            <v-divider></v-divider>
            <div class="engineTitle">
              <h4>搜索引擎设置</h4>
              <div class="engineTitleText">
                若要使用非默认的搜索引擎，请先在地址栏中输入相应的快捷字词，然后按您的首选键盘快捷键。您还可在此处更改默认搜索引擎。
              </div>
            </div>
            <v-radio-group>
              <v-list-item
                color="primary"
                :value="item.id"
                v-for="item in search_list"
                :key="item.id"
              >
                <template v-slot:prepend="{}">
                  <v-list-item-action start>
                    <v-radio value="one">
                      <template v-slot:label>
                        <div class="enginItem">
                          <div class="enginItemTitle">{{ item.title }}</div>
                          <div class="enginItemDocs">{{ item.link }}</div>
                        </div>
                      </template>
                    </v-radio>
                  </v-list-item-action>
                </template>
                <template v-slot:append>
                  <v-icon>mdi-dots-vertical</v-icon>
                </template>
              </v-list-item>
            </v-radio-group>

            <v-divider></v-divider>
          </v-list>
        </v-card>
      </div>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
  .engineBox {
    width: 700px;
    margin: 0 auto;
    padding-top: 20px;
    .exit {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
    }

    .engineBoxList {
      margin-top: 20px;
      .engineTitle {
        box-sizing: border-box;
        padding: 20px;
        h4 {
          font-size: 12px;
        }
        .engineTitleText {
          font-size: 12px;
          margin-top: 10px;
        }
      }
      .enginItem {
        margin-left: 10px;
        .enginItemTitle {
          font-size: 12px;
          font-weight: 700;
        }
        .enginItemDocs {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
