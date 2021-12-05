<template>
  <div class="login_form">
    <div class="form_wrap">
      <div class="main_login">
        <button class="else_login_btn fb_btn" @click="loginFB">
          <span class="else_login_bgc fb_bgc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M100 0C44.77 0 0 44.96 0 100.42c0 49.74 36.05 90.93 83.32 98.9v-77.95H59.2V93.3h24.12V72.63c0-24 14.6-37.08 35.93-37.08 10.21 0 18.99.76 21.54 1.1v25.08l-14.8.01c-11.59 0-13.83 5.53-13.83 13.65V93.3h27.67l-3.6 28.05h-24.07V200c49.48-6.05 87.84-48.29 87.84-99.61C200 44.96 155.23 0 100 0z"
              ></path>
            </svg>
          </span>
          <span class="text">Facebook 註冊 / 登入</span>
        </button>
        <button class="else_login_btn gg_btn" @click="googleLogin">
          <span class="else_login_bgc gg_bgc">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#FBBB00"
                d="M5.8 14.3l-.8 3H2A11.2 11.2 0 012 6.8l2.5.5 1.1 2.5a6.6 6.6 0 00-.4 2.2c0 .8.2 1.6.5 2.3"
              ></path>
              <path
                fill="#518EF8"
                d="M23 9.9l.2 2.1a11.2 11.2 0 01-4.2 8.7l-3.2-.1-.4-2.9a6.6 6.6 0 002.8-3.4h-6V10H23z"
              ></path>
              <path
                fill="#28B446"
                d="M19 20.7a11.2 11.2 0 01-16.9-3.4l3.7-3a6.6 6.6 0 006.2 4.4 6.6 6.6 0 003.4-1l3.6 3z"
              ></path>
              <path
                fill="#F14336"
                d="M19.2 3.4l-3.7 3a6.7 6.7 0 00-9.8 3.4l-3.6-3a11.2 11.2 0 0117-3.4"
              ></path>
            </svg>
          </span>
          <span class="text">Google 註冊 / 登入</span>
        </button>
        <div class="line">
          <hr />
          <span class="or_box">或</span>
          <hr />
        </div>
        <form class="form_wrpa">
          <div class="email_wrap">
            <div class="email_hd">
              <label for="email_ipt" class="email_text">常用信箱</label>
              <span class="phone_text">使用手機登入</span>
            </div>
            <div class="email">
              <input
                type="text"
                id="email_ipt"
                placeholder="輸入信箱"
                v-model.trim="vmodelAccount"
              />
              <div class="alarm_text" v-show="isShowMailAlarm">
                {{ accAlarmText }}
              </div>
            </div>
          </div>
          <div class="psw_wrap">
            <div class="psw_hd">
              <label for="psw_ipt">密碼</label>
            </div>
            <div class="psw">
              <div class="psw_box">
                <input
                  type="password"
                  id="psw_ipt"
                  placeholder="輸入密碼（英文或數字6-12碼）"
                  ref="pswIptRef"
                  v-model.trim="vmodelPsw"
                />
                <span
                  class="svg_wrap"
                  :class="{ current_fill: currentFill }"
                  @click="showPwdIpt"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="alarm_text" v-show="isShowPswAlarm">
                {{ pswAlarmText }}
              </div>
            </div>
          </div>
          <button class="submit_btn" @click="registerClick" type="button">
            註冊 / 登入
          </button>
        </form>
        <div class="alert_text">
          註冊/登入即代表您同意遵守
          <span class="alert_link">Dcard 使用協議</span>
        </div>
      </div>
      <div class="store_box">
        <div class="store_wrap">
          <img src="@/assets/img/googleplay.png" />
        </div>
        <div class="store_wrap">
          <img src="@/assets/img/iosstore.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// hook
import { otherLoginFn } from '../hook';
import { localStorage } from '@/hook/localStorageClass';

// api
import { requestColApi, setQueryApi } from '@/service';

// servie
import { firebase } from '@/service';

// show&hide password
const pswIptRef = ref();
const currentFill = ref(false);
const showPwdIpt = () => {
  if (pswIptRef.value.type === 'password') {
    pswIptRef.value.type = 'text';
    currentFill.value = !currentFill.value;
  } else {
    pswIptRef.value.type = 'password';
    currentFill.value = !currentFill.value;
  }
};

// v-model account&psw and registeruser&login process
const vmodelAccount = ref('');
const vmodelPsw = ref('');

const isShowMailAlarm = ref<boolean>(false);
const isShowPswAlarm = ref<boolean>(false);

let accAlarmText = ref<string>('');
let pswAlarmText = ref<string>('');

// normal login
const registerClick = async (e: any) => {
  e.preventDefault();
  const regAccount = /^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
  const regAccountRes = regAccount.test(vmodelAccount.value);
  const regPsw = /[0-9 a-z A-Z]{6,12}/;
  const regPswRes = regPsw.test(vmodelPsw.value);

  // init alarm status
  isShowMailAlarm.value = false;
  isShowPswAlarm.value = false;
  if (regAccountRes && regPswRes) {
    try {
      // login
      const loginRes = await firebase
        .auth()
        .signInWithEmailAndPassword(vmodelAccount.value, vmodelPsw.value);

      const userList: any = await requestColApi('user');
      const filterResult = userList.filter(
        (item: any) => item.data().account === loginRes?.user?.email
      );
      const userInfo = filterResult[0].data();

      loginRes.user
        ? localStorage.setLocalItem('clone_dcard_user_info', userInfo)
        : localStorage.setLocalItem('clone_dcard_user_info', '');
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        try {
          // register
          const registerRes = await firebase
            .auth()
            .createUserWithEmailAndPassword(
              vmodelAccount.value,
              vmodelPsw.value
            );

          // 將新註冊的user添加info
          await setQueryApi('user', registerRes.user!.email, {
            account: registerRes.user!.email,
            artical: [],
            comment: [],
            likeArtical: [],
            likeComment: []
          });
          console.log('123');

          const updateUserList: any = await requestColApi('user');
          console.log(updateUserList);

          const filterResult = updateUserList.filter(
            (item: any) => item.data().account === registerRes?.user?.email
          );
          const userInfo = filterResult[0].data();

          registerRes.user
            ? localStorage.setLocalItem('clone_dcard_user_info', userInfo)
            : localStorage.setLocalItem('clone_dcard_user_info', '');
        } catch (err: any) {
          throw new Error(err);
        }
      } else if (err.code === 'auth/wrong-password') {
        pswAlarmText.value = '請重新輸入密碼';
      }
    }
  } else {
    if (!regAccountRes && !regPswRes) {
      accAlarmText.value = '請確認帳號格式是否正確';
      pswAlarmText.value = '請確認密碼格式是否正確';
      isShowMailAlarm.value = true;
      isShowPswAlarm.value = true;
    } else if (!regAccountRes) {
      accAlarmText.value = '請確認帳號格式是否正確';
      isShowMailAlarm.value = true;
    } else if (!regPswRes) {
      pswAlarmText.value = '請確認密碼格式是否正確';
      isShowPswAlarm.value = true;
    }
  }
};

// google login
const googleLogin = () => {
  otherLoginFn('google');
};

// facebook login
const loginFB = () => {
  otherLoginFn('facebook');
};
</script>

<style lang="less" scoped>
@import '../less/loginForm.less';
</style>
