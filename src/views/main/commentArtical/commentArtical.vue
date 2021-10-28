<template>
  <div class="comment_artical">
    <artical-header />
    <artical-body />
    <artical-comment />
  </div>
</template>

<script setup lang="ts">
// component
import ArticalHeader from './cpns/articalHeader.vue';
import ArticalBody from './cpns/articalBody.vue';
import ArticalComment from './cpns/articalComment.vue';

// testdata
// import { articalContent } from './config/test.config';
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
