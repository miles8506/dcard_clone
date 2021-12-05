<template>
  <div class="sort_area">
    <ul>
      <template
        v-for="item in $store.state.asideModule.asideItem"
        :key="item.sortName"
      >
        <li
          class="sort_item"
          :class="{ allowPointer: item.sortName === '所有看板' }"
          @click="clickSort(item.sortName)"
        >
          <span class="svn_box">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <path :d="item.path"></path>
            </svg>
          </span>
          <span class="item_text">{{ item.sortName }}</span>
        </li>
      </template>
      <li class="sort_item">
        <span class="game_box"></span>
        <span class="item_text">遊戲專區</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// utils
import { localStorage } from '@/utils';

const store = useStore();
const router = useRouter();
const emits = defineEmits(['emitCloseMaside']);
const clickSort = (sortName: string) => {
  if (sortName !== '所有看板') return;
  localStorage.setItem('artical_type', '所有看板');
  store.commit('setArticalType', sortName);
  emits('emitCloseMaside');
  router.replace('/main');
};
</script>

<style lang="less" scoped>
@import '../less/sortArea.less';
</style>
