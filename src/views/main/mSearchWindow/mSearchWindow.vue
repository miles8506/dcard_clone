<template>
  <d-header />
  <m-aside v-show="$store.state.isShowMAside" />
  <transition name="m_search_window">
    <div class="mask" v-show="$store.state.isShowMask">
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
    </div>
  </transition>
  <div class="m_search_main">
    <d-aside />
    <div class="m_search_window">
      <div class="m_search_window_wrap">
        <div class="hd_wrap">
          <search-bar
            @emitCpnsData="emitCpnsData"
            :navBarIndex="navBarIndex"
            ref="searchBarRef"
          />
          <nav-bar
            @navbarIndex="navbarIndex"
            @emitCpnsData="emitCpnsData"
            ref="navBarRef"
          />
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
    <d-adv />
    <transition name="m_select_window">
      <m-select-box
        :selectItems="selectItems"
        :issueCurrentIndex="issueCurrentIndex"
        :timerCurrentIndex="timerCurrentIndex"
        @emitCurrentIndex="emitCurrentIndex"
        v-show="$store.state.commentArticalModule.isShowSelectWindow"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  shallowRef,
  defineComponent,
  computed,
  ref,
  watch,
  nextTick
} from 'vue';
import { useStore } from '@/store';
// import { useRoute } from 'vue-router';

// component
import dHeader from '@/components/dHeader';
import SearchBar from './cpns/searchBar.vue';
import NavBar from './cpns/navBar.vue';
import CommentArtical from '@/components/commentArtical';
import ScrollYBar from '@/components/commentArtical/src/cpns/scrollYBar.vue';
import mSelectBox from '@/components/mSelectBox';
import MAside from '@/views/main/mAside/mAside.vue';
import dAside from '@/components/dAside';
import dAdv from '@/components/dAdv';

// config
import { itemNameArr } from './config/navBarConfig';

// type
import { InavBarType } from './type/type';

const store = useStore();
// window.innerWidth > 767
//   ? store.commit('mSearchWindowModule/setScreenWidthStatus', false)
//   : store.commit('mSearchWindowModule/setScreenWidthStatus', true);

// // 監聽mSearchWindow.vue於pc mobile相對應顯示狀態
// window.addEventListener('resize', () => {
//   window.innerWidth > 767
//     ? store.commit('mSearchWindowModule/setScreenWidthStatus', false)
//     : store.commit('mSearchWindowModule/setScreenWidthStatus', true);
// });

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
};

// search recode
const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// receive data emit & props data
const dataList = ref([]);
const boardList = ref([]);
const navBarRef = ref();
const emitCpnsData = (dataListRes: any, boardListRes?: any) => {
  nextTick(() => {
    navBarRef.value.currentIndex = 0;
    navbarIndex(navBarRef.value.currentIndex);
  });
  dataList.value = dataListRes;
  boardList.value = boardListRes;
};

// 監聽data 如有data則不顯示sort icon
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
