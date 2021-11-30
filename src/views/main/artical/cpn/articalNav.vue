<template>
  <div class="artical_nav">
    <div class="nav_row">
      <div class="nav_item_wrap">
        <template v-for="(navItem, index) in articalNav" :key="navItem">
          <div
            class="nav_item"
            :class="{ current_border: currentNavIndex === index }"
            @click="navigateItem(index)"
          >
            {{ navItem }}
          </div>
        </template>
      </div>
      <div class="artical_select">
        <div class="context">文章排序依</div>
        <div class="wrap_sort" @click="clickSelect">
          <span class="current_sort">{{ articalType }}</span>
          <div class="slide_icon">
            <span class="icon"></span>
          </div>
          <div class="sort_slide" v-show="isShowSelect">
            <select-slide
              v-bind="articalSelectConfig"
              @emitArticalType="emitArticalType"
            ></select-slide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/store';

// config
import { articalNav } from '../config/articalNavConfig';
import { articalSelectConfig } from '../config/articalSelectConfig';

// component
import SelectSlide from '../../../../base-ui/selectSlide/index';

// utils
import { localStorage } from '@/utils';

const store = useStore();

// current nav border-bottom
const currentNavIndex = ref<number>(0);
const navigateItem = (index: number) => {
  currentNavIndex.value = index;
};

// show selectslide
const isShowSelect = ref(false);
const clickSelect = () => {
  isShowSelect.value = !isShowSelect.value;
};

// emit from selectSlide_cpn(typename)
let articalType = ref<string>('熱門');
const emitArticalType = (name: string) => {
  if (articalType.value !== name) articalType.value = name;
  localStorage.setItem('artical_basis', name);
  store.commit('setArticalSortStatus');
};
</script>

<style lang="less" scoped>
@import '../less/articalNav.less';
</style>
