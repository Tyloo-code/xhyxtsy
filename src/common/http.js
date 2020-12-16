/**
 * 包装axios请求
 */
import axioss from 'axios';
import qs from 'qs';
import {getCookie} from './utils';

export function http(config) {
    let promise = new Promise((resolve, reject) => {
        config.headers = {
            'Authorization': 'Bearer ' + getCookie(document.cookie, 'access_token')
        };
        axioss(config).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject(response.errorMsg);
            }
        }).catch(err => {
            console.log('errerrerr--->', err);
            if (err.response && err.response.data && err.response.data.errorMsg) {
                reject(err.response.data.errorMsg);
            } else if (err.response.status === 401) { // 鉴权失败，重新回登录页
                window.location.hash = '#/login';
            } else {
                reject('请求失败');
            }
        });
    });
    return promise;
}

// 下载文件
export function downloadFile(url, datas, fileNameStr) {
    let request = axioss.create({
        responseType: 'arraybuffer',
        paramsSerializer(params) {
            return qs.stringify(params, {encode: true});
        }
    });

    request({
        method: 'post',
        url: url,
        data: datas,
        headers: {
            'Authorization': 'Bearer ' + getCookie(document.cookie, 'access_token')
        }
    }).then(res => {
        let fileName = (fileNameStr + '.csv') || '下载文件.csv';
        let blob = new Blob([res.data], {type: 'text/csv;charset=utf-8'});
        let downloadElement = document.createElement('a');
        // 创建下载的链接
        let href = URL.createObjectURL(blob);
        downloadElement.href = href;

        fileName = decodeURI(fileName);
        // 下载后文件名
        downloadElement.download = fileName;
        document.body.appendChild(downloadElement);
        // 点击下载
        downloadElement.click();
        // 下载完成移除元素
        document.body.removeChild(downloadElement);
        // 释放掉blob对象
        URL.revokeObjectURL(href);
    }).catch(error => {
        console.log(error);
    });
}
