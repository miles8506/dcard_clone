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
      <!-- <div class="img_wrap">
        <img src="" ref="comment_img" v-show="isShowImg" />
      </div> -->
    </div>
    <div class="foot_text">
      <div class="upload_img_wrap" @click="uploadFileClick">
        <!-- <svg
          viewBox="0 0 24 24"
          focusable="false"
          width="24"
          height="24"
          role="img"
          aria-hidden="true"
          style="fill: rgba(0, 0, 0, 0.5)"
        >
          <path
            d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM16.5 5.5a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm2.5 13v-3l-2.37-2.77a1 1 0 00-1.38-.13L13.5 14 9.7 9.78a1 1 0 00-1.45-.04L5 13v5.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5z"
          ></path>
        </svg>
        <input type="file" class="upload_file" @change="uploadImg" /> -->
      </div>
      <!-- <div class="img_wrap">
        <img src="" ref="comment_img" v-show="isShowImg" />
      </div> -->
      <div class="control_comment_wrap">
        <button class="cancel_btn">取消</button>
        <button class="submit_btn">送出</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// components
import { userMan, userWoman } from '@/components/userImg';
import { userLayout } from '../../config/userIconType';

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
