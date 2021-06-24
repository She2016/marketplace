import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    products: [
      {
        id: 1,
        name: 'Chaussette',
        imgUrl: require('../assets/gloves.png'),
        quantity: 10,
        price: 5,
        color: 'green',
        inStock: true
      },
      {
        id: 2,
        name: 'Chaussette',
        imgUrl: require('../assets/shoes.png'),
        quantity: 10,
        price: 6,
        color: 'black',
        inStock: true
      },
      {
        id: 3,
        name: 'Gants',
        imgUrl: require('../assets/sockes.png'),
        quantity: 0,
        price: 5,
        color: 'blue',
        inStock: false
      },
      {
        id: 4,
        name: 'Gants',
        imgUrl: require('../assets/shoes.png'),
        quantity: 5,
        price: 5,
        color: 'green',
        inStock: true
      },
    ]
  },
  getters: {
    products: state => state.products,
    basket: state => state.basket
  },
  mutations: {
    ADDTOBASKET(state, payload) {
      state.basket.push(payload)
    },
    REMOVE(state, payload) {
      state.basket = state.basket.filter(p => p.id !== payload)
    }
  },
  actions: {
    addToBasket({ commit }, payload) {
      commit('ADDTOBASKET', payload)
    },
    removeFromBasket({commit}, payload) {
      commit('REMOVE', payload)
    }
  },
  modules: {
  }
})
