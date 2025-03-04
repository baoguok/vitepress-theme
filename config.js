import footer from "./block/footer";
import favicon from "./block/favicon";
import baidutongji from "./block/baidutongji";

/**
 * 这是项目配置示例文件，可以拷贝到你的项目.vitepress目录下按需修改。
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
    //主体配置
    themeConfig: {
        //页脚内容
        footer,
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

//深度合并对象
function deepMerge(target, source) {
    // 检查目标对象和源对象是否都是对象
    if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
        // 遍历源对象的所有属性
        for (const key in source) {
            if (!source.hasOwnProperty(key)) {
                continue;
            }
            //则递归调用 deepMerge 函数
            if (typeof target[key] === 'object' && target[key] !== null && typeof source[key] === 'object' && source[key] !== null) {
                target[key] = deepMerge(target[key], source[key]);
            } else {
                // 否则，直接用源对象的属性值覆盖目标对象的属性值
                target[key] = source[key];
            }
        }
    }
    return target;
}

//使用自定义配置按需覆盖示例配置
export const useConfig = (customConfig) => {
    return deepMerge(config, customConfig);
}

//图标
export const headFavicon = favicon;

//百度统计
export const headBaidutongji = baidutongji;