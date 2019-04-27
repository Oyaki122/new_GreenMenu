<template>
  <div id="Menu">
    <div class="headWrap">
      <h2>メニュー</h2>
      <section class="tabWrapper">
        <Tab category="すべて" />
        <Tab
          v-for="category in categories"
          :category="category"
          :key="category"
          @selectTab="tabClick(category)"
        />
      </section>
    </div>
    <hr />
    <section class="windowWrapper">
      <menu-frame
        class="menuwindow"
        v-for="{ title, price } in menus"
        :title="title"
        :price="price"
        :key="title"
      />
    </section>
  </div>
</template>

<script>
import MenuFrame from './Menu/MenuFrame.vue'
import Tab from './Menu/Tab.vue'
// import csvConvert from "../modules/csvConvert.js";

export default {
  name: 'Menu',
  components: {
    MenuFrame,
    Tab
  },

  created () {
    this.$store.dispatch('getCSV')
  },
  methods: {
    tabClick: function (category) {
      this.WhichSelected = category
    }
  },
  computed: {
    categories () {
      return this.$store.state.menu.categories
    },
    menus () {
      return this.$store.state.menu.showingMenus
    }
  }
}
</script>

<style lang="less" scoped>
.headWrap {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 50px;
}
h2 {
  font-weight: 400;
  margin: 0 40px;
  font-size: 47px;
}
.windowWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.tabWrapper {
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: auto;
  white-space: nowrap;
}
.windowWrapper::before {
  content: "";
  display: block;
  width: 300px;
  margin: 20px 10px;
  order: 1;
}
.windowWrapper::after {
  content: "";
  display: block;
  width: 300px;
  margin: 20px 10px;
}
hr {
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>
