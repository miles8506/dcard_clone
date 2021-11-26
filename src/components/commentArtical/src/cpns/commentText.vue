<template>
  <div class="comment_text">
    <div class="hd_text">
      <div class="user_img_wrap">
        <user-man v-bind="userLayout" />
      </div>
      <div class="info">
        <div class="school_info">德明財經科技大學</div>
        <div class="date_info">B11 | 2021/11/21 下午9:32:44</div>
      </div>
    </div>
    <div class="main_text_wrap">
      <textarea
        class="main_text"
        :rows="'4'"
        placeholder="留言前請詳閱全站站規和本版版規。"
      ></textarea>
    </div>
    <div class="foot_text">
      <commit-artical-bar @emitCommentShow="emitCommentShow">
        <template #default>
          <button class="submit_btn" @click="submitContent">送出</button>
        </template>
      </commit-artical-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
// components
import { userMan, userWoman } from '@/components/userImg';
import { userLayout } from '../../config/userIconType';
import CommitArticalBar from './commitArticalBar.vue';

const emits = defineEmits(['emitCommentShow']);
const emitCommentShow = () => {
  emits('emitCommentShow');
};

// submit comment
const submitContent = () => {
  console.log('submitContent');
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
