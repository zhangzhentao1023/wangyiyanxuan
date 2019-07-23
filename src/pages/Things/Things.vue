<!-- 识物 -->
<template>
<div>
  <div id="thingsWrap">
    <Header>
      <div class="slot">
        <span class="active">发现</span>
        <span>甄选家</span>
      </div>
    </Header>
  </div>
  <nav class="containerWrap">
    <nav class="navList">
      <ul>
        <li>推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>开发者日记</li>
      </ul>
    </nav>
      <!--中间的内容部分-->
      <div class="navContentWrap">
        <section class="center">
          <header>
            <div class="style2">
              <section class="wrap">
                <div class="left">
                  <h3>
                    <div>
                      <img src="https://yanxuan.nosdn.127.net/124b56ed2d8456b5ef8f2af82886615c.jpg?imageView&quality=65&thumbnail=56y56" alt="">
                    </div>
                    <span>小周</span>
                  </h3>
                  <p class="big">三秒入魂，媲美现磨手冲的即溶咖啡</p>
                  <p class="small">6种烘焙风格，一盒尽享</p>
                  <section>
                    <i class="iconfont iconkanguo"></i>
                    <span>9476人看过</span>
                  </section>
                </div>
                <div class="right">
                  <img  src="https://yanxuan.nosdn.127.net/e90cef1231f016f3db49360530461e38.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                </div>
              </section>
            </div>
            <div class="style2">
              <section class="wrap">
                <div class="left">
                  <h3>
                    <div>
                      <img src="https://yanxuan.nosdn.127.net/124b56ed2d8456b5ef8f2af82886615c.jpg?imageView&quality=65&thumbnail=56y56" alt="">
                    </div>
                    <span>小周</span>
                  </h3>
                  <p class="big">三秒入魂，媲美现磨手冲的即溶咖啡</p>
                  <p class="small">6种烘焙风格，一盒尽享</p>
                  <section>
                    <i class="iconfont icon-kanguo"></i>
                    <span>9476人看过</span>
                  </section>
                </div>
                <div class="right">
                  <img  src="https://yanxuan.nosdn.127.net/e90cef1231f016f3db49360530461e38.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                </div>
              </section>
            </div>
            <div class="style1">
              <section class="wrap">
                <h3>
                  <div>
                    <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
                  </div>
                  <span>选妹</span>
                </h3>
                <p>夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
                <div class="bigImage">
                  <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                </div>
                <footer>
                  <i class="iconfont icon-kanguo"></i>
                  <span>709人看过</span>
                </footer>
              </section>
            </div>
            <div class="style1">
              <section class="wrap">
                <h3>
                  <div>
                    <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
                  </div>
                  <span>选妹</span>
                </h3>
                <p>夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
                <div class="bigImage">
                  <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                </div>
                <footer>
                  <i class="iconfont iconkanguo"></i>
                  <span>709人看过</span>
                </footer>
              </section>
            </div>
          </header>
        </section>
      </div>
  </nav>
</div>
</template>
<script>

export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #thingsWrap
    width 100%
    height 100%
    .slot
      flex 2
      justify-content center
      display flex
      position relative
      z-index 10
      span
        display block
        height 85px
        font-size 28px
        margin-right 36px
        margin-top 30px
      .active
        color #b4282d
        font-weight bold
        font-size 40px
  .containerWrap
    padding-top 90px
    .navList
      width 100%
      overflow hidden
      border-bottom 1px solid #d9d9d9
      border-top 1px solid #d9d9d9
      background-color #fafafa
      position fixed
      top 88px
      left 0
      z-index 10
      ul
        display flex
        flex-wrap wrap
        height 74.5px
        line-height 74.5px
        width 1020px
        li
          font-size 28px
          margin 0 20px
          padding 0 8px
          color #7f7f7f
    .navContentWrap
      padding-top 74.5px
      .center
        position relative
        .style2
          .wrap
            display flex
            justify-content space-between
            padding 32px 30px
            .left
              width 400px
              h3
                display flex
                height 54px
                line-height 54px
                div
                  width 54px
                  height 54px
                  border-radius 50%
                  overflow hidden
                  margin-right 12px
                  img
                    width 54px
                    height 54px
                span
                  font-size 28px
                  color #333
              .big
                color #333
                font-size 36px
                padding-top 32px
              .small
                color #7f7f7f
                font-size 28px
                padding-top 8px
              section
                margin-top 18px
                color #999
                i
                  font-size 30px
            .right
              height 272px
              width 272px
              border-radius 8px
              overflow hidden
              img
                height 272px
                width 272px
        .style1
          .wrap
            padding 32px 30px
            h3
              display flex
              height 54px
              line-height 54px
              margin-bottom 24px
              div
                width 54px
                height 54px
                border-radius 50%
                overflow hidden
                margin-right 12px
                img
                  width 54px
                  height 54px
              span
                font-size 28px
                color #333
            p
              font-size 32px
              color #333
              margin-bottom 16px
            .bigImage
              border-radius 8px
              overflow hidden
              img
                height 376px
                width 690px
            footer
              margin-top 10px
              color #999
              span
                font-size 28px
              i
                font-size 30px

</style>  
