<template>
  <li
    v-for="item in boardList"
    class="bd_item"
    @click="chooseItem(item.boardName)"
    :key="item.itemName"
    :style="{ padding: conrolLayout }"
  >
    <img :src="item.imgSrc" /> {{ item.boardName }}
    <slot name="track_icon" :itemName="item.boardName"></slot>
  </li>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
withDefaults(
  defineProps<{
    boardList: any[];
    conrolLayout?: string;
  }>(),
  {}
);

const emits = defineEmits(['emitBoardName']);

const chooseItem = (boardName: string) => {
  emits('emitBoardName', boardName);
};
</script>

<style lang="less" scoped>
@import './less/boardItem.less';
</style>
