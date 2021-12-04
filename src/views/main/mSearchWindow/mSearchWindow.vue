<template>
  <d-header key="search_header" :controlHeaderLayout="controlHeaderLayout" />
  <m-aside v-show="$store.state.isShowMAside" />
  <transition name="m_search_window">
    <div class="mask" v-show="$store.state.isShowMask">
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
      <qrcode-window v-show="$store.state.isShowLargeQrcode" />
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
          @emitSelectIndex="emitSelectIndex"
          @changeIndexCpn="changeIndexCpn"
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
  nextTick,
  onMounted
} from 'vue';
import { useStore } from '@/store';

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
import QrcodeWindow from '@/components/qrocdeWindow';

// config
import { itemNameArr } from './config/navBarConfig';

// type
import { InavBarType } from './type/type';

const store = useStore();

// 監聽header 於screnn < 767時為 initial
let controlHeaderLayout = ref<string>('sticky');
window.innerWidth > 767
  ? (controlHeaderLayout.value = 'sticky')
  : (controlHeaderLayout.value = 'initial');
window.addEventListener('resize', () => {
  window.innerWidth > 767
    ? (controlHeaderLayout.value = 'sticky')
    : (controlHeaderLayout.value = 'initial');
});

// 監聽hd_wrap 48 fixed for top
onMounted(() => {
  const hdWrap: any = document.querySelector('.hd_wrap');
  window.addEventListener('scroll', function () {
    this.pageYOffset > 48 && window.innerWidth < 767
      ? (hdWrap.style.position = 'fixed')
      : (hdWrap.style.position = 'initial');
  });
});

// init
store.commit('mSearchWindowModule/setSearchIptModel', '');
store.commit('mSearchWindowModule/setShowSerchSort', true);

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

// emit change current component
const changeIndexCpn = () => {
  currentShowCpn.value = navBarCpnName[2];
  navBarIndex.value = 2;
  navBarRef.value.currentIndex = 2;
};

// search recode
const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// receive data emit & props data
const dataList = ref([]);
const boardList = ref([]);
const navBarRef = ref();
const emitCpnsData = (dataListRes: any, boardListRes?: any, init? = false) => {
  nextTick(() => {
    navBarRef.value.currentIndex = 0;
    navbarIndex(navBarRef.value.currentIndex);
  });
  dataList.value = [];
  boardList.value = [];
  // click cancel button init data
  if (init) return;
  const searchTarget = store.state.mSearchWindowModule.searchIptModel;
  // filter artical
  const filterArticalRes = dataListRes.filter(
    (item: any) =>
      item.data().title.includes(searchTarget) ||
      item.data().content.includes(searchTarget) ||
      item.data().sort.includes(searchTarget)
  );
  filterArticalRes.forEach((item) => {
    dataList.value.push(item.data());
  });

  // filter board
  const filterBoardRes = boardListRes[0]
    .data()
    .asideImmediately.filter((item) => item.boardName === searchTarget);
  // boardList.value = boardListRes[0].data().asideImmediately;
  filterBoardRes.forEach((item) => {
    boardList.value.push(item);
  });
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
const emitSelectIndex = () => {
  issueCurrentIndex.value = 0;
  timerCurrentIndex.value = 0;
};
</script>

<style lang="less" scoped>
@import './less/mSearchWindow.less';
</style>
