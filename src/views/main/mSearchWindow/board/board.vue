<template>
  <div class="board">
    <template v-if="boardList.length > 0">
      <board-item :boardList="boardList" :conrolLayout="conrolLayout">
        <template #track_icon="item">
          <button class="track_btn" @click="clickTrack(item)">
            <div class="text">追蹤</div>
          </button>
        </template>
      </board-item>
    </template>
    <template v-else>
      <div class="empty_body">請入搜尋關鍵字</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue';
// component
import BoardItem from '@/base-ui/boardItem';

// config
// import { layoutConfig } from './config/layoutConfig';

withDefaults(
  defineProps<{
    boardList: any[];
  }>(),
  {}
);

const conrolLayout = ref<string>('');
window.innerWidth > 767
  ? (conrolLayout.value = '0 60px')
  : (conrolLayout.value = '0 16px');
window.addEventListener('resize', function () {
  this.innerWidth > 767
    ? (conrolLayout.value = '0 60px')
    : (conrolLayout.value = '0 16px');
});

const clickTrack = (item: any) => {
  console.log(item.itemName);
};
</script>

<style lang="less" scoped>
@import './less/board.less';
</style>
