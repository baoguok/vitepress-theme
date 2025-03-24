import QRCode from "qrcode";
import { httpPost, uuid} from "../../utils/http";
import {reactive} from "vue";
import {$store} from "../../store";
import {userinfo, authorize, oauthPolling} from "../../api";
import {$data} from "./data";

// 组件状态值
export const datum = reactive({
    qrimg: '',// 二维码，微信扫码登录
    tips: '',//提升信息
    pollNum: 0,//轮询重试次数，最多10次停止
})

//PC网页，生成二维码图片，微信扫码授权
export async function authorizeQrcode(url) {
    const img = (await QRCode.toDataURL(url))
    console.log(url)
    console.log(img)
    return img
}

// PC网页，轮询查询授权结果
export async function polling(state) {
    // 重试20次
    datum.pollNum += 1;
    if (datum.pollNum > 20) {
        datum.pollNum = 0;
        return
    }
    if (!$store.loginVisible) {
        datum.pollNum = 0;
        return
    }
    try {
        let body = await oauthPolling(state)
        if (body && body.status === '1') {
            await userinfo()
            $store.loginVisible = false; //登录成功关弹框
            return
        }
    } catch (e) {
        console.log(e)
    }
    setTimeout(async () => await polling(state), 3 * 1000)
}

// 弹出登录界面时调用
export async function login() {
    if ($store.isLogin) {
        $store.loginVisible = false
        console.log("已登录成功")

        $data.userPanelVisible = !$data.userPanelVisible; // 个人信息面板显示切换
        return
    }
    // 电脑浏览器显示二维码
    const {state,url} = await authorize()
    datum.qrimg = await authorizeQrcode(url)
    setTimeout(async () => await polling(state), 6 * 1000)

    //TODO 手机微信，直接跳转授权
}

export default {
    login, authorize, authorizeQrcode, polling
}