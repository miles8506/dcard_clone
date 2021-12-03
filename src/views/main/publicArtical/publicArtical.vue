<template>
  <div class="public_artical">
    <d-header :isShowMobileNav="false" />
    <div class="mask" v-show="isShowMaskStatus" @click="clickMaskBg"></div>
    <div class="public_main">
      <!-- choose sort  -->
      <transition name="show_sort_select">
        <choose-sort-select
          v-if="isShowSortStatus"
          @clickMaskBg="clickMaskBg"
          @emitCurrentItem="emitCurrentItem"
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
          <div class="sort_box">
            {{ currentItem }}
          </div>
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
          <span class="user_name">{{
            localStorage.getItem('clone_dcard_user_info').account
          }}</span>
          <span class="public_date">{{ nowTimerFn(nowTime) }}</span>
        </div>
      </div>
      <div class="public_artical_area">
        <div class="artical_title">
          <textarea placeholder="標題" v-model.trim="titleModel"></textarea>
        </div>
        <div class="artical_main">
          <textarea
            placeholder="內容......"
            v-model.trim="articalModel"
          ></textarea>
        </div>
        <div class="artical_img_wrap" v-show="imgSrc.length > 0">
          <img :src="imgSrc" alt="" />
        </div>
        <div class="control_btns_wrap">
          <commit-artical-bar
            @emitCommentShow="emitCommentShow"
            @emitImgPath="emitImgPath"
            :isShowImgSvg="true"
          >
            <template #default>
              <button
                class="submit_btn"
                :class="{ current_disabled: submitComputed }"
                @click="submitContent"
                :disabled="submitComputed"
              >
                發文
              </button>
            </template>
          </commit-artical-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// component
import dHeader from '@/components/dHeader';
import CommitArticalBar from '@/components/commentArtical/src/cpns/commitArticalBar.vue';
import ChooseSortSelect from './cpns/chooseSortSelect.vue';
import RoleWindow from './cpns/roleWindow.vue';
import { userMan, userWoman } from '@/components/userImg';

// utils
import { nowTimerFn, localStorage, timeStampFn } from '@/utils';

// config
import { userLayoutConfig } from './config/userLayoutConfig';

// api
import { setQueryApi, requestColApi } from '@/service';

// firebase
import { firebase } from '@/service';
const st = firebase.storage();

const store = useStore();
const router = useRouter();

if (
  localStorage.getItem('clone_dcard_user_info') === null ||
  localStorage.getItem('clone_dcard_user_info') === ''
)
  router.push('/login');

const isShowSortStatus = ref<boolean>(false);
const isShowMaskStatus = ref<boolean>(false);
const isShowRoleWindowStatus = ref<boolean>(false);

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

const titleModel = ref('');
const articalModel = ref('');
const imgSrc = ref('');
const imgFile = ref<any>('');
const imgPath = ref('');
const currentItem = ref(store.state.asideModule.immediatelyItem[0]?.boardName);
const nowTime = new Date();
// submit artical object
const articalContent = ref<any>({
  userName: localStorage.getItem('clone_dcard_user_info').account,
  title: '',
  gender: 0,
  content: '',
  imgPath: '',
  timer: nowTimerFn(nowTime),
  timerStamp: timeStampFn(nowTime),
  sort: '',
  // hot: 0,
  commentTotal: 0,
  tagTotal: 0,
  elseUserComment: []
});

// receive emit path
const emitImgPath = async ({ file, path }) => {
  imgFile.value = file;
  // show image to web
  imgSrc.value = URL.createObjectURL(file);
  imgPath.value = path;
};

const emitCommentShow = () => {
  router.push('/main');
};

const submitContent = async () => {
  articalContent.value.title = titleModel.value;
  articalContent.value.content = articalModel.value;
  articalContent.value.sort = currentItem.value;

  if (imgSrc.value) {
    // img process
    const imgStPath = st.ref(`artical/${imgPath.value}`);
    const task = imgStPath.put(imgFile.value);

    // listen img put for server
    task.on(
      'state_changed',
      null,
      (err: any) => {
        throw new Error(err);
      },
      () => {
        // get img server path after put img for server and save in articalContentObj
        const fileRef = st.ref(`artical/${imgPath.value}`);
        fileRef.getDownloadURL().then(async (res) => {
          articalContent.value.imgPath = res;
          setQueryApi('artical', timeStampFn(nowTime), articalContent.value);
          router.push('/main');
        });
      }
    );
  } else {
    setQueryApi('artical', timeStampFn(nowTime), articalContent.value);
    router.push('/main');
  }
};

const submitComputed = computed(() => {
  if (titleModel.value !== '' && articalModel.value !== '') {
    return false;
  } else {
    return true;
  }
});

// 第一次進入或refresh時獲取第一個choose item
const computedCurrentItem = computed(
  () => store.state.asideModule.immediatelyItem[0]?.boardName
);
watch(computedCurrentItem, (itemName: string) => {
  currentItem.value = itemName;
});

// emit current item for change currentitem
const emitCurrentItem = (itemName: string) => {
  currentItem.value = itemName;
};
</script>

<style lang="less" scoped>
@import './less/publicArtical.less';
</style>
