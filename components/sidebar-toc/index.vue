<script setup>
import {useData} from "vitepress";

const {theme} = useData();
const {path} = defineProps({path:String})
const items = theme.value.sidebar[path];

</script>

<template>
<!-- 在page页面， 通过侧边栏渲染为目录页面 -->
  <div class="toc">
    <template v-for="(item,i) in items">
      <div class="block" v-if="i>0">
        <a class="h1" v-if="item.link" :href="item.link">📖{{ item.text }}</a>
        <span class="h1" v-if="!item.link">{{ item.text }}</span>
        <div class="ul" v-if="item.items">
          <template v-for="(item2,i2) in item.items">
            <a class="h2" :href="item2.link||'javascript:void(0);'">{{ item2.text }}</a>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

a {
  display: block;
  line-height: 30px;
  text-decoration: none;
}

.h1 {
  display: block;
  line-height: 30px;
  font-weight: bold;
  padding: 5px 5px;
  color: inherit;
}

.h2 {
  color: inherit;
}

.toc {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}

.toc .block {
  width: 360px;
  margin: 15px 15px 0 0;
  /*border: 1px solid #eee;*/
}

.toc .block .ul {
  display: flex;
  flex-direction: column;
  padding: 0 15px 15px 15px;
}

</style>