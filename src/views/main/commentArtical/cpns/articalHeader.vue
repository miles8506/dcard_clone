<template>
  <div class="artical_hd">
    <div class="hd_left">
      <div class="user_icon">
        <user-man v-if="info.gender === 0" v-bind="userLayout" />
        <user-woman v-else v-bind="userLayout" />
      </div>
      <div class="user_name">{{ info.userName }}</div>
    </div>
    <div class="hd_right">
      <div class="close" @click="closeCommentArtical">X</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';
// component
import { userMan, userWoman } from '@/components/userImg';

// config
import { userLayout } from '../config/userIconType';

const store = useStore();

const info = computed(() => ({
  gender: store.state.commentArticalModule.mainArtical.gender,
  userName: store.state.commentArticalModule.mainArtical.userName
}));

// close aritcal window
const closeCommentArtical = () => {
  store.commit('setShowMask');
  store.commit('commentArticalModule/setIsshowState');
};
</script>

<style lang="less" scoped>
@import '../less/articalHeader.less';
</style>
