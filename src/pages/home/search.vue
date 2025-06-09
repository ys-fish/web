<script lang="ts" setup>
import searchInput from "../../components/function/searchInput.vue";
</script>

<template>
  <div class="SearchBox">
    <div class="bgImage">
      <v-img
        cover
        src="https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg"
      ></v-img>
    </div>
    <div class="SearchBox__inner">
      <searchInput />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgImage {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  // z-index: -1;
}
.SearchBox {
  display: flex;
  //   align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .SearchBox__inner {
    position: absolute;
    top: 0%;
  }
}
</style>
