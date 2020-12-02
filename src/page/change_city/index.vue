<template>
  	<div>
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
      name: 'helloworld vue'
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
.grid-content {
  min-height: 40px;
  border: 1px solid #000;
  background: #d3dce6;
}
.initial {
  height: 80px;
}

</style>
