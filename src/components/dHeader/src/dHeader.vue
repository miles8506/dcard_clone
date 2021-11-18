<template>
  <header class="d_header">
    <div class="header_wrap" v-if="!isShowMobileHeader">
      <!-- left -->
      <div class="left_wrap">
        <!-- mobile nav start-->
        <div class="mobile_nav" @click="isShowMAside">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            width="24"
            height="24"
            role="img"
            aria-hidden="true"
          >
            <path
              fill="#fff"
              d="M21 7.5H3a1 1 0 01-1-1v-1a1 1 0 011-1h18a1 1 0 011 1v1a1 1 0 01-1 1zm1 5v-1a1 1 0 00-1-1H3a1 1 0 00-1 1v1a1 1 0 001 1h18a1 1 0 001-1zm0 6v-1a1 1 0 00-1-1H3a1 1 0 00-1 1v1a1 1 0 001 1h18a1 1 0 001-1z"
            ></path>
          </svg>
        </div>
        <!-- mobile nav end-->
        <div class="logo" @click="goHome">
          <a href="#">
            <img
              src="https://www.dcard.tw/_next/static/media/logo-2ef7b50901acaa284f36a0484329ec05.svg"
              class="logo_img"
            />
          </a>
        </div>
        <div class="search_wrap" v-if="isShowHeader">
          <div class="search_box">
            <input
              type="text"
              class="search_ipt"
              v-model.trim="searchIptModel"
              @input="isShowCancelBtn"
              @keydown.enter="searchDataClick"
              placeholder="搜尋 Relove私密小心機"
            />
            <button class="cancel_text" @click="cancelIptContent">
              <svg
                viewBox="0 0 18 18"
                focusable="false"
                role="img"
                aria-hidden="true"
                v-show="cancelBtnStatus"
              >
                <path
                  d="M16.8 9a7.5 7.5 0 01-7.5 7.5A7.5 7.5 0 011.8 9a7.5 7.5 0 017.5-7.5A7.5 7.5 0 0116.8 9zm-6.44 0l2.47-2.47a.75.75 0 000-1.06.75.75 0 00-1.06 0L9.3 7.94 6.83 5.47a.75.75 0 00-1.06 0 .75.75 0 000 1.06L8.24 9l-2.47 2.47a.75.75 0 000 1.06.75.75 0 00.53.22.75.75 0 00.53-.22l2.47-2.47 2.47 2.47a.75.75 0 00.53.22.75.75 0 00.53-.22.75.75 0 000-1.06z"
                ></path>
              </svg>
            </button>
            <button class="search_btn" @click="searchDataClick"></button>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="right_wrap">
        <!-- mobile info start -->
        <div class="search_m" @click="showMSearchWindow">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M20.707 19.293l-4.25-4.25A7.454 7.454 0 0018 10.5 7.5 7.5 0 0010.5 3 7.5 7.5 0 003 10.5a7.5 7.5 0 007.5 7.5 7.454 7.454 0 004.543-1.543l4.25 4.25A1 1 0 0020 21a1 1 0 00.707-.293 1 1 0 000-1.414zM10.5 16A5.506 5.506 0 015 10.5 5.506 5.506 0 0110.5 5a5.506 5.506 0 015.5 5.5 5.506 5.506 0 01-5.5 5.5z"
            ></path>
          </svg>
        </div>
        <div class="user_m">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
            aria-hidden="true"
            fill="rgb(255, 255, 255)"
          >
            <path
              d="M17.83 21.5H6.17a1.66 1.66 0 01-1.67-1.65v-1.24a5.81 5.81 0 015.83-5.78h3.34a5.81 5.81 0 015.83 5.78v1.24a1.66 1.66 0 01-1.67 1.65zM16.58 7A4.58 4.58 0 1112 2.5 4.57 4.57 0 0116.58 7z"
            ></path>
          </svg>
        </div>
        <!-- mobile info end -->
        <div class="login">
          <div
            class="login_text"
            v-if="$store.state.isShowLoginHeader"
            @click="goLoginPage"
          >
            註冊 / 登入
          </div>
          <div class="service_bar" v-show="isShowBar">
            <select-slide v-bind="headerServiceConfig" />
          </div>
        </div>
        <div class="more_slide" @click="clickSelect"></div>
        <div
          class="download_wrap"
          v-if="isShowHeader"
          @mouseenter="mouseIn"
          @mouseleave="mouseOut"
        >
          <div class="download_btn">下載App</div>

          <transition name="qrcode">
            <div class="qrcode_wrap" v-show="isShowQrcode">
              <div class="download_qrcode">
                <div class="title">手機掃描下載</div>
                <img src="@/assets/img/qrcode.png" alt="" class="qrcode_img" />
                <div class="zoom_item" @click="showLargeQrcode">放大</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="mobile_header" v-else>
      <h1 class="track_title">追蹤列表</h1>
      <!-- <span class="close_icon">&times;</span> -->
      <slot></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, defineEmits } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// base-ui
import SelectSlide from '@/base-ui/selectSlide/index';

// config
import { headerServiceConfig } from '../config/headerServiceConfig';

const store = useStore();
const router = useRouter();

// v-model
const searchIptModel = ref('');

if (store.state.mSearchWindowModule.searchValue !== '')
  searchIptModel.value = store.state.mSearchWindowModule.searchValue;

// porps
withDefaults(
  defineProps<{
    isShowHeader?: boolean;
    isShowMobileHeader?: boolean;
  }>(),
  {
    isShowHeader: true,
    isShowMobileHeader: false
  }
);

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

// show滿版qrcode
const showLargeQrcode = () => {
  const body = document.body;
  body.style.overflowY = 'hidden';
  store.commit('setShowLargeQrcode');
  store.commit('setShowMask');
};

const goLoginPage = () => {
  router.push('/login');
};

// isshow searchwindow(mobile)
const showMSearchWindow = () => {
  router.push('/search');
};

// return home page
const goHome = () => {
  router.push('/main');
};

// isshow maside
const isShowMAside = () => {
  store.commit('setShowMAside');
  const body = document.body;
  body.style.overflowY = 'hidden';
};

// cancel input content
const cancelBtnStatus = ref<boolean>(false);
const cancelIptContent = () => {
  searchIptModel.value = '';
  cancelBtnStatus.value = !cancelBtnStatus.value;
};

// listen search input and show cancel btn
const isShowCancelBtn = () => {
  searchIptModel.value !== ''
    ? (cancelBtnStatus.value = true)
    : (cancelBtnStatus.value = false);
};
const searchDataClick = () => {
  if (searchIptModel.value === '') return;
  store.commit('mSearchWindowModule/setSearchValue', searchIptModel.value);
  router.push('/search');
};
</script>

<style lang="less" scoped>
@import './less/dHeader.less';
</style>
