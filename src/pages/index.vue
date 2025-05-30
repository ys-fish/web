<script setup lang="ts">
import bannerVue from "../components/banner.vue";
</script>

<template>
  <div class="App">
    <bannerVue />

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.App {
  display: flex;
}
</style>
