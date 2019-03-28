<template>
  <div
    class="Tab"
    @click="clicked"
    :class="{ selected: whichSelected === category }"
  >
    <p>{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  data () {
    return {
      // WhichSelected: "",
      // thisName: ""
    }
  },
  props: ['category'],
  computed: {
    whichSelected () {
      return this.$store.state.menu.whichSelected
    }
  },
  methods: {
    clicked () {
      // console.log(this.category)
      this.$store.commit('sortMenus', this.category)
    }
  }
}
</script>

<style scoped>
.Tab {
  margin: 10px 10px;
  border: solid 1px #3eba2b;
  border-radius: 30px;
  color: #e6e6e6;
  vertical-align: end;
  height: 2rem;
}
.selected {
  background-color: #3bb42b;
  color: #e6e6e6;
}
p {
  font-size: 23px;
  margin: 0 0.8rem;
  height: 2rem;
}
.Tab:hover {
  background-color: #3eba2b;
  color: white;
}
</style>
