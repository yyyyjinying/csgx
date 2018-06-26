import {
	INCREMENT,
	MINUE,
	SET_IS_DELIVERY,
	SET_CART_ID,
	SET_ADDRESS_EDIT,
	SET_ORDER_STATUS,
	SET_ROUTER_NAV,
	SET_CLASSIFY,
	SET_WARN_HANDLE
} from './mutation-types'
export const mutations = {
	[INCREMENT](state) {
		state.count += 3
	},
	[MINUE](state, n) {
		state.count -= n
	},
	[SET_IS_DELIVERY](state, bol) {
		state.isDelivery = bol
	},
	[SET_CART_ID](state, cartId) {
		state.cartId = cartId
	},
	[SET_ADDRESS_EDIT](state, data) {
		state.editAddress = data
	},
	[SET_ORDER_STATUS](state, orderStatus) {
		state.orderStatus = orderStatus
	},
	[SET_ROUTER_NAV](state, idx) {
		state.routerNav = state.routerNav.map((item, index) => {
			item.isSelect = true
			if (index == idx) {
				item.isSelect = false
			}
			return item
		})
	},
	[SET_CLASSIFY](state, idx) {
		if (idx == 0) {
			state.currentCartoryId = 37
		} else {
			state.currentCartoryId = 36
		}
	},
	[SET_WARN_HANDLE](state,ele) {
		state.isWarn = ele
	}
}