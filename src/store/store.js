import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation_types'
import axios from 'axios'
import dairyFileName from '../components/modules/dairyFileName'
import csvConvert from '../components/modules/csvConvert'
import { reject, resolve } from 'q'

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
  [types.SET_MENU_OBJ] (state, csv) {
    state.menuObj = csv
  },
  [types.SHOW_TITLE] (state, obj) {
    state.titles = obj
  },
  [types.SHOW_PRICE] (state, obj) {
    state.prices = obj
  }
}
const actions = {
  async getCSV (context) {
    if (!context.state.dayObj) context.commit(types.SET_DAY_OBJ, {})
    const file = dairyFileName(context.state.dayObj)
    context.state.fileName = file
    await axios
      .get(file)
      .then(res => csvConvert(res.data))
      .then(csv => {
        context.commit(types.SET_MENU_OBJ, csv)
        resolve()
      })
  },
  async setMenu ({ state, commit, dispatch }) {
    if (!state.dayObj) commit(types.SET_DAY_OBJ, {})
    if (state.fileName !== dairyFileName(state.dayObj)) {
      try {
        await dispatch('getCSV')
      } catch (e) {
        commit(types.SHOW_TITLE, { lunch: 'Error', rice: '' })
        commit(types.SHOW_PRICE, { lunch: '', rice: '' })
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
    commit(types.SHOW_TITLE, titleTmp)
    commit(types.SHOW_PRICE, priceTmp)
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

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
