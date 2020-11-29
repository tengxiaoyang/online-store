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
          id: 12,
          img: "https://p1.meituan.net/200.0/dpmerchantpic/602d145ef6d704d00262c79431aaa761111877.jpg",
          name: "盼盼日系美甲美睫半永久",
          place: "[2店通用]【超值人气】手部纯色/跳色/小水钻",
          price: "50",
          counter_price: "减25元",
          sold: "2742",
          type: "orange"
        },
        {
          id: 13,
          img: "https://p0.meituan.net/200.0/dpmerchantpic/56d151429ad603edb6c12189db96f40626470.jpg",
          name: "仁元棠推拿馆",
          place: "[丈八]《臻享》胃胀嗳气专项调理",
          price: "168",
          counter_price: "门市价:216元",
          sold: "415"
        },
        {
          id: 14,
          img: "http://p0.meituan.net/200.0/dpdeal/08439ef0f74d588a18bccfdf61ebc5b5391955.png",
          name: "PL hair salon无痕接发",
          place: "[2店通用]品质烫染2选一含护理(你不满意我买单)",
          price: "388",
          counter_price: "减8元",
          sold: "778",
          type: "orange"
        },
        {
          id: 15,
          img: "http://p0.meituan.net/200.0/dpdeal/beb56c6fe38225e56c61ffe8d75c76db437877.jpg",
          name: "梦想纹身刺青工作室",
          place: "[未央路沿线]单人小图案套餐",
          price: "100",
          counter_price: "门市价:499元",
          sold: "661"
        },
        {
          id: 16,
          img: "https://p0.meituan.net/200.0/merchantpic/4a3c51e5da98aabf202af2c3dea70b49276033.jpg",
          name: "天香丽美甲美睫化妆",
          place: "[4店通用]进口水貂毛 睫毛嫁接/种睫毛 不限密度和款式",
          price: "198",
          counter_price: "减40元",
          sold: "579",
          type: "orange"
        },
        {
          id: 17,
          img: "http://p0.meituan.net/200.0/deal/__44275781__5150758.jpg",
          name: "顶牛兰州牛肉拉面",
          place: "[金花路沿线]拉面套餐，建议单人使用",
          price: "9.88",
          counter_price: "门市价:12元",
          sold: "156623"
        },
        {
          id: 18,
          img: "http://p0.meituan.net/200.0/dpdeal/8cae091171edbab352f8278b25dc4186790625.jpg",
          name: "LilyTime专业美甲美睫半永久皮肤管理",
          place: "[2店通用]【人气】ins风精致美甲造型套餐",
          price: "89",
          counter_price: "减30元",
          sold: "3920",
          type: "orange"
        },
        {
          id: 19,
          img: "http://p0.meituan.net/200.0/dpdeal/596c1d5b6e43890c0c546b3fe4d77bf0205959.png",
          name: "磨磨脱逆龄时光美学中心",
          place: "[2店通用]单人比基尼上/侧三次套餐2选1",
          price: "129",
          counter_price: "减60元",
          sold: "62",
          type: "orange"
        },
        {
          id: 20,
          img: "http://p0.meituan.net/200.0/deal/e812ae993fe8c37166b70cdd6f9b39a148507.jpg@120_0_400_400a%7C267h_267w_2e_100q",
          name: "吸血鬼猫咪餐厅",
          place: "[小寨]3人牛排套餐，包间免费",
          price: "178",
          counter_price: "门市价:578元",
          sold: "1009"
        },
        {
          id: 21,
          img: "http://p1.meituan.net/200.0/deal/d57b348e3e4b2ba6d401cd700da0e450171479.jpg@525_0_1617_1617a%7C267h_267w_2e_90Q",
          name: "一只酸奶牛",
          place: "[西安等]紫米露系列3选1",
          price: "10.8",
          counter_price: "门市价:12元",
          sold: "583555"
        },
        {
          id: 22,
          img: "http://p0.meituan.net/200.0/dpdeal/08ebd2bf79e4fe927041f25ef45e6d79173510.jpg",
          name: "静心美容养生全国连锁",
          place: "[4店通用]单人特色面部水疗+淋巴调理+面膜",
          price: "69.9",
          counter_price: "门市价:298元",
          sold: "1381"
        },
        {
          id: 23,
          img: "http://p1.meituan.net/200.0/deal/3874c41cb8756487564c1e25263862e8121539.jpg@174_0_586_586a%7C267h_267w_2e_90Q",
          name: "迈德思客",
          place: "[西安等]香辣鸡腿堡套餐，建议单人使用",
          price: "15",
          counter_price: "门市价:21.5元",
          sold: "744723"
        },
        {
          id: 24,
          img: "http://p0.meituan.net/200.0/dpdeal/b413aae654c785481fbc63bfde1be8c1250142.jpg",
          name: "苗谣姿然专业祛痘旗舰店",
          place: "[小寨]单人淡化痘印/深层补水/去黑头深层清洁3选1套餐",
          price: "68",
          counter_price: "门市价:498元",
          sold: "204"
        },
        {
          id: 25,
          img: "http://p0.meituan.net/200.0/deal/f0e987f7be1302ab6aa0e29c656bb44c36518.jpg",
          name: "百富烤霸",
          place: "[西安等]烤鸡堡单人餐，提供免费WiFi",
          price: "19",
          counter_price: "门市价:41.5元",
          sold: "283118"
        },
        {
          id: 26,
          img: "https://p0.meituan.net/200.0/merchantpic/093af73a31fc95dfcf8fd68f7d1fd56c315199.jpg",
          name: "铭雕·专业纹身店",
          place: "[2店通用]【高端定制】60*60mm精致纹身",
          price: "198",
          counter_price: "门市价:3677元",
          sold: "585"
        },
        {
          id: 27,
          img: "http://p0.meituan.net/200.0/dpdeal/5e4a1d594e904660ea8edfea6ac68e0e3238988.jpg",
          name: "福灸堂艾灸推拿养生馆",
          place: "[二府庄]9选1艾灸+推拿+头疗体验套餐",
          price: "98",
          counter_price: "门市价:128元",
          sold: "803"
        },
        {
          id: 28,
          img: "https://p1.meituan.net/200.0/dpmerchantpic/c3c6b0631af6a5c1d4cc32a2652c985c108844.jpg",
          name: "依依专业脱毛连锁机构",
          place: "[西安等]单人双腋下脱毛",
          price: "2",
          counter_price: "门市价:400元",
          sold: "6118"
        },
        {
          id: 29,
          img: "http://p0.meituan.net/200.0/deal/c6db2cb3359fa6313dc5a5c979362ea469968.jpg@133_0_533_533a%7C267h_267w_2e_90Q",
          name: "抚小鲜蒸汽石锅鱼",
          place: "[5店通用]100元代金券1张，可叠加",
          price: "95",
          counter_price: "门市价:100元",
          sold: "51361"
        },
        {
          id: 30,
          img: "http://p0.meituan.net/200.0/dpdeal/4c770e6d0a65436603754a92337dc24d157729.jpg",
          name: "Best形象照完美证件照",
          place: "[省体育场]个人形象照",
          price: "118",
          counter_price: "品牌新用户减4.99元",
          sold: "2135",
          type: "orange"
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
