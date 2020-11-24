<template>
  <div class="home_container">
    <div class="header">
      <div class="left"></div>
      <div class="search_box"></div>
      <div class="right"></div>
    </div>
    <div class="app_banner"></div>
    <div class="menu"></div>
    <div class=""></div>
    <div class="guess_you_like"></div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    }
  },
  // computed: {
  //   num() {
  //     return this.$store.state.num;
  //   }
  // },
  methods: {
    // addNum() {
    //   let r = Math.floor(Math.random() * 10);
    //   console.log(r);
    //   this.$store.commit('ADD_NUM', r)
    // }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  .header {
    width: 100%;
    height: 51px;
    background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    display: flex;
    align-items: center;
    .left {
      width: 80px;
      height: 51px;
      border: 1px solid #000;
    }
    .search_box {
      height: 51px;
      flex: 1;
      border: 1px solid #000;
    }
    .right {
      width: 50px;
      height: 51px;
      border: 1px solid #000;
    }
  }
}
</style>
