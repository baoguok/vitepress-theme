import MosongVipContent from './mosong-vip-content/index.vue';
import QrcodeMp from './qrcode-mp/index.vue';
import QrcodeWx from './qrcode-wx/index.vue';
import Saying from './saying/index.vue'

export const components = {
    MosongVipContent,
    QrcodeMp,
    QrcodeWx,
    Saying
};

//注册自定义组件，注册后可以在文档中全局使用
export function install(app) {
    for (let k in components) {
        app.component(k, components[k]);
    }
}

//可以不全局注册，按需单个import使用。
export default components;