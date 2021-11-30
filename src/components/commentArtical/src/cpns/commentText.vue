<template>
  <div class="comment_text">
    <div class="hd_text">
      <div class="user_img_wrap">
        <user-man v-bind="userLayout" />
      </div>
      <div class="info">
        <div class="school_info">{{ userInfo.account }}</div>
        <div class="date_info">
          {{ 'B' + commentFloor }}
          | {{ nowTimerFn(new Date()) }}
        </div>
      </div>
    </div>
    <div class="main_text_wrap">
      <textarea
        class="main_text"
        :rows="'4'"
        placeholder="留言前請詳閱全站站規和本版版規。"
        v-model.trim="commentModel"
        ref="mainTextRef"
      ></textarea>
    </div>
    <div class="foot_text">
      <commit-artical-bar @emitCommentShow="emitCommentShow">
        <template #default>
          <button
            class="submit_btn"
            :class="{ disabledStatus: commentModel === '' }"
            :disabled="commentModel === ''"
            @click="submitContent"
          >
            送出
          </button>
        </template>
      </commit-artical-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, onMounted } from 'vue';
import { useStore } from '@/store';
// components
import { userMan, userWoman } from '@/components/userImg';
import { userLayout } from '../../config/userIconType';
import CommitArticalBar from './commitArticalBar.vue';

// utils
import { nowTimerFn, localStorage, timeStampFn } from '@/utils';

// api
import { requestApi, setQueryApi } from '@/service';

const store = useStore();
const emits = defineEmits(['emitCommentShow']);
const emitCommentShow = () => {
  emits('emitCommentShow');
};
const userInfo = localStorage.getItem('clone_dcard_user_info');

const mainTextRef = ref<HTMLTextAreaElement>();
onMounted(() => {
  mainTextRef.value?.focus();
});

// 當前留言樓層數
const commentFloor = computed(
  () => store.state.commentArticalModule.elseUserComment?.length + 1
);
const commentModel = ref('');

// submit comment
const submitContent = async () => {
  emits('emitCommentShow');

  const commentObj: any = {};
  commentObj.userName = userInfo.account;
  commentObj.timeStamp = timeStampFn(new Date());
  commentObj.floor = commentFloor.value;
  commentObj.content = commentModel.value;
  commentObj.gender = 0;
  commentObj.likeTotal = 0;

  // api artical
  const articalRes: any = await requestApi(
    'artical',
    store.state.commentArticalModule.articalTimeStamp + ''
  );
  articalRes.elseUserComment.push(commentObj);
  articalRes.commentTotal++;
  await setQueryApi(
    'artical',
    store.state.commentArticalModule.articalTimeStamp + '',
    articalRes
  );

  // api user
  const userRes: any = await requestApi('user', userInfo.account);
  userRes.comment.push(commentObj);
  await setQueryApi('user', userInfo.account, userRes);

  // local
  store.commit('commentArticalModule/pushOtherComment', commentObj);
  userInfo.comment.push(commentObj);
  localStorage.setItem('clone_dcard_user_info', userInfo);

  // commentModel.value = '';
};

// click input file after click svg
// const uploadFileClick = () => {
//   const upload_file = document.querySelector('.upload_file');
//   upload_file!.click();
// };

// show comment image
// let isShowImg = ref<boolean>(false);
// let file = ref<string>('');
// const comment_img = ref<any>('');
// const uploadImg = (e: any) => {
//   file = e.target.files;
//   file.value !== '' ? (isShowImg.value = true) : (isShowImg.value = false);
//   comment_img.value.src = window.URL.createObjectURL(new Blob(file));
// };
</script>

<style lang="less" scoped>
@import '../less/commentText.less';
</style>
