<template>
  <div class="app_banner_green">
    <img src="http://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@da8f38f" alt="">
    <a class="open_app" href="http://meishi.meituan.com/i/deal/29242714?stid=019032296837928515275757042931456002187_c3_e13956ff6736c7e9b52ea80752de2b4fe&cevent=imt%2Fhomepage%2Fguess#"></a>
    <a class="download_app" href="http://meishi.meituan.com/i/deal/29242714?stid=019032296837928515275757042931456002187_c3_e13956ff6736c7e9b52ea80752de2b4fe&cevent=imt%2Fhomepage%2Fguess#"></a>
  </div>
</template>

<script>
export default {
  name: 'AppBannerGreen',
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
.app_banner_green {
  position: relative;
  margin: 0 0 -8px 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .open_app {
    left: 17%;
    position: absolute;
    display: block;
    width: 31%;
    height: 33%;
    bottom: 16%;
    background: transparent;
    border: 0;
    z-index: 1;
  }
  .download_app {
    right: 17%;
    position: absolute;
    display: block;
    width: 31%;
    height: 33%;
    bottom: 16%;
    background: transparent;
    border: 0;
    z-index: 1;
  }
}
</style>
