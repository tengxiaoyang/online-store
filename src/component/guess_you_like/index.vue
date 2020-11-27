<template>
  <div class="guess_you_like">
    <div class="title">猜你喜欢</div>
    <div class="item"
      v-for="(item, index) of guess_content" 
      :key="index"
    >
      <div class="left">
        <img :src="item.img" :alt="item.name">
      </div>
      <div class="right">
        <div class="name">{{item.name}}</div>
        <div class="place">{{item.place}}</div>
        <div class="bottom">
          <div class="price">
            <span class="num">{{item.price}}</span>
            <span class="text">元</span>
          </div>
          <div class="counter_price">
            <span class="text">门市价:</span>
            <span class="num">{{item.counter_price}}</span>
            <span class="cny">元</span>
          </div>
          <div class="sold">已售{{item.sold}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessYouLike',
  data() {
    return {
      guess_content: [
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 2,
          img: "http://p0.meituan.net/200.0/dpdeal/c809eeff91b68dd30bba4331a74f04ce105266.jpg",
          name: "琉璃SPA会所",
          place: "[小寨]古印度全身舒压单人套餐",
          price: "198",
          counter_price: "580",
          sold: "53"
        },
        {
          id: 3,
          img: "http://p0.meituan.net/200.0/deal/6ea0f91d768055182d84eec3239aed1b55246.jpg@0_0_959_959a%7C267h_267w_2e_90Q",
          name: "千家粗粮王",
          place: "[电子城]周一至周二自助餐/周三周四自助餐2选1",
          price: "57.1",
          counter_price: "69",
          sold: "114010"
        },
        {
          id: 4,
          img: "http://p1.meituan.net/200.0/deal/e6eb9d4073b702a0eec293d6380492f9106640.jpg",
          name: "保尔森自助海鲜烧烤",
          place: "[未央路沿线]周内单人自助晚餐/周六至周日全天2选1",
          price: "77.9",
          counter_price: "109",
          sold: "56938"
        },
        {
          id: 5,
          img: "http://p0.meituan.net/200.0/deal/f14a714b4e969d1c0ff28b8e5479ad5f163350.jpg@0_92_1080_1080a%7C267h_267w_2e_90Q",
          name: "大龙燚火锅",
          place: "[3店通用]100元代金券1张，可叠加",
          price: "88",
          counter_price: "100",
          sold: "224290"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        },
        {
          id: 1,
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
        }
      ]
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
.guess_you_like {
  width: 100%;
  margin: 11px 0 0 0;
  background: #fff;
  padding: 0 0 0 10px;
  .title {
    width: 100%;
    height: 42px;
    font-size: 17px;
    font-weight: 400;
    line-height: 44px; 
    border-bottom: 1px solid #DDD8CE;
  }
  .item {
    width: 100%;
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid #DDD8CE;
    .left {
      width: 90px;
      height: 82px;
      position: relative;
      bottom: 1px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      padding: 0 10px 0 9px;
      .name {
        font-size: 15px;
        font-weight: 400;
        margin: 1px 0 0 1px;
      }
      .place {
        font-size: 12px;
        font-weight: 400;
        color: #666;
        margin: 4px 0 0 1px;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        display: -webkit-box;
        /* -webkit-box-orient: vertical; */
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 1;
        overflow: hidden;
        white-space: normal;
      }
      .bottom {
        display: flex;
        position: relative;
        align-items: flex-end;
        margin: 21px 0 0 0;
        .price {
          display: flex;
          align-items: flex-end;
          height: 19px;
          .num {
            font-size: 18px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            line-height: 17px;
            color: #f60;
            margin: 0 0 0 1px;
          }
          .text {
            font-size: 12px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color: #f60;
            line-height: 13px;
          }
        }
        .counter_price {
          display: flex;
          position: relative;
          align-items: flex-end;
          margin: 0 0 0 4px;
          .text {
            font-size: 12px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color: #666;
            line-height: 13px;
          }
          .num {
            font-size: 12px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color: #666;
            line-height: 13px;
          }
          .cny {
            font-size: 12px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color: #666;
            line-height: 13px;
          }
        }
        .sold {
          font-size: 12px;
          font-weight: 400;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          line-height: 20px;
          flex: 1;
          text-align: end;
          color: #666;
        }
      }
    }
  }
}
</style>
