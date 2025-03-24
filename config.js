import {deepMerge} from "./utils/merge";
import favicon from "./block/favicon";
import baidutongji from "./block/baidutongji";

console.log("process.env.npm_lifecycle_event =", process.env.npm_lifecycle_event);

/**
 * 主题默认配置文件
 * 更多配置说明可以看 VitePress 文档中站点配置说明 https://vitepress.dev/zh/reference/site-config
 */
const config = {
    base: '/',
    lang: 'zh-CN',
    title: "VitePress Theme",
    description: "VitePress Theme",
    appearance: true,
    //最后更新时间
    lastUpdated: false,
    //将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。
    metaChunk: true,
    //所有页面head
    head: [
        ...favicon(),
    ],
    //默认主题已有功能配置参数
    themeConfig: {
        //文档大纲
        outline: {level: 'deep', label: '目录'},// 文档大纲显示标题级别
        //上下页展示文字
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        //本地搜索
        search: {
            provider: 'local'
        },
        //右上角的链接，一般是源码链接
        socialLinks: [],
        //首页底部信息
        footer: {
            message: '',
            copyright: `Copyright&nbsp;©&nbsp;2025&nbsp;&nbsp;&nbsp;主题 <a href="https://vitepress.mosong.cc" target="_blank" style="">VitePress Theme</a>`
        },
        //提示：下面的扩展主题配置是当前主题扩展功能的配置参数，默认主题没有这些配置项
        //接口服务地址，如：  https://vpapi.mosong.cc
        vpapi: 'https://vpapi.mosong.cc',
        //扩展主题配置：不判断权限展示会员内容，用于文档本地编辑时预览
        vipVisible: false,
        //扩展主题配置：百度统计
        baidutongjiKey: '',
    },
    vite: {
        //配置支持的资源文件后缀
        assetsInclude: ['**/*.awebp', '**/*.webp'],
        server: {
            proxy: {
                //主题配置vpapi为空时，这里的代理才会生效
                '/vpapi/': {
                    //target: 'http://localhost:80',
                    target: 'https://vpapi.mosong.cc',
                    changeOrigin: true
                },
            }
        },
    }
}

export default config;

/**
 * 使用自定义配置覆盖这里的默认配置
 *
 * 项目config.js文件中使用示例:
 * import {defineConfig} from 'vitepress';
 * import {mergeConfig} from './theme/config.js';
 * export default defineConfig(mergeConfig({
 *     title:'设置自己的标题'
 *     //更多配置
 * }))
 */
export const mergeConfig = (conf) => {
    let c = deepMerge(config, conf);
    //百度统计添加到head
    if (c.themeConfig.baidutongjiKey) {
        c.head.push(...baidutongji(c.themeConfig.baidutongjiKey))
    }
    console.log(`themeConfig.vpapi = '${c.themeConfig.vpapi}'`);
    console.log(`themeConfig.vipVisible = ${c.themeConfig.vipVisible}`);
    return c;
}

