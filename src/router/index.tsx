import React, { ReactNode } from 'react';

interface IRouter {
    title: string;
    path: string;
    key: number;
    exact?: boolean; 
    component?: ReactNode;
    children?: IRouter[];
}

export const router: IRouter[] = [{
    path: '/login',
    title: '登录',
    key: 1,
    exact: true,
    component: React.lazy(() => import('../view/login/login')),
},{
    path: '/home',
    title: '首页',
    key: 2,
    component: React.lazy(() => import('../view/home/home')),
},{
    path: '/about',
    title: '关于',
    key: 3,
    component: React.lazy(() => import('../view/about/about')),
},{
    path: '/product',
    title: '产品',
    key: 4,
    component: React.lazy(() => import('../view/product/product')),
}]



