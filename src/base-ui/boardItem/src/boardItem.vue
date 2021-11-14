<template>
  <li class="bd_item" v-for="item in boardList" :key="item.itemName">
    <img :src="item.imgSrc" /> {{ item.itemName }}
    <slot name="track_icon"></slot>
  </li>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
withDefaults(
  defineProps<{
    boardList: any[];
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import './less/boardItem.less';
</style>
