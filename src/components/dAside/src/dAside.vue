<template>
  <div class="d_aside">
    <sort-area />
    <immediately-area />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
// component
import SortArea from '@/components/dAside/src/cpn/sortArea.vue';
import ImmediatelyArea from '@/components/dAside/src/cpn/immediatelyArea.vue';

const store = useStore();

window.addEventListener('resize', () => {
  if (window.innerWidth > 767 && store.state.isShowMAside)
    store.commit('setShowMAside');
});
</script>

<style lang="less" scoped>
@import './less/dAside.less';
</style>
