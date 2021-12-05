<template>
  <article class="artical_body">
    <h5 class="title">{{ articalInfo.title }}</h5>
    <div class="artical_info">
      <span class="sort">{{ articalInfo.sort }}</span> ．{{ timeAgo }}
      <span class="date">{{ articalInfo.articalDate }}</span>
    </div>
    <div class="artical_main">
      {{ articalInfo.content }}
    </div>
    <div class="img_wrap" v-if="articalInfo.imgPath !== ''">
      <img :src="articalInfo.imgPath" alt="" />
    </div>
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
      <div class="total">
        {{ articalInfo.tagTotal }}．回應
        {{ articalInfo.elseUserComment?.length }}
      </div>
      <button class="like_icon" @click="clickLikeArtical">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          focusable="false"
          role="img"
          aria-hidden="true"
          :class="{ current_like: articalIconStatus }"
        >
          <path
            d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, computed } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// utils
import { timeAgoFn, localStorage } from '@/utils';

// api
import { requestApi, setQueryApi } from '@/service';

// firebase
import { firebase } from '@/service';

const store = useStore();
const router = useRouter();
const emits = defineEmits(['emitTagTotal']);
// props
withDefaults(
  defineProps<{
    articalInfo: any;
  }>(),
  {
    articalInfo: {}
  }
);

const userInfo = localStorage.getItem('clone_dcard_user_info');

const timeAgo = computed(() => {
  const timer = store.state.commentArticalModule.articalTimeStamp;
  return timeAgoFn(timer);
});

// click like artical icon
let controlStatus = true;
const clickLikeArtical = () => {
  if (!controlStatus) return;
  firebase.auth().onAuthStateChanged(async (user: any) => {
    if (!user?.email) return router.push('/login');
    controlStatus = !controlStatus;
    const articalTimeStamp = store.state.commentArticalModule.articalTimeStamp;
    const findArticalIndex: number = userInfo.likeArtical.findIndex(
      (item: any) => item === articalTimeStamp
    );

    const articalRes: any = await requestApi('artical', articalTimeStamp + '');
    const userRes: any = await requestApi('user', userInfo.account);
    if (findArticalIndex === -1) {
      articalRes.tagTotal++;
      userRes.likeArtical.push(articalTimeStamp);
      emits('emitTagTotal', true);
      userInfo.likeArtical.push(articalTimeStamp);
      store.commit('userInfoModule/addLikeArtical', articalTimeStamp);
    } else {
      articalRes.tagTotal--;
      userRes.likeArtical.splice(findArticalIndex, 1);
      emits('emitTagTotal', false);
      userInfo.likeArtical.splice(findArticalIndex, 1);
      store.commit('userInfoModule/subLikeArtical', findArticalIndex);
    }
    localStorage.setItem('clone_dcard_user_info', userInfo);
    setQueryApi('user', userInfo.account, userRes);
    setQueryApi('artical', articalTimeStamp + '', articalRes);
    controlStatus = !controlStatus;
  });
};

const articalIconStatus = computed(() => {
  const articalArray = store.state.userInfoModule.likeArtical;
  const findLike = articalArray.find(
    (item) => item === store.state.commentArticalModule.articalTimeStamp
  );
  if (findLike) {
    return true;
  } else {
    return false;
  }
});
</script>

<style lang="less" scoped>
@import '../less/articalBody.less';
</style>
