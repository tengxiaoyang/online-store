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
          <div class="refund_anytime">
            <span class="icon"></span>
            <span class="text">支持随时退款</span>
          </div>
          <div class="automatic_refund">
            <span class="icon"></span>
            <span class="text">支持过期自动退</span>
          </div>
          <div class="sold">
            <span class="icon"></span>
            <span class="text">已售199483</span>
          </div>
        </div>
      </div>
    </div>
    <div class="evaluate">
      <div class="top">
        <div class="stars">
          <i class="star-orange"></i>
          <i class="star-orange"></i>
          <i class="star-orange"></i>
          <i class="star-orange"></i>
          <i class="star-grey"></i>
        </div>
        <div class="score">4.1</div>
        <div class="evaluator">
          <span>17660人评价</span>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="bottom">
        <a class="tag" 
          :class="{
            'tag-orange': item.type === 'orange', 
            'tag-grey': item.type === 'grey'
          }"
          href="item.href" 
          v-for="(item, index) of tag_content" 
          :key="index"
        >{{item.name}}{{item.count}}</a>
      </div>
    </div>
    <div class="business_info">
      <div class="top">商家信息</div>
      <div class="bottom">
        <div class="left">
          <div class="name">鑫海汇海鲜烤肉火锅自助（立丰国际店）</div>
          <div class="position">碑林区金花南路6号立丰国际购物广场6层</div>
          <div class="nearest_to_me">
            <div class="icon"></div>
            <span class="text">离我最近</span>
          </div>
        </div>
        <div class="right">
          <div class="make_a_call_container">
            <div class="make_a_call"></div>
          </div>
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
      tag_content: [
        {
          name: "回头客",
          count: "835",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "orange"
        },
        {
          name: "海鲜棒",
          count: "390",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "orange"
        },
        {
          name: "朋友聚餐",
          count: "126",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "grey"
        },
        {
          name: "不用排队",
          count: "98",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "orange"
        },
        {
          name: "家庭聚餐",
          count: "69",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "grey"
        },
        {
          name: "上菜快",
          count: "49",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "orange"
        },
        {
          name: "停车方便",
          count: "24",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "orange"
        },
        {
          name: "请客",
          count: "13",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "grey"
        },
        {
          name: "公司聚餐",
          count: "5",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "grey"
        },
        {
          name: "店内消毒",
          count: "1",
          href: "https://i.meituan.com/deal/29242714/feedback?label=%E5%9B%9E%E5%A4%B4%E5%AE%A2&stid=019032296837928515275757042931456002187_c0_e2f22a965f9d1f211cd684b828e874a4e",
          type: "grey"
        },
      ]
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
.group_buying_details {
  background: #f0f0f0;
  height: 100%;
}
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
  .price_and_purchase {
    width: 100%;
    height: 100%;
    .top {
      display: flex;
      background: #fff;
      .left {
        flex: 1;
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
        width: 140px;
        display: flex;
        align-items: center;
        height: 60px;
        .purchase {
          background: #f90;
          width: 130px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          color: #fff;
          border-radius: 3px;
          font-size: 20px;
          font-weight: 400;
        }
      }
    }
    .bottom {
      padding: 17px 9px;
      height: 100%;
      overflow: hidden;
      background: #fff;
      margin: 1px 0 0 0;
      .refund_anytime {
        width: 50%;
        float: left;
        display: flex;
        height: 30px;
        .icon {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 208px 23px;
          background-size: 115px;
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
        .text {
          color: #6bbd00;
          font-size: 14px;
          font-weight: 400;
          vertical-align: middle;
          margin: 0 0 0 3px;
        }
      }
      .automatic_refund {
        width: 50%;
        float: left;
        display: flex;
        height: 30px;
        .icon {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 185px 23px;
          background-size: 115px;
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
        .text {
          color: #6bbd00;
          font-size: 14px;
          font-weight: 400;
          vertical-align: middle;
          margin: 0 0 0 3px;
        }
      }
      .sold {
        width: 50%;
        float: left;
        display: flex;
        height: 30px;
        .icon {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 162px 23px;
          background-size: 115px;
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
        .text {
          color: #666;
          font-size: 14px;
          font-weight: 400;
          vertical-align: middle;
          margin: 0 0 0 3px;
        }
      }
    }
  }
}
.evaluate {
  width: 100%;
  height: 100%;
  margin: 11px 0 0 0;
  .top {
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    .stars {
      display: flex;
      align-items: center;
      margin: 0 0 0 8px;
      .star-orange {
        background: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@da8f38f);
        background-size: 16px;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin: 0 1px;
      }
      .star-grey {
        background: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/e076efca46320452.png@da8f38f);
        background-size: 16px;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin: 0 1px;
      }
    }
    .score {
      color: #fa952f;
      font-size: 14px;
      font-weight: 400;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      line-height: 50px;
      margin: 0 0 0 6px;
    }
    .evaluator {
      flex: 1;
      text-align: right;
      display: flex;
      align-items: center;
      span {
        flex: 1;
        color: #999;
        font-size: 14px;
        font-weight: 400;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0 0 0 6px;
      }
      .arrow {
        position: relative;
        display: block;
        width: 11px;
        height: 11px;
        border-left: 3px solid #999;
        border-bottom: 3px solid #999;
        -ms-transform: scaleY(0.7) rotate(-135deg);
        transform: scaleY(0.7) rotateZ(-135deg);
        margin: 0 12px 0 4px;
      }
    }
  }
  .bottom {
    width: 100%;
    background: #fff;
    margin: 1px 0 0 0;
    overflow: hidden;
    padding: 6px 5px 14px;
    .tag {
      border-radius: 3px;
      font-size: 14px;
      font-weight: 400;
      display: block;
      height: 30px;
      line-height: 30px;
      float: left;
      margin: 4px 3px;
      padding: 0 5px;
    }
    .tag-grey {
      border: 1px solid #acacac;
      color: #999;
    }
    .tag-orange {
      border: 1px solid #fdb338;
      color: #fdb338;
    }
  }
}
.business_info {
  margin: 11px 0 0 0;
  .top {
    background: #fff;
    font-size: 17px;
    font-weight: 400;
    padding: 6px 9px;
  }
  .bottom {
    width: 100%;
    height: 100%;
    margin: 1px 0 0 0;
    display: flex;
    padding: 10px 10px;
    background: #fff;
    .left {
      max-width: calc(100% - 68px);
      flex: 1;
      line-height: 26px;
      .name {
        font-size: 16px;
        font-weight: 800;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .position {
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nearest_to_me {
        display: flex;
        align-items: center;
        .icon {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 18px 18px;
          background-size: 85px;
          width: 18px;
          height: 18px;
        }
        .text {
          display: block;
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #eb8706;
          margin: 0 0 0 4px;
        }
      }
    }
    .right {
      width: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      .make_a_call_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 70%;
        border-left: 1px solid #ddd8ce;
        .make_a_call {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 35px 52px;
          background-size: 75px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
