<template>
  <div id="thing">
    <div class="header">
      <button class="btn" @click="$router.push('/Home')" >首页</button>
      <div class="title">
        <span class="faxian">发现</span>
        <span class="zhenxuan" @click="$router.push('/things/zhenxuan')">甄选家</span>
      </div>
      <div class="gowu">
        <button class="btn" @click="$router.push('/shopping')">购物车</button>
      </div>
    </div>
    <!-- 导航 -->
    <div class="wrap">
      <ul class='navList'>
        <li style="color: red">推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>开发者日记</li>
        <li>达人</li>
        <li>HOME</li>
      </ul>
    </div>
    <!-- 导航下的分割线 -->
    <div class="splist"></div>
    <!-- 中间的地方 -->
    <div v-for="(item, index) in listArr" :key="index">
      <div>
        <!-- 中间大图的 -->
        <div class="content">
          <h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png" alt="">
            </div>
            <span>选妹</span>
          </h3>
          <p class="wenben">
            夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20
          </p>
          <div class="bigimg">
            <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg" alt="">
          </div>
          <div class="see">
            <i class="iconfont iconkanguo"></i>
            <span>9521人看过</span>
          </div>
        </div>
        <!-- 分割线 -->
        <div class="splist2"></div>
        <!-- 中间小图的 -->
        <div class="con">
          <h3>
            <div>
              <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg" alt="">
            </div>
            <span>网易文漫：小蕙</span>
          </h3>
          <div class="tupian">
            <img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg" alt="">
          </div>
          <div class="wenben2">
            <p>大牌最爱的玻尿酸原液， 1瓶等于20片面膜</p>
          </div>
          <div class="see2">
            <i class="iconfont iconkanguo"></i>
            <span>9521人看过</span>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {reqRecommendData} from '../../api/index'
  export default {
    data(){
      return {
        listArr: ''
      }
    },
    async mounted () {
      new BScroll('.wrap',{
        scrollX: true
      })
      const ddd = await reqRecommendData()
      this.listArr= ddd
      console.log(ddd.data)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #thing
    .header
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
      .title
        width 520px
        text-align center
        .faxian
          font-size 40px
          margin-right 30px
          color #b4282d
          font-weight bold
        .zhenxuan
          font-size 20px

    .wrap
      width 640px
      height 80px
      margin-top 100px
      display flex
      .navList
        display flex
        flex-wrap nowrap
        background-color #ededed 
        width 1300px
        li
          height 100%
          width 128px
          text-align center
          line-height 80px
          margin 0 16px
          /* 分割线 */
    .splist
      width 750px
      height 20px
      background #f4f4f4
    .content
      width 750px
      height 670.95px
      background #fafafa 
      padding 32px 30px
      h3
        display flex
        width 690px
        height 54px
        div
          img 
            width 54px
            height 54px
            border-radius 50%
        span
          text-align center
          line-height 54px
          margin-left 20px
          
      .wenben
        font-size 0.426667rem
        color #333
        margin-bottom 0.213333rem
      .bigimg
        width 690px
        height 375.98px
        img 
          width 690px
          height 376px
      .see
        width 690px
        height 37px
        margin-top 0.213333rem
        position relative
        i
          width 0
          height 0
          position absolute
          top -104px
          left 0
        span 
          margin-left 40px
          height 31px
    .splist2
      width 750px
      height 20px
      background #f4f4f4
    .con
      width 750px
      height 340px
      background #fafafa
      padding 32px 30px
      h3
        display flex
        width 690px
        height 54px
        div
          img 
            width 54px
            height 54px
            border-radius 50%
        span 
          text-align center
          line-height 54px
          margin-left 20px
      .tupian
        position relative
        width 272px
        img 
          float right
          width 272px
          height 272px
          position absolute
          top -50px
          left 420px
      .wenben2
        font-size 0.48rem
        color #333
        margin-top 40px
        width 410px
</style>
