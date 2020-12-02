<template>
  <div class="change_city">
    
    <div class="header">
      <div class="left" @click="route_to('/')">
        <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt="">
      </div>
      <div class="search_box">
        <div class="inner">
          <span>选择城市</span>
        </div>
      </div>
      <div class="right">
        <div class="return_home">
          <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png" alt="">
        </div>
        <div class="search">
          <img src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png" alt="">
        </div>
      </div>
    </div>
    <el-row>
      <el-col :span="6"><div class="initial grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'change_city',
  data() {
    return {
      
    }
  },
  created(){
    
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    }
  }
}

</script>

<style lang="less" scoped>

.header {
  width: 100%;
  height: 51px;
  background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  display: flex;
  align-items: center;
  padding: 0 15px 0 0;
  .left {
    width: 76px;
    height: 51px;
    display: flex;
    align-items: center;
    margin: 0 0 0 15px;
    span {
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      line-height: 15px;
      margin: 0 5px 0 0;
    }
    img {
      width: 10px;
      display: inline-block;
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
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .right {
    width: 74px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        display: inline-block;
      }
    }
  }
  .right:active {
    background: #FFD000;
    filter: brightness(90%);
  }
}
.grid-content {
  min-height: 40px;
  border: 1px solid #000;
  background: #d3dce6;
}
.initial {
  height: 80px;
}

</style>
