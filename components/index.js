/**
 * 组件说明
 * 1. 自定义组件名称使用 `ms-`开头
 *
 */
import MsVipContent from './ms-vip-content/index.vue';
import MsQrcodeMp from './ms-qrcode-mp/index.vue';
import MsQrcodeWx from './ms-qrcode-wx/index.vue';
import MsSaying from './ms-saying/index.vue';
import MsSidebarToc from './ms-sidebar-toc/index.vue';

export const components = {
    MsVipContent,
    MsQrcodeMp,
    MsQrcodeWx,
    MsSaying,
    MsSidebarToc
};

//注册自定义组件，注册后可以在文档中全局使用
export function install(app) {
    for (let k in components) {
        app.component(k, components[k]);
    }
}

//不使用install全局注册，按需使用单个组件
export default components;