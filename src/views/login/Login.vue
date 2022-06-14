<template>
  <div class="box">
    <div class="left">

      <div class="carousel">
        <!--图片背景-->
        <div class="content">
          <ul>
            <li><img src="../../image/【受け継がれていく想い。】.jpg" alt=""></li>
            <li><img src="../../image/踊りなさい。.jpg" alt=""></li>
            <li><img src="../../image/Two12wishes.png" alt=""></li>
            <li><img src="../../image/【受け継がれていく想い。】.jpg" alt=""></li>
            <li><img src="../../image/リケジョの楽屋裏.jpg" alt=""></li>
            <li><img src="../../image/海拉鲁的一日之末.jpg" alt=""></li>
          </ul>
        </div>
      </div>

    </div>
    <div class="right">
      <div class="login" v-show="login">
        <div class="wecome">
          <h1>欢迎来到Tzc</h1>
          <p>请先登录</p>
        </div>
        <form id="login">
          <div class="input">
            <label for="username">用户名:</label>
            <input type="text" placeholder="请输入用户名" id="username" v-model="username"><br />
            <label for="password">&nbsp;&nbsp;&nbsp;密码:</label><input v-model="password" type="password" id="password" placeholder="请输入密码">
          </div>
          <button type="button" @click="click" id="loginn">登录</button>
        </form>
        <div class="function">
          <div class="regit"><p @click="regit">注册</p></div>
          <div class="lost"><p @click="lostt">忘记密码</p></div>
        </div>
      </div>
      <div class="reegit" v-if="regedit">
        <div class="back">
          <a href=""><img :src="back"></a>
        </div>
        <div class="wecome">
          <h1>欢迎注册</h1>
        </div>
        <form id="reg">
          <div class="log">
            <div class="input">
              <label for="accout">&nbsp;&nbsp;账号:</label><input type="text" id="accout" v-model="accout"><br />
              <label for="user">用户名:</label><input type="text" id="user" v-model="username"><br />
              <label for="pws">&nbsp;&nbsp;&nbsp;密码:</label><input type="password" v-model="password" id="pws"><br />
              <label for="phone">&nbsp;&nbsp;&nbsp;手机:</label><input type="text" id="phone" v-model="phone"><br />
            </div>
          </div>
          <button type="button" @click="zhu">注册</button>
        </form>
        <div class="error" style="color: red;">
          <p id="ae" style="display: none;">账号输入格式有误</p>
          <p id="ue" style="display: none;">用户名输入格式有误</p>
          <p id="pe" style="display: none;">密码输入格式有误</p>
          <p id="phe" style="display: none;">手机号码输入格式有误</p>
        </div>
      </div>
      <div class="loost" v-if="lost">
        <div class="back">
          <a href=""><img :src="back"></a>
        </div>
        <div class="wecome">
          <h1>忘记密码</h1>
        </div>
        <form>
          <div class="input">
            <label for="acout">账户:</label><input type="text" v-model="accout"><br />
          </div>
          <button type="button" @click="funKey">找回密码</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import qs from "qs";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data:function (){
    return{
      username:'',
      password:'',
      background:require('../../image/15D.jpg'),
      login:true,
      regedit:false,
      lost:false,
      back:'',
      accout:'',
      phone:'',
    }
  },
  mounted() {
    $('.box').css('background',this.background)
  },
  methods:{
    /**
     * 界面切换
     * */
    regit(){
      this.back = require('../../icon/返回.png')
      this.login = false
      this.regedit = true
    },
    lostt(){
      this.back = require('../../icon/返回.png')
      this.login = false
      this.regedit = false
      this.lost = true
    },
    /**
     * 注册
     * @param user
     * */
    zhu(){
      var user = qs.stringify({
        loginId: this.accout,
        userName: this.username,
        password: this.password,
        phone: this.phone
      })
      console.log(user)
      axios.post("http://localhost:8080/spring_demo_war/user/regit1",user)
          .then(res => {
            console.log(res.data)
          })
    },
    /**
     * 登录
     * @param username
     * @param password
     * */
    click(){
      console.log(this.username+"============="+this.password)
      axios.get("http://localhost:8080/spring_demo_war/user/login2",{
        params:{
          username:this.username,
          password:this.password
        }
      }).then(res => {
        console.log(res.data)
        // 页面专挑
        let path = this.$route.query.redirect
        this.$router.replace(
            path == "/" || path == undefined ? '/' : path
        )
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 找回密码
     * */
    funKey(message){
      console.log(this.accout)
      axios.get("http://localhost:8080/spring_demo_war/user/lost",{
        params:{
          userName: this.accout
        }
      }).then(res => {
        console.log(res.data)
        this.password = res.data.password
      })
      alert("你的密码为"+this.password)
    }
  },
}
</script>
<style src="./css/index.css" scoped></style>
<style src="./css/mobile.css" scoped></style>
<style src="./css/lun.css" scoped></style>
<style src="./css/regit.css" scoped></style>
<style src="./css/lost.css" scoped></style>
<style scoped>

</style>