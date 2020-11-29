<template>
  <div class="item">
    <div class="left">
      <img :src="guess_content.img" :alt="guess_content.name">
    </div>
    <div class="right">
      <div class="name">{{guess_content.name}}</div>
      <div class="place">{{guess_content.place}}</div>
      <div class="bottom">
        <div class="price">
          <span class="num">{{guess_content.price}}</span>
          <span class="text">元</span>
        </div>
        <div class="counter_price"
          :class="{ counter_price_orange: guess_content.type === 'orange' }"
        >
          <span class="text">{{guess_content.counter_price}}</span>
        </div>
        <div class="sold">已售{{guess_content.sold}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessYouLike',
  props: {
    guess_content: {
      type: Object
    }
  },
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
.item {
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #DDD8CE;
  .left {
    width: 90px;
    height: 82px;
    position: relative;
    bottom: 1px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    flex: 1;
    padding: 0 10px 0 9px;
    .name {
      font-size: 15px;
      font-weight: 400;
      margin: 1px 0 0 1px;
    }
    .place {
      font-size: 12px;
      font-weight: 400;
      color: #666;
      margin: 4px 0 0 1px;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      display: -webkit-box;
      /* -webkit-box-orient: vertical; */
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 1;
      overflow: hidden;
      white-space: normal;
    }
    .bottom {
      display: flex;
      position: relative;
      align-items: flex-end;
      margin: 21px 0 0 0;
      .price {
        display: flex;
        align-items: flex-end;
        height: 19px;
        .num {
          font-size: 18px;
          font-weight: 400;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          line-height: 17px;
          color: #f60;
          margin: 0 0 0 1px;
        }
        .text {
          font-size: 12px;
          font-weight: 400;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          color: #f60;
          line-height: 13px;
        }
      }
      .counter_price {
        display: flex;
        position: relative;
        align-items: flex-end;
        margin: 0 0 0 4px;
        .text {
          font-size: 12px;
          font-weight: 400;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          color: #666;
          line-height: 13px;
        }
      }
      .counter_price_orange {
        display: flex;
        position: relative;
        align-items: flex-end;
        margin: 0 0 0 4px;
        border: 1px solid #f90;
        position: relative;
        top: 3px;
        border-radius: 3px;
        .text {
          font-size: 13px;
          font-weight: 400;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #f90;
          line-height: 13px;
          transform: scale(0.9);
          line-height: 17px;
          height: 18px;
        }
      }
      .sold {
        font-size: 12px;
        font-weight: 400;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        line-height: 20px;
        flex: 1;
        text-align: end;
        color: #666;
      }
    }
  }
}

</style>
