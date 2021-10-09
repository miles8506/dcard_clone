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
          <span class="current_sort">熱門</span>
          <div class="slide_icon">
            <span class="icon"></span>
          </div>
          <artical-select ref="articalSelectRef"></artical-select>
        </div>
      </div>
    </div>
    <hr class="line" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// config
import { articalNav } from '../config/articalNavConfig';

// component
import ArticalSelect from './articalSelect.vue';

const currentNavIndex = ref<number>(0);

const navigateItem = (index: number) => {
  currentNavIndex.value = index;
};

const articalSelectRef = ref<InstanceType<typeof ArticalSelect>>();
const clickSelect = () => {
  if (articalSelectRef.value) {
    articalSelectRef.value.isShowSelect = !articalSelectRef.value.isShowSelect;
  }
};

// const clickSortItem = (name: string) => {
//   currentSelectIndex.value = name;
// };
</script>

<style lang="less" scoped>
@import '../less/articalNav.less';
</style>
