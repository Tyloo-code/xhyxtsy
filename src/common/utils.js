// 从cookie中拿到对应的值
export function getCookie(cookie, name) {
    if (!cookie) {
        return '';
    }
    let cookies = cookie.split(';');
    let cookieObj = {};
    cookies.map(obj => {
        let objArr = obj.trim().split('=');
        cookieObj[objArr[0]] = objArr[1];

    });
    if (name) {
        return cookieObj[name];
    }
    return cookieObj;
}

//设置cookie
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
