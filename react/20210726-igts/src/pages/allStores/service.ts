import Axios from 'axios';

export const getUserInfo = () => {
    return Axios.get('/builder/app/appinfo').then(res => {
        return res?.data?.data?.user || {};
    });
};

export const getAllMgetList = (num: number) => {

    return Axios.get('/pcui/material/mgetlist', {
        params: {
            num,
            count: 9,
            type: 'gallery',
            'group_id': '',
        }
    }).then(res => {
        return res?.data?.data || {};
    });
};

export const getMaterialGroupList = () => {
    return Axios.get('/pcui/material/getmaterialgrouplist?type=gallery').then(res => {
        return res?.data?.data || [];
    });
};

export const getMgetList = ({queryKey}: any) => {
    const [, {id}] = queryKey;

    return Axios.get('/pcui/material/mgetlist', {
        params: {
            'group_id': id,
            num: 1,
            count: 12,
            type: 'gallery'
        }
    }).then(res => {
        return res?.data?.data || [];
    });
};

export const postDeleteImg = (data: any) => {
    const {ids} = data;

    return Axios.get('/pcui/material/mdelete', {
        params: {ids}
    }).then(res => {
        return res?.data?.data || [];
    });
};
