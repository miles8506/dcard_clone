<template>
  <div
    class="board_item"
    v-for="(item, index) in boardListConfig"
    :key="`${item.boardName}${index}`"
    @click="changeIndex"
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
import { withDefaults, defineProps, defineEmits } from 'vue';

// type
import type { IboardItemType } from '../type/type';

const emits = defineEmits(['changeIndexCpn']);
withDefaults(
  defineProps<{
    boardListConfig: IboardItemType[];
  }>(),
  {}
);

const changeIndex = () => {
  emits('changeIndexCpn');
};
</script>

<style lang="less" scoped>
@import '../less/boardItem.less';
</style>
