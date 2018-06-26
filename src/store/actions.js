import * as types from './mutation-types'
export const actions = {
	action({
		commit
	}) {
		commit(types.INCREMENT)
	}
}