<template>
  <div class="immediately_area">
    <div class="title">即時熱門看板</div>
    <ul class="im_list">
      <board-item :boardList="boardList" />
      <li class="im_item more_item">
        更多<span class="right_icon" v-show="$store.state.isShowMAside">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            width="24"
            height="24"
            role="img"
            aria-hidden="true"
            style="fill: rgba(0, 0, 0, 0.35)"
          >
            <path
              d="M9.5 19a1 1 0 01-.7-1.7l5.29-5.3-5.3-5.3a1 1 0 111.42-1.4l6 6a1 1 0 010 1.4l-6 6a1 1 0 01-.71.3z"
            ></path>
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// component
import BoardItem from '@/base-ui/boardItem';

// config
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';
</script>

<style lang="less" scoped>
@import '../less/immediatelyArea.less';
</style>
