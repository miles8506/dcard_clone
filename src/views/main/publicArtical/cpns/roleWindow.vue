<template>
  <div class="role_window">
    <header class="role_header"><div>與 Dcard 的發文留言小約定</div></header>
    <main class="role_content">
      <div class="content_wrap">
        <ul>
          <li class="role_item">
            <span class="item_num">一、</span
            ><span class="item_content"
              >禁止使用不雅字眼、中傷、歧視、挑釁或謾罵他人。</span
            >
          </li>
          <li class="role_item">
            <span class="item_num"> 二、</span
            ><span class="item_content"
              >為了創造更佳的內容體驗，Dcard
              全面禁止在文章與留言內留下個人聯絡方式或 ID。</span
            >
          </li>
          <li class="role_item">
            <span class="item_num">三、</span>
            <span class="item_content">請勿短時間內張貼大量重複內容。</span>
          </li>
          <li class="role_item">
            <span class="item_num">四、</span
            ><span class="item_content"
              >除廢文板以外，文章內文字數需多於 15 個繁體中文字。</span
            >
          </li>
          <li class="role_item">
            <span class="item_num">五、</span>
            <span class="item_content">
              若文章中有部分內容與事實不符，請適度在標題或內文、留言中標示。未標示並經他人檢舉提出明確證據，且態度不佳者，將斟酌處分，情節嚴重可能永久停權。</span
            >
          </li>
          <li class="role_item">
            <span class="item_num">六、</span>
            <span class="item_content"
              >若舉辦活動如板聚、明信片交換等，需要使用表單，需徵求到 20
              人以上留言「+1」表示願意參加後，方可提供表單連結做報名使用。</span
            >
          </li>
          <li class="role_item">
            <span class="item_num">七、</span>
            <span class="item_content"
              >請善用「加入話題」為文章分類，讓更多人與你產生共鳴！更多話題的使用方式請點我。</span
            >
          </li>
          <li />
          <!-- <li class="role_item">其餘規定請參閱板規，若有疑問請私訊粉專。</li> -->
        </ul>
      </div>
    </main>
    <footer class="role_footer">
      <button class="know_btn" @click="hideRoleWindow">
        <div class="btn_text">我瞭解了</div>
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emits = defineEmits(['emitRoleWindowStatus']);
const hideRoleWindow = () => {
  emits('emitRoleWindowStatus');
};
</script>

<style lang="less" scoped>
@import '../less/roleWindow.less';
</style>
