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
      <div
        class="like_svg"
        @click="clickLikeComment(item.timeStamp, index)"
        :style="{ fill: haveLikeComment(item.timeStamp) }"
      >
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
import { defineProps, withDefaults, computed } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// component
import { userMan, userWoman } from '@/components/userImg';

// utils
import { timeAgoFn } from '@/utils';

// firebase
import { firebase } from '@/service';

// api
import { requestApi, setQueryApi } from '@/service';

// utils
import { localStorage } from '@/utils';

//type
// import type { IcommentItem } from '../type/type';
const store = useStore();
const router = useRouter();
const userInfo = localStorage.getItem('clone_dcard_user_info');
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

const clickLikeComment = (timeStamp: number) => {
  const userInfo = localStorage.getItem('clone_dcard_user_info');
  // verify user status
  firebase.auth().onAuthStateChanged(async (user: any) => {
    if (!user?.email) return router.replace('/login');
    // artical time stamp
    const articalTimeStamp = store.state.commentArticalModule.articalTimeStamp;
    const articalData: any = await requestApi('artical', articalTimeStamp + '');
    const userRes: any = await requestApi('user', userInfo.account);
    const currentOtherComment = articalData.elseUserComment.filter(
      (item: any) => item.timeStamp === timeStamp
    )[0];

    const isLikeIndex = userInfo.likeComment.findIndex(
      (item: any) => item === currentOtherComment.timeStamp
    );

    // 判斷user是否點擊like comment
    if (isLikeIndex !== -1) {
      currentOtherComment.likeTotal--;
      userInfo.likeComment.splice(isLikeIndex, 1);
      userRes.likeComment = userInfo.likeComment;
      localStorage.setItem('clone_dcard_user_info', userInfo);
      store.commit('commentArticalModule/setLikeComment', {
        timeStamp,
        computeStatus: 'sub'
      });
    } else {
      currentOtherComment.likeTotal++;
      userInfo.likeComment.push(timeStamp);
      userRes.likeComment = userInfo.likeComment;
      localStorage.setItem('clone_dcard_user_info', userInfo);
      store.commit('commentArticalModule/setLikeComment', {
        timeStamp,
        computeStatus: 'add'
      });
    }
    await setQueryApi('artical', articalTimeStamp, articalData);
    await setQueryApi('user', userRes.account, userRes);
  });
};

const haveLikeComment = computed(() => {
  return function (timeStamp: number) {
    const userInfo = localStorage.getItem('clone_dcard_user_info');
    if (userInfo === '' || userInfo === null) return 'rgba(0, 0, 0, 0.2)';
    const status = userInfo.likeComment.some((item) => item === timeStamp);
    if (status) {
      return 'rgb(234, 92, 92)';
    } else {
      return 'rgba(0, 0, 0, 0.2)';
    }
  };
});
</script>

<style lang="less" scoped>
@import '../less/commentItem.less';
</style>
