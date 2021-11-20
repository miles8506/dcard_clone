<template>
  <div class="m_aside">
    <d-header :isShowMobileHeader="true">
      <template #default>
        <span class="close_icon" @click="colseWindow">&times;</span>
      </template>
    </d-header>
    <sort-area />
    <immediately-area />
    <div class="board_area">
      <h4 class="board_title">Dcard 精選看板</h4>
      <div class="board_item_wrap">
        <board-item :boardList="boardList">
          <template #track_icon="item">
            <button class="track_btn" @click="clickTrack(item)">
              <div class="text">追蹤</div>
            </button>
          </template>
        </board-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
// component
import DHeader from '@/components/dHeader';
import SortArea from '@/components/dAside/src/cpn/sortArea.vue';
import ImmediatelyArea from '@/components/dAside/src/cpn/immediatelyArea.vue';
import BoardItem from '@/base-ui/boardItem';

// testconfig
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';

const store = useStore();

const clickTrack = (item) => {
  console.log(item);
};

const colseWindow = () => {
  store.commit('setShowMAside');
  const body = document.body;
  body.style.overflowY = 'scroll';
};
</script>

<style lang="less" scoped>
@import './less/mAside.less';
</style>
