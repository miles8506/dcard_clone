<template>
  <template
    v-for="(item, index) in articalListConfig"
    :key="item.timer + index"
  >
    <div class="artical_item" @click="showArtical(item)">
      <div class="header_item">
        <span class="user_img">
          <template v-if="item.gender === 0">
            <user-man v-bind="userLayout" />
          </template>
          <template v-else>
            <user-woman v-bind="userLayout" />
          </template>
        </span>
        <span class="artical_sort">{{ item.sort }}</span> ．
        <span class="artical_ago">{{ timeAgo(item.timerStamp) }}</span>
      </div>
      <div class="artical_main">
        <div class="artical_wrap">
          <div class="body_item">
            <h2 class="artical_title">{{ item.title }}</h2>
            <div class="artical_content">{{ item.content }}</div>
          </div>
          <div class="footer_item">
            <div class="aritcal_tag">
              <span class="tag_img">
                <span class="wrap">
                  <img src="@/assets/img/love_icon.png" class="one_img" />
                </span>
              </span>
              <span class="tag_img">
                <span class="wrap">
                  <img src="@/assets/img/happy_icon.png" class="two_img" />
                </span>
              </span>
              <span class="tag_img">
                <span class="wrap">
                  <img src="@/assets/img/angry_icon.png" class="three_img" />
                </span>
              </span>
              <div class="total">{{ item.tagTotal }}</div>
            </div>
            <div class="comment">
              <div class="comment_img">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M1.3330000000000002 12a10.667 10.667 0 1021.334 0 10.667 10.667 0 10-21.334 0zM15.5 6.5h-7A3.5 3.5 0 005 10v3.5A3.5 3.5 0 008.5 17H9v1.369a.75.75 0 001.238.57L12.5 17h3a3.5 3.5 0 003.5-3.5V10a3.5 3.5 0 00-3.5-3.5z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="total">{{ item.elseUserComment.length }}</div>
            </div>
            <div class="collect">
              <div class="collect_img">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"
                  ></path>
                </svg>
              </div>
              <div class="text">收藏</div>
            </div>
          </div>
        </div>
        <div class="artical_img" v-if="item.imgPath !== ''">
          <img :src="item.imgPath" />
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';
import { useStore } from '@/store';

// component
import { userMan, userWoman } from '@/components/userImg/index';

// type
import type { IarticalItemType } from '../type/type';

// utils
import { timeAgoFn } from '@/utils';

import { firebase } from '@/service';
const st = firebase.storage();

// props
withDefaults(
  defineProps<{
    articalListConfig: IarticalItemType[];
  }>(),
  {}
);

// config
import { userLayout } from '../../../views/main/artical/config/userIconConfig';

const store = useStore();

const timeAgo = computed(() => {
  return function (timer: number) {
    return timeAgoFn(timer);
  };
});

store.commit('setShowMask', false);
store.commit('commentArticalModule/setIsshowState', false);
// show comment artical
const showArtical = (item: any) => {
  store.commit('commentArticalModule/setTimeStamp', item.timerStamp);
  const body = document.body;
  body.style.overflowY = 'hidden';
  store.commit('setShowMask');
  store.commit('commentArticalModule/setIsshowState');
};
</script>

<style lang="less" scoped>
@import './less/articalItem.less';
</style>
