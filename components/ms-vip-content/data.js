import {reactive} from "vue";

// 组件状态值
export const data = reactive({
    //开发环境直接显示vip内容，便于编辑预览
    isDev:  import.meta.env.MODE === 'production',
    visible: false,// 支付弹框显示与隐藏
    payQrcode: "", // 支付二维码
    active: '',// 当前选择产品
    datum: {
        items: []//产品列表
    },
})

export default {data};




