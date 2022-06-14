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
      <div class="login">
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
          <div class="regit"><a id="reg" href="">注册</a></div>
          <div class="lost"><a id="lost" href="">忘记密码</a></div>
        </div>
      </div>
      <div class="reegit">
        <div class="back">
          <a href=""><img src="../../icon/返回.png"></a>
        </div>
        <div class="wecome">
          <h1>欢迎注册</h1>
        </div>
        <form id="reg" action="http://117.50.176.200:100/registerServlet" method="post">
          <div class="log">
            <div class="input">
              <label for="accout">&nbsp;&nbsp;账号:</label><input type="text" id="accout" name="loginId"><br />
              <label for="user">用户名:</label><input type="text" id="user" name="userName"><br />
              <label for="pws">&nbsp;&nbsp;&nbsp;密码:</label><input type="password" name="password" id="pws"><br />
              <label for="phone">&nbsp;&nbsp;&nbsp;手机:</label><input type="text" id="phone" name="phone"><br />
            </div>
          </div>
          <button type="submit">注册</button>
        </form>
        <div class="error" style="color: red;">
          <p id="ae" style="display: none;">账号输入格式有误</p>
          <p id="ue" style="display: none;">用户名输入格式有误</p>
          <p id="pe" style="display: none;">密码输入格式有误</p>
          <p id="phe" style="display: none;">手机号码输入格式有误</p>
        </div>
      </div>
      <div class="loost">
        <div class="back">
          <a href=""><img src="../../icon/返回.png"></a>
        </div>
        <div class="wecome">
          <h1>忘记密码</h1>
        </div>
        <form>
          <div class="input">
            <label for="acout">账户:</label><input type="text" id="acout"><br />
            <label for="kt">手机:</label><input type="text" id="kt">
          </div>
          <button type="submit">找回密码</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data:function (){
    return{
      username:'',
      password:'',
      background:require('../../image/15D.jpg')
    }
  },
  mounted() {
    $('.box').css('background',this.background)
  },
  methods:{
    click(){
      console.log(this.username+"============="+this.password)
      axios.get("http://localhost:8080/spring_demo_war/user/login2",{
        params:{
          username:this.username,
          password:this.password
        }
      }).then(res => {
        console.log(res.data)
        alert(123)
      }).catch(err => {
        console.log(err)
      })
    }
  },
}
</script>
<style src="./css/index.css" scoped></style>
<style src="./css/mobile.css" scoped></style>
<style src="./css/lun.css" scoped></style>
<style scoped>

</style>