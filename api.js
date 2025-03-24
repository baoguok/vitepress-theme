import {httpPost} from "./utils/http";
import {setStore} from "./store";

//获取授权链接
export const authorize = async () => await httpPost('/vpapi/meb/oauth-authorize', {origin:location.href});

//轮询查询授权结果
export const oauthPolling = async (state)=>await httpPost("/vpapi/meb/oauth-polling", {state});

//查询登录用户信息
export const userinfo = async () => {
    let user = await httpPost("/vpapi/meb/userinfo", {});
    setStore({user, isLogin: true});
    return user;
}

//退出登录
export const logout = async () => await httpPost("/vpapi/meb/logout", {});

//产品列表
export const productList = async () => await httpPost("/vpapi/meb/product-list", {});

//产品购买
export const productBuyQryApi = async (prod_id) => await httpPost('/vpapi/meb/product-buy-qry', {prod_id});


