<template>
  <div class="artical_list">
    <div class="adv_wrap">
      <img src="@/assets/img/adv_img.png" alt="" />
    </div>
    <artical-item :articalListConfig="articalListConfig" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from '@/store';
// component
import ArticalItem from '@/components/articalItem';

// api
import { requestColApi } from '@/service';

// utils
import { localStorage } from '@/utils';
const store = useStore();

// get artical data
const articalListConfig = ref([]);
async function getArticalFn() {
  const articalBasis = localStorage.getItem('artical_basis');
  const articalType = localStorage.getItem('artical_type');
  const articalListResult: any = await requestColApi('artical');
  articalListResult.forEach((item: any) => {
    articalListConfig.value.push(item.data());
  });

  // artical type
  if (articalType !== '全部') {
    articalListConfig.value = articalListConfig.value.filter(
      (item: any) => item.sort === articalType
    );
  }

  // artical basis
  if (articalBasis === '熱門') {
    articalListConfig.value = articalListConfig.value.sort(
      (a: any, b: any) => b.commentTotal - a.commentTotal
    );
  } else if (articalBasis === '最新') {
    console.log('new');
    articalListConfig.value = articalListConfig.value.sort(
      (a: any, b: any) => b.timerStamp - a.timerStamp
    );
  }
}
getArticalFn();

// refresh render articalList
const getterIsShowStatus = computed(
  () => store.getters['commentArticalModule/getIsShowStatus']
);
watch(getterIsShowStatus, () => {
  articalListConfig.value = [];
  getArticalFn();
});

// callback change artical sort
const articalSortStatus = computed(
  () => store.getters['getArticalBasisStatus']
);
watch(articalSortStatus, () => {
  articalListConfig.value = [];
  getArticalFn();
});

// callback choose immediately item
const articalTypeStatus = computed(() => store.getters['getArticalType']);
watch(articalTypeStatus, () => {
  articalListConfig.value = [];
  getArticalFn();
});
</script>

<style lang="less" scoped>
@import '../less/articalList.less';
</style>
