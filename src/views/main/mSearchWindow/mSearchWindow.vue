<template>
  <d-header />
  <transition name="m_search_window">
    <div class="mask" v-show="$store.state.isShowMask">
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
    </div>
  </transition>
  <div class="m_search_window">
    <div class="m_search_window_wrap">
      <div class="hd_wrap">
        <search-bar @emitCpnsData="emitCpnsData" :navBarIndex="navBarIndex" />
        <nav-bar @navbarIndex="navbarIndex" @emitCpnsData="emitCpnsData" />
      </div>
      <component
        :is="currentShowCpn"
        :recodeRes="recodeRes"
        :dataList="dataList"
        :boardList="boardList"
        @emitNewIssue="emitNewIssue"
        @emitTimer="emitTimer"
      ></component>
    </div>
  </div>
  <transition name="m_select_window">
    <m-select-box
      :selectItems="selectItems"
      :issueCurrentIndex="issueCurrentIndex"
      :timerCurrentIndex="timerCurrentIndex"
      @emitCurrentIndex="emitCurrentIndex"
      v-show="$store.state.commentArticalModule.isShowSelectWindow"
    />
  </transition>
</template>

<script setup lang="ts">
import { shallowRef, defineComponent, computed, ref, watch } from 'vue';
import { useStore } from '@/store';
// component
import dHeader from '@/components/dHeader';
import SearchBar from './cpns/searchBar.vue';
import NavBar from './cpns/navBar.vue';
import CommentArtical from '@/components/commentArtical';
import ScrollYBar from '@/components/commentArtical/src/cpns/scrollYBar.vue';
import mSelectBox from '@/components/mSelectBox';

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
  // if (navBarIndex.value === 0) emitCpnsData([], []);
};

// search recode
const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// receive data emit & props data
const dataList = ref([]);
const boardList = ref([]);
const emitCpnsData = (dataListRes: any, boardListRes?: any) => {
  dataList.value = dataListRes;
  boardList.value = boardListRes;
};
watch(
  () => dataList.value,
  () => {
    if (dataList.value.length === 0) {
      store.commit('mSearchWindowModule/setJudgeListLen', false);
    } else {
      store.commit('mSearchWindowModule/setJudgeListLen', true);
    }
  }
);

// emit select item
const selectItems = ref<any>({});
const issueCurrentIndex = ref(0);
const timerCurrentIndex = ref(0);
const emitNewIssue = ({ items, itemsName }) => {
  // selectItems.value = [...items];
  selectItems.value.selectItems = items;
  selectItems.value.itemsName = itemsName;
};
const emitTimer = ({ items, itemsName }) => {
  selectItems.value.selectItems = items;
  selectItems.value.itemsName = itemsName;
};
const emitCurrentIndex = ({ index, selectName }) => {
  selectName === 'newIssue'
    ? (issueCurrentIndex.value = index)
    : (timerCurrentIndex.value = index);
};
</script>

<style lang="less" scoped>
@import './less/mSearchWindow.less';
</style>
