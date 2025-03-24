import $store from "../store";

//接口POST请求
export async function httpPost(path, body) {
    const response = await fetch($store.theme.vpapi + path, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        mode: "cors",//允许跨域
        credentials: "include",//允许携带cookie
        body: JSON.stringify(body),
    })
    const rs = await response.json()
    if (rs.errno !== "00000") {
        throw new Error(rs.errno + ":" + rs.errmsg)
    }
    return rs.body
}

//生成不带分隔符的UUID
export function uuid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0;
        let v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export default {
    httpPost, uuid
}