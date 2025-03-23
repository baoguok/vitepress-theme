/**
 * 百度统计
 *
 * 在页面head位置给文档加百度统计代码
 * 提示：Vitepress是单页面，还要为router做处理才能实现每个页面统计pv
 */
export const head = (key) => {
    if (!key) {
        return [];
    }
    return [
        ['script', {}, `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?${key}";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();`]
    ];
}

// 单页面应用路由更新时触发百度统计事件
export const trackPageView = (to) => {
    if (typeof _hmt !== 'undefined') {
        _hmt.push(['_trackPageview', to]);
    }
}

export default head;