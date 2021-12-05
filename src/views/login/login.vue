<template>
  <div class="login">
    <d-header :isShowHeader="false" key="loginHeader" />
    <div class="login_main">
      <login-adv />
      <login-form />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// components
import dHeader from '@/components/dHeader';
import LoginAdv from './cpns/loginAdv.vue';
import LoginForm from './cpns/loginForm.vue';

// servie
import { firebase } from '@/service';

const router = useRouter();

// 防呆
firebase.auth().onAuthStateChanged(function (user) {
  if (user?.email) return router.replace('/main');
});
</script>

<style lang="less" scoped>
@import './less/login.less';
</style>
