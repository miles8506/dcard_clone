<template>
  <div class="artical">
    <!-- filter search body start -->
    <div class="filter_search_body">
      <div class="filter_bar">
        <div class="all_artical_wrap bar_item" @click="changeChecked">
          <div class="checkbox_fake" :class="{ current_checked: isChecked }">
            <div class="checked_box" v-show="isChecked"></div>
          </div>
          <span class="includes_text">含內文</span>
        </div>
        <div class="first_issue bar_item" @click="newIssueChange">
          {{ $store.state.commentArticalModule.issueCurrentName }}
          <span class="triangle_icon_wrap">
            <span class="icon"></span>
          </span>
        </div>
        <div class="time_search bar_item" @click="timerChange">
          {{ $store.state.commentArticalModule.itmerCurrentName }}
          <span class="triangle_icon_wrap">
            <span class="icon"></span>
          </span>
        </div>
      </div>
    </div>
    <!-- filter search body end -->

    <template v-if="dataList.length > 0">
      <div class="search_list">
        <artical-item :articalListConfig="articalDataList" />
      </div>
    </template>
    <template v-else>
      <div class="empty_body">請入搜尋關鍵字</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  defineEmits,
  computed,
  watch
} from 'vue';
import { useStore } from '@/store';
// component
import ArticalItem from '@/components/articalItem';

// utils
import { dayRange } from '@/utils';

// config
import { newIssueSelect, timerSelct } from './config/newSelectItems';

const store = useStore();
const props = withDefaults(
  defineProps<{
    dataList: any;
    recodeRes?: any[];
    boardList?: any[];
  }>(),
  {}
);

const emits = defineEmits(['emitNewIssue', 'emitTimer', 'emitSelectIndex']);

// init select item index
store.commit('commentArticalModule/setCurrentName', {
  item: '最新發佈',
  selectName: 'newIssue'
});
store.commit('commentArticalModule/setCurrentName', {
  item: '不限時間',
  selectName: 'timer'
});
emits('emitSelectIndex');

// artical filter datalist
const articalDataList = ref<any[]>([]);
if (props.dataList) {
  for (let i = 0; i < props.dataList.length; i++) {
    articalDataList.value.push(props.dataList[i]);
  }
  articalDataList.value.sort((a, b) => b.timerStamp - a.timerStamp);
}

// control checkbox
const isChecked = ref(true);
const changeChecked = () => {
  isChecked.value = !isChecked.value;
};

// new issue change
const newIssueChange = () => {
  emits('emitNewIssue', {
    items: newIssueSelect.selectItems,
    itemsName: newIssueSelect.selectName
  });
  store.commit('commentArticalModule/setIsShowSelectWindow');
};

// tiemer change
const timerChange = () => {
  emits('emitTimer', {
    items: timerSelct.selectItems,
    itemsName: timerSelct.selectName
  });
  store.commit('commentArticalModule/setIsShowSelectWindow');
};

// callback changed select item & filter datalist
const getIssueName = computed(
  () => store.getters['commentArticalModule/getIssueCurrentName']
);
watch(getIssueName, async (newName) => {
  const articalArr: any[] = [];
  props.dataList.forEach((item: any) => {
    articalArr.push(item);
  });

  if (newName === '最新發佈') {
    articalArr.sort((a, b) => b.timerStamp - a.timerStamp);
    if (store.state.commentArticalModule.itmerCurrentName === '1天內') {
      const res = dayRange(articalArr, 86400000);
      articalDataList.value = res;
    } else if (store.state.commentArticalModule.itmerCurrentName === '7天內') {
      const res = dayRange(articalArr, 604800000);
      articalDataList.value = res;
    } else if (store.state.commentArticalModule.itmerCurrentName === '20天內') {
      const res = dayRange(articalArr, 1728000000);
      articalDataList.value = res;
    } else {
      articalDataList.value = articalArr;
    }
  } else {
    articalArr.sort((a, b) => b.tagTotal - a.tagTotal);
    if (store.state.commentArticalModule.itmerCurrentName === '1天內') {
      const res = dayRange(articalArr, 86400000);
      articalDataList.value = res;
    } else if (store.state.commentArticalModule.itmerCurrentName === '7天內') {
      const res = dayRange(articalArr, 604800000);
      articalDataList.value = res;
    } else if (store.state.commentArticalModule.itmerCurrentName === '20天內') {
      const res = dayRange(articalArr, 1728000000);
      articalDataList.value = res;
    } else {
      articalDataList.value = articalArr;
    }
  }
});
const getTimerName = computed(
  () => store.getters['commentArticalModule/getTimerCurrentName']
);
watch(getTimerName, async (newName) => {
  const articalArr: any[] = [];
  props.dataList.forEach((item: any) => {
    articalArr.push(item);
  });

  if (store.state.commentArticalModule.issueCurrentName === '最新發佈') {
    articalArr.sort((a, b) => b.timerStamp - a.timerStamp);
    if (newName === '1天內') {
      const res = dayRange(articalArr, 86400000);
      articalDataList.value = res;
    } else if (newName === '7天內') {
      const res = dayRange(articalArr, 604800000);
      articalDataList.value = res;
    } else if (newName === '20天內') {
      const res = dayRange(articalArr, 1728000000);
      articalDataList.value = res;
    } else {
      articalDataList.value = articalArr;
    }
  } else {
    articalArr.sort((a, b) => b.tagTotal - a.tagTotal);
    if (newName === '1天內') {
      const res = dayRange(articalArr, 86400000);
      articalDataList.value = res;
    } else if (newName === '7天內') {
      const res = dayRange(articalArr, 604800000);
      articalDataList.value = res;
    } else if (newName === '20天內') {
      const res = dayRange(articalArr, 1728000000);
      articalDataList.value = res;
    } else {
      articalDataList.value = articalArr;
    }
  }
});
</script>

<style lang="less" scoped>
@import './less/artical.less';
</style>
