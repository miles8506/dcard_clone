<template>
  <div class="artical_hd">
    <div class="hd_left">
      <div class="user_icon">
        <user-man v-bind="userLayout" />
        <!-- <user-woman v-else v-bind="userLayout" /> -->
      </div>
      <div class="user_name">{{ articalInfo.userName }}</div>
    </div>
    <div class="hd_right">
      <div class="close" @click="closeCommentArtical">X</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useStore } from '@/store';
// component
import { userMan, userWoman } from '@/components/userImg';

// config
import { userLayout } from '../../config/userIconType';

const store = useStore();

withDefaults(
  defineProps<{
    articalInfo: any;
  }>(),
  {
    articalInfo: {}
  }
);

// const info = computed(() => ({
//   gender: store.state.commentArticalModule.mainArtical.gender,
//   userName: store.state.commentArticalModule.mainArtical.userName
// }));

// close aritcal window
const closeCommentArtical = () => {
  const body: HTMLElement = document.body;
  body.style.overflow = 'scroll';
  store.commit('setShowMask');
  store.commit('commentArticalModule/setIsshowState');
};
</script>

<style lang="less" scoped>
@import '../less/articalHeader.less';
</style>
