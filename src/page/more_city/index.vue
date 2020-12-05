<template>
  <div class="more_city">
    <div class="header">
      <div class="left" @click="route_to('change_city')">
        <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt="">
      </div>
      <div class="search_box">
        <div class="inner">
          <span>选择城市</span>
        </div>
      </div>
      <div class="right">
        <div class="more_options" @click="route_to('search')">
          <img src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png" alt="">
        </div>
      </div>
    </div>
    <div class="select_city block">
      <span>以拼音"{{more_cities_initial}}"开头的城市：</span>
      <div class="inner">
        <el-col :span="6"
          v-for="(item, index) of more_cities_content" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
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
  name: 'more_city',
  data() {
    return {
      
    }
  },
  computed: {
    more_cities_initial() {
      return this.$store.state.MoreCitiesInitial
    },
    more_cities_content() {
      return this.$store.state.MoreCitiesContent
    },
    recently_visited() {
      return this.$store.state.RecentlyVisited
    },
  },
  created(){
    //进入题目页面，开始计时
    // this.$store.commit('REMBER_TIME');
    window.scrollTo({
      'top': 0,
      // 'behavior': 'smooth'
    });
  },
  // filters: {
  //   capitalize: function(value) {
  //     return value.toUpperCase();
  //   }
  // },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    },
    change_selected_city(e) {
      console.log(e)
      this.$store.commit("set_selected_city", e);
      this.add_to_city_history(e);
      window.scrollTo({
        'top': 0,
        // 'behavior': 'smooth'
      });
      this.route_to('/');
    },
    add_to_city_history(e) {
      console.log(this.recently_visited)
      for (let i = 0; i < this.recently_visited.length; ++ i) {
        if (this.recently_visited[i].name === e) {
          console.log(2)
          this.recently_visited.splice(i, 1);
        }
      }
      this.recently_visited.unshift({name: e});
      console.log(this.recently_visited);
      this.$store.commit("set_city_history", this.recently_visited.slice(0, 6));
    }
  }
}

</script>

<style lang="less" scoped>
.more_city {
  background: #f0efed;
  height: 100vh;
}
.header {
  width: 100%;
  height: 51px;
  background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  display: flex;
  align-items: center;
  padding: 0 15px 0 0;
  .left {
    width: 91px;
    height: 51px;
    display: flex;
    align-items: center;
    img {
      width: 10px;
      display: inline-block;
      margin: 0 0 0 15px;
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
    justify-content: flex-end;
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
    .more_options:active {
      background: #FFD000;
      filter: brightness(90%);
    }
  }
}
.block {
  font-size: 15px;
  span {
    margin: 6px 10px 10px 10px;
    font-weight: 400;
    display: block;
  }
  .inner {
    margin: 0 10px 0 10px;
    border-radius: 3px;
    overflow: hidden;
    
    background: linear-gradient(90deg, rgba(221, 216, 206, 0.3) 1px, rgba(255, 255, 255, 0.8) 1px), linear-gradient(rgba(221, 216, 206, 1) 1px, rgba(255, 255, 255, 1) 1px);
    background-size: calc(25% - 0.3px) 40px;
  }
}
.grid-content {
  min-height: 40px;
  text-align: center;
  line-height: 40px;
  color: #333;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-content:active {
  background: #ddd8ce;
}
</style>
