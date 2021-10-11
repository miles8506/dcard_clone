<template>
  <div class="artical_list">
    <div class="adv_wrap">
      <img src="@/assets/img/adv_img.png" alt="" />
    </div>
    <artical-item :articalListConfig="articalListConfig" />
  </div>
</template>

<script setup lang="ts">
import ArticalItem from '../cpn/articalItem.vue';
import { articalListConfig } from '../config/listTestConfig';
</script>

<style lang="less" scoped>
@import '../less/articalList.less';
</style>
