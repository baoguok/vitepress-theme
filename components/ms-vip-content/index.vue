<script setup>
import {useData} from "vitepress";
import {$store} from "../../store";
import {data} from "./data";

const site = useData();


//点击开通会员
function buy() {
  if (!$store.isLogin) {
    $store.loginVisible = true
    return
  }
  data.visible = true
}

</script>

<template>
  <template v-if="$store.user.type==='vip' || site.themeCustom.vipContentVisible "><slot></slot></template>

  <div :style="{display: ($store.user.type!=='vip')?'block':'none'}">
    <div class="vip-block">
      <div class="content">
        <p>💞开通VIP，可阅读全部会员文档。
          <template v-if="!$store.isLogin">如果你已经开通，请 <a @click="$store.loginVisible=true">登录</a></template>
        </p>
        <button class="btn" @click="buy">🔒去开通</button>
      </div>
    </div>
    <div style="display: none;">
      <a href="https://vitepress.mosong.cc">VitePress主题</a>
      <a href="https://blog.mosong.cc">墨松博客</a>
    </div>
  </div>
</template>

<style scoped>

.vip-block {
  border: solid 1px #cccccccc;
  background-color: #fdf1d9;
  color: #666666;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
}

.content {
  text-align: center;
}

.btn {
  background-color: #9b8aff;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 10px;
}

</style>