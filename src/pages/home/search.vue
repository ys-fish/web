<script lang="ts" setup>
import searchInput from '../../components/function/searchInput.vue'
</script>

<template>
  <div class="SearchBox">
    <div class="SearchBox__inner">
      <searchInput />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
