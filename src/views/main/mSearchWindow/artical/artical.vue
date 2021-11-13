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
        <artical-item :articalListConfig="dataList" />
      </div>
    </template>
    <template v-else>
      <div class="empty_body">空</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { useStore } from '@/store';
// component
import ArticalItem from '@/components/articalItem';

// config
import { newIssueSelect, timerSelct } from './config/newSelectItems';

const store = useStore();
withDefaults(
  defineProps<{
    dataList: any[];
    recodeRes?: any[];
    boardList?: any[];
  }>(),
  {}
);
const emits = defineEmits(['emitNewIssue', 'emitTimer']);

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
</script>

<style lang="less" scoped>
@import './less/artical.less';
</style>
