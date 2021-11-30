<template>
  <div class="artical_body">
    <h1 class="title">{{ articalInfo.title }}</h1>
    <div class="artical_info">
      <span class="sort">{{ articalInfo.sort }}</span> ．{{ timeAgo }}
      <span class="date">{{ articalInfo.articalDate }}</span>
    </div>
    <div class="artical_main">
      {{ articalInfo.content }}
    </div>
    <!-- 文章圖片 -->
    <!-- <div class="artical_img_wrap">
      <img v-if="updateRes !== ''" src="" ref="imgRef" class="artical_img" />
    </div> -->
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
      <button class="like_icon">
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
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';
import { useStore } from '@/store';

// utils
import { timeAgoFn } from '@/utils';

const store = useStore();

withDefaults(
  defineProps<{
    articalInfo: any;
  }>(),
  {
    articalInfo: {}
  }
);

const timeAgo = computed(() => {
  const timer = store.state.commentArticalModule.articalTimeStamp;
  return timeAgoFn(timer);
});
// const info = computed(() => ({
//   title: store.state.commentArticalModule.mainArtical.title,
//   sort: store.state.commentArticalModule.mainArtical.sort,
//   articalDate: store.state.commentArticalModule.mainArtical.timer,
//   content: store.state.commentArticalModule.mainArtical.content,
//   tagTotal: store.state.commentArticalModule.mainArtical.tagTotal
// }));

// 上傳照片
// let imgPath = '';
// let imgFile: any = null;
// const testclick = (e: any) => {
//   imgPath = e.target.files[0].name;
//   imgFile = e.target.files[0];
// };
// const clickbtn = () => {
//   const res = firebase.storage().ref(`artical/${imgPath}`);
//   res.put(imgFile);
// };

// download 照片
// const imgRef = ref<HTMLImageElement>();
// onMounted(async () => {
//   const fileRef = firebase
//     .storage()
//     .ref('artical/17834017_1701223456556270_2154160913691048631_o.jpg');
//   const downLoadRes = await fileRef.getDownloadURL();
//   imgRef.value!.src = downLoadRes;
// });
</script>

<style lang="less" scoped>
@import '../less/articalBody.less';
</style>
