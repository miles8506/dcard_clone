<template>
  <div class="nav_bar">
    <ul>
      <template v-for="(item, index) in itemNameArr" :key="index">
        <li
          class="nav_item"
          :class="{ current_border: currentIndex === index }"
          @click="clickItem(index)"
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
// config
import { itemNameArr } from '../config/navBarConfig';

// emits
const emits = defineEmits(['navbarIndex']);

const currentIndex = ref<number>(0);
const clickItem = (index: number) => {
  currentIndex.value = index;
  emits('navbarIndex', index);
};
</script>

<style lang="less" scoped>
@import '../less/navBar.less';
</style>
