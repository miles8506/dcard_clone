<template>
  <div class="comment_artical">
    <div class="artical_hd">
      <div class="hd_left">
        <div class="user_icon">
          <user-man v-bind="userLayout" />
          <user-woman v-bind="userLayout" />
        </div>
        <div class="title">我是title</div>
      </div>
      <div class="hd_right">
        <div class="close">X</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// component
import { userMan, userWoman } from '@/components/userImg';

// config
import { userLayout } from './config/userIconType';

// testdata
import { articalContent } from './config/test.config';
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
