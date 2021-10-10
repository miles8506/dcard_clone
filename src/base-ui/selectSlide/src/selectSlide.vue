<template>
  <div class="select_content">
    <ul>
      <template v-for="(item, index) in selectContent" :key="item.name">
        <li class="select_item" @click="clickSortItem(index)">
          <div
            v-show="showSvg"
            class="svg_icon_wrap"
            :class="{ current_icon_color: currentSelectIndex === index }"
          >
            <svg
              :viewBox="item.viewBox"
              focusable="flase"
              role="img"
              aria-hidden="true"
            >
              <path :d="item.svgPath"></path>
            </svg>
          </div>
          <div class="context">
            <span
              :class="{
                current_color:
                  currentSelectIndex === index && pointColor === true
              }"
            >
              {{ item.name }}
            </span>
          </div>
          <div class="svg_check_wrap" v-show="showSvg">
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
import { ref, defineProps, withDefaults } from 'vue';

// type
import { IcontentKey } from '@/base-ui/selectSlide';

const currentSelectIndex = ref<any>(0);

const clickSortItem = (name: string) => {
  currentSelectIndex.value = name;
};

withDefaults(
  defineProps<{
    selectContent: IcontentKey;
    showSvg: boolean;
    pointColor: boolean;
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import '~@/base-ui/selectSlide/src/less/selectSlide.less';
</style>
