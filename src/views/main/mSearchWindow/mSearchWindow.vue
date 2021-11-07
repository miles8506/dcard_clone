<template>
  <d-header />
  <div class="m_search_window">
    <div class="m_search_window_wrap">
      <div class="hd_wrap">
        <search-bar
          @emitSynthesizeData="emitSynthesizeData"
          :navBarIndex="navBarIndex"
        />
        <nav-bar @navbarIndex="navbarIndex" />
      </div>
      <component
        :is="currentShowCpn"
        :recodeRes="recodeRes"
        :dataList="dataList"
        :boardList="boardList"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
// component
import dHeader from '@/components/dHeader';
import SearchBar from './cpns/searchBar.vue';
import NavBar from './cpns/navBar.vue';

// config
import { itemNameArr } from './config/navBarConfig';

// type
import { InavBarType } from './type/type';

// utils
// import { localStorage } from '@/utils/index';

const store = useStore();

// change current component
const navBarIndex = ref<number>(0);
const navBarCpnName: any = [];
itemNameArr.forEach((item: InavBarType) => {
  navBarCpnName.push(item.cpnName);
});
const currentShowCpn = shallowRef<defineComponent>(navBarCpnName[0]);
const navbarIndex = (index: number) => {
  currentShowCpn.value = navBarCpnName[index];
  navBarIndex.value = index;
  // init datalist
  if (navBarIndex.value === 0) emitSynthesizeData([], []);
};

// search recode
const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// receive data emit & props data
let dataList = ref([]);
let boardList = ref([]);
const emitSynthesizeData = (dataListRes: any, boardListRes: any) => {
  dataList.value = dataListRes;
  boardList.value = boardListRes;
};
</script>

<style lang="less" scoped>
@import './less/mSearchWindow.less';
</style>
