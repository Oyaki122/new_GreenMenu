<template>
  <div class="changeTomorrow" @click="clicked()">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 92 40"
    >
      <path
        d="M72,0 L0,0 0,40 72,40 "
        fill="none"
        stroke="#f5fcf5"
        stroke-width="3px"
      ></path>
      <path
        d="M72,0 L92,20 72,40 "
        fill="none"
        stroke="#f5fcf5"
        stroke-width="2px"
      ></path>
      <text
        x="15"
        y="30"
        font-family="游ゴシック"
        font-size="24"
        fill="#f5fcf5"
      >
        翌日
      </text>
    </svg>
  </div>
</template>

<script>
import * as types from '../../store/mutation_types.js'
export default {
  name: 'changeTomorrow',
  data () {
    return {}
  },
  methods: {
    clicked () {
      const dayTmp = this.$store.state.dayObj
      dayTmp.setDate(dayTmp.getDate() + 1)
      this.$store.commit(types.SET_DAY_OBJ, {
        newDayObj: dayTmp,
        direction: 1
      })
      this.$store.dispatch('setMenu')
    }
  }
}
</script>

<style lang="less">
.changeTomorrow {
  max-width: 92px;
  max-height: 40px;
  width: 20vw;
  height: auto;
  position: relative;
  margin-bottom: 1em;
  user-select: none;
}
.button {
  stroke: black;
}
.text {
  position: absolute;
  top: 0px;
  left: 15px;
  font-size: 24px;
}
svg {
  max-width: 92px;
  max-height: 40px;
  width: 20vw;
  height: auto;
}
.changeTomorrow:active {
  opacity: 0.5;
}
</style>
