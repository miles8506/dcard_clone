<template>
  <div class="login">
    <d-header :isShowHeader="false" />
    <div class="login_main">
      <login-adv />
      <login-form />
    </div>
  </div>
</template>

<script setup lang="ts">
// components
import dHeader from '@/components/dHeader';
import LoginAdv from './cpns/loginAdv.vue';
import LoginForm from './cpns/loginForm.vue';
</script>

<style lang="less" scoped>
@import './less/login.less';
</style>
