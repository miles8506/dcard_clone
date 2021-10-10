<template>
  <!-- <div class="mask"></div> -->
  <d-header></d-header>
  <div class="main">
    <d-aside></d-aside>
    <artical-area />
    <d-adv />
  </div>
</template>

<script setup lang="ts">
// components
import dHeader from '@/components/dHeader';
import dAside from '@/components/dAside';
import dAdv from '@/components/dAdv';
import ArticalArea from '@/views/main/artical/articalArea.vue';
// import {} from 'vue';

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
// .mask {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 99999;
//   background-color: rgba(0, 0, 0, 0.5);
// }
</style>
