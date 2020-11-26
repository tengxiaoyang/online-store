<template>
  <div class="guess_you_like">
    <div class="title">猜你喜欢</div>
    <div class="item"
      v-for="(item, index) of guess_content" 
      :key="index"
    >
      <div class="left">
        <img src="" alt="">
      </div>
      <div class="right">
        <div class="name"></div>
        <div class="place"></div>
        <div class="bottom">
          <div class="price"></div>
          <div class="counter_price"></div>
          <div class="sold"></div>
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
}
</style>
