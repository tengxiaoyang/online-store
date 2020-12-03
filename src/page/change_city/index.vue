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
        <div class="return_home" @click="route_to('/')">
          <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png" alt="">
        </div>
        <div class="search" @click="route_to('search')">
          <img src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png" alt="">
        </div>
      </div>
    </div>
    <div class="target_city">
      <div class="inner">
        <div class="city">
          <span>定位城市:</span>
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt="">
          <a href="">{{selected_city}}</a>
        </div>
      </div>
    </div>
    <div class="recently_visited block">
      <span>最近访问</span>
      <div class="inner">
        <el-col :span="6"
          v-for="(item, index) of recently_visited" 
          :key="index"
        >
          <div class="grid-content">
            {{item.name}}
          </div>
        </el-col>
      </div>
    </div>
    <div class="popular_cities block">
      <span>热门城市</span>
      <div class="inner">
        <el-col :span="6"
          v-for="(item, index) of popular_cities" 
          :key="index"
        >
          <div class="grid-content">
            {{item.name}}
          </div>
        </el-col>
      </div>
    </div>
    <div class="all_cities block">
      <span>全部城市</span>
      <div class="capital_inner">
        <div class="grid-content"
          v-for="(item, index) of capital_of_all_cities" 
          :key="index"
          @click="scroll_to_capital(item.name)"
        >
          {{item.name}}
        </div>
      </div>
      <div class="inner initial_a">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="A">A</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_a" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('A', all_cities_a)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_b">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="B">B</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_b" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('B', all_cities_b)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_c">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="C">C</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_c" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('C', all_cities_c)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_d">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="D">D</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_d" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('D', all_cities_d)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_e">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="E">E</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_e" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('E', all_cities_e)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_f">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="F">F</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_f" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('F', all_cities_f)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_g">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="G">G</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_g" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('G', all_cities_g)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_h">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="H">H</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_h" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('H', all_cities_h)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_j">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="J">J</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_j" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('J', all_cities_j)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_k">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="K">K</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_k" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('K', all_cities_k)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_l">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="L">L</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_l" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('L', all_cities_l)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_m">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="M">M</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_m" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('M', all_cities_m)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_n">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="N">N</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_n" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('N', all_cities_n)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_p">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="P">P</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_p" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('P', all_cities_p)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_q">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="Q">Q</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_q" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('Q', all_cities_q)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_r">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="R">R</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_r" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('R', all_cities_r)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_s">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="S">S</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_s" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('S', all_cities_s)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_t">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="T">T</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_t" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('T', all_cities_t)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_w">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="W">W</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_w" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('W', all_cities_w)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_x">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="X">X</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_x" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('X', all_cities_x)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_y">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="Y">Y</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_y" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('Y', all_cities_y)"
          >
            更多»
          </div>
        </el-col>
      </div>
      <div class="inner initial_z">
        <el-col :span="6">
          <div class="grid-content initial">
            <span id="Z">Z</span>
          </div>
        </el-col>
        <el-col :span="6"
          v-for="(item, index) of all_cities_z" 
          :key="index"
        >
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
            {{item.name}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"
            @click="route_to('more_city'), set_more_city('Z', all_cities_z)"
          >
            更多»
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
  name: 'change_city',
  data() {
    return {
      recently_visited: [
        {
          name: "杭州"
        },
        {
          name: "武汉"
        },
        {
          name: "深圳"
        },
        {
          name: "北京"
        },
        {
          name: "上海"
        },
        {
          name: "西安"
        }
      ],
      popular_cities: [
        {
          name: "北京"
        },
        {
          name: "上海"
        },
        {
          name: "广州"
        },
        {
          name: "深圳"
        },
        {
          name: "天津"
        },
        {
          name: "西安"
        },
        {
          name: "重庆"
        },
        {
          name: "杭州"
        },
        {
          name: "南京"
        },
        {
          name: "武汉"
        },
        {
          name: "成都"
        }
      ],
      capital_of_all_cities: [
        {
          name: "A"
        },
        {
          name: "B"
        },
        {
          name: "C"
        },
        {
          name: "D"
        },
        {
          name: "E"
        },
        {
          name: "F"
        },
        {
          name: "G"
        },
        {
          name: "H"
        },
        {
          name: "J"
        },
        {
          name: "K"
        },
        {
          name: "L"
        },
        {
          name: "M"
        },
        {
          name: "N"
        },
        {
          name: "P"
        },
        {
          name: "Q"
        },
        {
          name: "R"
        },
        {
          name: "S"
        },
        {
          name: "T"
        },
        {
          name: "W"
        },
        {
          name: "X"
        },
        {
          name: "Y"
        },
        {
          name: "Z"
        }
      ],
      all_cities_a: [
        {
          name: "鞍山"
        },
        {
          name: "安庆"
        },
        {
          name: "安阳"
        },
        {
          name: "安顺"
        },
        {
          name: "安康"
        },
        {
          name: "安丘"
        },
        {
          name: "阿拉善盟"
        },
        {
          name: "阿克苏"
        },
        {
          name: "安吉"
        },
        {
          name: "安岳"
        },
        {
          name: "安平"
        },
        {
          name: "安溪"
        },
        {
          name: "安宁"
        },
        {
          name: "安化"
        },
        {
          name: "阿拉尔"
        },
        {
          name: "安福"
        },
        {
          name: "阿勒泰市"
        },
        {
          name: "阿图什市"
        },
        {
          name: "安州区"
        },
        {
          name: "阿荣旗"
        },
        {
          name: "安陆市"
        },
        {
          name: "阿城区"
        },
        {
          name: "阿坝"
        },
        {
          name: "阿里"
        },
        {
          name: "阿勒泰"
        },
        {
          name: "澳门"
        }
      ],
      all_cities_b: [
        {
          name: "北京"
        },
        {
          name: "保定"
        },
        {
          name: "包头"
        },
        {
          name: "蚌埠"
        },
        {
          name: "亳州"
        },
        {
          name: "滨州"
        },
        {
          name: "宝鸡"
        },
        {
          name: "巴彦淖尔"
        },
        {
          name: "本溪"
        },
        {
          name: "白山"
        },
        {
          name: "白城"
        },
        {
          name: "北海"
        },
        {
          name: "百色"
        },
        {
          name: "巴中"
        },
        {
          name: "毕节"
        },
        {
          name: "保山"
        },
        {
          name: "白银"
        },
        {
          name: "霸州"
        },
        {
          name: "宝应"
        },
        {
          name: "北流"
        },
        {
          name: "博爱"
        },
        {
          name: "宝丰"
        },
        {
          name: "博兴"
        },
        {
          name: "泌阳"
        },
        {
          name: "彬州市"
        },
        {
          name: "璧山"
        },
        {
          name: "博山"
        },
        {
          name: "宾阳"
        },
        {
          name: "泊头市"
        },
        {
          name: "博罗县"
        },
        {
          name: "博白县"
        },
        {
          name: "北镇市"
        },
        {
          name: "北安市"
        },
        {
          name: "巴彦县"
        },
        {
          name: "巴楚县"
        },
        {
          name: "拜城县"
        },
        {
          name: "拜泉县"
        },
        {
          name: "博尔塔拉"
        },
        {
          name: "巴州"
        },
        {
          name: "滨海"
        },
        {
          name: "北碚"
        }
      ],
      all_cities_c: [
        {
          name: "重庆"
        },
        {
          name: "成都"
        },
        {
          name: "长沙"
        },
        {
          name: "常州"
        },
        {
          name: "长春"
        },
        {
          name: "承德"
        },
        {
          name: "沧州"
        },
        {
          name: "长治"
        },
        {
          name: "赤峰"
        },
        {
          name: "滁州"
        },
        {
          name: "常德"
        },
        {
          name: "郴州"
        },
        {
          name: "常熟"
        },
        {
          name: "慈溪"
        },
        {
          name: "朝阳"
        },
        {
          name: "巢湖"
        },
        {
          name: "池州"
        },
        {
          name: "潮州"
        },
        {
          name: "从化"
        },
        {
          name: "长兴"
        },
        {
          name: "昌邑"
        },
        {
          name: "苍南"
        },
        {
          name: "长葛"
        },
        {
          name: "昌江黎族自治县"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_d: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_e: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_f: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_g: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_h: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_j: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_k: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_l: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_m: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_n: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_p: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_q: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_r: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_s: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_t: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_w: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_x: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_y: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ],
      all_cities_z: [
        {
          name: "上海"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安123"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        },
        {
          name: "123"
        },
        {
          name: "西安"
        }
      ]
    }
  },
  computed: {
    selected_city() {
      return this.$store.state.SelectedCity
    },
  },
  created(){
    
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    },
    set_more_city(initial, more_cities_content) {
      this.$store.commit("set_more_cities_initial", initial),
      this.$store.commit("set_more_cities_content", more_cities_content)
    },
    scroll_to_capital(e) {
      let target_id = document.querySelector(`#${e}`)
      // console.log('#' + e)
      console.log(`#${e}`)
      console.log(target_id)
      console.log(target_id.offsetTop)
      window.scrollTo({
        'top': target_id.offsetTop - 12,
        // 'behavior': 'smooth'
      })

      // console.log(`#${e}`);
      // let PageId = this.$el.querySelector(`#${e}`);
      // console.log(PageId);
      // PageId.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start"
      // });
    },
    change_selected_city(e) {
      console.log(e)
      this.$store.commit("set_selected_city", e);
      window.scrollTo({
        'top': 0,
        // 'behavior': 'smooth'
      });
      this.route_to('/');
    }
  }
}

</script>

<style lang="less" scoped>
.change_city {
  background: #f0efed;
  height: 100%;
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
    .return_home:active {
      background: #FFD000;
      filter: brightness(90%);
    }
    .search:active {
      background: #FFD000;
      filter: brightness(90%);
    }
  }
}
.target_city {
  .inner {
    margin: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 2px;
    .city {
      flex: 1;
      display: flex;
      justify-content: start;
      height: 22px;
      font-size: 14px;
      span {
        margin: 0 8px 0 0;
        color: #222;
        font-weight: 400;
      }
      img {
        object-fit: contain;
        width: 12px;
      }
      a {
        margin: 0 0 0 4px;
        color: #222;
        font-weight: 400;
      }
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
.recently_visited span {
  padding: 10px 0 0 0;
}
.all_cities {
  span {
    padding: 10px 0 0 0;
  }
  .capital_inner {
    margin: 0 10px 0 10px;
    border-radius: 3px;
    overflow: hidden;
    background: #fff;
    // background: linear-gradient(90deg, rgba(221, 216, 206, 0.5) 1px, rgba(255, 255, 255, 0.5) 1px), linear-gradient(rgba(221, 216, 206, 1) 1px, rgba(255, 255, 255, 1) 1px);
    // background-size: calc(20% - 0.3px) 40px;
    .grid-content {
      width: 20%;
      float: left;
      color: #FE8C00;
    }
  }
}
.grid-content {
  min-height: 40px;
  text-align: center;
  line-height: 40px;
  color: #333;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-content:active {
  background: #ddd8ce;
}
.initial {
  height: 80px;
  z-index: 2;
  background: #fff;
  line-height: 80px;
  border-top: 1px solid rgba(221, 216, 206, 0.3);
  border-left: 1px solid rgba(221, 216, 206, 0.5);
  font-size: 40px;
  font-weight: 400;
  color: #B7B7B7;
  span {
    color: #b7b7b7;
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
}
.initial:active {
  background: #fff;
}

</style>
