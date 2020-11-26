<template>
  <div class="home_container">
    <Header></Header>
    <AppBanner></AppBanner>
    <Menu></Menu>
    <GuessYouLike></GuessYouLike>
  </div>
</template>

<script>
import HttpClient from "../../config/ajax.js";
import Header from "../../component/header";
import AppBanner from "../../component/app_banner";
import Menu from "../../component/menu";
import GuessYouLike from "../../component/guess_you_like";
export default {
  components: {
    Header,
    AppBanner,
    Menu,
    GuessYouLike
  },
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.home_container {
  background: #f0efed;
}
</style>
