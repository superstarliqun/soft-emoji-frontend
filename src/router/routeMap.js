import BaseLayout from '@/components/BaseLayout';
import notepad from '@/views/Notepad/index';
import resume from '@/views/Resume/index';
import settings from '@/views/Settings/index';
import propaganda from '@/views/Propaganda/index';
import commodity from '@/views/Commodity/index';
import backstage from '@/views/Backstage/index';
import blog from '@/views/Blog/index';
import Empty from '@/views/404.vue';

/*
设置了语言方案时  属性name必加
*/
const routeMap = [
    /* 全屏路由 */
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            title: '登录'
        }
    },
    /* 带头部和菜单的路由 */
    {
        path: '/',
        name: '/',
        component: BaseLayout,
        children: [
            {
                path: '/',
                // component: () => import('@/views/Propaganda'),
                meta: {
                    title: '宣传页'
                },
                component: propaganda
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '主页动态'
                }
            },
            {
                path: '/resume',
                meta: {
                    title: '简历'
                },
                component: resume
            },
            {
                path: '/settings',
                meta: {
                    title: '设置'
                },
                component: settings
            },
            {
                path: '/blog',
                meta: {
                    title: '简历'
                },
                component: blog
            },
            {
                path: '/notepad',
                meta: {
                    title: '记事本'
                },
                component: notepad
            },
            {
                path: '/commodity',
                meta: {
                    title: '商品页'
                },
                component: commodity
            },
            {
                path: '/backstage',
                meta: {
                    title: '后台管理'
                },
                component: backstage
            },
            {
                path: '*',
                meta: {
                    title: '404'
                },
                component: Empty
            }
        ]
    }
];

export default routeMap;
