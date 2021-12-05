<template>
  <nav class="nav_bar">
    <div class="nav_wrap">
      <template v-for="(item, index) in itemNameArr" :key="index">
        <div
          class="nav_item"
          :class="{ current_border: currentIndex === index }"
          @click="clickItem(index)"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineExpose } from 'vue';
import { useStore } from '@/store';
// config
import { itemNameArr } from '../config/navBarConfig';

// hook
import { searchDataResult } from '@/hook/searchDataResult';

const emits = defineEmits(['navbarIndex', 'emitCpnsData']);
const store = useStore();

const currentIndex = ref<number>(0);
const clickItem = (index: number) => {
  currentIndex.value = index;
  emits('navbarIndex', index);
  if (index === 0 && store.state.mSearchWindowModule.judgeListLen)
    searchDataResult(index, emits, store);
};

defineExpose({
  currentIndex
});
</script>

<style lang="less" scoped>
@import '../less/navBar.less';
</style>
