<template>
  <div class="synthesize">
    <!-- recode_icon start -->
    <div
      class="search_recode"
      v-if="
        recodeRes !== null &&
        recodeRes.length > 0 &&
        $store.state.mSearchWindowModule.isShowSearchSort &&
        dataList.length === 0 &&
        boardList.length === 0
      "
    >
      <div class="recode_hd">
        <p class="recode_title">最近搜尋紀錄</p>
        <div class="clear_icon" @click="clearSearchRecode">清除</div>
      </div>
      <div class="recode_bd">
        <template v-for="(item, index) in recodeRes" :key="index">
          <search-type-icon :typeName="item" />
        </template>
      </div>
    </div>
    <!-- recode_icon end -->

    <div class="board_body" v-if="boardList.length > 0">
      <h5 class="board_title">看板</h5>
      <div class="board_body_wrap">
        <div class="banner_wrap">
          <board-item :boardListConfig="boardList" />
        </div>
      </div>
    </div>
    <div class="artical_body">
      <artical-item :articalListConfig="dataList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { useStore } from '@/store';

// component
import SearchTypeIcon from '@/components/searchTypeIcon';
import ArticalItem from '@/components/articalItem';
import BoardItem from './cpns/boardItem.vue';

//utils
import { localStorage } from '@/utils';

// props
withDefaults(
  defineProps<{
    recodeRes: any[];
    dataList: any[];
    boardList: any[];
  }>(),
  {
    recodeRes: () => [],
    boardList: () => []
  }
);

// store
const store = useStore();

// control search recode show
if (
  store.state.mSearchWindowModule.searchSortArr.length > 0 &&
  !store.state.mSearchWindowModule.isShowSearchSort
)
  store.commit('mSearchWindowModule/setShowSerchSort', false);

// clear keyword recode
const clearSearchRecode = () => {
  localStorage.setItem('synthesizeRecode', []);
  store.commit('mSearchWindowModule/resetSearchSort', []);
};
</script>

<style lang="less" scoped>
@import './less/synthesize.less';
</style>
