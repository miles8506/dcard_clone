<template>
  <transition name="qrcode_window">
    <div class="mask" v-show="$store.state.isShowMask" ref="maskRef">
      <qrcode-window v-show="$store.state.isShowLargeQrcode" />
      <comment-artical v-if="$store.state.commentArticalModule.isShowStatus" />
      <scroll-y-bar ref="scrollYBarRef" />
    </div>
  </transition>
  <d-header key="mainHeader" ref="dHeaderRef"></d-header>
  <m-aside v-show="$store.state.isShowMAside" />
  <!-- <m-aside /> -->
  <div class="main">
    <d-aside></d-aside>
    <artical-area />
    <d-adv />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
const dHeaderRef = ref<any>();

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
  // console.log(dHeaderRef.value.userIconStatus);
});

// const maskRef = ref<any>();
// onMounted(() => {
//   const mask = document.querySelector('.mask');
//   mask.style.height = `${window.innerHeight}px`;
//   console.log('ok');

// });

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

// change current component
// const navBarIndex = ref<number>(0);
// const navBarCpnName: any = [];
// itemNameArr.forEach((item: InavBarType) => {
//   navBarCpnName.push(item.cpnName);
// });
// const currentShowCpn = shallowRef<defineComponent>(navBarCpnName[0]);
// const navbarIndex = (index: number) => {
//   currentShowCpn.value = navBarCpnName[index];
//   navBarIndex.value = index;
// };

// // search recode
// const recodeRes = computed(() => store.state.mSearchWindowModule.searchSortArr);

// // receive data emit & props data
// const dataList = ref([]);
// const boardList = ref([]);
// const emitCpnsData = (dataListRes: any, boardListRes?: any) => {
//   dataList.value = dataListRes;
//   boardList.value = boardListRes;
// };
// watch(
//   () => dataList.value,
//   () => {
//     if (dataList.value.length === 0) {
//       store.commit('mSearchWindowModule/setJudgeListLen', false);
//     } else {
//       store.commit('mSearchWindowModule/setJudgeListLen', true);
//     }
//   }
// );

// emit select item
// const selectItems = ref<any>({});
// const issueCurrentIndex = ref(0);
// const timerCurrentIndex = ref(0);
// const emitNewIssue = ({ items, itemsName }) => {
//   // selectItems.value = [...items];
//   selectItems.value.selectItems = items;
//   selectItems.value.itemsName = itemsName;
// };
// const emitTimer = ({ items, itemsName }) => {
//   selectItems.value.selectItems = items;
//   selectItems.value.itemsName = itemsName;
// };
// const emitCurrentIndex = ({ index, selectName }) => {
//   selectName === 'newIssue'
//     ? (issueCurrentIndex.value = index)
//     : (timerCurrentIndex.value = index);
// };

// 獲取一個collection
// const ref = db.collection('artical');
// ref
//   .get()
//   .then((doc: any) => {
//     doc.docs.forEach((item: any) => {
//       console.log(item.data());
//     });
//     // console.log(doc.docs);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
// const res = await requestColApi('artical');
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
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
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
