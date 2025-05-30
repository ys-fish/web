<template>
  <div
    :class="{
      searchInput: true,
      searchFlag: active.isFull,
      searchzk: active.iszk,
    }"
    :style="{ height: 50 + 40 * searchX.length + 'px' }"
    v-click-outside="inputclick"
  >
    <div class="searchL">
      <div class="searchIcon">
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" size="30">mdi-microsoft-bing</v-icon>
          </template>

          <v-list :lines="false" density="compact" nav>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              active-color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <input
        type="text"
        @focus="active.isFull = true"
        @input="searchChange"
        class="searchTxt"
        placeholder="输入您的搜索"
        @keydown="KeydownClick"
      />
      <div class="searchIcon" @click="SearchClick">
        <v-icon> mdi-magnify </v-icon>
      </div>
    </div>
    <div class="searchbody">
      <div
        class="searchitem"
        :class="{ searchitemAcvice: searchIndex == index }"
        v-for="(item, index) in searchX"
        :key="item"
        @click="itemClick(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { searchApi } from "../../api/utils";
import { ref } from "vue";
const items = [
  { text: "new bing", icon: "mdi-microsoft-bing" },
  { text: "谷歌", icon: "mdi-google-chrome" },
  { text: "百度", icon: "mdi-babel" },
];
let active = reactive<{ isFull: boolean; iszk: boolean }>({
  isFull: false,
  iszk: false,
});

let saerchValue = reactive<{ type: string; url?: string; code: string }>({
  type: "bing",
  code: "",
});

let searchX = ref<string[]>([]);
let searchIndex = ref<number>(-1);
const searchChange: any = async (val: InputEvent) => {
  saerchValue.code = (val.target as any).value;
  const data = await searchApi(saerchValue);
  console.log(data)
  if (data.length >= 1) {
    searchX.value = data;
    active.iszk = true;
  } else {
    searchX.value = [];
    active.iszk = false;
  }
};

const inputclick = () => {
  active.isFull = false;
  active.iszk = false;
  searchX.value = [];
};

// 键盘事件
const KeydownClick = (event: KeyboardEvent) => {
  console.log(event);
  // 绑定回车事件
  if (event.key == "Enter") {
    if (searchIndex.value == -1) {
      window.open(
        `https://www.bing.com/search?q=${saerchValue.code}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.bing.com/search?q=${searchX.value[searchIndex.value]}`,
        "_blank"
      );
    }
  } else if (event.key == "ArrowDown") {
    if (searchIndex.value < searchX.value.length - 1) {
      searchIndex.value++;
    } else {
      searchIndex.value = 0;
    }
  } else if (event.key == "ArrowUp") {
    if (searchIndex.value > 0) {
      searchIndex.value--;
    } else {
      searchIndex.value = searchX.value.length - 1;
    }
  }
};

const itemClick = (str: string) => {
  window.open(`https://www.bing.com/search?q=${str}`, "_blank");
};

// 点击Search图标方法
const SearchClick = () => {
  window.open(`https://www.bing.com/search?q=${saerchValue.code}`, "_blank");
};
</script>

<style lang="scss" scoped>
.searchFlag {
  width: 680px !important;
}
.searchzk {
  border-radius: 10px !important;
}

.searchInput {
  z-index: 11;
  width: 500px;
  height: 50px;
  // background-color: #f6f8fa;
  // border: 1px #d0d7de solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 4px;
  transition: 0.2s;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  top: 240px;
  overflow: hidden;
  .searchL {
    display: flex;
    height: 50px;
    align-items: center;
  }
  .searchbody {
    background-color: #fff;
    .searchitem {
      height: 40px;
      line-height: 40px;
      text-indent: 10px;
      font-size: 14px;
      border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
      transition: 0.3s;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
        text-indent: 20px;
      }
    }
    .searchitemAcvice {
      background-color: rgba(0, 0, 0, 0.12);
      text-indent: 20px;
    }
  }
  .searchIcon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .searchTxt {
    flex: 1;
    outline: none;
    font-size: 16px;
  }
}
</style>
