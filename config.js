import {deepMerge} from "./utils/merge";
import favicon from "./block/favicon";
import baidutongji from "./block/baidutongji";

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
    },
    //默认主题定制功能配置参数
    themeCustom: {
        //未开通会员时展示会员表内容，用于文档本地编辑时预览会员内容
        //vipContentVisible: import.meta.env.MODE === 'development',
        vipContentVisible: false,
        //微信个人号二维码
        qrcode: '',
        //微信公众号二维码
        qrcodegzh: '',
        //百度统计
        baidutongjiKey: '',
    },
    vite: {
        //配置支持的资源文件后缀
        assetsInclude: ['**/*.awebp', '**/*.webp'],
        //本地调试时使用的接口服务，请按需修改target地址
        server: {
            proxy: {
                '/vpapi/': {
                    //target: 'http://localhost:80',
                    target: 'https://vitepress.mosong.cc',
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
    if (c.themeCustom.baidutongjiKey) {
        c.head.push(baidutongji(c.themeCustom.baidutongjiKey))
    }
    return c;
}

