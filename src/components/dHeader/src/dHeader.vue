<template>
  <header class="d_header" :class="{ position: controlHeaderLayout }">
    <div class="header_wrap" v-if="!isShowMobileHeader">
      <!-- left -->
      <div class="left_wrap">
        <!-- mobile nav start-->
        <div class="mobile_nav" @click="isShowMAside" v-show="isShowMobileNav">
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
        <div class="login_user_bar" v-show="!userStatus">
          <div class="comment_icon" @click="goPublicPage">
            <button disabled>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M21 4.4l-1.4-1.3a2 2 0 00-2.8 0l-1.3 1.3 4 4.1L21 7.2a2 2 0 000-2.8zM3.8 16l-1.4 5.5L8 20.1 18.2 10l-4-4.1L3.8 16z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="notify_icon disable_btn">
            <button disabled>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M12 20.5a1.93 1.93 0 01-1.31-.5H8.85A3.48 3.48 0 0012 22a3.48 3.48 0 003.15-2h-1.84a1.93 1.93 0 01-1.31.5zm7.97-4.5a2 2 0 00-.37-1.03l-1.1-1.47v-3a6 6 0 00-4.03-5.66 2.48 2.48 0 00.03-.34A2.5 2.5 0 0012 2a2.5 2.5 0 00-2.5 2.5 2.48 2.48 0 00.03.34A6 6 0 005.5 10.5v3l-1.1 1.47A2 2 0 004.03 16H4v1a2 2 0 002 2h12a2 2 0 002-2v-1zM11 4.5a1 1 0 011-1 1 1 0 011 1v.03a6.24 6.24 0 00-.5-.03h-1c-.17 0-.33.01-.5.03V4.5z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="card_icon disable_btn">
            <button disabled>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M19 3h-9a2 2 0 00-1.85 1.26L3.47 5.51a2 2 0 00-1.41 2.45l3.36 12.56A2 2 0 007.36 22a1.99 1.99 0 00.52-.07l3.48-.93H19a2 2 0 002-2V5a2 2 0 00-2-2zM7.85 19.87a.5.5 0 01-.61-.35L4.13 7.92a.5.5 0 01.35-.6L8 6.36V19a2 2 0 00.16.79z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="mail_icon disable_btn">
            <button disabled>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M20 4H4a2 2 0 00-2 2v1l10 5 10-5V6a2 2 0 00-2-2z"
                ></path>
                <path d="M2 9v9a2 2 0 002 2h16a2 2 0 002-2V9l-10 5z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="user_m" @click="goLoginPage" v-show="!userStatus">
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
        <div
          class="login"
          :class="{ currentShowPadding: isShowHeader }"
          v-show="userStatus"
        >
          <div class="login_text" @click="goLoginPage" v-show="isShowHeader">
            註冊 / 登入
          </div>
        </div>
        <div class="more_slide" @click="clickSelect">
          <div class="service_bar" v-show="isShowBar">
            <select-slide v-bind="headerServiceConfig" />
          </div>
        </div>
        <div
          class="download_wrap"
          v-if="isShowHeader"
          @mouseenter="mouseIn"
          @mouseleave="mouseOut"
        >
          <div class="download_btn"><span class="btn_text">下載App</span></div>

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
      <slot></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// base-ui
import SelectSlide from '@/base-ui/selectSlide/index';

import { firebase } from '@/service';

// config
import { headerServiceConfig } from '../config/headerServiceConfig';

// hook
import { localStorage } from '@/hook/localStorageClass';

const store = useStore();
const router = useRouter();
const userStatus = localStorage.getLocalItem('clone_dcard_user_info')
  ? false
  : true;

// v-model
const searchIptModel = ref('');

if (store.state.mSearchWindowModule.searchValue !== '')
  searchIptModel.value = store.state.mSearchWindowModule.searchValue;

// porps
withDefaults(
  defineProps<{
    isShowHeader?: boolean;
    isShowMobileHeader?: boolean;
    isShowMobileNav?: boolean;
    controlHeaderLayout?: string;
  }>(),
  {
    isShowHeader: true,
    isShowMobileHeader: false,
    isShowMobileNav: true
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
  firebase.auth().onAuthStateChanged(function (user: any) {
    !user?.email ? router.push('/login') : '';
  });

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

const goPublicPage = () => {
  router.push('/publicArtical');
};

// // go login page
// const goLoginPage = () => {
//   router.push('login');
// };
</script>

<style lang="less" scoped>
@import './less/dHeader.less';
</style>
