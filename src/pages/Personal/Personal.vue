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
</style>
