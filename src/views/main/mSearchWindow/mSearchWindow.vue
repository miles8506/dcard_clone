<template>
  <d-header />
  <div class="m_search_window">
    <search-bar @emitSynthesizeData="emitSynthesizeData" />
    <nav-bar @navbarIndex="navbarIndex" />
    <component
      :is="currentShowCpn"
      :recodeRes="recodeRes"
      :dataList="dataList"
    ></component>
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
const navBarCpnName: any = [];
itemNameArr.forEach((item: InavBarType) => {
  navBarCpnName.push(item.cpnName);
});
const currentShowCpn = shallowRef<defineComponent>(navBarCpnName[0]);
const navbarIndex = (index: number) => {
  currentShowCpn.value = navBarCpnName[index];
};

// search recode
const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// receive data emit & props data
let dataList = ref([]);
const emitSynthesizeData = (res: any) => {
  dataList.value = res;
};
</script>

<style lang="less" scoped>
@import './less/mSearchWindow.less';
</style>
