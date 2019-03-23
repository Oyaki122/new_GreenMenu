
<template>
  <div class="MenuWindow">
    <h4>{{title}}</h4>
    <p>{{price}}円</p>
  </div>
</template>

<script>
export default {
  name: 'MenuWindow',
  props: ['title', 'price']
}
</script>

<style lang="less">
.MenuWindow {
  width: 300px;
  min-height: 126px;
  max-width: 80%;
  border: 1px solid #e6e6e6;
  border-radius: 30px;
  margin: 20px 10px;
  h4 {
    font-weight: 400;
    text-align: center;
    font-size: 28px;
    margin: 20px auto;
  }
  p {
    margin: 0px 2em 0 auto;
    width: 30%;
    text-align: right;
    font-size: 23px;
  }
}
</style>
