<template>
  <div class="cart">
    <!-- 购物车的头 -->
    <div class="header-cart">
      <span class="shop-cart">购物车</span>
      <span class="ticket">领劵</span>
    </div>
    <!-- 头下的ul -->
    <ul class="list">
      <li>30天无忧退货</li>
      <li>48小时快速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <!-- 购物车中间部位 -->
    <div class="content">
      <!-- 图片 -->
      <div class="img">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      </div>
      <div>
        <div class="title">去添加点什么吧</div>
        <button class="btn" @click="$router.push('/personal')">
          <span>登录</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart
    width 100%
    height 100%
    overflow hidden
    background-color #f4f4f4
    .header-cart
      width 750px
      height 87.98px
      background-color #ffffff
      padding 0px 30px
      line-height 87.98px
      .shop-cart
        width 108px
        height 87px
        font-size 36px
      .ticket
        float right
        width 90px
        height 87.98px
        font-size 30px
        color #B4282D
    .list
      width 750px
      height 69.98px
      background-color #eeeeee
      display flex
      justify-content space-around
      li
        line-height 69.98px
    .content
      width 100%
      height 100%
      .img
        width 247.86px
        height 247.86px
        margin 0 auto
        margin-top 440px
      .title
        width 750px
        height 27px
        color #b4282d
        text-align center
      .btn
        width 479.73px
        height 91.94px
        background-color #b4282d 
        margin 50px 134px
        border:none
        span 
          color white
        

      
        

 
</style>
