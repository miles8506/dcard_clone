<template>
  <div
    class="board_item"
    v-for="(item, index) in boardListConfig"
    :key="`${item.boardName}${index}`"
  >
    <div class="board_hd" :style="{ backgroundImage: `url(${item.bgcSrc})` }">
      <div class="board_img_wrap">
        <img :src="item.imgSrc" />
      </div>
    </div>
    <div class="board_bd">
      <div class="board_info">
        <h6 class="board_title">{{ item.boardName }}</h6>
        <!-- <p class="artical_count">每天有 {{ item.total ?? '' }} 則貼文</p> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

// type
import type { IboardItemType } from '../type/type';

withDefaults(
  defineProps<{
    boardListConfig: IboardItemType[];
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import '../less/boardItem.less';
</style>
