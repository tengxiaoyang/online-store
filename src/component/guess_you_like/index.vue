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
          <div class="price">{{item.price}}元</div>
          <div class="counter_price">门市价:{{item.counter_price}}元</div>
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
          img: "http://p0.meituan.net/200.0/deal/6139a65f7ca3280b3c77eb765b92522834640.jpg",
          name: "鑫海汇海鲜烤肉火锅自助",
          place: "[立丰国际]单人自助晚餐",
          price: "66.9",
          counter_price: "86",
          sold: "199313"
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
  height: 500px;
  margin: 11px 0 0 0;
  background: #fff;
  border-bottom: 1px solid #000;
  .title {
    width: 100%;
    height: 30px;
  }
  .item {
    width: 100%;
    height: 100%;
    .left {
      width: 100px;
      height: 100px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
