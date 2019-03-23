<template>
  <div id="app">
    <header>
      <h2>慶應義塾高校学生食堂</h2>
      <h1>Green House</h1>
    </header>

    <DairyMenu/>
    <Menu/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import DairyMenu from './components/DairyMenu'

export default {
  name: 'app',
  components: { Menu, DairyMenu }
}
</script>

<style lang="less">
#app {
  font-family: "游ゴシック", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  background-color: #4a4a4a;
  color: #e6e6e6;
}
header {
  h2 {
    font-size: 1em;
    font-weight: 400;
    margin: 0 auto;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: #3eba2b;
    margin: 0 auto;
  }
}
</style>
