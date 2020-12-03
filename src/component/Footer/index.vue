<template>
  <div class="footer">
    <div class="bar">
      <a class="sign_in" href="">登录</a>
      <a class="sign_up" href="">注册</a>
      <div class="city">
        <span>城市:</span>
        <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt="">
        <a href="">{{selected_city}}</a>
      </div>
    </div>
    <div class="nav">
      <div class="return_home">首页</div>
      <div class="item">我的</div>
      <div class="item">美团下载</div>
      <div class="item">电脑版</div>
      <div class="item">帮助</div>
    </div>
    <div class="links">
      <span>友情链接：</span>
      <a :href="item.link" 
        v-for="(item, index) of links_content" 
        :key="index"
      >{{item.name}}</a>
    </div>
    <div class="copyright">
      <div class="hr"></div>
      <span class="text">
        ©2020 美团网 
        <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP证070791号</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links_content: [
        {
          name: "猫眼电影",
          link: "http://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "大众点评",
          link: "http://m.dianping.com/"
        },
        {
          name: "美团旅行",
          link: "https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj"
        },
        {
          name: "榛果民宿",
          link: "http://i.zhenguo.com/"
        },
        {
          name: "大众点评下载",
          link: "http://evt.dianping.com/synthesislink/9496.html"
        },
        {
          name: "美团收银官网",
          link: "https://shouyin.meituan.com/?utm_source=inner&utm_medium=mti"
        },
        {
          name: "美团大学·餐饮学院",
          link: "https://xue.meituan.com/?from=mt0"
        },
        {
          name: "快驴进货商家合作",
          link: "https://www.kuailvzaixian.com/"
        }
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
  }
}
</script>

<style lang="less" scoped>

.footer {
  padding: 15px 10px;
  background: #fff;
  .bar {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #222;
    font-family: PingFangSC-Medium;
    align-items: center;
    padding: 0 14px 0 8px;
    margin: 0 0 28px 0;
    .sign_in {
      background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
      width: 55px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      margin: 0 6px;
    }
    .sign_up {
      background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
      width: 55px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      margin: 0 6px;
    }
    .city {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      height: 22px;
      span {
        margin: 0 8px 0 0;
      }
      img {
        object-fit: contain;
        width: 12px;
      }
      a {
        margin: 0 0 0 4px;
        color: #222;
        font-weight: 400;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    .return_home {
      font-size: 12px;
      font-weight: 400;
      color: #fe8c00;
      // padding: 0 19px;
      flex: 1;
      text-align: center;
      transform: scale(0.95);
      transform-origin: 0 0;
    }
    .item {
      font-size: 12px;
      font-weight: 400;
      color: #fe8c00;
      border-left: 1px solid #666;
      // padding: 0 19px;
      flex: 1;
      text-align: center;
      height: 12px;
      line-height: 12px;
      transform: scale(0.95);
      transform-origin: 0 0;
    }
  }
  .links {
    margin: 17px 9px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    span {
      font-weight: 400;
      margin: 0 -20px 0 0;
      color: #646464;
    }
    a {
      font-weight: 400;
      padding: 0 0 0 19px;
      display: inline-block;
      transform: scale(0.95);
      transform-origin: 0 0;
      color: #646464;
    }
  }
  .copyright {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .hr {
      border-top: 1px solid #999;
      position: absolute;
      width: 170%;
      top: 50%;
      transform: scale(0.6);
      transform-origin: 50% 50%;
    }
    .text {
      font-size: 12px;
      transform: scale(0.95);
      transform-origin: 0 0;
      font-weight: 400;
      color: #999;
      padding: 0 15px;
      background: #fff;
      a {
        font-weight: 400;
        color: #999;
      }
    }
  }
}
</style>
