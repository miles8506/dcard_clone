<template>
  <div class="m_aside">
    <d-header :isShowMobileHeader="true">
      <template #default>
        <span class="close_icon" @click="closeWindow">&times;</span>
      </template>
    </d-header>
    <sort-area @emitCloseMaside="emitCloseMaside" />
    <immediately-area @emitCloseMaside="emitCloseMaside" />
    <div class="board_area">
      <h4 class="board_title">Dcard 精選看板</h4>
      <div class="board_item_wrap">
        <board-item :boardList="randomBoardArr">
          <template #track_icon="item">
            <button class="track_btn" @click="clickTrack(item)">
              <div class="text">追蹤</div>
            </button>
          </template>
        </board-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/store';
// component
import DHeader from '@/components/dHeader';
import SortArea from '@/components/dAside/src/cpn/sortArea.vue';
import ImmediatelyArea from '@/components/dAside/src/cpn/immediatelyArea.vue';
import BoardItem from '@/base-ui/boardItem';

// testconfig
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';

// api
import { requestApi } from '@/service';

const store = useStore();

const clickTrack = (item) => {
  console.log(item);
};

const closeWindow = () => {
  store.commit('setShowMAside');
  const body = document.body;
  body.style.overflowY = 'scroll';
};

const emitCloseMaside = () => {
  store.commit('setShowMAside');
  const body = document.body;
  body.style.overflowY = 'scroll';
};

// get asideImmediately(board)list data
const randomBoardArr = ref<any[]>([]);
async function requestBoardList() {
  const res: any = await requestApi('asideImmediately', '94h8mmiunVohLfnTEo8x');
  while (randomBoardArr.value.length < 3) {
    const randomNum = Number(
      (Math.random() * res.asideImmediately.length).toFixed(0)
    );
    randomBoardArr.value.push(res.asideImmediately[randomNum]);
    res.asideImmediately.splice(randomNum, 1);
  }
}
requestBoardList();
</script>

<style lang="less" scoped>
@import './less/mAside.less';
</style>
