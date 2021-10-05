<template>
  <div class="sort_area">
    <ul>
      <template
        v-for="item in $store.state.asideModule.asideItem"
        :key="item.sortName"
      >
        <li class="sort_item">
          <span class="svn_box">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              width="24"
              height="24"
              style="fill: #fff"
            >
              <path :d="item.path"></path>
            </svg>
          </span>
          <span class="item_text">{{ item.sortName }}</span>
        </li>
      </template>
      <li class="sort_item">
        <span class="game_box"> </span>
        <span class="item_text">遊戲專區</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../less/sortArea.less';
</style>
