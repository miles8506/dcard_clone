<template>
  <div class="comment_artical" ref="commentArticalRef">
    <artical-header />
    <artical-body />
    <artical-comment />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@/store';
// component
import ArticalHeader from './cpns/articalHeader.vue';
import ArticalBody from './cpns/articalBody.vue';
import ArticalComment from './cpns/articalComment.vue';

const store = useStore();

// debounce variance
let timer: any = null;
// scrollBar
const commentArticalRef = ref<HTMLElement>();
onMounted(() => {
  commentArticalRef.value?.addEventListener('scroll', () => {
    if (!store.state.isShowScroll) store.commit('setShowScroll', true);
    // debounce
    function debounceFn() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        store.commit('setShowScroll', false);
      }, 800);
    }
    debounceFn();

    // computed window heigh
    const windowHeighRes =
      commentArticalRef.value!.scrollHeight -
      commentArticalRef.value!.offsetHeight;
    const averageScroll = (
      (commentArticalRef.value!.scrollTop / windowHeighRes) *
      100
    ).toFixed(2);
    store.commit('setScrollTop', averageScroll);
  });
});
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
