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
  border-radius: 30px;
  background-color: #3f453f;
  color: white;
  vertical-align: end;
  height: 2rem;
}
.selected {
  background-color: #65a466;
  color: black;
  font-weight: 600;
}
p {
  font-size: 23px;
  margin: 0 0.8rem;
  height: 2rem;
}
.Tab:hover {
  background-color: rgb(103, 168, 105);
  color: black;
}
</style>
