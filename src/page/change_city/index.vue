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
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
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
          <div class="grid-content"
            @click="change_selected_city(item.name)"
          >
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
          name: "崇左"
        },
        {
          name: "楚雄"
        },
        {
          name: "昌吉"
        },
        {
          name: "长乐"
        },
        {
          name: "崇州"
        },
        {
          name: "赤壁"
        },
        {
          name: "淳安"
        },
        {
          name: "承德县"
        },
        {
          name: "昌乐"
        },
        {
          name: "曹妃甸"
        },
        {
          name: "磁县"
        },
        {
          name: "成安"
        },
        {
          name: "昌黎"
        },
        {
          name: "岑溪"
        },
        {
          name: "茌平区"
        },
        {
          name: "曹县"
        },
        {
          name: "城固"
        },
        {
          name: "长汀"
        },
        {
          name: "潮安"
        },
        {
          name: "长寿"
        },
        {
          name: "常山"
        },
        {
          name: "赤水"
        },
        {
          name: "慈利"
        },
        {
          name: "常宁市"
        },
        {
          name: "茶陵"
        },
        {
          name: "长丰县"
        },
        {
          name: "苍溪县"
        },
        {
          name: "长清区"
        },
        {
          name: "崇明区"
        },
        {
          name: "成武县"
        },
        {
          name: "澄江市"
        },
        {
          name: "澄迈县"
        },
        {
          name: "昌都"
        }
      ],
      all_cities_d: [
        {
          name: "大连"
        },
        {
          name: "东莞"
        },
        {
          name: "大庆"
        },
        {
          name: "大同"
        },
        {
          name: "丹东"
        },
        {
          name: "东营"
        },
        {
          name: "德州"
        },
        {
          name: "德阳"
        },
        {
          name: "达州"
        },
        {
          name: "大理"
        },
        {
          name: "定西"
        },
        {
          name: "丹阳"
        },
        {
          name: "东阳"
        },
        {
          name: "大丰"
        },
        {
          name: "东台"
        },
        {
          name: "登封"
        },
        {
          name: "儋州"
        },
        {
          name: "都江堰"
        },
        {
          name: "大石桥"
        },
        {
          name: "邓州"
        },
        {
          name: "德清"
        },
        {
          name: "当阳"
        },
        {
          name: "东港"
        },
        {
          name: "大冶"
        },
        {
          name: "东兴"
        },
        {
          name: "调兵山"
        },
        {
          name: "灯塔"
        },
        {
          name: "大通"
        },
        {
          name: "东方"
        },
        {
          name: "东平"
        },
        {
          name: "电白"
        },
        {
          name: "东海"
        },
        {
          name: "定州"
        },
        {
          name: "郸城"
        },
        {
          name: "大荔"
        },
        {
          name: "达拉特旗"
        },
        {
          name: "大竹"
        },
        {
          name: "大洼"
        },
        {
          name: "大邑"
        },
        {
          name: "砀山"
        },
        {
          name: "敦化"
        },
        {
          name: "东光"
        },
        {
          name: "道县"
        },
        {
          name: "大安市"
        },
        {
          name: "定安县"
        },
        {
          name: "垫江"
        },
        {
          name: "东明县"
        },
        {
          name: "定陶区"
        },
        {
          name: "定边县"
        },
        {
          name: "大厂回族自治县"
        },
        {
          name: "定远县"
        },
        {
          name: "大悟县"
        },
        {
          name: "大足区"
        },
        {
          name: "德惠市"
        },
        {
          name: "东坑镇"
        },
        {
          name: "东阿县"
        },
        {
          name: "大兴安岭"
        },
        {
          name: "德宏"
        },
        {
          name: "迪庆"
        },
        {
          name: "敦煌"
        }
      ],
      all_cities_e: [
        {
          name: "鄂尔多斯"
        },
        {
          name: "鄂州"
        },
        {
          name: "恩施"
        },
        {
          name: "恩平"
        },
        {
          name: "峨眉山"
        },
        {
          name: "额敏县"
        },
        {
          name: "额尔古纳"
        }
      ],
      all_cities_f: [
        {
          name: "福州"
        },
        {
          name: "佛山"
        },
        {
          name: "抚顺"
        },
        {
          name: "阜阳"
        },
        {
          name: "抚州"
        },
        {
          name: "阜新"
        },
        {
          name: "富阳"
        },
        {
          name: "涪陵"
        },
        {
          name: "福清"
        },
        {
          name: "奉化"
        },
        {
          name: "肥城"
        },
        {
          name: "防城港"
        },
        {
          name: "凤凰"
        },
        {
          name: "阜宁"
        },
        {
          name: "凤城"
        },
        {
          name: "汾阳"
        },
        {
          name: "阜康"
        },
        {
          name: "丰城"
        },
        {
          name: "范县"
        },
        {
          name: "繁昌"
        },
        {
          name: "肥乡区"
        },
        {
          name: "封丘"
        },
        {
          name: "扶风"
        },
        {
          name: "丰县"
        },
        {
          name: "抚松"
        },
        {
          name: "富顺"
        },
        {
          name: "费县"
        },
        {
          name: "佛冈"
        },
        {
          name: "丰宁"
        },
        {
          name: "扶沟"
        },
        {
          name: "凤台"
        },
        {
          name: "奉新"
        },
        {
          name: "方城"
        },
        {
          name: "富源县"
        },
        {
          name: "分宜"
        },
        {
          name: "扶绥县"
        },
        {
          name: "肥西县"
        },
        {
          name: "繁峙县"
        },
        {
          name: "凤翔县"
        },
        {
          name: "福安"
        },
        {
          name: "福鼎市"
        },
        {
          name: "府谷县"
        },
        {
          name: "奉节"
        },
        {
          name: "丰都"
        },
        {
          name: "肥东县"
        },
        {
          name: "富民"
        }
      ],
      all_cities_g: [
        {
          name: "广州"
        },
        {
          name: "贵阳"
        },
        {
          name: "桂林"
        },
        {
          name: "赣州"
        },
        {
          name: "贵港"
        },
        {
          name: "广元"
        },
        {
          name: "广安"
        },
        {
          name: "高邮"
        },
        {
          name: "巩义"
        },
        {
          name: "高密"
        },
        {
          name: "高碑店"
        },
        {
          name: "高州"
        },
        {
          name: "固原"
        },
        {
          name: "广饶"
        },
        {
          name: "桂平"
        },
        {
          name: "公主岭"
        },
        {
          name: "广汉"
        },
        {
          name: "藁城"
        },
        {
          name: "高平"
        },
        {
          name: "个旧"
        },
        {
          name: "盖州"
        },
        {
          name: "古交"
        },
        {
          name: "格尔木"
        },
        {
          name: "灌云"
        },
        {
          name: "灌南"
        },
        {
          name: "赣榆"
        },
        {
          name: "高安"
        },
        {
          name: "广德市"
        },
        {
          name: "共青城"
        },
        {
          name: "高阳"
        },
        {
          name: "高陵"
        },
        {
          name: "公安"
        },
        {
          name: "固始县"
        },
        {
          name: "光泽"
        },
        {
          name: "光山县"
        },
        {
          name: "固安县"
        },
        {
          name: "高淳区"
        },
        {
          name: "甘孜"
        },
        {
          name: "甘南"
        },
        {
          name: "果洛"
        },
        {
          name: "高雄"
        },
        {
          name: "鼓浪屿"
        }
      ],
      all_cities_h: [
        {
          name: "杭州"
        },
        {
          name: "合肥"
        },
        {
          name: "哈尔滨"
        },
        {
          name: "海口"
        },
        {
          name: "邯郸"
        },
        {
          name: "呼和浩特"
        },
        {
          name: "淮安"
        },
        {
          name: "湖州"
        },
        {
          name: "衡阳"
        },
        {
          name: "惠州"
        },
        {
          name: "葫芦岛"
        },
        {
          name: "衡水"
        },
        {
          name: "淮南"
        },
        {
          name: "菏泽"
        },
        {
          name: "黄石"
        },
        {
          name: "黄冈"
        },
        {
          name: "怀化"
        },
        {
          name: "呼伦贝尔"
        },
        {
          name: "鹤岗"
        },
        {
          name: "黑河"
        },
        {
          name: "淮北"
        },
        {
          name: "黄山"
        },
        {
          name: "鹤壁"
        },
        {
          name: "河源"
        },
        {
          name: "贺州"
        },
        {
          name: "河池"
        },
        {
          name: "红河"
        },
        {
          name: "汉中"
        },
        {
          name: "海宁"
        },
        {
          name: "惠东"
        },
        {
          name: "惠阳"
        },
        {
          name: "海城"
        },
        {
          name: "海门"
        },
        {
          name: "海阳"
        },
        {
          name: "海安"
        },
        {
          name: "化州"
        },
        {
          name: "合川"
        },
        {
          name: "横店"
        },
        {
          name: "海东"
        },
        {
          name: "哈密"
        },
        {
          name: "鹤山"
        },
        {
          name: "桦甸"
        },
        {
          name: "华阴"
        },
        {
          name: "侯马"
        },
        {
          name: "河津"
        },
        {
          name: "霍州"
        },
        {
          name: "黄骅"
        },
        {
          name: "海林"
        },
        {
          name: "海盐"
        },
        {
          name: "淮阳区"
        },
        {
          name: "汉阴"
        },
        {
          name: "含山"
        },
        {
          name: "和县"
        },
        {
          name: "户县"
        },
        {
          name: "辉县"
        },
        {
          name: "怀仁市"
        },
        {
          name: "滑县"
        },
        {
          name: "惠安"
        },
        {
          name: "韩城"
        },
        {
          name: "华亭市"
        },
        {
          name: "洪洞"
        },
        {
          name: "河口"
        },
        {
          name: "辉南"
        },
        {
          name: "洪湖"
        },
        {
          name: "海沧"
        },
        {
          name: "霍邱"
        },
        {
          name: "珲春"
        },
        {
          name: "怀宁"
        },
        {
          name: "怀远县"
        },
        {
          name: "会泽县"
        },
        {
          name: "河间市"
        },
        {
          name: "合浦县"
        },
        {
          name: "衡阳县"
        },
        {
          name: "衡山县"
        },
        {
          name: "衡东县"
        },
        {
          name: "潢川县"
        },
        {
          name: "贺兰县"
        },
        {
          name: "汉南区"
        },
        {
          name: "海伦市"
        },
        {
          name: "合江县"
        },
        {
          name: "环县"
        },
        {
          name: "黄陵县"
        },
        {
          name: "桦川县"
        },
        {
          name: "横山区"
        },
        {
          name: "胡杨河市"
        },
        {
          name: "华容"
        },
        {
          name: "海北"
        },
        {
          name: "黄南"
        },
        {
          name: "海南州"
        },
        {
          name: "海西"
        },
        {
          name: "和田"
        },
        {
          name: "花莲"
        },
        {
          name: "恒春"
        }
      ],
      all_cities_j: [
        {
          name: "济南"
        },
        {
          name: "吉林"
        },
        {
          name: "嘉兴"
        },
        {
          name: "金华"
        },
        {
          name: "济宁"
        },
        {
          name: "荆州"
        },
        {
          name: "江门"
        },
        {
          name: "江阴"
        },
        {
          name: "焦作"
        },
        {
          name: "锦州"
        },
        {
          name: "九江"
        },
        {
          name: "佳木斯"
        },
        {
          name: "荆门"
        },
        {
          name: "揭阳"
        },
        {
          name: "晋江市"
        },
        {
          name: "晋城"
        },
        {
          name: "晋中"
        },
        {
          name: "鸡西"
        },
        {
          name: "景德镇"
        },
        {
          name: "吉安"
        },
        {
          name: "济源"
        },
        {
          name: "酒泉"
        },
        {
          name: "靖江"
        },
        {
          name: "金坛"
        },
        {
          name: "嘉善"
        },
        {
          name: "句容"
        },
        {
          name: "胶州"
        },
        {
          name: "即墨"
        },
        {
          name: "江都"
        },
        {
          name: "金昌"
        },
        {
          name: "嘉峪关"
        },
        {
          name: "江山"
        },
        {
          name: "建湖"
        },
        {
          name: "晋州"
        },
        {
          name: "建德"
        },
        {
          name: "简阳"
        },
        {
          name: "介休"
        },
        {
          name: "集安"
        },
        {
          name: "蛟河"
        },
        {
          name: "建阳"
        },
        {
          name: "郏县"
        },
        {
          name: "金堂"
        },
        {
          name: "监利"
        },
        {
          name: "江津"
        },
        {
          name: "巨野"
        },
        {
          name: "嘉祥"
        },
        {
          name: "金乡"
        },
        {
          name: "缙云"
        },
        {
          name: "京山市"
        },
        {
          name: "江油"
        },
        {
          name: "莒南"
        },
        {
          name: "金湖"
        },
        {
          name: "集美"
        },
        {
          name: "金沙"
        },
        {
          name: "泾县"
        },
        {
          name: "吉安县"
        },
        {
          name: "吉水县"
        },
        {
          name: "江川县"
        },
        {
          name: "江华瑶族自治县"
        },
        {
          name: "晋宁区"
        },
        {
          name: "江永"
        },
        {
          name: "建水县"
        },
        {
          name: "鄄城县"
        },
        {
          name: "靖边"
        },
        {
          name: "嘉鱼县"
        },
        {
          name: "精河县"
        },
        {
          name: "靖西市"
        },
        {
          name: "景谷"
        },
        {
          name: "九台"
        },
        {
          name: "景东彝族自治县"
        },
        {
          name: "泾阳县"
        },
        {
          name: "九寨沟"
        },
        {
          name: "井冈山"
        },
        {
          name: "基隆"
        },
        {
          name: "嘉义市"
        }
      ],
      all_cities_k: [
        {
          name: "昆明"
        },
        {
          name: "昆山"
        },
        {
          name: "开封"
        },
        {
          name: "克拉玛依"
        },
        {
          name: "开平"
        },
        {
          name: "库尔勒"
        },
        {
          name: "开化"
        },
        {
          name: "奎屯"
        },
        {
          name: "开州区"
        },
        {
          name: "垦利"
        },
        {
          name: "宽城"
        },
        {
          name: "库车市"
        },
        {
          name: "开阳"
        },
        {
          name: "康县"
        },
        {
          name: "开远市"
        },
        {
          name: "可克达拉市"
        },
        {
          name: "昆玉市"
        },
        {
          name: "克州"
        },
        {
          name: "喀什地区"
        },
        {
          name: "凯里"
        },
        {
          name: "垦丁"
        }
      ],
      all_cities_l: [
        {
          name: "连云港"
        },
        {
          name: "临沂"
        },
        {
          name: "洛阳"
        },
        {
          name: "柳州"
        },
        {
          name: "兰州"
        },
        {
          name: "廊坊"
        },
        {
          name: "临汾"
        },
        {
          name: "辽阳"
        },
        {
          name: "丽水"
        },
        {
          name: "六安"
        },
        {
          name: "龙岩"
        },
        {
          name: "聊城"
        },
        {
          name: "乐山"
        },
        {
          name: "拉萨"
        },
        {
          name: "吕梁"
        },
        {
          name: "辽源"
        },
        {
          name: "莱芜"
        },
        {
          name: "漯河"
        },
        {
          name: "娄底"
        },
        {
          name: "来宾"
        },
        {
          name: "泸州"
        },
        {
          name: "凉山"
        },
        {
          name: "六盘水"
        },
        {
          name: "丽江"
        },
        {
          name: "溧阳"
        },
        {
          name: "临海"
        },
        {
          name: "兰溪"
        },
        {
          name: "龙口"
        },
        {
          name: "耒阳"
        },
        {
          name: "莱州"
        },
        {
          name: "临安"
        },
        {
          name: "莱阳"
        },
        {
          name: "陆丰"
        },
        {
          name: "浏阳"
        },
        {
          name: "廉江"
        },
        {
          name: "林州"
        },
        {
          name: "临沧"
        },
        {
          name: "临夏"
        },
        {
          name: "乐昌"
        },
        {
          name: "临清"
        },
        {
          name: "灵宝"
        },
        {
          name: "冷水江"
        },
        {
          name: "乐陵"
        },
        {
          name: "龙海"
        },
        {
          name: "醴陵"
        },
        {
          name: "莱西"
        },
        {
          name: "乐平"
        },
        {
          name: "阆中"
        },
        {
          name: "鹿泉"
        },
        {
          name: "利川"
        },
        {
          name: "老河口"
        },
        {
          name: "凌海"
        },
        {
          name: "滦南"
        },
        {
          name: "灵山"
        },
        {
          name: "连州"
        },
        {
          name: "陵水"
        },
        {
          name: "临江"
        },
        {
          name: "连江"
        },
        {
          name: "临朐"
        },
        {
          name: "乐亭"
        },
        {
          name: "滦州市"
        },
        {
          name: "栾城"
        },
        {
          name: "鲁山"
        },
        {
          name: "灵石"
        },
        {
          name: "临漳"
        },
        {
          name: "临潼"
        },
        {
          name: "蓝田"
        },
        {
          name: "隆昌市"
        },
        {
          name: "鹿邑"
        },
        {
          name: "柳河"
        },
        {
          name: "临猗"
        },
        {
          name: "梁山"
        },
        {
          name: "利津"
        },
        {
          name: "临邑"
        },
        {
          name: "龙泉"
        },
        {
          name: "陵川"
        },
        {
          name: "隆尧"
        },
        {
          name: "雷州"
        },
        {
          name: "栾川"
        },
        {
          name: "龙游"
        },
        {
          name: "兰陵"
        },
        {
          name: "临沭"
        },
        {
          name: "涟水"
        },
        {
          name: "澧县"
        },
        {
          name: "辽中"
        },
        {
          name: "罗平县"
        },
        {
          name: "涟源市"
        },
        {
          name: "庐江县"
        },
        {
          name: "临颍"
        },
        {
          name: "蓝山"
        },
        {
          name: "隆回"
        },
        {
          name: "芦溪"
        },
        {
          name: "卢氏县"
        },
        {
          name: "隆化县"
        },
        {
          name: "洛宁"
        },
        {
          name: "兰考县"
        },
        {
          name: "临澧"
        },
        {
          name: "利辛"
        },
        {
          name: "灵丘县"
        },
        {
          name: "禄丰县"
        },
        {
          name: "溧水区"
        },
        {
          name: "泸县"
        },
        {
          name: "洛川县"
        },
        {
          name: "罗定市"
        },
        {
          name: "乐东"
        },
        {
          name: "梁平"
        },
        {
          name: "临高县"
        },
        {
          name: "罗源县"
        },
        {
          name: "陆川县"
        },
        {
          name: "临泉县"
        },
        {
          name: "禄劝彝族苗族自治县"
        },
        {
          name: "灵武市"
        },
        {
          name: "林芝"
        },
        {
          name: "陇南"
        }
      ],
      all_cities_m: [
        {
          name: "绵阳"
        },
        {
          name: "牡丹江"
        },
        {
          name: "马鞍山"
        },
        {
          name: "茂名"
        },
        {
          name: "梅州"
        },
        {
          name: "眉山"
        },
        {
          name: "密山"
        },
        {
          name: "满洲里"
        },
        {
          name: "梅河口"
        },
        {
          name: "汨罗"
        },
        {
          name: "明光"
        },
        {
          name: "麻城"
        },
        {
          name: "孟州"
        },
        {
          name: "孟津"
        },
        {
          name: "牟平"
        },
        {
          name: "眉县"
        },
        {
          name: "民权"
        },
        {
          name: "渑池"
        },
        {
          name: "绵竹"
        },
        {
          name: "蒙阴"
        },
        {
          name: "蒙自市"
        },
        {
          name: "蒙城"
        },
        {
          name: "勐腊县"
        },
        {
          name: "米易县"
        },
        {
          name: "闽侯县"
        },
        {
          name: "明水县"
        },
        {
          name: "门头沟区"
        },
        {
          name: "漠河"
        },
        {
          name: "苗栗"
        },
        {
          name: "冥王星"
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
    recently_visited() {
      return this.$store.state.RecentlyVisited
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
