<template>
  <div class="frame">
    <h3>{{ topicST }}</h3>
    <h4>{{ title }}</h4>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'DairyMenuWindow',
  props: {
    topic: String
  },
  computed: {
    topicST: function () {
      if (this.topic === 'lunch') return '慶應ランチ'
      if (this.topic === 'rice') return 'ライスバラエティ'
      else return 'Error'
    },
    title: function () {
      return this.$store.getters.getTitle(this.topic)
    },
    price: function () {
      return this.$store.getters.getPrice(this.topic)
        ? '￥' + this.$store.getters.getPrice(this.topic)
        : ''
    }
  }
}
</script>

<style lang="less" >
.frame {
  position: relative;
  width: 350px;
  height: 140px;
  border: 2px solid #67a869;
  border-radius: 30px;
  margin: 20px 10px;
  h4 {
    font-weight: 300;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    font-size: 2em;
  }
  p {
    margin: 10px 2rem 0 0;
    text-align: right;
    font-size: 1.7rem;
  }

  h3 {
    position: absolute;
    top: -18px;
    left: 1em;
    display: block;
    margin: 0;
    padding: 0 0.5em;
    display: inline;
    background-color: #3f453f;
    font-size: 1.5rem;
    font-weight: 300;
  }
}
</style>
