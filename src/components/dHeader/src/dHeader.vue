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
          <input
            type="text"
            class="search_ipt"
            placeholder="搜尋 Relove私密小心機"
          />
          <button class="search_btn"></button>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="right_wrap">
      <div class="login">
        註冊 / 登入
        <div class="service_bar" v-if="isShowBar">
          <select-slide v-bind="headerServiceConfig" />
        </div>
      </div>
      <div class="more_slide" @click="clickSelect"></div>
      <div class="download_wrap" @mouseenter="mouseIn" @mouseleave="mouseOut">
        <div class="download_btn">下載App</div>
        <div class="qrcode_wrap" v-show="isShowQrcode">
          <div class="download_qrcode">
            <div class="title">手機掃描下載</div>
            <img src="@/assets/img/qrcode.png" alt="" class="qrcode_img" />
            <div class="zoom_item">放大</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// base-ui
import SelectSlide from '@/base-ui/selectSlide/index';

// config
import { headerServiceConfig } from '../config/headerServiceConfig';

// show serviebar
const isShowBar = ref(false);
const clickSelect = () => {
  isShowBar.value = !isShowBar.value;
};

// show qrcode
const isShowQrcode = ref(false);
const mouseIn = () => {
  isShowQrcode.value = !isShowQrcode.value;
};
const mouseOut = () => {
  isShowQrcode.value = !isShowQrcode.value;
};
</script>

<style lang="less" scoped>
@import './less/dHeader.less';
</style>
