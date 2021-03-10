import React, { PureComponent } from 'react';
import Axios from 'axios';

function Blog({data}) {

    console.log(data);

    return (
        <div>{data.errmsg}</div>
    );
}

export async function getStaticProps() {
    const res = await Axios.get(
        'https://baijiahao.baidu.com/activity/bjhcollege/index'
    ).then(res => {
        return res.data;
    });

    return {
        props: {
            data: res
        }
    }
}

export default Blog;
