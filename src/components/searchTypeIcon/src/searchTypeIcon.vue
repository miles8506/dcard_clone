<template>
  <div class="search_type_icon">
    <div class="search_type_wrap">
      {{ typeName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
withDefaults(
  defineProps<{
    typeName: string;
  }>(),
  {}
);
</script>

<style lang="less" scoped>
@import './less/searchTypeIcon.less';
</style>
