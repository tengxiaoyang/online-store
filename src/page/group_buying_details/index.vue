<template>
  <div class="group_buying_details">
    <div class="header">
      <div class="left" @click="route_to('/')">
        <div class="arrow"></div>
      </div>
      <div class="search_box">
        <div class="inner">
          <span>团购详情</span>
        </div>
      </div>
      <div class="right">
        <div class="return_home" 
          @click="route_to('/')"
        >
          <div class="icon"></div>
          <span class="name">收藏</span>
        </div>
        <div class="search" 
          @click="route_to('search')"
        >
          <div class="icon"></div>
          <span class="name">导航</span>
        </div>
      </div>
    </div>
    <AppBannerGreen></AppBannerGreen>
    <div class="product_info">
      <div class="main_img">
        <img src="http://p0.meituan.net/deal/340b857ba4d97eefd17372a2438ed23d100485.jpg" alt="">
        <div class="shadow"></div>
        <div class="title_and_type">
          <div class="title">鑫海汇海鲜烤肉火锅自助</div>
          <span class="product_type">单人自助晚餐</span>
        </div>
      </div>
      <div class="price_and_purchase">
        <div class="top">
          <div class="left">
            <div class="price">
              <span class="num">66.9</span>
              <span class="cny">元</span>
            </div>
            <div class="counter_price">门市价:86元</div>
          </div>
          <div class="right">
            <div class="purchase">立即抢购</div>
          </div>
        </div>
        <div class="bottom">
          <div class="refund_anytime"></div>
          <div class="automatic_refund"></div>
          <div class="sold"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBannerGreen from "../../component/AppBannerGreen";
export default {
  components: {
    AppBannerGreen
  },
  name: 'group_buying_details',
  data() {
    return {
      
    }
  },
  computed: {
    selected_city() {
      return this.$store.state.SelectedCity
    }
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    }
  },
  created(){
    //进入题目页面，开始计时
    // this.$store.commit('REMBER_TIME');
  },
  // filters: {
  //   capitalize: function(value) {
  //     return value.toUpperCase();
  //   }
  // }
}

</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 51px;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  display: flex;
  align-items: center;
  padding: 0 4px 0 0;
  .left {
    width: 53px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      position: relative;
      display: block;
      width: 22px;
      height: 22px;
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      transform: scaleY(0.8) rotateZ(45deg);
      margin: 0 0 0 6px;
    }
  }
  .left:active {
    background: #FFD000;
    filter: brightness(90%);
  }
  .search_box {
    height: 51px;
    flex: 1;
    display: flex;
    align-items: center;
    .inner {
      width: 100%;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 18px;
        font-weight: 400;
        color: #fff;
      }
    }
  }
  .right {
    width: 90px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    .return_home {
      width: 50%;
      height: 100%;
      .icon {
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
        background-position: 44px 0;
        background-size: 97px;
        width: 25px;
        height: 25px;
        margin: 8px auto 0;
      }
      .name {
        display: block;
        width: 100%;
        font-size: 12px;
        text-align: center;
        transform: scale(0.9);
        transform-origin: 50% 50%;
        color: #fff;
        font-weight: 400;
        position: relative;
        bottom: 2px;
      }
    }
    .search {
      width: 50%;
      height: 100%;
      .icon {
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
        background-position: 71px -26px;
        background-size: 97px;
        width: 25px;
        height: 25px;
        margin: 8px auto 0;
      }
      .name {
        display: block;
        width: 100%;
        font-size: 12px;
        text-align: center;
        transform: scale(0.9);
        transform-origin: 50% 50%;
        color: #fff;
        font-weight: 400;
        position: relative;
        bottom: 2px;
      }
    }
    // div {
    //   width: 50%;
    //   height: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   img {
    //     width: 24px;
    //     display: inline-block;
    //   }
    // }
    .return_home:active {
      background: #FFD000;
      filter: brightness(90%);
    }
    .search:active {
      background: #FFD000;
      filter: brightness(90%);
    }
  }
}
.product_info {
  position: relative;
  .main_img {
    width: 100%;
    height: 197px;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .shadow {
      height: 110px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.3) 64%, transparent);
    }
    .title_and_type {
      position: absolute;
      bottom: 0;
      padding: 14px;
      .title {
        color: #fff;
        font-weight: 800;
        font-size: 19px;
        margin: 6px 0;
      }
      .product_type {
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        display: block;
      }
    }
  }
}
.price_and_purchase {
  width: 100%;
  height: 100%;
  .top {
    .left {
      display: flex;
      align-items: center;
      height: 60px;
      .price {
        display: flex;
        margin: 0 0 0 9px;
        align-items: flex-end;
        .num {
          display: inline-block;
          color: #06c1ae;
          font-weight: 700;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 32px;
        }
        .cny {
          display: inline-block;
          color: #06c1ae;
          font-weight: 400;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 13px;
          margin: 0 0 3px 3px;
        }
      }
      .counter_price {
        margin: 14px 0 0 5px;
        display: inline-block;
        color: #999;
        font-weight: 400;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
      }
    }
    .right {

    }
  }
  .bottom {

  }
}
</style>
