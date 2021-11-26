<template>
  <div class="public_artical">
    <d-header :isShowMobileNav="false" />
    <div class="mask" v-show="isShowMaskStatus" @click="clickMaskBg"></div>
    <div class="public_main">
      <!-- choose sort  -->
      <transition name="show_sort_select">
        <choose-sort-select
          v-show="isShowSortStatus"
          :boardList="boardList"
          @clickMaskBg="clickMaskBg"
        />
      </transition>
      <!-- choose sort  -->
      <!-- role window -->
      <transition name="show_role_window">
        <role-window
          v-show="isShowRoleWindowStatus"
          @emitRoleWindowStatus="emitRoleWindowStatus"
        />
      </transition>
      <!-- role window -->
      <div class="public_nav">
        <span class="nav_item">發表文章</span>
      </div>
      <div class="public_bar">
        <div class="choose_wrap" @click="isShowSortClick">
          <div class="sort_box">{{ boardList[currentIndex].boardName }}</div>
          <div class="choose_icon">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              width="18"
              height="18"
              role="img"
              aria-hidden="true"
              fill="rgba(0,0,0,0.5)"
            >
              <path
                d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
        </div>
        <div class="role_wrap">
          <span class="role_icon">
            <svg
              viewBox="0 0 16 16"
              focusable="false"
              width="15"
              height="15"
              style="fill: rgba(0, 0, 0, 0.25)"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M6.75 7v5.5a1 1 0 001 1h.5a1 1 0 001-1V7a1 1 0 00-1-1h-.5a1 1 0 00-1 1M8 5a1.25 1.25 0 100-2.5A1.25 1.25 0 008 5M.5 8A7.5 7.5 0 018 .5 7.5 7.5 0 0115.5 8 7.5 7.5 0 018 15.5 7.5 7.5 0 01.5 8"
              ></path>
            </svg>
          </span>
          <span class="role_text" @click="showRoleWindow">發文規則</span>
        </div>
      </div>
      <div class="user_wrap">
        <user-man v-bind="userLayoutConfig" />
        <div class="user_info">
          <span class="user_name">匿名</span>
          <span class="public_date">2021/11/11 12:12:12</span>
        </div>
      </div>
      <div class="public_artical_area">
        <div class="artical_title">
          <textarea placeholder="標題"></textarea>
        </div>
        <div class="artical_main">
          <textarea placeholder="內容......"></textarea>
        </div>
        <div class="artical_img_wrap">
          <img src="" alt="" />
        </div>
        <div class="control_btns_wrap">
          <commit-artical-bar
            @emitCommentShow="emitCommentShow"
            :isShowImgSvg="true"
          >
            <template #default>
              <button class="submit_btn" @click="submitContent">發文</button>
            </template>
          </commit-artical-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// component
import dHeader from '@/components/dHeader';
import CommitArticalBar from '@/components/commentArtical/src/cpns/commitArticalBar.vue';
import ChooseSortSelect from './cpns/chooseSortSelect.vue';
import RoleWindow from './cpns/roleWindow.vue';
import { userMan, userWoman } from '@/components/userImg';

// config
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';
import { userLayoutConfig } from './config/userLayoutConfig';

const isShowSortStatus = ref<boolean>(false);
const isShowMaskStatus = ref<boolean>(false);
const isShowRoleWindowStatus = ref<boolean>(false);
const currentIndex = ref<number>(0);

const isShowSortClick = () => {
  isShowMaskStatus.value = !isShowMaskStatus.value;
  isShowSortStatus.value = !isShowSortStatus.value;
};

const clickMaskBg = () => {
  isShowMaskStatus.value = !isShowMaskStatus.value;
  isShowSortStatus.value
    ? (isShowSortStatus.value = !isShowSortStatus.value)
    : '';
  isShowRoleWindowStatus.value
    ? (isShowRoleWindowStatus.value = !isShowRoleWindowStatus.value)
    : '';
};

const showRoleWindow = () => {
  isShowMaskStatus.value = !isShowMaskStatus.value;
  isShowRoleWindowStatus.value = !isShowRoleWindowStatus.value;
  const body = document.body;
  body.style.overflowY = 'hidden';
};

const emitRoleWindowStatus = () => {
  isShowRoleWindowStatus.value = !isShowRoleWindowStatus.value;
  isShowMaskStatus.value = !isShowMaskStatus.value;
  const body = document.body;
  body.style.overflowY = 'scroll';
};

const emitCommentShow = () => {
  console.log(123);
};

const submitContent = () => {
  console.log(123);
};
</script>

<style lang="less" scoped>
@import './less/publicArtical.less';
</style>
