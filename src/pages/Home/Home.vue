<template>
  <div id="warp">
      <header class="header">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          <div class="input">
              <span><i class="iconfont icon-search"></i></span>
              <span>搜索商品,共21768款好物</span>
          </div>
          <div class="login">登录</div>
      </header>
      <ul class="nav">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <!-- <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li> -->
        <li class="jiantou">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </li>
      </ul>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <ul class="g-grow">
        <div>
          <a class="wenben">
            <i></i>
            <span class="text">网易自营品牌</span>
          </a>
        </div>
        <div>
          <a class="wenben">
            <i></i>
            <span class="text">网易自营品牌</span>
          </a>
        </div>
        <div>
          <a class="wenben">
            <i></i>
            <span class="text">网易自营品牌</span>
          </a>
        </div>
      </ul>
      <div class="listwrap">
        <ul class="wrap">
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
            <span>居家生活</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
            <span>服饰鞋包</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
            <span>美食酒水</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
            <span>个护清洁</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
            <span>母婴妻子</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
            <span>运动旅行</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
            <span>数码家电</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
            <span>全球特色</span>
          </li>
          <li class="list">
            <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
            <span>超级会员</span>
          </li>
        </ul>
      </div>
      <span class="gg">
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </span>
      <div class="tian">
        <div class="tianyi">
          <span class="textyi">几元就能买到小确幸</span>
          <span class="texter">珍惜睡手可得的小幸福</span>
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  

  export default {
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#warp
  width 100%
  height 100%
  .header
    width 100%
    height 1.173333rem
    // background-color pink 
    display flex
    padding .21333rem .4rem
    img 
      height 0.533333rem
      margin .13rem 0
      margin-right .18rem
    .input
      width 5.8936rem
      height .74667rem
      background-color #ededed
      border-radius 0.10667rem
      color #666
      font-size .37333rem
      display flex
      justify-content center
      align-items center
      span 
        margin-right 0.1rem
    .login
      width 0.98667rem
      height 0.53333rem
      font-size 0.32rem
      color #b4282d
      border #b4282d
      text-align center
      line-height 0.53333rem
      border: 1px solid #b4282d
      border-radius .10667rem
      margin-left .21333rem
      font-size .32rem 
      margin-top 0.12rem  
  .nav
    position relative
    display flex
    align-items center
    text-align center
    width 1459.45px
    height 60px
    /* background-color pink */
    color #333 
    font-size .37333rem
    
    li
      display inline-block
      width 143.94px
      padding 0 .21333rem;
      .jiantou
        position absolute
        color red
        font-size 16px
        left 600px
        top 0
        width 16px
        height 16px
        img 
          font-size 100px

  .swiper-container
    height 400px
    .swiper-wrapper
      .swiper-slide
      img 
        height 400px
  .g-grow
    width 750px
    height 72px
    display flex
    justify-content:space-around
    line-height 72px
    div
      .wenben
        font-size .32rem
  .listwrap
    width 100%
    height 372.97px
    .wrap
      height 340.97px
      display flex
      display -webkit-flex
      justify-content center
      flex-direction row
      flex-wrap wrap
      .list
        width 110px
        height 156px
        flex-wrap wrap
        margin  0 16px 
  .gg
    width 750px
    height 126.66px
  .tian
    width 750px
    height 575.95px
    .tianyi
      width 342.98px
      height 264px
      





</style>

