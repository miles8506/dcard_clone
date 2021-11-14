<template>
  <div class="board">
    <board-item :boardList="boardList">
      <template #track_icon>
        <button class="track_btn">
          <div class="text">追蹤</div>
        </button>
      </template>
    </board-item>
  </div>
</template>

<script setup lang="ts">
// component
import BoardItem from '@/base-ui/boardItem';

// config
import { boardList } from './config/testListConfig';
</script>

<style lang="less" scoped>
@import './less/board.less';
</style>
