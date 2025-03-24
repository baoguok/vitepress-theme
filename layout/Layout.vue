<script setup>
import {onMounted} from "vue";
import DefaultTheme from 'vitepress/theme';
import Login from './login/login.vue';
import MsVipContentPopout from "../components/ms-vip-content/popout.vue"
import {useData} from "vitepress";
import {setStore} from "../store";
import {userinfo} from "../api";

//取主题配置
const {theme} = useData();
setStore({theme})

const {Layout} = DefaultTheme

//初始化加载用户信息
onMounted(async () => {
    try {
        await userinfo();
    } catch (e) {
        //console.log(e)
    }
})

</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <!--登录-->
      <Login></Login>
      <!--购买会员弹框-->
      <MsVipContentPopout></MsVipContentPopout>
    </template>

    <template #doc-footer-before>

    </template>

    <template #doc-after>

    </template>

    <template #layout-bottom>

    </template>

  </Layout>
</template>

<style scoped>

</style>
