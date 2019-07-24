<!-- 个人 -->
<template>
<div>
  <!-- profile主页 -->
 <div id="login" v-if="$route.path==='/personal'">
  <header>
    <!-- <i class="iconfont "></i> -->
    <button class="btn" @click="$router.push('/Home')" >首页</button>
    <span class="slot">网易严选</span>
    <div>
      <button class="btn" @click="$router.push('/shopping')">购物车</button>
      <!-- <i class="iconfont iconsearch"></i>
      <i class="iconfont icongouwuchekong"></i> -->
    </div>
  </header>
  <div id="loginHomeWrap">
    <div class="up">
      <section class="logol">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </section>
      <section class="choose">
        <button class="phone"  @click="$router.push('personal/phonelogin')">手机号码登陆</button>
        <button class="mail"  @click="$router.push('personal/notelogin')">邮箱账号登陆</button>
        <p>手机号快捷注册></p>
      </section>
    </div>
    <footer>
      <div>
        <i class="iconfont iconweixin"></i>
        <span> 微 信 </span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont iconqq"></i>
        <span> Q Q </span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont iconweibo"></i>
        <span>微 博</span>
      </div>
    </footer>
  </div>
</div>
  <!--手机登录页面 -->
<div id="phonelogin" v-if="$route.path==='/personal/phonelogin'">
  <header>
    <button class="btn" @click="$router.push('/Home')" >首页</button>
    <span class="slot">网易严选</span>
    <div>
      <button class="btn" @click="$router.push('/shopping')">购物车</button>
    </div>
  </header>
  <div class="top-img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
  </div>
  <div class="inputphone">  <!-- 输入手机号 -->
    <input type="text" placeholder="请输入手机号">
  </div>   
  <div class="inputcode">   <!-- 获取验证码 -->
    <input type="text" placeholder="请输入手机验证码">
    <button>获取验证码</button>
  </div>
  <div class="help">
    <span class="left">遇到问题</span>
    <span class="right">使用密码验证登录</span>
  </div>
  <div class="loginwrap">
    <div class="loginbtn">登录</div>  
  </div> 
  <div class="other">
    <div class="otherlogin" @click="$router.push('/personal')">其他登录方式</div>  
  </div> 
</div>

<!-- 邮箱登录 -->
<div id="notelogin"  v-if="$route.path==='/personal/notelogin'">
  <header>
    <button class="btn" @click="$router.push('/Home')" >首页</button>
    <span class="slot">网易严选</span>
    <div>
      <button class="btn" @click="$router.push('/shopping')">购物车</button>
    </div>
  </header>
  <div class="top-imglogo">
    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
  </div>
  <div class="youxiang">  <!-- 邮箱账号 -->
    <input type="text" placeholder="邮箱账号">
  </div>
  <div class="mima">  
    <input type="text" placeholder="密码">
  </div>
  <div class="login-help">
    <span class="left">注册账号</span>
    <span class="right">忘记密码</span>
  </div>
  <div class="loginwrap2">
    <div class="loginbtn2">登录</div>  
  </div> 
  <div class="other2">
    <div class="otherlogin2" @click="$router.push('/personal')">其他登录方式</div>  
  </div>
</div>
  
</div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #login
    background-color #f2f5f4
    height 100%
    z-index 20
  header
    display flex
    background-color #fafafa
    height 88px
    width 100%
    line-height 88px
    position fixed
    left 0
    top 0
    z-index 10
    padding 0 24px
    .btn
      background-color #fafafa
      border none
      .iconfont
        font-size 88px
        margin-bottom 50px
    .slot
      font-weight 900
      font-size 40px
      flex 1
      margin-left 36px
   #loginHomeWrap
    height 100%
    padding-top 100px
    overflow hidden
    .up
      display flex
      flex-direction column
      align-items center
      .logol
        height 450px
        line-height 490px
        text-align center
        img
          width 268px
          height 90px
      .choose
        display flex
        flex-direction column
        button
          border 1px solid #b4282d
          height 98px
          width 679px
          font-size 28px
          /* i
            font-size 30px
            margin-right 16px */
        .phone
          background-color #b4282d
          color #fff
        .mail
          margin-top 30px
          color #b4282d
          background-color #f2f5f4
        p
          font-size 28px
          margin-top 32px
          text-align center
    footer
      display flex
      justify-content center
      margin-top 300px
      padding-bottom 85px
        span
          font-size 30px
          color #7f7f7f
          margin-right 40px
        .split
          font-size 40px
  
  #phonelogin   /* 手机登录页面的样式 */
    width 100%
    height 100%
    .top-img
      img 
        width 192px
        height 63.98px
        margin-top 200px
        margin-left 250px
    .inputphone
      margin-top 180px
      text-align center
      width 675px
      height 90px
      input 
        width 620px
        line-height 90px
        border none
        border-bottom 0.013333rem solid #bdbdbd
    .inputcode
      text-align center
      width 675px
      height 90px
      position relative
      input 
        width 620px
        line-height 90px
        border none
        border-bottom 0.013333rem solid #bdbdbd
      button
        /* display flex */
        position absolute
        top 20px
        right 0
    .help
      width 679px
      height 36px
      margin 0 auto
      margin-top 30px 
      .left
        float left
      .right
        float right 
        margin-right 20px
    .loginwrap
      margin-left 30px
      width 679px
      height 98px
      margin-top 20px
      background-color #b4282d
      .loginbtn
        font-size 0.373333rem
        color #ffffff
        margin-left 320px
        line-height 98px
        justify-content space-between 
    .other
      width 679px
      height 98px
      margin-top 20px
      margin-left 30px
      text-align center
      .otherlogin
        justify-content space-between
        line-height 98px
        color #b4282d
        font-size 0.373333rem
        border 0.013333rem solid #b4282d
  #notelogin    /* 邮箱登录 */
    width 100%
    height 10000px
    .top-imglogo
      img 
        width 192px
        height 63.98px
        margin-top 200px
        margin-left 250px
    .youxiang
      margin-top 180px
      text-align center
      width 675px
      height 90px
      input 
        width 620px
        line-height 90px
        border none
        border-bottom 0.013333rem solid #bdbdbd
    .mima
      text-align center
      width 675px
      height 90px
      position relative
      input 
        width 620px
        line-height 90px
        border none
        border-bottom 0.013333rem solid #bdbdbd
    .login-help
      width 679px
      height 36px
      margin 0 auto
      margin-top 30px 
      .left
        float left
      .right
        float right 
        margin-right 20px
    .loginwrap2
      margin-left 30px
      width 679px
      height 98px
      margin-top 20px
      background-color #b4282d
      .loginbtn2
        font-size 0.373333rem
        color #ffffff
        margin-left 320px
        line-height 98px
        justify-content space-between 
    .other2
      width 679px
      height 98px
      margin-top 20px
      margin-left 30px
      text-align center
      .otherlogin2
        justify-content space-between
        line-height 98px
        color #b4282d
        font-size 0.373333rem
        border 0.013333rem solid #b4282d
</style>
