<template>
  <div class="select_content" v-if="isShowSelect">
    <ul>
      <template v-for="(item, index) in articalSelectConfig" :key="item.name">
        <li class="select_item" @click="clickSortItem(index)">
          <div
            v-show="item.showSvg"
            class="svg_icon_wrap"
            :class="{ current_icon_color: currentSelectIndex === index }"
          >
            <svg
              :viewBox="item.viewBox"
              focusable="flase"
              role="img"
              aria-hidden="true"
            >
              <path :d="item.svnPath"></path>
            </svg>
          </div>
          <div class="context">
            <span :class="{ current_color: currentSelectIndex === index }">
              {{ item.name }}
            </span>
          </div>
          <div class="svg_check_wrap" v-show="item.showSvg">
            <svg
              viewBox="0 0 24 24"
              focusable="flase"
              role="img"
              aria-hidden="true"
              v-show="currentSelectIndex === index"
            >
              <path
                d="M9 16.17L5.53 12.7a1 1 0 00-1.4 0h-.01a1 1 0 000 1.41L8.3 18.3a1 1 0 001.4 0L20.3 7.7a1 1 0 000-1.41 1 1 0 00-1.41 0z"
              ></path>
            </svg>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

// config
import { articalSelectConfig } from '../config/articalSelectConfig';

const currentSelectIndex = ref<any>(null);
const isShowSelect = ref(false);

const clickSortItem = (name: string) => {
  currentSelectIndex.value = name;
};

defineExpose({ isShowSelect });
</script>

<style lang="less" scoped>
@import '../less/articalSelect.less';
</style>
