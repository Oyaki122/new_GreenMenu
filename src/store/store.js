import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation_types'
import axios from 'axios'
import dairyFileName from '../components/modules/dairyFileName'
import csvConvert from '../components/modules/csv2objConverter'
import categoryExtractor from '../components/modules/categoryExtractor'

Vue.use(Vuex)

const state = {
  dayObj: null,
  menuObj: null,
  titles: { lunch: '', rice: '' },
  prices: { lunch: '', rice: '' },
  fileName: 0
}
const mutations = {
  [types.SET_DAY_OBJ] (state, { newDayObj, direction }) {
    let dayTmp
    if (!newDayObj) {
      dayTmp = new Date()
    } else {
      dayTmp = new Date(newDayObj)
    }
    direction = direction != null ? direction : 1
    if (dayTmp.getDay() === 0) {
      if (direction === 0) dayTmp.setDate(dayTmp.getDate() - 2)
      else dayTmp.setDate(dayTmp.getDate() + 1)
      dayTmp = new Date(dayTmp)
    } else if (dayTmp.getDay() === 6) {
      if (direction === 0) dayTmp.setDate(dayTmp.getDate() - 1)
      else dayTmp.setDate(dayTmp.getDate() + 2)
      dayTmp = new Date(dayTmp)
    }
    state.dayObj = dayTmp
  },
  menuObjSetter (state, csv) {
    state.menuObj = csv
  },
  titleSetter (state, obj) {
    state.titles = obj
  },
  priceSetter (state, obj) {
    state.prices = obj
  },
  fileNameSetter (state, fileName) {
    state.fileName = fileName
  }
}
const actions = {
  async getCSV (context) {
    if (!context.state.dayObj) context.commit(types.SET_DAY_OBJ, {})
    const file = dairyFileName(context.state.dayObj)
    await axios
      .get(file)
      .then(res => csvConvert(res.data))
      .then(csv => {
        context.commit('menuObjSetter', csv)
        context.commit('fileNameSetter', file)
      })
  },
  async setMenu ({ state, commit, dispatch }) {
    if (!state.dayObj) commit(types.SET_DAY_OBJ, {})
    if (state.fileName !== dairyFileName(state.dayObj)) {
      try {
        await dispatch('getCSV')
      } catch (e) {
        console.log(e)
        commit('titleSetter', { lunch: 'Error', rice: '' })
        commit('priceSetter', { lunch: '', rice: '' })
        return
      }
    }
    const day = state.dayObj.getDay() - 1
    const menuObj = state.menuObj[day]
    const titleTmp = { lunch: menuObj.lunch, rice: menuObj.rice }
    const priceTmp = {
      lunch: menuObj.lunch_price,
      rice: menuObj.rice_price
    }
    commit('titleSetter', titleTmp)
    commit('priceSetter', priceTmp)
  }
}

const getters = {
  getTitle: state => topic => {
    return state.titles[topic]
  },
  getPrice: state => topic => {
    return state.prices[topic]
  }
}

const menu = {
  state: {
    sort: 0,
    rowMenus: null,
    showingMenus: null,
    categories: null,
    whichSelected: 'すべて'
  },
  mutations: {
    menusSetter (state, data) {
      state.rowMenus = data
    },
    sortMenus (state, sortCategory) {
      // console.log(sortCategory)
      if (sortCategory === -1 || sortCategory === 'すべて') {
        state.showingMenus = state.rowMenus
        state.whichSelected = 'すべて'
      } else {
        state.showingMenus = state.rowMenus.filter(element => {
          return element.category === sortCategory
        })
        state.whichSelected = sortCategory
      }
    },
    categoriesSetter (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    getCSV ({ state, commit, dispatch }) {
      axios
        .get('menu.csv')
        .then(res => csvConvert(res.data))
        .then(menuData => {
          commit('menusSetter', menuData)
          return categoryExtractor(menuData)
        })
        .then(categories => commit('categoriesSetter', categories))
        .then(() => commit('sortMenus', -1))
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    menu: menu
  }
})
