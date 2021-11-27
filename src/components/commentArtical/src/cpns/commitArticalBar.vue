<template>
  <div class="upload_img_wrap" @click="uploadFileClick">
    <svg
      v-show="isShowImgSvg"
      viewBox="0 0 24 24"
      focusable="false"
      width="24"
      aria-hidden="true"
      style="fill: rgba(0, 0, 0, 0.5)"
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM16.5 5.5a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm2.5 13v-3l-2.37-2.77a1 1 0 00-1.38-.13L13.5 14 9.7 9.78a1 1 0 00-1.45-.04L5 13v5.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5z"
      ></path>
    </svg>
    <input
      type="file"
      class="upload_ipt"
      ref="uploadIptRef"
      @change="imgChange"
    />
  </div>
  <div class="control_comment_wrap">
    <button class="cancel_btn" @click="cancelClick">取消</button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, withDefaults, defineProps } from 'vue';

const emits = defineEmits(['emitCommentShow', 'emitImgPath']);
withDefaults(
  defineProps<{
    isShowImgSvg?: boolean;
  }>(),
  {
    isShowImgSvg: false
  }
);

const cancelClick = () => {
  emits('emitCommentShow');
};

// choose image file & emit
const uploadIptRef = ref<HTMLInputElement>();
const uploadFileClick = () => {
  uploadIptRef.value?.click();
};
const imgChange = (e: any) => {
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  if (!file) return;
  const path = file.name;
  emits('emitImgPath', { file, path });
};
</script>

<style lang="less" scoped>
@import '../less/commitArticalBar.less';
</style>
