<script setup>
import {randomSay} from './data'
</script>

<!--组件功能：随机显示经典语录，为学习加油打气-->
<template>
  <div class="saying" v-html="randomSay()"></div>
</template>

<style scoped>

.saying {
  border-color: var(--vp-custom-block-tip-border);
  color: var(--vp-custom-block-tip-text);
  background-color: var(--vp-custom-block-tip-bg);

  border: 1px solid var(--vp-custom-block-tip-border);
  border-radius: 8px;
  padding: 16px 16px 8px;
  line-height: 24px;
  font-size: var(--vp-custom-block-font-size);
}

</style>