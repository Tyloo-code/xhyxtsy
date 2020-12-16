/**
 * @file 下拉选择菜单的公共请求，统一管理
 */
import {http} from './http';
import apis from './api';

// 获取车辆列表
export async function getCarInfo() {
    let data = await http({
        method: 'get',
        url: apis.carInfo.api,
        data: {}
    });
    return data.data;
}

// 获取车队列表
export async function getFleetInfoList() {
    let data = await http({
        method: 'get',
        url: apis.fleetInfo.api,
        data: {}
    });
    return data.data;
}

// 获取公司列表
export async function getCompanyInfoList() {
    let data = await http({
        method: 'get',
        url: apis.companyInfo.api,
        data: {}
    });
    return data.data;
}

// 获取盐田列表
export async function getSalinaInfoList() {
    let data = await http({
        method: 'get',
        url: apis.salinaInfo.api,
        data: {}
    });
    return data.data;
}
