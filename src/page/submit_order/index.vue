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
          <button class="subtract">-</button>
          <input class="num" value="1" type="text">
          <button class="add">+</button>
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
    <FooterGreen></FooterGreen>
  </div>
</template>

<script>
import FooterGreen from "../../component/FooterGreen";
export default {
  components: {
    FooterGreen
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
  height: 100vh;
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
  min-height: 550px;
  .title {
    font-size: 17px;
    font-weight: 400;
    line-height: 18px;
    padding: 16px 10px;
    margin: 18px 0 0 0;
  }
  .unit_price {
    width: 100%;
    height: 44px;
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
  .quantity {
    width: 100%;
    height: 44px;
    background: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 43px;
    padding: 0 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 1px 0;
    .left {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .right {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      .subtract {
        width: 30px;
        height: 30px;
        line-height: 29px;
        font-size: 19px;
        font-weight: 800;
        background: #dcdcdc;
        color: #999;
        border-radius: 3px;
        vertical-align: middle;
        font-family: CourierNewPSMT, Verdana;
      }
      .add {
        width: 30px;
        height: 30px;
        line-height: 29px;
        font-size: 26px;
        font-weight: 400;
        background: #dcdcdc;
        color: #999;
        border-radius: 3px;
        vertical-align: middle;
        font-family: CourierNewPSMT, 'Times New Roman';
        padding: 1px 0 0 0;
      }
      .num {
        width: 61px;
        height: 30px;
        vertical-align: middle;
        border: 1px solid #ddd8ce;
        border-radius: 3px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 1px 0 0 0;
      }
    }
  }
  .total_price {
    width: 100%;
    height: 44px;
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
      font-weight: bold;
      color: #f89b22;
    }
  }
  .voucher {
    width: 100%;
    height: 45px;
    background: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 43px;
    padding: 0 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 12px 0 0 0;
    .left {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .right {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      span {
        font-weight: 400;
        color: #999;
      }
      .arrow {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-left: 3px solid #999;
        border-bottom: 3px solid #999;
        transform: scaleY(0.7) rotateZ(-135deg);
        margin: 0 0 0 -3px;
      }
    }
  }
  .submit_button {
    background-color: #dcdcdc;
    color: #999;
    border: 0;
    display: block;
    width: calc(100% - 20px);
    height: 47px;
    font-size: 20px;
    font-weight: 400;
    margin: 14px 10px 13px;
  }
  .please_log_in {
    height: 20px;
    display: flex;
    span {
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 0 10px;
    }
    a {
      font-size: 14px;
      font-weight: 400;
      color: #06c1ae;
      margin: 0 0 0 5px;
    }
  }
}
</style>
