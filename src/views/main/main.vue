<template>
  <!-- <d-header></d-header> -->
  <div class="main">
    main
    <!-- <d-aside></d-aside> -->
  </div>
  <!-- <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
    <path
      d="M18.95 3H5.05A2.04 2.04 0 003 5.04v13.91A2.04 2.04 0 005.05 21h13.9A2.05 2.05 0 0021 18.96V5.03A2.05 2.05 0 0018.95 3zM6.68 17.73a1.64 1.64 0 111.64-1.64 1.64 1.64 0 01-1.64 1.64zm0-4.1A1.64 1.64 0 118.32 12a1.64 1.64 0 01-1.64 1.64zm0-4.08A1.64 1.64 0 118.32 7.9a1.64 1.64 0 01-1.64 1.64zm11.86 6.77a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.46a1 1 0 011-1h6.6a1 1 0 011 1zm0-4.1a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.45a1 1 0 011-1h6.6a1 1 0 011 1zm0-4.08a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.46a1 1 0 011-1h6.6a1 1 0 011 1z"
    ></path>
  </svg> -->
</template>

<script setup lang="ts">
// import dHeader from '@/components/dHeader';
// import dAside from '@/components/dAside';
import { db } from '@/service/firebaseConfig';
function search() {
  db.collection('test')
    .get()
    .then((doc: any) => {
      doc.forEach((item: any) => {
        console.log(item.data());
        // console.log(item.id, item.data()); //item.data可以獲取該集合的所有內容  // item.id就是每個文件在數據庫唯一標示
      });
    })
    .catch((err: any) => {
      console.log(err);
    });
}
search();

// import axios from 'axios';
// const createApi = axios.create({
//   baseURL: 'http://127.0.0.1:5000',
//   timeout: 5000
// });
// createApi
//   .request({
//     method: 'GET',
//     url: '/goods'
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
</script>

<style lang="less" scoped>
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 20px 0px 0px;
}
</style>
