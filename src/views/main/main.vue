<template>
  <transition name="qrcode_window">
    <div class="mask" v-show="$store.state.isShowMask">
      <qrcode-window v-show="$store.state.isShowLargeQrcode" />
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
    </div>
  </transition>
  <d-header></d-header>
  <div class="main">
    <d-aside></d-aside>
    <artical-area />
    <d-adv />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
// components
import dHeader from '@/components/dHeader';
import dAside from '@/components/dAside';
import dAdv from '@/components/dAdv';
import QrcodeWindow from '@/components/qrocdeWindow';
import ArticalArea from '@/views/main/artical/articalArea.vue';
import CommentArtical from '@/views/main/commentArtical/commentArtical.vue';
import ScrollYBar from '@/views/main/commentArtical/cpns/scrollYBar.vue';
// firebase
import { firebase } from '@/service';

// // utils:localstorage
import { localStorage } from '@/utils';

const store = useStore();
firebase.auth().onAuthStateChanged((user: any) => {
  if (user) {
    const mail: string = user.email;
    localStorage.setItem('cloned_mail', mail);
    store.commit('setIsshowLoginHeader', false);
  } else {
    localStorage.setItem('cloned_mail', '');
    store.commit('setIsshowLoginHeader', true);
  }
});

// 上傳圖片
// const test = (e: any) => {
//   const file = e.target.files[0]; // 獲取到上傳圖片file的整個對象
//   const path = file.name; // 將file的名稱當成路徑
//   const res = st.ref(`img/${path}`); // 這裡的ref是你要存放的路徑
//   res.put(file); //最後將存放的路徑夾帶著file對象put到storage中
// };

// // 下載圖片
// const imgFoo = ref(); // 1.獲取img的ref
// const clickbtn = () => {
//   const fileRef = st.ref( // 2.獲取到圖片路徑
//     `img/17834017_1701223456556270_2154160913691048631_o.jpg`
//   );
//   fileRef.getDownloadURL().then((res) => { //3. 獲取到圖片路徑後去storage中找出該路徑的url，並將res賦予到img.src上
//     imgFoo.value.src = res;
//   });
// };

// 刪除圖片
// const clickbtn = () => {
//   const filePath = st.ref('img/截圖 2021-03-09 上午9.22.02.png'); // 1.獲取圖片路徑
//   filePath
//     .delete() // 獲取圖片路徑後調用刪除function，並回傳promise
//     .then((res) => {
//       console.log(res);
//       console.log('刪除成功');
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log('刪除失敗');
//     });
// };
</script>

<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;

  .d_aside {
    width: 208px;
    height: 100vh;
  }

  .artical_area {
    flex: 1;
    min-width: 728px;
    // height: 100vh;
  }

  .d_adv {
    width: 300px;
    height: 100vh;
  }
}

// mask
.mask {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
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
</style>
