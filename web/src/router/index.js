import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import HomePart from '../components/home/homePart.vue'
import FoodList from '../components/foodList/foodList.vue'
import OrderList from '../components/orderList/orderList.vue'
import MemberList from '../components/memberList/memberList.vue'
import AdminList from '../components/adminList/adminList.vue'
import AdminLimit from '../components/adminLimit/adminLimit.vue'

	
Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: '/',
					name: 'homePart',
					component: HomePart
				},
				{
					path: 'foodList',
					name: 'foodList',
					component: FoodList
				},{
					path: 'orderList',
					name: 'orderList',
					component: OrderList
				},
				{
					path:'memberList',
					name:'memberList',
					component:MemberList
				},
				{
					path:'adminList',
					name:'adminList',
					component:AdminList
				},
				{
					path:'adminLimit',
					name:'adminLimit',
					component:AdminLimit
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})

export default router