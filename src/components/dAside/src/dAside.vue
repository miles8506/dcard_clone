<template>
  <aside class="d_aside">
    <sort-area />
    <immediately-area />
  </aside>
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

// get sortArea data
store.dispatch('asideModule/getAsideItem', {
  colName: 'aside',
  docName: 'i1j58xulOh6DvqmDWCWd'
});

// get immediatelyItem
store.dispatch('asideModule/getImmediatelyItem', {
  colName: 'asideImmediately',
  docName: '94h8mmiunVohLfnTEo8x'
});
</script>

<style lang="less" scoped>
@import './less/dAside.less';
</style>
