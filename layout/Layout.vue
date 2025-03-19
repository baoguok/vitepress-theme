<script setup>
import DefaultTheme from 'vitepress/theme';
import Login from './login/login.vue';
import MsVipContentPopout from "../components/ms-vip-content/popout.vue"

const {Layout} = DefaultTheme

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
