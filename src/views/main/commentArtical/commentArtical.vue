<template>
  <div class="comment_artical">
    <artical-header />
    <artical-body />
  </div>
</template>

<script setup lang="ts">
// component
import articalHeader from './cpns/articalHeader.vue';
import articalBody from './cpns/articalBody.vue';

// testdata
import { articalContent } from './config/test.config';
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
