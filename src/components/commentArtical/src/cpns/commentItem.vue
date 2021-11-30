<template>
  <!-- <template v-if="commentItem?.length > 0"> -->
  <div class="comment_item" v-for="(item, index) in commentItem" :key="index">
    <div class="user_icon_wrap">
      <template v-if="item.gender === 0">
        <user-man :width="width" :height="height" />
      </template>
      <template v-else>
        <user-woman :width="width" :height="height" />
      </template>
    </div>
    <div class="comment_main">
      <div class="user_name">{{ item.userName }}</div>
      <div class="comment_content">{{ item.content }}</div>
      <div class="comment_info">
        <span class="floor">{{ 'B' + item.floor }} ．</span>
        <span class="hour_ago"> {{ timeAgoFn(item.timeStamp) }}</span>
      </div>
    </div>
    <div class="like_total_wrap">
      <div class="like_svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          focusable="false"
          role="img"
          aria-hidden="true"
        >
          <path
            d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="like_total">{{ item.likeTotal }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

// component
import { userMan, userWoman } from '@/components/userImg';

// utils
import { timeAgoFn } from '@/utils';

//type
// import type { IcommentItem } from '../type/type';
withDefaults(
  defineProps<{
    commentItem: any;
    width: number;
    height: number;
  }>(),
  {
    commentItem: {}
  }
);
</script>

<style lang="less" scoped>
@import '../less/commentItem.less';
</style>
