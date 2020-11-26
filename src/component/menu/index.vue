<template>
  <div class="menu">
    <div class="icon">
      <div class="circle">
        <img src="static/img/delicious.png" alt="">
      </div>
      <span class="name">美食</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      
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
.menu {
  width: 100%;
  height: 170px;
  background: #fff;
  border-bottom: 1px solid #000;
  .icon {
    width: 20%;
    height: 50%;
    border: 1px solid #000;
    .circle {
      background: #fd9d21;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px auto 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      img {
        object-fit: contain;
        width: 73%;
        height: 73%;
      }
    }
    .name {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #666;
      text-align: center;
    }
  }
}
</style>
