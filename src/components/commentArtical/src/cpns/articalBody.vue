<template>
  <div class="artical_body">
    <h1 class="title">{{ info.title }}</h1>
    <div class="artical_info">
      <span class="sort">{{ info.sort }}</span> ．
      <span class="date">{{ info.articalDate }}</span>
    </div>
    <div class="artical_main">
      {{ info.content }}
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
      <div class="total">{{ info.tagTotal }}．回應 111</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';

// firebase
// import { firebase } from '@/service';

const store = useStore();
const info = computed(() => ({
  title: store.state.commentArticalModule.mainArtical.title,
  sort: store.state.commentArticalModule.mainArtical.sort,
  articalDate: store.state.commentArticalModule.mainArtical.articalDate,
  content: store.state.commentArticalModule.mainArtical.content,
  tagTotal: store.state.commentArticalModule.mainArtical.tagTotal
}));

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
