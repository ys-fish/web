<script setup lang="ts">
import bannerVue from "../components/banner.vue";
</script>

<template>
  <div class="App">
    <bannerVue />
    <div style="width: 100%; height: 100%">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.App {
  display: flex;
}
</style>
