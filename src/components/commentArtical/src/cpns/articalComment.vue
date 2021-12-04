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
        <habit-item @emitTimeStamp="emitTimeStamp" />
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
import { computed, defineEmits } from 'vue';
import { useStore } from '@/store';

// component
import CommentItem from './commentItem.vue';
import HabitItem from './habitItem.vue';

// config
import { userLayout } from '../../config/userIconType';

// testconfig
import { articalListConfig } from '@/views/main/artical/config/listTestConfig';

const store = useStore();
const emits = defineEmits(['emitTimeStamp']);

// normal comment
const commentList = computed(
  () => store.state.commentArticalModule.elseUserComment
);

// hot comment
const hotList = computed(() => {
  // deep copy
  let otherList: any[] = JSON.parse(
    JSON.stringify(store.state.commentArticalModule.elseUserComment)
  );
  let hotRes = [];
  if (otherList.length > 0)
    // sort
    hotRes = otherList.sort((a, b) => b.likeTotal - a.likeTotal);
  return hotRes;
});

const commentLength = computed(
  () => store.state.commentArticalModule.elseUserComment.length
);

// emit habit artical timestamp (from habitItem cpn)
const emitTimeStamp = (timeStamp: number) => {
  emits('emitTimeStamp', timeStamp);
};
</script>

<style lang="less" scoped>
@import '../less/articalComment.less';
</style>
