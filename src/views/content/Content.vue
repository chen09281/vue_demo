<template>
  <div class="box">
    <div class="top">
      <div class="nav">
        <ul>
          <li><a href="../index.html"><img src="../../icon/主页选中.png"><text id="text">主页</text></a></li>
          <li><a href="../README.md"><img data-src="../../icon/标签1.png"><text id="text">归档</text></a></li>
          <li><a href=""><img src="../../icon/应用.png"><text id="text">分类</text></a></li>
          <li><a href=""><img src="../../icon/24gf-tags2.png"><text id="text">标签</text></a></li>
        </ul>
        <input class="select" type="text" placeholder="Search..." />
        <router-link to="Login">
          <div class="login">
            <p>登录</p>
          </div>
        </router-link>>
      </div>
      <div class="bbackground">
        <img id="background" src="../../image/踊りなさい。.jpg">
      </div>
    </div>
    <div class="mobile">
      <!-- 手机适配导航栏仅仅会在手机上显示 -->
      <div class="dh">
        <div class="title">Chen' Test</div>
        <div class="menu"><img id="click" data-src="../../icon/menu.png"></div>
      </div>
      <div class="menushow">
        <ul>
          <li id="first"><a href="../index.html">首页</a></li>
          <li><a href="">归档</a></li>
          <li><a href="">分类</a></li>
          <li><a href="">标签</a></li>
          <li><a href="">关于</a></li>
          <li><a href="../Login/index.html">登录</a></li>
        </ul>
      </div>
    </div>
    <div class="background">
      <img id="background" src="../../image/踊りなさい。.jpg">
    </div>
    <div class="bt">
      <div class="nnr">
        <div class="con">
          <h1>Why?</h1>
          <div class="linee"></div>
          <p>why you bully me？</p>
          <img src="../../image/【アニメ化】お隣の天使様にいつの間にか駄目人間にされていた件.jpg">
          <div class="line"></div>
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
import test from './js/index'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  data:function (){
    return{

    }
  },
  created() {
    test
  },
}
</script>
<style src="./css/content.css" scoped></style>
<style src="./css/mobile.css" scoped></style>
<style src="./css/index.css" scoped></style>
<style scoped>

</style>