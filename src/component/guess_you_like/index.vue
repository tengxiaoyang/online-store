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
          <div class="counter_price"
            :class="{ counter_price_orange: item.type === 'orange' }"
          >
            <span class="text">{{item.counter_price}}</span>
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
          counter_price: "门市价:86元",
          sold: "199313"
        },
        {
          id: 2,
          img: "http://p0.meituan.net/200.0/dpdeal/c809eeff91b68dd30bba4331a74f04ce105266.jpg",
          name: "琉璃SPA会所",
          place: "[小寨]古印度全身舒压单人套餐",
          price: "198",
          counter_price: "门市价:580元",
          sold: "53"
        },
        {
          id: 3,
          img: "http://p0.meituan.net/200.0/deal/6ea0f91d768055182d84eec3239aed1b55246.jpg@0_0_959_959a%7C267h_267w_2e_90Q",
          name: "千家粗粮王",
          place: "[电子城]周一至周二自助餐/周三周四自助餐2选1",
          price: "57.1",
          counter_price: "门市价:69元",
          sold: "114010"
        },
        {
          id: 4,
          img: "http://p1.meituan.net/200.0/deal/e6eb9d4073b702a0eec293d6380492f9106640.jpg",
          name: "保尔森自助海鲜烧烤",
          place: "[未央路沿线]周内单人自助晚餐/周六至周日全天2选1",
          price: "77.9",
          counter_price: "门市价:109元",
          sold: "56938"
        },
        {
          id: 5,
          img: "http://p0.meituan.net/200.0/deal/f14a714b4e969d1c0ff28b8e5479ad5f163350.jpg@0_92_1080_1080a%7C267h_267w_2e_90Q",
          name: "大龙燚火锅",
          place: "[3店通用]100元代金券1张，可叠加",
          price: "88",
          counter_price: "门市价:100元",
          sold: "224290"
        },
        {
          id: 6,
          img: "https://p0.meituan.net/200.0/dpmerchantpic/5c1a221ee820e7c4466cbbcedddd55d74824145.jpg",
          name: "哆啦乐图",
          place: "[钟楼/鼓楼]100币套餐",
          price: "80",
          counter_price: "门市价:100元",
          sold: "35431"
        },
        {
          id: 7,
          img: "http://p0.meituan.net/200.0/deal/5e3fce0b76bc01dc2e7c95fef9b9c602161902.jpg@269_0_1080_1080a%7C267h_267w_2e_90Q",
          name: "和谐港烧烤火锅海鲜自助",
          place: "[小寨]单人自助餐",
          price: "78",
          counter_price: "门市价:99元",
          sold: "304912"
        },
        {
          id: 8,
          img: "http://p1.meituan.net/200.0/deal/3874c41cb8756487564c1e25263862e8121539.jpg@174_0_586_586a%7C267h_267w_2e_90Q",
          name: "迈德思客",
          place: "[西安等]香辣鸡腿堡套餐，建议单人使用",
          price: "15",
          counter_price: "门市价:21.5元",
          sold: "744836"
        },
        {
          id: 9,
          img: "https://p1.meituan.net/200.0/dpmerchantpic/e32007a6c50be206220a3dc66052179e597769.jpg",
          name: "无忧行汽车陪练",
          place: "[朱雀门]无忧行汽车陪练（2小时优惠体验自动挡）",
          price: "69",
          counter_price: "门市价:150元",
          sold: "5378"
        },
        {
          id: 10,
          img: "https://p1.meituan.net/200.0/dpmerchantpic/7a60ff154d6dd0bc9d43215cd3134429212151.jpg",
          name: "本草灸中医康复理疗",
          place: "[3店通用]（新客福利）背部/肩颈养护疏通调理",
          price: "78",
          counter_price: "品牌新用户减10元",
          sold: "3196",
          type: "orange"
        },
        {
          id: 11,
          img: "http://p1.meituan.net/200.0/deal/51e61e9df96869fc8d527aeb2aed42e5115848.jpg@126_0_388_388a%7C267h_267w_2e_100Q",
          name: "书亦烧仙草",
          place: "[西安等]书亦烧仙草（大杯）1杯",
          price: "9.9",
          counter_price: "多优惠+",
          sold: "4329313",
          type: "orange"
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
        }
        .counter_price_orange {
          display: flex;
          position: relative;
          align-items: flex-end;
          margin: 0 0 0 4px;
          border: 1px solid #f90;
          position: relative;
          top: 3px;
          border-radius: 3px;
          .text {
            font-size: 13px;
            font-weight: 400;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #f90;
            line-height: 13px;
            transform: scale(0.9);
            line-height: 17px;
            height: 18px;
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
