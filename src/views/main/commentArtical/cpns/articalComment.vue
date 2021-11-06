<template>
  <div class="artical_comment">
    <!-- hot comment -->
    <div class="hot_comment_area">
      <h6 class="hot_comment_title">熱門留言</h6>
      <div class="hot_comment_wrap">
        <comment-item :commentItem="filterHotComment" v-bind="userLayout" />
      </div>
    </div>
    <!-- habit artical -->
    <div class="habit_artical_area">
      <h6 class="habit_artical_title">你可能感興趣的文章</h6>
      <div class="habit_artical_wrap">
        <habit-item :habitArticalList="habitArticalList" />
      </div>
    </div>
    <!-- all comment -->
    <div class="all_comment_area">
      <h6 class="all_comment_title">共有 {{ commentLength }} 則留言</h6>
      <div class="comment_item_wrap">
        <comment-item :commentItem="commentItem" v-bind="userLayout" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// component
import CommentItem from './commentItem.vue';
import HabitItem from './habitItem.vue';

// config
import { userLayout } from '../config/userIconType';

// testconfig
import { commentItem } from '../config/commentItme';
import { articalListConfig } from '../../artical/config/listTestConfig';

// 總共幾筆commentItem
const commentLength = commentItem.length;

// filter hot comment (top3)
const filterHotComment = commentItem
  .sort((a: any, b: any) => b.likeTol - a.likeTol)
  .slice(0, 3);

// habit artical
const habitArticalList = articalListConfig.slice(0, 8);
</script>

<style lang="less" scoped>
@import '../less/articalComment.less';
</style>
