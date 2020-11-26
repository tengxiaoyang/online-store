<template>
  <div class="menu">
    <div class="icon" 
      v-for="(item, index) of icon_content" 
      :key="index"
    >
      <div class="circle" :style="item.style">
        <img :src="item.img" :alt="item.name" :style="item.img_style">
      </div>
      <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      icon_content: [
        {
          id: 1,
          img: require("../../../public/static/img/delicious.png"),
          img_style: "width: 68%; height: 68%;",
          style: "background: #fd9d21;",
          name: "美食"
        },
        {
          id: 2,
          img: require("../../../public/static/img/cat_eye.png"),
          img_style: "width: 100%; height: 100%;",
          style: "background: #ff6767;",
          name: "猫眼电影"
        },
        {
          id: 3,
          img: require("../../../public/static/img/hotel.png"),
          img_style: "width: 73%; height: 73%;",
          style: "background: #8a90fa;",
          name: "酒店"
        },
        {
          id: 4,
          img: require("../../../public/static/img/leisure.png"),
          img_style: "width: 73%; height: 73%;",
          style: "background: #fed030;",
          name: "休闲美食"
        },
        {
          id: 5,
          img: require("../../../public/static/img/takeaway.png"),
          img_style: "width: 62%; height: 62%;",
          style: "background: #fd9d21;",
          name: "外卖"
        },
        {
          id: 6,
          img: require("../../../public/static/img/ktv.png"),
          img_style: "width: 68%; height: 68%;",
          style: "background: #fed030;",
          name: "KTV"
        },
        {
          id: 7,
          img: require("../../../public/static/img/tour_around.png"),
          img_style: "width: 67%; height: 67%;",
          style: "background: #4dc6ee;",
          name: "周边游"
        },
        {
          id: 8,
          img: require("../../../public/static/img/beauty.png"),
          img_style: "width: 58%; height: 58%;",
          style: "background: #ff80c2;",
          name: "丽人"
        },
        {
          id: 9,
          img: require("../../../public/static/img/fast_food.png"),
          img_style: "width: 67%; height: 67%;",
          style: "background: #fd9d21;",
          name: "小吃快餐"
        },
        {
          id: 10,
          img: require("../../../public/static/img/three_point.png"),
          img_style: "width: 57%; height: 57%;",
          style: "background: #00d3be;",
          name: "全部分类"
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
.menu {
  width: 100%;
  height: 165px;
  background: #fff;
  .icon {
    width: 20%;
    height: 50%;
    display: inline-block;
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px auto 6px;
      display: flex;
      justify-content: center;
      align-items: center;
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
