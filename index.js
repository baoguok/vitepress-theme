import DefaultTheme from 'vitepress/theme';
import Layout from './layout/Layout.vue';
import './style/var.css';
import {install} from './components/index';
import {trackPageview} from "./block/baidutongji";

//主题加载
export default {
    extends: DefaultTheme,
    enhanceApp({app, router}) {
        install(app)
        // 单页面应用路由更新时触发百度统计事件
        router.onBeforeRouteChange = trackPageview;
    },
    Layout
}
