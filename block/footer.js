//主体配置中的footer内容

//Footer Message
export const message = ``;

//Footer Copyright
export const copyright = `
Copyright&nbsp;©&nbsp;2025&nbsp;&nbsp;
<a href="https://beian.miit.gov.cn/" target="_blank" ref="nofollow" style="text-decoration-line: none;">沪ICP备19002970号</a> &nbsp;
<a href="https://beian.mps.gov.cn/#/query/webSearch?code=31010702007768" target="_blank" ref="nofollow" style="text-decoration-line: none;">沪公网安备 31010702007768号</a> &nbsp;
<a style="text-decoration-line: none;">个人微信号(916931772)</a>
主题 <a href="https://vitepress.mosong.cc" target="_blank" style="">VitepressTheme</a>  
`;

export default {
    message,
    copyright
}

//优先使用项目配置
export const footer = (config) => {
    if (!config.footer) {
        return {}
    }
    return {
        message: config.footer.message || message,
        copyright: config.footer.copyright || copyright
    }
}