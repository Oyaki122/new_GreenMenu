<template>
  <div id="app">
    <header>
      <h2>慶應義塾高校学生食堂</h2>
      <h1>Green House</h1>
    </header>

    <DairyMenu />
    <Menu />

    <footer>2019 慶應義塾高等学校生徒会 All Rights Reserved</footer>
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
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  background-color: #3f453f;
  color: #f5fcf5;
  display: flex;
  flex-direction: column;
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
    text-shadow: 1px 1px 0 #217424, -1px 1px 0 #217424, 1px -1px 0 #217424,
      -1px -1px 0 #217424;
    color: #f5fcf5;
    margin: 0 auto;
  }
}
footer {
  bottom: 0;
  margin: 0 auto;
  margin-top: auto;
  text-align: center;
}
</style>
