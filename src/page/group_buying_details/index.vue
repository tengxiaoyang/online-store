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
  </div>
</template>

<script>
export default {
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

</style>
