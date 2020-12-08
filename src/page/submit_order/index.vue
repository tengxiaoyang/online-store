<template>
  <div class="submit_order">
    <div class="header">
      <div class="left" @click="route_to('/')">
        <div class="arrow"></div>
      </div>
      <div class="search_box">
        <div class="inner">
          <span>提交订单</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">单人自助晚餐</div>
      <div class="unit_price">
        <div class="left">单价：</div>
        <div class="right">66.9元</div>
      </div>
      <div class="quantity">
        <div class="left">数量：</div>
        <div class="right">
          <button class="subtract"></button>
          <input class="num" value="1" type="text">
          <button class="add"></button>
        </div>
      </div>
      <div class="total_price">
        <div class="left">总价：</div>
        <div class="right">66.9元</div>
      </div>
      <div class="voucher">
        <div class="left">抵用券</div>
        <div class="right">
          <span>暂无可用</span>
          <div class="arrow"></div>
        </div>
      </div>
      <button class="submit_button">提交订单</button>
      <div class="please_log_in">
        <span>请登录后进行购买，去</span>
        <a href="https://i.meituan.com/account/login">登录</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../component/Footer";
export default {
  components: {
    Footer
  },
  name: 'submit_order',
  data() {
    return {
      name: 'helloworld vue'
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
.submit_order {
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
}
.content {
  min-height: 535px;
  .title {
    font-size: 17px;
    font-weight: 400;
    line-height: 18px;
    padding: 16px 10px;
    margin: 18px 0 0 0;
  }
  .unit_price {
    width: 100%;
    height: 43px;
    background: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 43px;
    padding: 0 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    .left {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .right {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  }
}
</style>
