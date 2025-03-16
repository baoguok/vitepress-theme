import MosongVipContent from './mosong-vip-content/index.vue';
import QrcodeMp from './qrcode-mp/index.vue';
import QrcodeWx from './qrcode-wx/index.vue';
import Saying from './saying/index.vue';
import SidebarToc from './sidebar-toc/index.vue';

export const components = {
    MosongVipContent,
    QrcodeMp,
    QrcodeWx,
    Saying,
    SidebarToc
};

//注册自定义组件，注册后可以在文档中全局使用
export function install(app) {
    for (let k in components) {
        app.component(k, components[k]);
    }
}

//不使用install全局注册，按需使用单个组件
export default components;