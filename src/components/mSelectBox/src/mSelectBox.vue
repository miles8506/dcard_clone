<template>
  <div class="m_select_box" @click="hideBox">
    <transition name="wrap">
      <div
        class="wrap"
        v-show="$store.state.commentArticalModule.isShowSelectWindow"
      >
        <template v-for="(item, index) in selectItems.selectItems" :key="item">
          <div
            class="item"
            :class="{
              current_item: currentIndexItem(index)
            }"
            @click="chooseItem(index, item)"
          >
            {{ item }}
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import { useStore } from '@/store';

// type
import { ISearchItems } from '@/views/main/mSearchWindow/artical/type/type';

const store = useStore();
const emits = defineEmits(['emitCurrentIndex']);
const props = withDefaults(
  defineProps<{
    selectItems: ISearchItems;
    issueCurrentIndex: number;
    timerCurrentIndex: number;
  }>(),
  {}
);

// computed currentindexitem class status
const currentIndexItem = (index: number) => {
  if (
    props.selectItems.itemsName === 'newIssue' &&
    index == props.issueCurrentIndex
  ) {
    return true;
  } else if (
    props.selectItems.itemsName === 'timer' &&
    index == props.timerCurrentIndex
  ) {
    return true;
  } else {
    return false;
  }
};

const hideBox = () => {
  store.commit('commentArticalModule/setIsShowSelectWindow');
};

// emit currentindex after choose item
const chooseItem = (index: number, item: string) => {
  if (props.selectItems.itemsName === 'newIssue') {
    emits('emitCurrentIndex', {
      index: index,
      selectName: 'newIssue'
    });
    store.commit('commentArticalModule/setCurrentName', {
      item: item,
      selectName: 'newIssue'
    });
  } else {
    emits('emitCurrentIndex', {
      index: index,
      selectName: 'timer'
    });
    store.commit('commentArticalModule/setCurrentName', {
      item: item,
      selectName: 'timer'
    });
  }
};
</script>

<style lang="less" scoped>
@import './less/mSelectBox.less';
</style>
