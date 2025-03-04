//主体配置中的footer内容

//Footer Message
export const message = ``;

//Footer Copyright
export const copyright = `
Copyright&nbsp;©&nbsp;2024&nbsp;&nbsp;
<a href="https://beian.miit.gov.cn/" target="_blank" ref="nofollow" style="text-decoration-line: none;">沪ICP备19002970号-4</a> &nbsp;
<a href="https://beian.mps.gov.cn/#/query/webSearch?code=31010702007768" target="_blank" ref="nofollow" style="text-decoration-line: none;">沪公网安备 31010702007768号</a> &nbsp;
<a href="https://blog.mosong.cc" target="_blank" style="text-decoration-line: none;">微信公众号：墨松科技</a> 微信号：916931772 
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