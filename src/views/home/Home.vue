<template>
  <div class="box">
    <div class="top">
      <div class="nav">
        <ul>
          <li><a id="file" href=""><img src="../../icon/标签1.png">
            <text id="text">归档</text>
          </a></li>
          <li><a id="class" href=""><img src="../../icon/应用.png">
            <text id="text">分类</text>
          </a></li>
          <li><a id="label" href=""><img src="../../icon/24gf-tags2.png">
            <text id="text">标签</text>
          </a></li>
        </ul>
        <input class="select" type="text" placeholder="Search..."/>
        <router-link to="Login">
          <div class="login">
            <p>登录</p>
          </div>
        </router-link>
      </div>
      <div class="background">
        <img id="background" src="../../image/踊りなさい。.jpg">
      </div>

    </div>
    <div class="mobile">
      <!-- 手机适配导航栏仅仅会在手机上显示 -->
      <div class="dh">
        <div class="title">Chen' Test</div>
        <div class="menu"><img @click="changeFlag" id="click" :src="menul"></div>
      </div>
      <transition
        enter-active-class="animate__fadeIn"
        leave-active-class="animate__fadeOut">
      <div class="menushow" v-show="flag" >
        <ul>
          <li id="first"><a href="">首页</a></li>
          <li><a id="mobilefile" href="">归档</a></li>
          <li><a id="classa" href="">分类</a></li>
          <li><a id="labela" href="">标签</a></li>
          <li><a id="guanyua" href="">关于</a></li>
          <li><router-link to="Login">登录</router-link></li>
        </ul>
      </div>
      </transition>
    </div>
    <div class="nav2">
      <div class="head"><a href=""><img src="../../image/1624784334510.png"></a></div>
      <ul>
        <li id="index"><a id="home" href=""><img src="../../icon/主页选中.png">
          <text>主页</text>
        </a></li>
        <li id="about"><a id="guanyu" href=""><img src="../../icon/关于.png">
          <text>关于</text>
        </a></li>
      </ul>
    </div>
    <div class="content">
      <div class="left">
        <h2>Chen' Test</h2>
        <p id="name">@WeiFeng Chen</p>
        <p id="test">测试</p>
        <ul>
          <li>提升技术</li>
          <li>测试</li>
          <li>时常摸鱼</li>
          <li>寻求工作</li>
        </ul>
        <div class="contact">
          <a href="mailto:weifengchen198@gmail.com">
            <div class="email">发送邮件</div>
          </a>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=nVkkl0n7znrrRi8YHC1GpCZwvBk9lLqc&noverify=0" target="_blank">
            <div class="qq">通过qq</div>
          </a>
        </div>
        <div class="index">
          <img src="../../icon/导航地址.png">
          <text>我的站点</text>
          <div class="list">
            <a href="https://myfake.xyz" target="_blank">
              <div class="blog">blog</div>
            </a>
            <a href="https://github.com/chen09281" target="_blank">
              <div class="github">github</div>
            </a>
            <a href="https://space.bilibili.com/89916974" target="_blank">
              <div class="bilibili">b站</div>
            </a>
          </div>
        </div>
      </div>
      <div class="mid">
        <!-- 主页 -->
        <div class="home">
          <div class="state">
            <p>今天没有更新</p>
          </div>
          <div class="test">
            <!-- 调整样式,后面会使用Ajax来读取内容 -->
            <div class="basics">
              <a href="">
                <div class="headnr"><img id="testimg" src="../../image/1624784334510.png"></div>
              </a>
              <div class="wz">
                <text>@Chen · 2022年1月8日</text>
                <a href="">
                  <h3>hello word</h3>
                </a>
                <p>测试使用</p>
              </div>
            </div>
            <a href=""><img id="drawing" src="../../image/【アニメ化】お隣の天使様にいつの間にか駄目人間にされていた件.jpg"></a>
            <div class="line"></div>
          </div>
          <div class="test">
            <!-- 调整样式,后面会使用Ajax来读取内容 -->
            <div class="basics">
              <a href="">
                <div class="headnr"><img id="testimg" src="../../image/1624784334510.png"></div>
              </a>
              <div class="wz">
                <text>@Chen · 2022年1月8日</text>
                <a href="">
                  <h3>hello word</h3>
                </a>
                <p>测试使用</p>
              </div>
            </div>
            <a href="./content/index.html"><img id="drawing" src="../../image/【アニメ化】お隣の天使様にいつの間にか駄目人間にされていた件.jpg"></a>
            <div class="line"></div>
          </div>
          <div class="test">
            <!-- 调整样式,后面会使用Ajax来读取内容 -->
            <div class="basics">

              <div class="headnr"><img id="testimg" src="../../image/1624784334510.png"></div>

              <div class="wz">
                <text>@Chen · 2022年1月10日</text>
                <a href="">
                  <h3>Why you bully me</h3>
                </a>
                <p>Why you bully me</p>
              </div>
            </div>
            <router-link to="Content">
              <img id="drawing" src="../../image/15D.jpg">
            </router-link>
            <div class="line"></div>
          </div>
        </div>
        <!-- 归档 -->
        <div class="file">
          <div class="statee">
            <h2>归档</h2>
            <p>共计3篇文章</p>
          </div>
          <div class="test">
            <h1>2022</h1>
            <p><a href="./content/index.html">Hello word</a><span>1-8</span></p>
            <p><a href="./content/index.html">Hello word</a><span>1-8</span></p>
            <p><a href="./content/index.html">Why you bully me</a><span>1-10</span></p>
            <div class="line"></div>
          </div>
        </div>
        <!-- 分类 -->
        <div class="Classification">
          <div class="class">
            <div class="menua"><a id="dan" href=""><h2>测试</h2></a><span>3</span></div>
            <ul>
              <li><a href="./content/index.html">Hello word</a></li>
              <li><a href="./content/index.html">Hello word</a></li>
              <li><a href="./content/index.html">Why you bully me</a></li>
            </ul>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <!-- 标签 -->
        <div class="label">
          <div class="la">
            <h1 style="text-align: center;margin-top: 15px;">None</h1>
          </div>
          <div class="line"></div>
        </div>
        <!-- 关于 -->
        <div class="ceshi">
          <h1 style="text-align: center; margin-top: 15px;">测试</h1>
        </div>
        <div class="line"></div>
      </div>
      <div class="right">
        <div class="fish">
          <img id="fish" src="../../image/_-removebg.png">
        </div>
      </div>
    </div>
    <div class="about">
      <div class="nr">
        <p id="years">@2022 Test</p>
        <p><a
            href="https://www.bilibili.com/video/BV1uT4y1P7CX?from=search&seid=1219413948160482257&spm_id_from=333.337.0.0">测试</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data: function () {
    return {
      flag: false,
      menul: require("../../icon/menu.png"),
    }
  },
  methods:{
    changeFlag(){
      if ($('.menushow').is(':hidden')){
        this.flag = true
        this.menul = require("../../icon/叉叉.png")
      } else {
        this.flag = false
        this.menul = require("../../icon/menu.png")
      }
    }
  },
  mounted() {
    document.addEventListener('visibilitychange', function (e) {
      let state = document.visibilityState;
      if (state == 'hidden') {
        console.log(state, "离开了")
        document.title = "官人别走啊/(ㄒoㄒ)/~~"
      } else {
        console.log(state, "回来了")
        document.title = "官人欢迎回来(*^_^*)"
      }
    })
  }
}
</script>
<style src="./css/index.css" scoped></style>
<style src="./css/mobile.css" scoped></style>
<style src="./css/ipad.css" scoped></style>
<style scoped>
</style>