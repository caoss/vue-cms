import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login'
import Layout from '@/pages/layout/layout'
import pc_layout from '@/pages/pc_layout/layout'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [{
		path: '/login',
		name: 'login',
		hidden: true,
		component: Login,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/test',
		component: Layout,
		redirect: '/test/test1',
		meta: { //控制在左栏显示
			icon: 'question',
			title: '测试一'
		},
		children: [{
			path: 'test1',
			name: 'test1', // 如果name设置相同会出现，刷新当前页面跳转到别的路由的情况
			component: () => import('@/pages/test/index'),
			meta: {
				icon: 'warning',
				title: '测试一'
			}
		}, {
			path: 'test2',
			name: 'test2', // 如果name设置相同会出现，刷新当前页面跳转到别的路由的情况
			component: () => import('@/pages/test2/index'),
			meta: {
				icon: 'warning',
				title: '测试二'
			}
		}]
	},
	{
		path: '/introduction',
		component: Layout,
		redirect: '/introduction/index',
		meta: { //控制在左栏显示
			icon: 'question',
			title: '简述'
		},
		children: [{
			path: 'index',
			name: 'Introduction',
			component: () => import('@/pages/test2/index'),
			meta: {
				icon: 'warning',
				title: '简述'
			}
		}]
	},
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		hidden: true,
		children: [{
			path: 'home',
			name: 'home',
			component: () => import('@/pages/home'),
			meta: {
				title: '首页'
			}
		}]
	},
	{
		path: '/pc',
		component: pc_layout,
		hidden: true,
		children: [{
			path: 'pc',
			name: 'pc',
			component: () => import('@/pages/pc_layout'),
			meta: {
				title: '首页2'
			}
		}, {
			path: 'pc2',
			name: 'pc2',
			component: () => import('@/pages/pc_layout/index2'),
			meta: {
				title: '首页2'
			}
		}]
	},

]

export default new Router({
	// mode: 'history',  require service support
	// scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})

export const asyncRouterMap = [

]