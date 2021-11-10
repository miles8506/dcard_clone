<template>
  <div class="search_type_icon" @click="saveSearchType">
    <div class="search_type_wrap">
      {{ typeName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useStore } from '@/store';
const props = withDefaults(
  defineProps<{
    typeName: string;
  }>(),
  {}
);
const store = useStore();

const saveSearchType = () => {
  store.commit('mSearchWindowModule/setSearchIconModel', props.typeName);
};
</script>

<style lang="less" scoped>
@import './less/searchTypeIcon.less';
</style>
