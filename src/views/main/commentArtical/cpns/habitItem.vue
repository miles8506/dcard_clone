<template>
  <div
    class="habit_item"
    v-for="(item, index) in habitArticalList"
    :key="index"
  >
    <div class="habit_title">{{ item.title }}</div>
    <div class="habit_info">
      <span class="habit_sort">{{ item.sort }}</span>
      <span class="habit_response">{{ item.commentTotal }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

// type
import type { IarticalItemType } from '../../artical/type/articalItemType';

withDefaults(
  defineProps<{
    habitArticalList: IarticalItemType;
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import '../less/habitItem.less';
</style>
