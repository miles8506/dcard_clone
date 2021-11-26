<template>
  <div class="select_content">
    <ul>
      <template v-for="(item, index) in selectContent" :key="item.name">
        <li class="select_item" @click="clickSortItem(index, item.name)">
          <div
            v-show="showSvg"
            class="svg_icon_wrap"
            :class="{ current_icon_color: currentSelectIndex == index }"
          >
            <svg
              :viewBox="item.viewBox"
              focusable="flase"
              role="img"
              aria-hidden="true"
            >
              <path :d="item.svgPath"></path>
            </svg>
          </div>
          <div class="context">
            <span
              :class="{
                current_color:
                  currentSelectIndex == index && pointColor === true
              }"
            >
              {{ item.name }}
            </span>
          </div>
          <div class="svg_check_wrap" v-show="showSvg">
            <svg
              viewBox="0 0 24 24"
              focusable="flase"
              role="img"
              aria-hidden="true"
              v-show="currentSelectIndex == index"
            >
              <path
                d="M9 16.17L5.53 12.7a1 1 0 00-1.4 0h-.01a1 1 0 000 1.41L8.3 18.3a1 1 0 001.4 0L20.3 7.7a1 1 0 000-1.41 1 1 0 00-1.41 0z"
              ></path>
            </svg>
          </div>
        </li>
      </template>
      <li
        class="select_item"
        v-if="!$store.state.isShowLoginHeader && showLogin"
        @click="logout"
      >
        <div class="context" @click="logoutClick">
          <span> 登出 </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, defineEmits } from 'vue';

// firebase
import { firebase } from '@/service';

// type
import { IcontentKey } from '@/base-ui/selectSlide';

// props
const props = withDefaults(
  defineProps<{
    selectContent: IcontentKey;
    showSvg: boolean;
    showLogin: boolean;
    pointColor: boolean;
    emitStatus?: boolean;
  }>(),
  {
    emitStatus: false
  }
);

// emit
const emits = defineEmits(['emitArticalType']);

// show currentIndex (to articalNav_cpn)
const currentSelectIndex = ref<number>(0);
const clickSortItem = (index: number, name: string) => {
  if (props.emitStatus) {
    currentSelectIndex.value = index;
    emits('emitArticalType', name);
  }
};

// logout
const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      throw new Error(error);
    });
};
</script>

<style lang="less" scoped>
@import '~@/base-ui/selectSlide/src/less/selectSlide.less';
</style>
