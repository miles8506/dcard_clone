<template>
  <template v-for="(item, index) in habitAticalList" :key="index">
    <div class="habit_item" @click="clickHabitItem(item.timerStamp)">
      <div class="left_info">
        <div class="habit_title">{{ item.title }}</div>
        <div class="habit_info">
          <span class="habit_sort">心情 {{ item.sort }} ． </span>
          <span class="habit_response">回應 {{ item.commentTotal }}</span>
        </div>
      </div>
      <div class="right_img">
        <template v-if="item.imgPath !== ''">
          <img :src="item.imgPath" />
        </template>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { requestColApi } from '@/service';

const emits = defineEmits(['emitTimeStamp']);

// suggest random artical item
const habitAticalList = ref<any[]>([]);
async function getArticalList() {
  const articalArr: any = [];
  const articalRes: any = await requestColApi('artical');
  articalRes.forEach((item) => {
    articalArr.push(item.data());
  });

  const set = new Set();
  let timer = 0;
  // let loopCount = 0;
  // if (articalArr.length < 6) {
  //   loopCount = articalArr.length;
  // } else {
  //   loopCount = 6;
  // }
  // console.log(loopCount);

  while (timer < 4) {
    const randomNum = Number(
      (Math.random() * (articalArr.length - 1)).toFixed(0)
    );
    if (!set.has(randomNum)) {
      set.add(randomNum);
      timer++;
    }
  }

  set.forEach((index: number) => {
    habitAticalList.value.push(articalArr[index]);
  });
}
getArticalList();

const clickHabitItem = (timeStamp: number) => {
  emits('emitTimeStamp', timeStamp);
};
</script>

<style lang="less" scoped>
@import '../less/habitItem.less';
</style>
