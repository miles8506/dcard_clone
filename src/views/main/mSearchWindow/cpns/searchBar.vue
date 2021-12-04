<template>
  <div class="search_bar_m">
    <div class="search_bar_wrap">
      <div class="search_wrap">
        <span class="search_icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M20.707 19.293l-4.25-4.25A7.454 7.454 0 0018 10.5 7.5 7.5 0 0010.5 3 7.5 7.5 0 003 10.5a7.5 7.5 0 007.5 7.5 7.454 7.454 0 004.543-1.543l4.25 4.25A1 1 0 0020 21a1 1 0 00.707-.293 1 1 0 000-1.414zM10.5 16A5.506 5.506 0 015 10.5 5.506 5.506 0 0110.5 5a5.506 5.506 0 015.5 5.5 5.506 5.506 0 01-5.5 5.5z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          class="search_ipt"
          placeholder="搜尋"
          ref="searchIptRef"
          v-model.trim="searchModel"
          @input="changeContentIpt"
          @keydown.enter="resourceSearch"
        />
        <span
          class="cancel_icon"
          v-show="isShowCancelIcon"
          @click="clearIptValue"
        >
          <svg
            viewBox="0 0 18 18"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M16.8 9a7.5 7.5 0 01-7.5 7.5A7.5 7.5 0 011.8 9a7.5 7.5 0 017.5-7.5A7.5 7.5 0 0116.8 9zm-6.44 0l2.47-2.47a.75.75 0 000-1.06.75.75 0 00-1.06 0L9.3 7.94 6.83 5.47a.75.75 0 00-1.06 0 .75.75 0 000 1.06L8.24 9l-2.47 2.47a.75.75 0 000 1.06.75.75 0 00.53.22.75.75 0 00.53-.22l2.47-2.47 2.47 2.47a.75.75 0 00.53.22.75.75 0 00.53-.22.75.75 0 000-1.06z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="cancel_all" @click="initAll">取消</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineEmits,
  defineProps,
  withDefaults,
  watch,
  computed,
  onMounted
} from 'vue';
import { useStore } from '@/store';

// utils
import { localStorage } from '@/utils';

// hook
import { searchDataResult } from '@/hook/searchDataResult';

// focus on input
const searchIptRef = ref<HTMLInputElement>();
onMounted(() => {
  searchIptRef.value?.focus();
});

const store = useStore();
const emits = defineEmits(['emitCpnsData']);
const props = withDefaults(
  defineProps<{
    navBarIndex: number;
  }>(),
  {}
);

// show cancel icon
const isShowCancelIcon = ref<boolean>(false);

// search input v-model
const searchModel = ref('');
const changeContentIpt = () => {
  if (searchModel.value === '') {
    isShowCancelIcon.value = false;
  } else {
    isShowCancelIcon.value = true;
  }
};

// click event by clear input v-model
const clearIptValue = () => {
  searchModel.value = '';
  isShowCancelIcon.value = false;
};

// search input keyword
const resourceSearch = () => {
  if (searchModel.value === '') return;

  const res = localStorage.getItem('synthesizeRecode');
  const resIndex = res.findIndex((item) => item === searchModel.value);

  // 重複輸入搜尋關鍵字
  if (resIndex !== -1) {
    res.splice(resIndex, 1);
    res.unshift(searchModel.value);
    localStorage.setItem('synthesizeRecode', res);
    store.commit('mSearchWindowModule/setSearchSortArr', res);
    store.commit('mSearchWindowModule/setSearchIptModel', searchModel.value);
  } else {
    res.unshift(searchModel.value);
    store.commit('mSearchWindowModule/setSearchIptModel', searchModel.value);
    localStorage.setItem('synthesizeRecode', res);
    store.commit('mSearchWindowModule/setSearchSortArr', res);
  }
  searchDataResult(props.navBarIndex, emits, store);
};
// listen search value to search page
const pcSearchVal = computed(() => store.state.mSearchWindowModule.searchValue);
if (pcSearchVal.value !== '') {
  searchModel.value = pcSearchVal.value;
  resourceSearch();
}
watch(pcSearchVal, (newData) => {
  if (newData === '') return;
  searchModel.value = newData;
  resourceSearch();
});

// init all
const initAll = () => {
  searchModel.value = '';
  isShowCancelIcon.value
    ? (isShowCancelIcon.value = !isShowCancelIcon.value)
    : '';
  // store.state.mSearchWindowModule.judgeListLen &&
  store.commit('mSearchWindowModule/setShowSerchSort', true);
  emits('emitCpnsData', [], [], true);
};

// click typeicon listen to vuex
const getSearchIcon = computed(
  () => store.state.mSearchWindowModule.searchIconModel
);

watch(getSearchIcon, (newData) => {
  if (newData !== '') {
    searchModel.value = newData;
    resourceSearch();
    if (!isShowCancelIcon.value)
      isShowCancelIcon.value = !isShowCancelIcon.value;
  }
});

// close comment re-render datalist
const getShowStatus = computed(
  () => store.getters['commentArticalModule/getIsShowStatus']
);
watch(getShowStatus, (status) => {
  if (status) return;
  searchDataResult(props.navBarIndex, emits, store);
});

// callback choose immediately item
const articalTypeStatus = computed(() => store.getters['getArticalType']);
watch(articalTypeStatus, () => {
  const articalType = localStorage.getItem('artical_type');
  store.commit('mSearchWindowModule/setSearchIptModel', articalType);
  searchDataResult(props.navBarIndex, emits, store);
});
</script>

<style lang="less" scoped>
@import '../less/searchBar.less';
</style>
