export const AsideConfig = [
    {
        title: '首页',
        path: '/home',
        name: 'home',
        icon: 'el-icon-s-home'
    },
    {
        title: '商品管理',
        icon: 'el-icon-s-goods',
        children: [
            {
                title: '商品分类',
                name: 'goodTypes',
                path: '/good/types'
            },
            {
                title: '商品列表',
                name: 'goodList',
                path: '/good/list'
            }
        ]
    },
    {
        title: '订单管理',
        icon: 'el-icon-s-order',
        children: [
            {
                title: '订单列表',
                name: 'orderList',
                path: '/order/list'
            }
        ]
    },
    {
        title: '用户管理',
        icon: 'el-icon-user-solid',
        children: [
            {
                title: '用户列表',
                name: 'userList',
                path: '/user/list'
            },
            {
                title: '商品反馈',
                name: 'userFeedback',
                path: '/user/feedback'
            }
        ]
    },
    {
        title: '运营管理',
        icon: 'el-icon-s-tools',
        children: [
            {
                title: '轮播图设置',
                name: 'operationBanner',
                path: '/operation/banner'
            },
            {
                title: '全局设置',
                name: 'operationGlobal',
                path: '/operation/global'
            },
            {
                title: '系统消息',
                name: 'operationMessage',
                path: '/operation/message'
            }
        ]
    },
    {
        title: '数据统计',
        icon: 'el-icon-s-data',
        children: [
            {
                title: '数据概况',
                name: 'dataStatistics',
                path: '/data/Statistics'
            }
        ]
    },
    {
        title: '权限管理',
        icon: 'el-icon-s-check',
        children: [
            {
                title: '人员管理',
                name: 'authorUser',
                path: '/author/user'
            }
        ]
    },
    {
        title: '安全管理',
        icon: 'el-icon-s-cooperation',
        children: [
            {
                title: '操作日志',
                name: 'handleLog',
                path: '/security/handlelog'
            },
            {
                title: '登录记录',
                name: 'loginLog',
                path: '/security/login'
            }
        ]
    }
];
