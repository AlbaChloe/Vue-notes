import { createStore } from 'vuex'
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'

const store = createStore(
  {
    state() {
      return {
        counter: 0,
        name: "chloe",
        age: 18,
        books: [
          { name: "深入Vue.js", price: 220, count: 3 },
          { name: "深入Webpack", price: 180, count: 5 },
          { name: "深入React", price: 220, count: 1 },
          { name: "深入Node", price: 210, count: 2 },
        ],
        discount: 0.6,
        banners: [],
      }
    },
    mutations: {
      increment(state) {
        state.counter++
      },
      decrement(state) {
        state.counter--
      },
      [INCREMENT_N](state, payload) {
        state.counter += payload.n;
        console.log(INCREMENT_N);
      },
      addBannerData(state, payload) {
        state.banners = payload;
      }
    },
    getters: {
      totalPrice(state, getters) {
        let totalPrice = 0;
        for (const book of state.books) {
          totalPrice += book.count * book.price
        }
        return totalPrice * getters.currentDiscount
      },
      currentDiscount(state, getters) {
        return state.discount * 0.9
      },
      totalPriceCountGreaterN(state, getters) {
        return function (n) {
          let totalPrice = 0
          for (const book of state.books) {
            if (book.count > n) {
              totalPrice += book.count * book.price
            }
          }
          return totalPrice * getters.currentDiscount
        }
      },
      nameInfo(state) {
        return `name： ${state.name}`
      },
      ageInfo(state) {
        return `age： ${state.age}`
      },

    },
    // 放函数
    actions: {
      // 1. 参数问题
      incrementAction(context, payload) {
        console.log(payload);
        setTimeout(() => {
          context.commit('increment');
        }, 1000);
      },
      // 2. context的其他属性
      decrementAction({ state, getters }, payload) {
        console.log(state, getters);
      },
      // 异步请求
      getHomeMultiData(context) {
        return new Promise((resolve, reject) => {
          axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            context.commit("addBannerData", res.data.data.banner.list)
            resolve(res.data.data.banner.list)   // 如果请求成功，则调用resolve函数，可以传参
          }).catch(err => {
            reject(err)   // 请求失败则调用reject函数
          })
        })

      }
    }
  }
)

export default store