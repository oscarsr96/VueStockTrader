import stocks from '../../data/stocks';

const store = {
	stocks: []
}

const mutations = {
	'SET_STOCKS' (state, stocks) {
		state.stocks = stocks;
	},
	'RND_STOCKS' (state){

	}
}

const actions = {
	buyStock: ({ commit }, order) => {
		commit('BUY_STOCK', order)
	},
	initStocks: ({ commit }) => {
		commit('SET_STOCKS', stocks)
	},
	randomizStocks: ({ commit }) => {
		commit('RND_STOCKS')
	}
}

const getters = {
	stocks: state => {
		return state.stocks;
	}
}

export default {
	store,
	mutations,
	actions,
	getters
}