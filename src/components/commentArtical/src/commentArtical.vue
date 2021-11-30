<template>
  <div class="comment_artical" ref="commentArticalRef">
    <artical-header :articalInfo="filterArtical" />
    <artical-body :articalInfo="filterArtical" />
    <artical-comment />
    <comment-area @emitCommentShow="emitCommentShow" v-if="isShowComment" />
    <comment-text v-else @emitCommentShow="emitCommentShow" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@/store';
// component
import ArticalHeader from './cpns/articalHeader.vue';
import ArticalBody from './cpns/articalBody.vue';
import ArticalComment from './cpns/articalComment.vue';
import CommentArea from './cpns/commentArea.vue';
import CommentText from './cpns/commentText.vue';

// firebase
import { requestColApi } from '@/service';

const store = useStore();

const isShowComment = ref<boolean>(true);
const emitCommentShow = () => {
  isShowComment.value = !isShowComment.value;
};

// debounce variance
let timer: any = null;
// scrollBar
const commentArticalRef = ref<HTMLElement>();
onMounted(() => {
  commentArticalRef.value?.addEventListener('scroll', () => {
    if (!store.state.isShowScroll) store.commit('setShowScroll', true);
    // debounce
    function debounceFn() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        store.commit('setShowScroll', false);
      }, 800);
    }
    debounceFn();

    // computed window heigh
    const windowHeighRes =
      commentArticalRef.value!.scrollHeight -
      commentArticalRef.value!.offsetHeight;
    const averageScroll = (
      (commentArticalRef.value!.scrollTop / windowHeighRes) *
      100
    ).toFixed(2);
    store.commit('setScrollTop', averageScroll);
  });
});

// get current artical data
const currentArticalStamp = store.state.commentArticalModule.articalTimeStamp;
const filterArtical = ref();
async function getArticalFn() {
  const res: any = await requestColApi('artical');
  const resFilter = res.filter(
    (item: any) => item.data().timerStamp === currentArticalStamp
  );
  filterArtical.value = resFilter[0].data();
  store.commit(
    'commentArticalModule/setOtherComment',
    filterArtical.value.elseUserComment
  );
  store.commit(
    'commentArticalModule/setArticalAuthor',
    filterArtical.value.userName
  );
}
getArticalFn();
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
