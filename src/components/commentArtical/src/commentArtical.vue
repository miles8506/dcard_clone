<template>
  <div class="comment_artical" ref="commentArticalRef">
    <artical-header :articalInfo="filterArtical" />
    <artical-body :articalInfo="filterArtical" @emitTagTotal="emitTagTotal" />
    <artical-comment @emitTimeStamp="emitTimeStamp" />
    <comment-area @emitCommentShow="emitCommentShow" v-if="isShowComment" />
    <comment-text v-else @emitCommentShow="emitCommentShow" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
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
const filterArtical = ref();
async function getArticalFn() {
  const currentArticalStamp = store.state.commentArticalModule.articalTimeStamp;
  const res: any = await requestColApi('artical');
  const resFilter = res.filter(
    (item: any) => item.data().timerStamp === currentArticalStamp
  );
  filterArtical.value = resFilter[0].data();
  store.commit(
    'commentArticalModule/setOtherComment',
    filterArtical.value.elseUserComment
  );
}
getArticalFn();

// emit for commentBody
const emitTagTotal = (flag: boolean) => {
  flag ? filterArtical.value.tagTotal++ : filterArtical.value.tagTotal--;
};

// emit habit artical timestamp (from articalcomment cpn)
const emitTimeStamp = (timeStamp: number) => {
  store.commit('commentArticalModule/setTimeStamp', timeStamp);
  filterArtical.value = '';
  getArticalFn();
};

// listen click like comment callback
const getComment = computed(
  () => store.getters['commentArticalModule/getLikeComment']
);
watch(getComment, (newData) => {
  const commentTimeStamp: number = newData.timeStamp;
  const computeStatus: string = newData.compute;
  const commentRes = filterArtical.value.elseUserComment.filter(
    (item) => item.timeStamp === commentTimeStamp
  )[0];
  computeStatus === 'add' ? commentRes.likeTotal++ : commentRes.likeTotal--;
});
</script>

<style lang="less" scoped>
@import './less/commentArtical.less';
</style>
