/**
 * 51la数据统计  https://v6.51.la/
 * @param id 动态掩码
 * @param ck 一个网站多个统计 ID 的数据分离标识
 */
export const head = (id, ck) => {
    if (!id || !ck) {
        return [];
    }
    return [
        ['script', {charset: "UTF-8", id: "LA_COLLECT", src: "https://sdk.51.la/js-sdk-pro.min.js"}, ``],
        ['script', {}, `window.LA&&LA.init({id:"${id}",ck:"${ck}",autoTrack:true,hashMode:true})`]
    ];
}

export default head;


