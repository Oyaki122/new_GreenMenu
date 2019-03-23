<template>
  <div id="Menu">
    <div class="headWrap">
      <h2>メニュー</h2>
      <section class="tabWrapper">
        <Tab
          v-for="category in categories"
          :WhichSelected="WhichSelected"
          :category="category"
          :key="category"
          @selectTab="tabClick(category)"
        />
      </section>
    </div>
    <section class="windowWrapper">
      <MenuWindow
        class="menuwindow"
        v-for="{title,price} in menus"
        :title="title"
        :price="price"
        :key="title"
      />
    </section>
  </div>
</template>

<script>
import MenuWindow from './Menu/MenuWindow.vue'
import Tab from './Menu/Tab.vue'
// import csvConvert from "../modules/csvConvert.js";

export default {
  name: 'Menu',
  components: {
    MenuWindow,
    Tab
  },
  data () {
    return {
      menus: [
        {
          category: '定食・カレー',
          title: 'カツ・唐揚げカレー',
          article: 'カツか唐揚げが選べます',
          price: '410'
        },
        {
          category: '定食・カレー',
          title: 'コロッケ・温玉カレー',
          article: 'コロッケか温玉が選べます',
          price: '380'
        },
        {
          category: '定食・カレー',
          title: 'カレーライス',
          article: '',
          price: '330'
        },
        {
          category: '定食・カレー',
          title: '唐揚げ定食',
          article: '',
          price: '460'
        },
        {
          category: 'ラーメン',
          title: 'あっさりラーメン',
          article: '醤油、塩、味噌が選べます',
          price: '340'
        },
        {
          category: 'ラーメン',
          title: 'こってりラーメン',
          article: '醤油、塩、味噌が選べます',
          price: '390'
        },
        {
          category: 'ラーメン',
          title: '野菜ラーメン',
          article: '醤油、塩、味噌が選べます',
          price: '310'
        },
        { category: 'ラーメン', title: '油そば', article: '', price: '440' },
        {
          category: 'ラーメン',
          title: '中華麺大盛り',
          article: '',
          price: '120'
        },
        {
          category: 'ラーメン',
          title: '油そば大盛り',
          article: '',
          price: '200'
        },
        {
          category: '和麺',
          title: 'たぬきうどん・そば',
          article: '',
          price: '310'
        },
        {
          category: '和麺',
          title: 'きつねうどん・そば',
          article: '',
          price: '310'
        },
        {
          category: '和麺',
          title: '月見うどん・そば',
          article: '',
          price: '310'
        },
        { category: '和麺', title: '釜玉うどん', article: '', price: '250' },
        {
          category: '和麺',
          title: '明太釜玉うどん',
          article: '',
          price: '310'
        },
        { category: '和麺', title: '和麺大盛り', article: '', price: '120' },
        {
          category: '軽食',
          title: 'セットA',
          article: 'ナゲットと飲み物のセット',
          price: '200'
        },
        {
          category: '軽食',
          title: 'セットB',
          article: 'コロッケと飲み物のセット',
          price: '200'
        },
        {
          category: '軽食',
          title: 'フライドポテト',
          article: '',
          price: '100'
        },
        { category: '' }
      ],
      categories: ['定食・カレー', 'ラーメン', '和麺', '軽食'],
      WhichSelected: '定食・カレー'
    }
  },
  methods: {
    tabClick: function (category) {
      this.WhichSelected = category
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
  justify-content: center;
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
</style>
