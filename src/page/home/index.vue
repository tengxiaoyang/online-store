<template>
  <div class="home_container">
    <div class="header">
      <div class="left">
        <span>西安</span>
        <img src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png" alt="">
      </div>
      <div class="search_box">
        <div class="inner">
          <img src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt="">
          <span>请输入商家名、品类或者商圈...</span>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="app_banner"></div>
    <div class="menu"></div>
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
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        line-height: 15px;
        margin: 0 5px 0 0;
      }
      img {
        width: 8px;
        display: inline-block;
      }
    }
    .search_box {
      height: 51px;
      flex: 1;
      border: 1px solid #000;
      display: flex;
      align-items: center;
      .inner {
        width: 100%;
        height: 33px;
        border: 1px solid #000;
        background: #FFFFFF;
        border-radius: 11px;
        display: flex;
        align-items: center;
        opacity: 0.9;
        img {
          width: 14px;
          margin: 0 7px;
        }
        span {
          font-size: 14px;
        }
      }
    }
    .right {
      width: 50px;
      height: 51px;
      border: 1px solid #000;
    }
  }
}
</style>
