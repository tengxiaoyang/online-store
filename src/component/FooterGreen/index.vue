<template>
  <div class="footer">
    <div class="bar">
      <a class="sign_in" href="">登录</a>
      <a class="sign_up" href="">注册</a>
      <div class="city">
        <span>城市:</span>
        <a href="">{{selected_city}}</a>
      </div>
    </div>
    <div class="nav">
      <div class="return_home">首页</div>
      <div class="item">订单</div>
      <div class="item">客户端</div>
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
  name: 'FooterGreen',
  data() {
    return {
      links_content: [
        {
          name: "猫眼电影",
          link: "http://m.maoyan.com/?channel=touch_group"
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
  padding: 4px 10px 15px;
  background: #f0f0f0;
  .bar {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #06c1ae;
    font-family: PingFangSC-Medium;
    align-items: center;
    margin: 0 0 28px 0;
    .sign_in {
      width: 62px;
      height: 30px;
      line-height: 31px;
      text-align: center;
      border-radius: 3px;
      margin: 0 10px 0 0;
      color: #06c1ae;
      border: 1px solid #06c1ae;
    }
    .sign_up {
      width: 62px;
      height: 30px;
      line-height: 31px;
      text-align: center;
      border-radius: 3px;
      color: #06c1ae;
      border: 1px solid #06c1ae;
    }
    .city {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 22px;
      span {
        margin: 0 8px 0 0;
        color: #333;
        font-weight: 400;
      }
      img {
        object-fit: contain;
        width: 12px;
      }
      a {
        font-weight: 400;
        width: 90px;
        height: 30px;
        line-height: 31px;
        text-align: center;
        border-radius: 3px;
        color: #06c1ae;
        border: 1px solid #06c1ae;
        margin: 0 0 0 8px;
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
      color: #06c1ae;
      // padding: 0 19px;
      flex: 1;
      text-align: center;
      transform: scale(0.95);
      transform-origin: 0 0;
    }
    .item {
      font-size: 12px;
      font-weight: 400;
      color: #06c1ae;
      border-left: 1px solid #06c1ae;
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
    }
    a {
      font-weight: 400;
      padding: 0 0 0 19px;
      display: inline-block;
      transform: scale(0.95);
      transform-origin: 0 0;
      color: #06c1ae;
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
      background: #f0f0f0;
      a {
        font-weight: 400;
        color: #999;
      }
    }
  }
}
</style>
