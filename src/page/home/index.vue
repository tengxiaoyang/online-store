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
      <div class="right">
        <img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt="">
      </div>
    </div>
    <AppBanner></AppBanner>
    <Menu></Menu>
    <GuessYouLike></GuessYouLike>
  </div>
</template>

<script>
import HttpClient from "../../config/ajax.js";
import AppBanner from "../../component/AppBanner";
import Menu from "../../component/Menu";
import GuessYouLike from "../../component/GuessYouLike";
export default {
  components: {
    AppBanner,
    Menu,
    GuessYouLike
  },
  name: 'home',
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
.home_container {
  background: #f0efed;
}

.header {
  width: 100%;
  height: 51px;
  background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  display: flex;
  align-items: center;
  .left {
    width: 76px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: inline-block;
      font-size: 14px;
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
    display: flex;
    align-items: center;
    .inner {
      width: 100%;
      height: 33px;
      background: #FFFFFF;
      border-radius: 11px;
      display: flex;
      align-items: center;
      opacity: 0.9;
      img {
        width: 14px;
        margin: 0 7px 0 14px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .right {
    width: 50px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      display: inline-block;
    }
  }
}
</style>
