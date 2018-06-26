export const getters = {
	routerNav: state => {
		return state.routerNav
	},
	doneTodos: state => {
		return state.todos.filter(todo => todo.done)
	},
	getTodoById: (state) => (id) => {
		return state.todos.find(todo => todo.id === id)
	},
	cartId: state => {
		return state.cartId
	},
	currentCartoryId: state => {
		return state.currentCartoryId
	},
	currentStoreId: state => {
		return state.currentStoreId
	}
}