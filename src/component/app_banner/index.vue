<template>
  <div class="app_banner">
    <div class="left">
      <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt="">
    </div>
    <div class="middle">
      <div class="inner">
        <span class="title">省钱利器 购物超划算</span>
        <span class="text">吃喝玩乐尽在美团</span>
      </div>
    </div>
    <div class="right">
      <div class="button">去APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  data() {
    return {
      
    }
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    }
  }
}
</script>

<style lang="less" scoped>
.app_banner {
  width: 100%;
  height: 51px;
  background: #000;
  display: flex;
  align-items: center;
  .left {
    width: 60px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 36px;
      display: inline-block;
      margin: 0 7px 0 13px;
    }
  }
  .middle {
    height: 51px;
    flex: 1;
    display: flex;
    .inner {
      width: 100%;
      height: 33px;
      margin: 8px 0 0 0;
      .title {
        display: block;
        font-size: 13px;
        color: #fff;
        font-weight: 400;
        height: 19px;
      }
      .text {
        display: block;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .right {
    width: 72px;
    height: 51px;
    display: flex;
    align-items: center;
    .button {
      width: 54px;
      height: 30px;
      display: inline-block;
      border-radius: 7px;
      margin: 0 0 0 2px;
      background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      line-height: 31px;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
  }
}
</style>
