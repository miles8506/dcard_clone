<template>
  <div class="login_adv">
    <div class="adv_wrap">
      <div class="login_bgc">
        <div class="qrcode_box">
          <img src="@/assets/img/qrcode.png" class="qrcode_img" />
          <p>立即掃描下載 Dcard App！</p>
        </div>
      </div>
    </div>
    <div class="intro_text">
      <h4 class="intro_title">年輕人都在 Dcard 上討論</h4>
      <p class="intro_conetnet">
        不想錯過任何有趣的話題嗎？ <br />趕快加入我們吧！
      </p>
      <div class="comment_area">
        <span @click="goMainPage">先看討論區</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goMainPage = () => {
  router.replace('/');
};
</script>

<style lang="less" scoped>
@import '../less/loginAdv.less';
</style>
