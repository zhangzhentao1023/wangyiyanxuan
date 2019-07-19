<template>
  <div id="footer">
    <ul class="foot-list">
      <li :class="{on:'/home'=== $route.path}" @click="goTo('/home')">
         <i class="iconfont icon-home"></i>
         <p>首页</p>
      </li>
      <li :class="{on:'/category'=== $route.path}" @click="goTo('/category')">
          <i class="iconfont icon-leimupinleifenleileibie2"></i>
          <p>分类</p>
      </li>
      <li :class="{on:'/things'=== $route.path}" @click="goTo('/things')">
        <i class="iconfont icon-search"></i>
         <p>识物</p>
      </li>
      <li :class="{on:'/shopping'=== $route.path}" @click="goTo('/shopping')">
         <i class="iconfont icon-gouwucheman"></i>
          <p>购物</p>
      </li>
      <li :class="{on:'/personal'=== $route.path}" @click="goTo('/personal')">
         <i class="iconfont icon-geren"></i>
          <p>个人</p>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 1.30667rem
    .foot-list
      width 100%
      height 100%
      display flex
      border-top 0.01rem solid #eee
      li
        display flex
        width 20%
        height 100%
        flex-direction column
        justify-content:center
        align-items:center
        font-size 16px
        &.on
          color red 
        .iconfont
            font-size 38px
        p
          font-size 24px
</style>
