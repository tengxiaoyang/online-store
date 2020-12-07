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
          <div class="title">{{product_name}}</div>
          <span class="product_type">单人自助晚餐</span>
        </div>
      </div>
    </div>
    <div class="price_and_purchase_top">
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
    <div class="price_and_purchase">
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
    <div class="evaluate">
      <div class="top">
        <div class="stars">
          <i 
            :class="{
              'star-orange': overall_score >= 1,
              'star-grey': overall_score < 1,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 2,
              'star-grey': overall_score < 2,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 3,
              'star-grey': overall_score < 3,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 4,
              'star-grey': overall_score < 4,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 5,
              'star-grey': overall_score < 5,
            }"
          ></i>
        </div>
        <div class="score">{{overall_score}}</div>
        <div class="evaluator">
          <span>{{num_of_evaluations}}人评价</span>
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
    <div class="set_meal">
      <div class="title">套餐</div>
      <div class="content">
        <div class="left">单人自助晚餐</div>
        <div class="middle">1 位</div>
        <div class="right">86元</div>
      </div>
      <div class="comments">
        <div class="title">备注</div>
        <div class="content">
          <ul>
            <li
              v-for="(item, index) of comment_content" 
              :key="index"
            >
              <div class="point"></div>
              <span>
                {{item.text}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="view_graphic_details">
        <span class="text">查看图文详情</span>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="purchase_notes">
      <div class="title">购买须知</div>
      <div class="indate">
        <div class="name">有效期</div>
        <div class="content">
          <ul>
            <li>
              <span>
                {{indate_content}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="service_regulations">
        <div class="name">使用规则</div>
        <div class="content">
          <ul>
            <li
              v-for="(item, index) of service_regulations_content" 
              :key="index"
            >
              <div class="point"></div>
              <span>
                {{item.text}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="concrete_evaluation">
      <div class="title" id="concrete_evaluation_title">
        <span>评价</span>
        <div class="stars">
          <i 
            :class="{
              'star-orange': overall_score >= 1,
              'star-grey': overall_score < 1,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 2,
              'star-grey': overall_score < 2,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 3,
              'star-grey': overall_score < 3,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 4,
              'star-grey': overall_score < 4,
            }"
          ></i>
          <i 
            :class="{
              'star-orange': overall_score >= 5,
              'star-grey': overall_score < 5,
            }"
          ></i>
        </div>
        <div class="score">{{overall_score}}</div>
      </div>
      <div class="content">
        <div class="item"
          v-for="(item, index) of evaluation_content" 
          :key="index"
        >
          <div class="user">
            <div class="left">
              <img :src="item.icon" alt="">
            </div>
            <div class="right">
              <div class="top">{{item.name}}</div>
              <div class="bottom">
                <div class="stars">
                  <i 
                    :class="{
                      'star-orange': item.score >= 1,
                      'star-grey': item.score < 1,
                    }"
                  ></i>
                  <i 
                    :class="{
                      'star-orange': item.score >= 2,
                      'star-grey': item.score < 2,
                    }"
                  ></i>
                  <i 
                    :class="{
                      'star-orange': item.score >= 3,
                      'star-grey': item.score < 3,
                    }"
                  ></i>
                  <i 
                    :class="{
                      'star-orange': item.score >= 4,
                      'star-grey': item.score < 4,
                    }"
                  ></i>
                  <i 
                    :class="{
                      'star-orange': item.score >= 5,
                      'star-grey': item.score < 5,
                    }"
                  ></i>
                </div>
                <div class="date">{{item.date}}</div>
              </div>
            </div>
          </div>
          <div class="text">{{item.text}}</div>
          <div class="photo_container">
            <img :src="photo_item.url" alt="" 
              v-for="(photo_item, photo_index) of item.photo" 
              :key="photo_index"
            >
          </div>
          <div class="position"></div>
        </div>
      </div>
      <div class="view_all_reviews">
        <span class="text">查看全部{{num_of_evaluations}}条评价</span>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="related_suggestion">
      <div class="title">
        <span>[{{product_name}}]相关推荐</span>
      </div>
      <div class="content">
        <div class="item"
          v-for="(item, index) of suggestion_content" 
          :key="index"
        >
          <div class="left">
            <span></span>
          </div>
          <div class="right">
            <div class="title">[{{item.position}}]{{item.name}}</div>
            <div class="bottom">
              <div class="price">
                <span class="num">{{item.price}}</span>
                <span class="text">元</span>
              </div>
              <div class="counter_price">
                <span class="text">门市价:{{item.counter_price}}元</span>
              </div>
              <div class="sold">已售{{item.sold}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="guess_you_like">
      <div class="title">
        <span class="left">看了本团购的用户还看了</span>
        <span class="right">广告</span>
      </div>
      <GuessYouLike  
        v-for="(guess_content_item, guess_content_index) of guess_content" 
        :key="guess_content_index"
        :guess_content="guess_content_item"
      ></GuessYouLike>
    </div>
    <div class="current_position">当前位置：{{selected_city}}团购 > {{product_name}}团购</div>
    <Footer></Footer>
    <div
      :class="{ 
        hide_back_to_top:!show_back_to_top,
        back_to_top:show_back_to_top
      }"
    ></div>
  </div>
</template>

<script>
import AppBannerGreen from "../../component/AppBannerGreen";
import GuessYouLike from "../../component/GuessYouLike";
import Footer from "../../component/Footer";
export default {
  components: {
    AppBannerGreen,
    GuessYouLike,
    Footer
  },
  name: 'group_buying_details',
  data() {
    return {
      product_name: "鑫海汇海鲜烤肉火锅自助",
      overall_score: 4.1,
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
      ],
      comment_content: [
        {
          text: "单人自助晚餐：17:00-22:00"
        },
        {
          text: "为了响应“光盘”号召和避免浪费，就餐前每位需10元押金，餐后无浪费将会全部退还"
        }
      ],
      indate_content: "2015.5.12 至 2020.12.15 23:59（周末、法定节假日通用）",
      service_regulations_content: [
        {
          text: "每张美团券最多1位成人使用，身高1.2米以上儿童计入人数"
        },
        {
          text: "无需预约，消费高峰期可能需要等位"
        },
        {
          text: "1.2米以下儿童免费，1.2-1.4米儿童46元/位，1.4米以上儿童全票"
        },
        {
          text: "65岁以上持有效证件46元/位"
        },
        {
          text: "寿星凭有效证件46元元/位"
        },
        {
          text: "购买用户不可同时享受商家其他优惠"
        },
        {
          text: "部分菜品因时令原因有所不同，请以店内当日实际供应为准"
        },
        {
          text: "使用优惠券购买团单，有效期以优惠券规则为准"
        },
        {
          text: "商家提供免费WiFi"
        }
      ],
      evaluation_content: [
        {
          icon: "https://img.meituan.net/avatar/71f6812a9354513c977da2babc5e9c5558645.jpg@148w_148h_1e_1c",
          name: "wlxstb",
          score: 5,
          date: "2020-12-04",
          text: "经常吃的一家自助餐厅，位置好，交通便利，食材品种多，味道好！",
          photo: [
            {
              url: "http://p1.meituan.net/shaitu/f6a244a8ce809fd9b6d42070b91f1d0f3181202.jpg@220w_220h_1e_1c"
            },
            {
              url: "http://p0.meituan.net/shaitu/e572b9760ba007b5aa8960b45a82df2f2549946.jpg@220w_220h_1e_1c"
            }
          ],
          position: "鑫海汇海鲜烤肉火锅自助（立丰国际店）"
        },
        {
          icon: "http://p1.meituan.net/mmc/9eb02e99626203347ba0237ac7699f924241.png@148w_148h_1e_1c",
          name: "扑通c",
          score: 5,
          date: "2020-11-13",
          text: "菜的种类还挺多的，周内吃也很划算。离得也比较近，但下午的菜感觉很多不是很新鲜了，可能是周内人比较少的原因。总体来说性价比还行，可可可可可可可可可可可可可可可可可",
          photo: [
            {
              url: "http://p0.meituan.net/shaitu/4b4a4c7c86a46aa2ad71c05d46777d8c286096.jpg@220w_220h_1e_1c"
            },
            {
              url: "http://p0.meituan.net/shaitu/373d4409855bc302ae319a79bb99f228412831.jpg@220w_220h_1e_1c"
            }
          ],
          position: "鑫海汇海鲜烤肉火锅自助（立丰国际店）"
        },
        {
          icon: "http://p1.meituan.net/mmc/e663563d638f3f2c56274e28ac949a143761.png@148w_148h_1e_1c",
          name: "jXz945385036",
          score: 5,
          date: "2020-12-04",
          text: "第一次来，服务态度很好，菜品丰盛，很赞",
          photo: [
            {
              url: "http://p1.meituan.net/shaitu/11c752ea1f1063ad5f628301aa1b0e8a3432519.jpg@220w_220h_1e_1c"
            }
          ],
          position: "鑫海汇海鲜烤肉火锅自助（立丰国际店）"
        }
      ],
      num_of_evaluations: 17663,
      suggestion_content: [
        {
          position: "立丰国际",
          name: "周内单人自助午餐",
          price: 59.9,
          counter_price: 76,
          sold: 43657
        },
        {
          position: "电视台/会展中心",
          name: "单人自助餐",
          price: 59,
          counter_price: 99,
          sold: 1024
        },
        {
          position: "立丰国际",
          name: "单人晚餐自助",
          price: 66.9,
          counter_price: 85,
          sold: 163453
        },
        {
          position: "立丰国际",
          name: "学生单人自助餐",
          price: 54.9,
          counter_price: 85,
          sold: 5919
        },
        {
          position: "交大东校区/理工大",
          name: "学生专用特惠周内自助餐",
          price: 49,
          counter_price: 69,
          sold: 648
        },
        {
          position: "交大东校区/理工大",
          name: "周内晚市",
          price: 57.1,
          counter_price: 69,
          sold: 1535
        },
        {
          position: "交大东校区/理工大",
          name: "周六周日法定节假日通用",
          price: 57.1,
          counter_price: 69,
          sold: 8022
        },
        {
          position: "曲江新区",
          name: "周内自助/周末及节假日2选1",
          price: 56.9,
          counter_price: 59,
          sold: 126548
        }
      ],
      guess_content: [
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
      ],
      show_back_to_top: false
    }
  },
  computed: {
    selected_city() {
      return this.$store.state.SelectedCity
    }
  },
  mounted() {
    // this.swiper.slideTo(1, 0, false)
    window.addEventListener('scroll', this.set_back_to_top)
  },
  destroyed() {
    window.removeEventListener('scroll', this.set_back_to_top)
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    },
    set_back_to_top() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector("#concrete_evaluation_title").offsetTop;
      if (scrollTop > offsetTop) {
        this.show_back_to_top = true;
      } else {
        this.show_back_to_top = false;
      };
      console.log(scrollTop)
      console.log(offsetTop)
      console.log(this.show_back_to_top)
    }
  },
  created(){
    // window.scrollTo({
    //   'top': 0,
    //   // 'behavior': 'smooth'
    // });
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
}
.price_and_purchase_top {
  display: flex;
  background: #fff;
  position: sticky;
  top: -1px;
  z-index: 3;
  border-bottom: 1px solid #f0f0f0;
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
.price_and_purchase {
  width: 100%;
  height: 100%;
  .bottom {
    padding: 17px 9px;
    height: 100%;
    overflow: hidden;
    background: #fff;
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
    padding: 11px 9px;
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
.set_meal {
  margin: 11px 0 0 0;
  .title {
    background: #fff;
    font-size: 17px;
    font-weight: 400;
    padding: 11px 9px;
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 1px 0 0 0;
    display: flex;
    padding: 0 10px;
    background: #fff;
    line-height: 40px;
    .left {
      width: 50%;
      font-size: 15px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .middle {
      width: 30%;
      font-size: 15px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-left: 1px solid #ccc;
      padding: 0 0 0 10px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .right {
      width: 20%;
      font-size: 15px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-left: 1px solid #ccc;
      padding: 0 0 0 10px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  }
  .comments {
    margin: 1px 0 0 0;
    .title {
      background: #fff;
      font-size: 15px;
      font-weight: 400;
      padding: 6px 9px;
      text-align: center;
      background-color: #f8f9fa;
    }
    .content {
      width: 100%;
      height: 100%;
      margin: 1px 0 0 0;
      padding: 0;
      display: flex;
      background: #fff;
      line-height: 40px;
      ul {
        list-style: none;
        padding: 15px 11px;
        li {
          display: flex;
          .point {
            width: 4px;
            height: 4px;
            background: #333;
            border-radius: 100%;
            margin: 12px 7px 0;
          }
          span {
            font-size: 15px;
            font-weight: 400;
            line-height: 23px;
            max-width: calc(100% - 20px);
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
        }
      }
    }
  }
  .view_graphic_details {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #DDD8CE;
    padding: 10px 22px 10px 10px;
    display: flex;
    align-items: center;
    background: #fff;
    margin: 1px 0 0 0;
    .text {
      flex: 1;
      font-size: 15px;
      font-weight: 400;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      color: #06c1ae;
    }
    .arrow {
      position: relative;
      display: block;
      width: 12px;
      height: 12px;
      border-left: 3px solid #06c1ae;
      border-bottom: 3px solid #06c1ae;
      transform: scaleY(0.7) rotateZ(-135deg);
    }
  }
}
.purchase_notes {
  margin: 11px 0 0 0;
  .title {
    background: #fff;
    font-size: 17px;
    font-weight: 400;
    padding: 11px 9px;
  }
  .indate {
    margin: 1px 0 0 0;
    padding: 12px 0 0 0;
    background: #fff;
    .name {
      background: #fff;
      font-size: 15px;
      font-weight: 400;
      padding: 0 9px;
      color: #f90;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      background: #fff;
      line-height: 40px;
      ul {
        list-style: none;
        padding: 10px 11px 15px;
        li {
          display: flex;
          span {
            font-size: 15px;
            font-weight: 400;
            line-height: 23px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 0 0 0 7px;
          }
        }
      }
    }
  }
  .service_regulations {
    background: #fff;
    .name {
      background: #fff;
      font-size: 15px;
      font-weight: 400;
      padding: 0 9px;
      color: #f90;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      background: #fff;
      line-height: 40px;
      ul {
        list-style: none;
        padding: 10px 11px 15px;
        li {
          display: flex;
          .point {
            width: 4px;
            height: 4px;
            background: #333;
            border-radius: 100%;
            margin: 12px 7px 0;
          }
          span {
            font-size: 15px;
            font-weight: 400;
            line-height: 23px;
            max-width: calc(100% - 20px);
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
        }
      }
    }
  }
}
.concrete_evaluation {
  margin: 11px 0 0 0;
  .title {
    background: #fff;
    padding: 11px 9px;
    display: flex;
    align-items: center;
    height: 40px;
    span {
      font-size: 17px;
      font-weight: 400;
      flex: 1;
    }
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
  }
  .content {
    .item {
      margin: 1px 0 0 0;
      background: #fff;
      padding: 12px 8px;
      .user {
        display: flex;
        .left {
          width: 37px;
          height: 37px;
          border-radius: 100%;
          img {
            object-fit: cover;
            width: 100%;
            border-radius: 100%;
          }
        }
        .right {
          margin: 0 0 0 4px;
          .top {
            font-size: 12px;
            font-weight: 400;
          }
          .bottom {
            display: flex;
            margin: 3px 0 0 0;
            .stars {
              display: flex;
              align-items: center;
              .star-orange {
                background: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@da8f38f);
                background-size: 14px;
                width: 14px;
                height: 14px;
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
            .date {
              color: #999;
              font-size: 12px;
              font-weight: 400;
              margin: 0 0 0 8px;
            }
          }
        }
      }
      .text {
        font-size: 15px;
        font-weight: 400;
        margin: 10px 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      .photo_container {
        display: flex;
        img {
          object-fit: cover;
          width: 55px;
          height: 55px;
          margin: 0 5px 0 0;
        }
      }
    }
  }
  .view_all_reviews {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #DDD8CE;
    padding: 10px 22px 10px 10px;
    display: flex;
    align-items: center;
    background: #fff;
    margin: 1px 0 0 0;
    .text {
      flex: 1;
      font-size: 15px;
      font-weight: 400;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      color: #06c1ae;
    }
    .arrow {
      position: relative;
      display: block;
      width: 12px;
      height: 12px;
      border-left: 3px solid #06c1ae;
      border-bottom: 3px solid #06c1ae;
      transform: scaleY(0.7) rotateZ(-135deg);
    }
  }
}
.related_suggestion {
  margin: 11px 0 0 0;
  .title {
    background: #fff;
    padding: 11px 9px;
    display: flex;
    align-items: center;
    height: 40px;
    span {
      font-size: 17px;
      font-weight: 400;
      flex: 1;
    }
  }
  .content {
    .item {
      width: 100%;
      padding: 10px 0;
      display: flex;
      border-bottom: 1px solid #DDD8CE;
      background: #fff;
      .left {
        width: 22px;
        position: relative;
        bottom: 1px;
        span {
          background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@da8f38f);
          background-position: 17px 46px;
          background-size: 83px;
          width: 17px;
          height: 18px;
          display: block;
          margin: 2px 0 0 6px;
        }
      }
      .right {
        flex: 1;
        padding: 0 10px 0 6px;
        .title {
          font-size: 15px;
          font-weight: 400;
          margin: 1px 0 0 1px;
          padding: 0;
          height: 21px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #666;
        }
        .bottom {
          display: flex;
          position: relative;
          align-items: flex-end;
          margin: 4px 0 2px 0;
          .price {
            display: flex;
            align-items: flex-end;
            height: 19px;
            .num {
              font-size: 19px;
              font-weight: 500;
              font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
              line-height: 17px;
              color: #06c1ae;
              margin: 0 0 0 1px;
            }
            .text {
              font-size: 12px;
              font-weight: 400;
              font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
              color: #06c1ae;
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
          .sold {
            font-size: 12px;
            font-weight: 400;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            line-height: 20px;
            flex: 1;
            text-align: end;
            color: #666;
            margin: 0 9px 0 0;
          }
        }
      }
    }
  }
}
.guess_you_like {
  width: 100%;
  margin: 11px 0 0 0;
  background: #fff;
  padding: 0 0 0 10px;
  .title {
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #DDD8CE;
    display: flex;
    .left {
      flex: 1;
      font-size: 17px;
      font-weight: 400;
      line-height: 44px; 
      color: #999;
    }
    .right {
      font-size: 17px;
      font-weight: 400;
      line-height: 44px;
      margin: 0 9px 0 0; 
      color: #999;
    }
  }
}
.current_position {
  padding: 13px 9px;
  font-size: 12px;
  font-weight: 400;
  color: #fe8c00;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.hide_back_to_top {
  display: none;
}
.back_to_top {
  display: block;
  width: 43px;
  height: 43px;
  background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cbcd00b445480e50.png@da8f38f);
  position: fixed;
  background-size: 43px;
  bottom: 75px;
  right: 14px;
}
</style>
