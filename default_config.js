//VitePress 默认站点配置 https://vitepress.dev/zh/reference/site-config
//个性化配置可以在 config.js 文件中覆盖修改
export default {
    base: '/',
    lang: 'zh-CN',
    appearance: true,
    lastUpdated: false,
    metaChunk: true, //将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。
    outline: {level: 'deep', label: '目录'},// 文档大纲显示标题级别
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    search: {
        provider: 'local'
    },
    vite: {
        assetsInclude: ['**/*.awebp', '**/*.webp'],
        server: {
            proxy: {
                '/vpapi/': {target: 'http://localhost:80', changeOrigin: true},
            }
        },
    }
}