<template>
  <div id="DairyMenu">
    <section class="head">
      <back-btn />
      <p class="calendar">{{ month }}/{{ date }}({{ dayConvert() }})</p>
      <next-btn />
    </section>
    <section class="menuWindows">
      <menu-frame topic="lunch" />
      <menu-frame topic="rice" />
    </section>
  </div>
</template>

<script>
import backBtn from './Dairy/backBtn.vue'
import nextBtn from './Dairy/nextBtn.vue'
import MenuFrame from './Dairy/DairyFrame.vue'
import * as types from '../store/mutation_types.js'

export default {
  name: 'DairyMenu',
  components: {
    backBtn,
    nextBtn,
    MenuFrame
  },

  created: function () {
    this.$store.commit(types.SET_DAY_OBJ, {})
    this.$store.dispatch('setMenu')
  },
  methods: {
    dayConvert: function () {
      var days = ['日', '月', '火', '水', '木', '金', '土']
      return days[this.day]
    }
  },
  computed: {
    month: function () {
      return this.$store.state.dayObj.getMonth() + 1
    },
    date: function () {
      return this.$store.state.dayObj.getDate()
    },
    day: function () {
      return this.$store.state.dayObj.getDay()
    },
    MenuData: function () {
      return this.$store.state.menuObj
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  max-width: 700px;
  margin: 1rem auto 1rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
}
.calendar {
  font-size: 3em;
  margin: 0;
  flex-shrink: 2;
}

Yesterday {
  flex-shrink: 1;
}
Tomorrow {
  flex-shrink: 1;
}
.menuWindows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
}
</style>
