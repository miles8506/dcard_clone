<template>
  <div class="filter_search_body">
    <div class="filter_bar">
      <!-- <div class="includes_wrap"> -->
      <!-- <label for="includes_ipt bar_item"> -->
      <!-- <input type="checkbox" class="bar_item" /> -->
      <div class="all_artical_wrap bar_item">
        <div class="checkbox_fake">
          <div class="checked_box"></div>
        </div>
        <span class="includes_text">含內文</span>
      </div>
      <!-- </label> -->
      <!-- </div> -->
      <div class="first_issue bar_item">最新發佈</div>
      <div class="time_search bar_item">不限時間</div>
    </div>
    <div class="filter_list">filter</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../less/filterSearchBody.less';
</style>
