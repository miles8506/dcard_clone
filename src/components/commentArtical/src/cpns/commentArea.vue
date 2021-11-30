<template>
  <div class="comment_area">
    <div class="user_img">
      <user-man v-bind="userLayoutComment" />
    </div>
    <div class="comment_bar" @click="changeCommenShow">留言......</div>
    <!-- <button class="like_icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        focusable="false"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
        ></path>
      </svg>
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
// component
import { userMan, userWoman } from '@/components/userImg';

// config
import { userLayoutComment } from '../../config/userIconType';

import { localStorage } from '@/utils';

const emits = defineEmits(['emitCommentShow']);

const router = useRouter();
const changeCommenShow = () => {
  const userInfo = localStorage.getItem('clone_dcard_user_info');
  if (userInfo === '' || userInfo === null) return router.push('/login');
  emits('emitCommentShow');
};
</script>

<style lang="less" scoped>
@import '../less/commentArea.less';
</style>
