<template>
  <div class="immediately_area">
    <div class="title">即時熱門看板</div>
    <ul class="im_list">
      <board-item :boardList="boardList" />
      <li class="im_item more_item">更多</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// component
import BoardItem from '@/base-ui/boardItem';

// config
import { boardList } from '../../config/testListConfig';
</script>

<style lang="less" scoped>
@import '../less/immediatelyArea.less';
</style>
