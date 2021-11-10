<template>
  <div class="scroll_y_bar" @mouseover="showScroll" @mouseleave="hideScroll">
    <transition name="scroll_show">
      <div
        class="scroll_wrap"
        ref="scrollWrapRef"
        v-show="$store.state.isShowScroll"
      >
        <div class="scroll_line"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from '@/store';
const store = useStore();

// 獲取與監聽scroll目前移動位置(Y)
const scrollWrapRef = ref();
const scrollY = computed(() => store.getters.getScrollTop + '%');
watch(scrollY, (newData) => {
  scrollWrapRef.value!.style.top = newData;
});

// hide&show scrollYbar
const showScroll = () => {
  store.commit('setShowScroll', true);
};
const hideScroll = () => {
  store.commit('setShowScroll', false);
};
</script>

<style lang="less" scoped>
@import '../less/scrollYBar.less';
</style>
