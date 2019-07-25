<!-- 分类 -->
<template>
<div id="category">
    <!--category的头-->
    <section class="categoryHeader" >
      <span class=""></span>
      <span class="input">搜索商品,共一堆款好物</span>
    </section>
    <div class="containerWrap">
      <!--左侧导航-->
      <section class="nav">
        <ul>
          <li v-for="(item, index ) in list" :key="index">{{item.name}}</li>
         <!--  <li>夏凉专区</li>
          <li>爆品专区</li>
          <li>新品专区</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li> -->
        </ul>
      </section>
      <!--右侧-->
      <section class="container">
        <div>
          <img src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196">
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png">
              <span>丁磊的好货推荐</span>
            </li>
            <!-- <li >
              <img src="https://yanxuan.nosdn.127.net/9e9d99bd69e60ed0aaa43c880bdf295b.png?imageView&quality=85&thumbnail=144x144">
              <span>优选美食每满88-10</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/c45a07cfdb6354aa987fda7c2bb0445f.png?imageView&quality=85&thumbnail=144x144">
              <span>夏日男士穿搭特价</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/537552999ee981ed17eccf968fb2fd23.png?imageView&quality=85&thumbnail=144x144">
              <span>夏日女士穿搭特价</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/4428315990361bb823901b3c75e3af3b.png?imageView&quality=85&thumbnail=144x144">
              <span>180款爆品新定价</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/fbb962cc880b778b1aab7c19f7f2b64c.png?imageView&quality=85&thumbnail=144x144">
              <span>夏日运动好物特价</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/d7c6ec42a6a08d2bce1ad2452a89dd4e.png?imageView&quality=85&thumbnail=144x144">
              <span>夏季日用换新</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/02e21fa25f873ebd883f490ce7cf5f03.png?imageView&quality=85&thumbnail=144x144">
              <span>50元幸福好物</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144">
              <span>999+好评</span>
            </li> -->
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {reqCategoryList} from '../../api/index'
export default {
  data() {
    return {
      list: '',
    }
  },
  async mounted() {
    //左侧导航滑动
    new BScroll('.nav', {
      scrollY : true
    })
    const bbb= await reqCategoryList()
    this.list = bbb.data.categoryL1List
    console.log(bbb.data.categoryL1List)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#category
    // 头部
    .categoryHeader
      height 88px
      line-height 72px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      position fixed
      top 0
      left 0
      z-index 30
      background-color #fff
      border-bottom 1px solid #eee
      .input
        height 56px
        line-height 56px
        width 675px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 200px
        top 30px
    .containerWrap
      padding-top 88px
      display flex
      //左侧导航
      .nav
        height 1140px
        margin-top 30px
        ul
          width 162px
          li
            height 50px
            text-align center
            color #7e8c8d
            margin-top 40px
            font-size 28px
            line-height 50px
            &:first-child
              margin-top 0
          .active
            border-left 6px solid #b4282d
            color #b4282d
      //右侧内容
      .container
        width 588px
        height 1140px
        padding 0px 30px 100px 30px
        img
          width 528px
          height 192px
        ul
          display flex
          flex-wrap wrap
          margin-top 20px
          li
            width 144px
            height 216px
            margin-right 32px
            display flex
            flex-direction column
            img
              height 144px
              width 144px
            span
              font-size 28px
              text-align center

</style>
