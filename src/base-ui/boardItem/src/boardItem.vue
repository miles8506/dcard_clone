<template>
  <li
    class="bd_item"
    v-for="item in boardList"
    :key="item.itemName"
    :style="{ padding: padding }"
  >
    <img :src="item.imgSrc" /> {{ item.boardName }}
    <slot name="track_icon" :itemName="item.boardName"></slot>
  </li>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
withDefaults(
  defineProps<{
    boardList: any[];
    padding?: string;
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import './less/boardItem.less';
</style>
