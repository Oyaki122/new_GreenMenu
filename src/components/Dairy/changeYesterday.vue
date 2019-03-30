<template>
  <div class="changeYesterday" @click="clicked()">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 92 40"
    >
      <path
        d="M20,0 L92,0 L92,40 L20,40 "
        fill="none"
        stroke="#f5fcf5"
        stroke-width="3px"
      ></path>
      <path
        d="M 20,40 L0 20 L20 0 "
        fill="none"
        stroke="#f5fcf5"
        stroke-width="2px"
      ></path>
      <text
        x="30"
        y="30"
        font-family="游ゴシック"
        font-size="24"
        fill="#f5fcf5"
      >
        前日
      </text>
    </svg>
    <!-- <div class="text">前日</div> -->
  </div>
</template>

<script>
import * as types from '../../store/mutation_types.js'
export default {
  name: 'changeYesterday',
  data () {
    return {}
  },
  methods: {
    clicked () {
      const dayTmp = this.$store.state.dayObj
      dayTmp.setDate(dayTmp.getDate() - 1)
      this.$store.commit(types.SET_DAY_OBJ, {
        newDayObj: dayTmp,
        direction: 0
      })
      this.$store.dispatch('setMenu')
    }
  }
}
</script>

<style lang="less">
.changeYesterday {
  max-width: 92px;
  max-height: 40px;
  position: relative;
  margin-bottom: 1em;
  width: 20vw;
  height: auto;
  user-select: none;
}
.button {
  stroke: #f5fcf5;
}

svg {
  max-width: 92px;
  max-height: 40px;
  width: 20vw;
  height: auto;
}
.changeYesterday:click {
  opacity: 0.5;
}
</style>
