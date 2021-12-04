<template>
  <transition name="qrcode_window">
    <div class="mask" v-show="$store.state.isShowMask" ref="maskRef">
      <qrcode-window v-show="$store.state.isShowLargeQrcode" />
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
    </div>
  </transition>
  <!-- <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" /> -->

  <d-header key="mainHeader"></d-header>
  <m-aside v-if="$store.state.isShowMAside" />
  <!-- <m-aside /> -->
  <div class="main">
    <d-aside></d-aside>
    <artical-area />
    <d-adv />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from '@/store';

// components
import dHeader from '@/components/dHeader';
import dAside from '@/components/dAside';
import dAdv from '@/components/dAdv';
import QrcodeWindow from '@/components/qrocdeWindow';
import ArticalArea from '@/views/main/artical/articalArea.vue';
import CommentArtical from '@/components/commentArtical';
import ScrollYBar from '@/components/commentArtical/src/cpns/scrollYBar.vue';
import MAside from '@/views/main/mAside/mAside.vue';

// utils
import { localStorage } from '@/utils';

const store = useStore();
const userInfo = localStorage.getItem('clone_dcard_user_info');
const maskRef = ref<HTMLLIElement>();

// init scroll
const body = document.body;
body.style.overflowY = 'scroll';

// debounce 控制user_m icon 是否show的狀態(for window resizing)
let resizeFlag: any = null;
window.addEventListener('resize', () => {
  if (resizeFlag) clearTimeout(resizeFlag);
  resizeFlag = setTimeout(() => {
    if (window.innerWidth > 767 && userInfo == '') {
      store.commit('setShowUserMIcon', false);
    } else {
      store.commit('setShowUserMIcon', true);
    }
  }, 500);
});

// 每次點擊文章後確認 y = 0
const getArticalTimeStamp = computed(
  () => store.getters['commentArticalModule/getArticalTimeStamp']
);
watch(getArticalTimeStamp, () => {
  maskRef.value?.scroll(0, 0);
});
</script>

<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1280px;
  margin: 48px auto 0;

  .d_aside {
    width: 208px;
    height: 100vh;
  }

  .artical_area {
    flex: 1;
    min-width: 728px;
    // height: 100vh;
  }

  .search_area {
    flex: 1;
    min-width: 728px;
  }

  .d_adv {
    width: 300px;
    height: 100vh;
  }
}

// mask
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
}

.qrcode_window-enter-active,
.qrcode_window-leave-active {
  transition: opacity 0.3s linear;
}

.qrcode_window-enter-from,
.qrcode_window-leave-to {
  opacity: 0;
}

.qrcode_window-enter-to,
.qrcode_window-leave-from {
  opacity: 1;
}

// media 992
@media screen and (max-width: 767px) {
  .main {
    max-width: initial;
    width: 100%;
    .artical_area {
      min-width: initial;
      width: 100%;
    }
  }
  .d_aside,
  .d_adv {
    display: none;
  }
}
</style>
