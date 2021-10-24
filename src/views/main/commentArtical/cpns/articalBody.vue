<template>
  <div class="artical_body">
    <h1 class="title">{{ info.title }}</h1>
    <div class="artical_info">
      <span class="sort">{{ info.sort }}</span> ．
      <span class="date">{{ info.articalDate }}</span>
    </div>
    <div class="artical_main">
      {{ info.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';

const store = useStore();
const info = computed(() => ({
  title: store.state.commentArticalModule.mainArtical.title,
  sort: store.state.commentArticalModule.mainArtical.sort,
  articalDate: store.state.commentArticalModule.mainArtical.articalDate,
  content: store.state.commentArticalModule.mainArtical.content
}));
</script>

<style lang="less" scoped>
@import '../less/articalBody.less';
</style>
