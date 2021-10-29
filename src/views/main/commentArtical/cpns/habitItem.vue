<template>
  <div
    class="habit_item"
    v-for="(item, index) in habitArticalList"
    :key="index"
  >
    <div class="left_info">
      <div class="habit_title">{{ item.title }}</div>
      <div class="habit_info">
        <span class="habit_sort">心情 {{ item.sort }} ． </span>
        <span class="habit_response">回應 {{ item.commentTotal }}</span>
      </div>
    </div>
    <div class="right_img">
      <img src="@/assets/img/list.jpeg" />
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
