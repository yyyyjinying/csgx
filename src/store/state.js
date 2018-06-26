export const state = {
	isWarn: true,
	routerNav: [{
		name: {
			name: 'index'
		},
		title: '首页',
		icon: '',
		activeIcon: '',
		isSelect: false
	}, {
		name: {
			name: 'game'
		},
		title: '游戏',
		icon: '',
		activeIcon:'',
		isSelect: true
	}, {
		name: {
			name: 'coupon'
		},
		title: '优惠券',
		icon: '',
		activeIcon: '',
		isSelect: true
	}],
	cartId: '',
	editAddress: [],
	orderStatus: {},
	count: 12,
	todos: [{
		id: 1,
		text: '...',
		done: true
	}, {
		id: 2,
		text: '...',
		done: false
	}]
}