<template>
  <div class="artical_list">
    <div class="adv_wrap">
      <img src="@/assets/img/adv_img.png" alt="" />
    </div>
    <artical-item :articalListConfig="articalListConfig" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// component
import ArticalItem from '@/components/articalItem';

// api
import { requestColApi } from '@/service';

// get artical data
const articalListConfig = ref([]);
async function getArticalFn() {
  const articalListResult: any = await requestColApi('artical');
  articalListResult.forEach((item: any) => {
    articalListConfig.value.push(item.data());
  });
}
getArticalFn();
</script>

<style lang="less" scoped>
@import '../less/articalList.less';
</style>
