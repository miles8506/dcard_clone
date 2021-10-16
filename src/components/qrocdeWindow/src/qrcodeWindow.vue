<template>
  <div class="qrcode_window">
    <h4 class="title_text">
      立即掃描下載 Dcard App！
      <button class="close_window" @click="clickClose">x</button>
    </h4>
    <div class="wrap">
      <div class="qrcode_img">
        <img src="@/assets/img/qrcode.png" />
      </div>
      <div class="download_store">
        <img src="@/assets/img/googleplay.png" />
        <img src="@/assets/img/iosstore.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();
const clickClose = () => {
  const body = document.body;
  body.style.overflowY = 'scroll';
  store.commit('setShowLargeQrcode');
  store.commit('setShowMask');
};
</script>

<style lang="less" scoped>
@import './less/qrcodeWindow.less';
</style>
