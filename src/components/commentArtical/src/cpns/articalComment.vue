<template>
  <div class="artical_comment">
    <!-- hot comment -->
    <div class="hot_comment_area">
      <h6 class="hot_comment_title">熱門留言</h6>
      <div class="hot_comment_wrap">
        <comment-item :commentItem="hotList" v-bind="userLayout" />
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
        <comment-item :commentItem="commentList" v-bind="userLayout" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';

// component
import CommentItem from './commentItem.vue';
import HabitItem from './habitItem.vue';

// config
import { userLayout } from '../../config/userIconType';

// testconfig
import { articalListConfig } from '@/views/main/artical/config/listTestConfig';

const store = useStore();

// withDefaults(
//   defineProps<{
//     articalInfo: any;
//   }>(),
//   {
//     articalInfo: {}
//   }
// );

// normal comment
const commentList = computed(
  () => store.state.commentArticalModule.elseUserComment
);

// hot comment
const hotList = computed(() => {
  let otherList: any[] = [...store.state.commentArticalModule.elseUserComment];
  const hotRes = otherList.sort((a, b) => b.likeTotal - a.likeTotal);
  return hotRes.slice(0, 3);
});

const commentLength = computed(
  () => store.state.commentArticalModule.elseUserComment.length
);
// 總共幾筆commentItem
// const commentLength = commentItem.length;

// filter hot comment (top3)
// const filterHotComment = commentItem
//   .sort((a: any, b: any) => b.likeTol - a.likeTol)
//   .slice(0, 3);

// habit artical
const habitArticalList = articalListConfig.slice(0, 8);
</script>

<style lang="less" scoped>
@import '../less/articalComment.less';
</style>
