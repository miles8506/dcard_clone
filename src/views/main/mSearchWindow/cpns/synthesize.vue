<template>
  <div class="synthesize">
    <div
      class="search_recode"
      v-if="
        recodeRes !== null &&
        recodeRes.length > 0 &&
        $store.state.mSearchWindowModule.isShowSearchSort
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
    <artical-item :articalListConfig="dataList" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { useStore } from '@/store';

// component
import SearchTypeIcon from '@/components/searchTypeIcon';
import ArticalItem from '@/components/articalItem';

//utils
import { localStorage } from '@/utils';

withDefaults(
  defineProps<{
    recodeRes: any[];
    dataList: any[];
  }>(),
  {}
);

const store = useStore();

// control search recode show
if (store.state.mSearchWindowModule.searchSortArr.length > 0)
  store.commit('mSearchWindowModule/setShowSerchSort');

// clear keyword recode
const clearSearchRecode = () => {
  localStorage.setItem('synthesizeRecode', []);
  store.commit('mSearchWindowModule/resetSearchSort', []);
};

// search result list
</script>

<style lang="less" scoped>
@import '../less/synthesize.less';
</style>
