<template>
  <div class="d_header">
    <!-- left -->
    <div class="left_wrap">
      <div class="logo">
        <a href="#">
          <img
            src="https://www.dcard.tw/_next/static/media/logo-2ef7b50901acaa284f36a0484329ec05.svg"
            class="logo_img"
          />
        </a>
      </div>
      <div class="search_wrap">
        <div class="search_box">
          <input type="text" class="search_ipt" />
          <button class="search_btn"></button>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="right_wrap">
      <div class="login">註冊 / 登入</div>
      <div class="more_slide"></div>
      <div class="download_btn">下載App</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import './less/dHeader.less';
</style>
