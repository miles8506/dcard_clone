<template>
  <div class="choose_sort_select">
    <h2 class="choose_sort">
      選擇發文看板 <span @click="closeWindow" class="close_icon">X</span>
    </h2>
    <div class="search_sort">
      <span class="search_sign">
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          width="24"
          height="24"
          role="img"
          aria-hidden="true"
          style="fill: rgba(0, 0, 0, 0.35)"
        >
          <path
            d="M20.707 19.293l-4.25-4.25A7.454 7.454 0 0018 10.5 7.5 7.5 0 0010.5 3 7.5 7.5 0 003 10.5a7.5 7.5 0 007.5 7.5 7.454 7.454 0 004.543-1.543l4.25 4.25A1 1 0 0020 21a1 1 0 00.707-.293 1 1 0 000-1.414zM10.5 16A5.506 5.506 0 015 10.5 5.506 5.506 0 0110.5 5a5.506 5.506 0 015.5 5.5 5.506 5.506 0 01-5.5 5.5z"
          ></path>
        </svg>
      </span>
      <input
        type="text"
        placeholder="尋找看板"
        @keyup="searchKeyWord"
        v-model.trim="searchModel"
      />
    </div>
    <div class="sort_item_wrap">
      <ul>
        <template v-for="item in boardList" :key="item">
          <li class="sort_item" @click="chooseItem(item.boardName)">
            {{ item.boardName }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  withDefaults,
  defineEmits,
  computed,
  watch
} from 'vue';
import { useStore } from '@/store';

// withDefaults(
//   defineProps<{
//     boardList: any[];
//   }>(),
//   {}
// );
const emits = defineEmits(['clickMaskBg', 'emitCurrentItem']);
const store = useStore();

// model
const searchModel = ref<string>('');

// immediatelyItem data
const computedBoardList = computed(
  () => store.state.asideModule.immediatelyItem
);
const boardList = ref();
watch(computedBoardList, (newData) => {
  boardList.value = newData;
  store.commit('publicArticalModule/setCurrentItem', newData[0].boardName);
});

// smart search
const searchKeyWord = () => {
  if (searchModel.value === '') boardList.value = computedBoardList.value;
  const filterKeyWordArr = boardList.value.filter((item: any) => {
    if (
      item.boardName.includes(searchModel.value.toUpperCase()) ||
      item.boardName.includes(searchModel.value.toLowerCase())
    ) {
      return item;
    }
  });
  boardList.value = filterKeyWordArr;
};

// choose current item
const chooseItem = (itemName: string) => {
  emits('emitCurrentItem', itemName);
  emits('clickMaskBg');
};

const closeWindow = () => {
  emits('clickMaskBg');
};
</script>

<style lang="less" scoped>
@import '../less/chooseSortSelect.less';
</style>
