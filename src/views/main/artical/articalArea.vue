<template>
  <div class="artical_area">
    <artical-nav />
    <artical-list />
  </div>
</template>

<script setup lang="ts">
import ArticalNav from './cpn/articalNav.vue';
import ArticalList from './cpn/articalList.vue';
</script>

<style lang="less" scoped>
@import './less/articalArea.less';
</style>
