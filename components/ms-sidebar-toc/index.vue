<!--
**组件功能：
把文档sidebar侧边栏目录渲染为目录页面。具体效果查看网站 https://vitepress.mosong.cc

**用法示例：
在.md文件中使用标签
<ms-sidebar-toc path="/faq/" />
参数path为sidebar中配置的目录路径。
-->

<script setup>
import {useData} from "vitepress";

//目录路径
const {path} = defineProps({path: String})
//项目配置数据
const {theme} = useData();
//主题配置中sidebar数据
const items = theme.value.sidebar[path];

</script>

<template>
    <!-- 在page页面， 通过侧边栏渲染为目录页面 ，只显示一级与二级。-->
    <div class="toc">
        <div class="block" v-for="(item1,i1) in items">
            <a class="h1" v-if="item1.link" :href="item1.link">{{i1+1}}. {{ item1.text }}</a>
            <span class="h1" v-if="!item1.link">{{i1+1}}. {{ item1.text }}</span>
            <div class="ul" v-if="item1.items">
                <a v-for="(item2,i2) in item1.items" class="h2" :href="item2.link||'javascript:void(0);'">{{i1+1}}.{{i2+1}}. {{ item2.text }}</a>
            </div>
        </div>
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
    width: 100%;
    margin: 15px 15px 0 0;
    /*border: 1px solid #eee;*/
}

.toc .block .ul {
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px 15px;
}

</style>