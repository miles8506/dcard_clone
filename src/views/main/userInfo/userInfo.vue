<template>
  <d-header />
  <div class="user_info">
    <div class="userInfo_aside">
      <div class="photo_img">
        <div class="user_img">
          <template v-if="userInfo !== ''">
            <user-man v-bind="userLayoutPC" />
          </template>
          <template v-else>
            <div class="wrap_guest">
              <guest />
            </div>
          </template>
        </div>
        <template v-if="userInfo !== ''">
          <div class="account">{{ userInfo.account }}</div>
        </template>
        <template v-else>
          <div class="account" style="font-size: 24px">訪客</div>
          <div class="regist_text">
            <p>立即啓用 Dcard 完整功能</p>
            <p>點擊登入/註冊</p>
            <div class="btn_wrap">
              <button class="register_btn" @click="loginClick">
                登入/註冊
              </button>
            </div>
          </div>
        </template>
      </div>
      <aside></aside>
    </div>
    <div class="userInfo_m">
      <template v-if="userInfo !== ''">
        <div class="account">
          <span>{{ userInfo.account }}</span>
        </div>
        <div class="user_img">
          <user-man v-bind="userLayoutM" />
        </div>
      </template>
      <template v-else>
        <div class="non_login">
          <div class="non_login_text">
            <p class="guest_text">訪客</p>
            <p class="text">立即啓用 Dcard 完整功能</p>
            <p class="text">點擊登入/註冊</p>
          </div>
          <div class="non_login_btn_wrap">
            <button class="non_login_btn" @click="loginClick">登入/註冊</button>
          </div>
        </div>
      </template>
    </div>
    <main class="user_info_main">
      <p>尚未開發，敬請期待</p>
    </main>
    <div class="logout" @click="logoutClick" v-if="userInfo !== ''">登出</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// component
import DHeader from '@/components/dHeader';
import { userMan, guest } from '@/components/userImg';

// config
import { userLayoutPC, userLayoutM } from './config/userImgConfig';

// utils
import { localStorage } from '@/utils';

// firebase
import { firebase } from '@/service';

// api
import { setQueryApi } from '@/service';
const router = useRouter();
const userInfo = localStorage.getItem('clone_dcard_user_info');

// logout
const logoutClick = async () => {
  try {
    const userAccount = localStorage.getItem('clone_dcard_user_info');
    await firebase.auth().signOut();
    await setQueryApi('user', userAccount.account, userAccount);
    localStorage.setItem('clone_dcard_user_info', '');
    router.push('/main');
  } catch (err: any) {
    throw new Error(err);
  }
};

const loginClick = () => {
  router.push('/login');
};
</script>

<style lang="less" scoped>
@import './less/userInfo.less';
</style>
