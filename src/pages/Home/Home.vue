<template>
  <div class="HomeContainer">
    <div class="home_header">
      <!-- 头部 -->
      <div class="home_headers">
        <!-- 头部上部分 -->
        <div class="header_top">
          <!-- logo图 -->
          <span class="logo">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          </span>
          <!-- 中间部分 -->
          <div class="header_top_center">
            <i class=""></i>
            <span>搜索商品,共1314款好物</span> 
          </div>
          <!-- 登录 -->
          <button class="loginBtn" @click="$router.push('/personal')">登录</button>
        </div>
        <!-- 头部下部分 -->
        <div class="header_bottom">
          <div class="headernav">
            <ul class="header_nav_list">
              <li class="nav_item tj nav_active">推荐</li>
              <li class="nav_item">居家生活</li>
              <li class="nav_item">服饰鞋包</li>
              <li class="nav_item">美食酒水</li>
              <li class="nav_item">个护清洁</li>
              <li class="nav_item">母婴亲子</li>
              <li class="nav_item">运动旅行</li>
              <li class="nav_item">数码家电</li>
              <li class="nav_item">全球特色</li>
            </ul>
          </div>
          <div class="header_jiantou">
            <span class="jiantou_white"></span>
           
              <div class="jiantou_icon" @click="isShowCategory=true,isShow=true">
                <transition name='fade'>
                  <i class=""></i>
                </transition>
              </div>
          </div>
        </div>
      </div>
      <!-- 箭头 点击显示全部分类 -->
      <div class="nav_categort" v-show="isShowCategory">
        <div class="all_category">
          全部频道
        </div>
        <div class="nav_icon" @click="isShowCategory=false,isShow=false">
          <i class="iconfont iconxiangxiajiantou"></i>
        </div>
        <div class="categoryList">
          <ul>
            <li class="category_item category_active">推荐</li>
            <li class="category_item">家居生活</li>
            <li class="category_item">服饰鞋包</li>
            <li class="category_item">美食酒水</li>
            <li class="category_item">个护清洁</li>
            <li class="category_item">母婴亲子</li>
            <li class="category_item">运动旅行</li>
            <li class="category_item">数码家电</li>
            <li class="category_item">全球特色</li>
          </ul>
        </div>
      </div>
      <!-- 蒙板 -->
      <div class="mask" v-show="isShow"></div>
    </div>

    <!-- 轮播 -->
    <div class="home_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/387774a110c810fde93e77b331c968c8.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/dd155ae0e9f700d878a89b918f73f392.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>  
      </div>  
    </div>

    <!-- 轮播图下的自营品牌 -->
    <div class="autotrophy">
      <ul class="autotrophy_list">
        <li class="autotrophy_item">
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
          <span>网易自营品牌</span>
        </li>
        <li class="autotrophy_item">
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
          <span>30天无忧退货</span>
        </li>
        <li class="autotrophy_item">
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>

      <!-- 主体内容 -->
    <div class="home_content">
      <!-- 分类 -->
      <div class="content_category">
        <div class="content_category_list">
          <ul>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              <span>新品首发</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
              <span>家居生活</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
              <span>服饰鞋包</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
              <span>美食酒水</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
              <span>个护清洁</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
              <span>母婴亲子</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
              <span>运动旅行</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
              <span>数码家电</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
              <span>全球特色</span>
            </li>
            <li class="content_category_item">
              <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
              <span>超级会员</span>
            </li>    
          </ul>          
        </div>
      </div>

      <!-- 新人专享 -->
      <div class="newPerson">
        <!-- 标题 -->
        <div class="newPerson_Title">
          <span>新人专享礼</span>
        </div>
        <!-- 礼包 -->
        <div class="newPerson_GiftBag">
          <!-- 左侧礼包 -->
          <div class="giftBag_Left">
            <div class="text">新人专享礼包</div>
            <div class="imgWrap">
              <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
          </div>
          <!-- 右侧 -->
          <div class="girtBag_right">
            <!-- 上面的福利 -->
            <div class="girtBag_right_T">
              <div class="content">
                <div class="picWrap">
                  <div class="pic">
                    <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&thumbnail=200x200&quality=75" alt="">
                  </div>
                  <div class="discount">
                    <span class="price">¥189</span>
                    <span class="oldPrice">¥219</span>
                  </div>
                </div>
                <div class="text">
                  <span class="title">福利社</span>
                  <span class="subTitle">今日特价</span>
                </div>
              </div>
            </div>
            <!-- 下面的拼团 -->
            <div class="girtBag_right_B">
              <div class="content">
                <div class="picWrap">
                  <div class="pic">
                    <img src="https://yanxuan.nosdn.127.net/b1a5bb7f71778c3c0d545721c861e491.png?imageView&thumbnail=200x200&quality=75" alt="">
                  </div>
                  <div class="discount">
                    <span class="price">¥1</span>
                    <span class="oldPrice">¥16</span>
                  </div>
                </div>
                <div class="text">
                  <span class="title">新人拼图</span>
                  <span class="toups">1元起包邮</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌直供 -->
      <div class="directSupply">
        <div class="directSupply_title">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <div class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou3"></i>
          </div>
        </div>
        <div class="content">
          <div class="content_item">
            <div class="cnt">
              <img src="./img/directSupply_1.png" alt="">
              <span class="title">
                海外制造商
              </span>
              <span class="price">9.9元起</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="./img/directSupply_2.png" alt="">
              <span class="title">
                CK制造商
              </span>
              <span class="price">29.9元起</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="./img/directSupply_3.png" alt="">
              <span class="title">
              新秀丽制造商
              </span>
              <span class="price">169元起</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="./img/directSupply_4.png" alt="">
              <span class="title">
                Nine West制造商
              </span>
              <span class="price">219元起</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 类目热销 -->
      <div class="categoryHot">
        <div class="categoryHot_title">
          <div class="left">
            <span>类目热销榜</span>
          </div>
        </div>  
        <div class="categoryHot_content">
          <div class="categoryHot_1">
            <div class="item-big item-big-1">
              <div class="name">
                <span>热销榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item-big item-big-2">
              <div class="name">
                <span>好评榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="categoryHot_2">
            <div class="item">
              <div class="name">居家生活榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/7110ef3a50fa078f3ea904d9453a5588.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">美食酒水榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">服饰鞋包榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">个护清洁榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">运动旅行榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">数码家电榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">母婴亲子榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="item">
              <div class="name">全球特色榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 人气推荐 -->
      <div class="popularity">
        <div class="popularity_title">
          <div class="left">
            <span>人气推荐</span>
          </div>
          <div class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou3"></i>
          </div>
        </div>
        <div class="spItem">
          <div class="imgWrap">
            <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
          </div>
          <div class="imgInfo">
            <div class="name">全棉针织条纹大豆纤维夏被 可机洗</div>   
            <div class="info">可裸睡针织棉，植物抗菌柔弹</div>   
            <div class="price">￥199</div>   
          </div>
        </div>
        <div class="popItem">
          <ul class="list">
            <li class="item">
              <div class="imgWrap">
                  <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="name">
                <span class="text">红豆薏米丸 100克*3瓶</span>
                <span class="price">￥69</span>
              </div>
              <div class="tagWraper">
                <div class="gradientPrice">
                  限时购
                </div>
                <div class="gradientPrice">
                  加价购
                </div>          

              </div>
            </li>
            <li class="item">
              <div class="imgWrap">
                  <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="name">
                <span class="text">英国设计 便携式榨汁杯</span>
                <span class="price">￥199</span>
              </div>
              <div class="tagWraper">
                <div class="gradientPrice">
                  特价
                </div>
                <div class="gradientPrice">
                  满吧
                </div>          

              </div>
            </li>
            <li class="item">
              <div class="imgWrap">
                  <img src="https://yanxuan.nosdn.127.net/1e18863d306689a49ca0370a269ba0db.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <div class="name">
                <span class="text">自在睡纯棉便携睡袋</span>
                <span class="price">￥99.9</span>
              </div>
              <div class="tagWraper">
                <div class="gradientPrice">
                  超值价
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 限时购 -->
      <div class="deseno">
        <div class="deseno_title">
          <div class="left">
            <span>限时购</span>
          </div>
          <div class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou3"></i>
          </div>
        </div>
        <div class="cnt">
          <ul class="cnt_list">
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/201e994cc4aed83c113851288700b90b.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥1019</span>
              <span class="oldPrice">￥1199</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/283550c09e6aa7be3e09360154d94ca2.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥619</span>
              <span class="oldPrice">￥699</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/426b5d6ea40d94d3a4594405df3bdec5.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥135</span>
              <span class="oldPrice">￥169</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/b19b84366c4600fd3cea8b638c536e5c.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥29.9</span>
              <span class="oldPrice">￥39.9</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/8c94157104d21edbad3bd4cbc84f63c9.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥1919</span>
              <span class="oldPrice">￥2399</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/215ee0e6d195d415c9091942a269a88a.png?imageView&thumbnail=216x216&quality=75" alt="">
              </div>
              <span class="price">￥68</span>
              <span class="oldPrice">￥78</span>
            </li>
          </ul>

        </div>
      </div>

      <!-- 新品首发 -->
      <div class="newShop">
        <div class="newShop_title">
          <div class="left">
            <span>新品首发</span>
          </div>
          <div class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou3"></i>
          </div>
        </div>
        <div class="cnt">
          <ul class="cnt_list">
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/fb15a0a7ad0d8ceaec24cfb51faa0856.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">大荔鲜脆冬枣</span>
              <span class="price">￥59</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/7f091a7f4f899aa7813c16136add37e8.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">户外防晒快干长檐棒球帽</span>
              <span class="price">￥75.7</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/9de2f199f6cd7f69270db2bb4433ec64.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">追风 女式轻弹慢跑运动鞋</span>
              <span class="price">￥199</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/e2c47f29876b41b073f5ae477a04565f.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">日本设计 防蚊手环</span>
              <span class="price">￥45</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/2cf09f313905a3e0f2db2a10beafafc2.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">smart 急速制冷杯</span>
              <span class="price">￥199</span>
            </li>
            <li class="cnt_item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/20818ef4e7d98ca6356b3ee59cc315ea.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="name">福禄寿喜 银铸金手镯</span>
              <span class="price">￥1388</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 最底部 -->
      <div class="shoppingGuide">
        <div class="content">
          <div class="content_item">
            <div class="cnt">
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
              <span class="title">
                几元就买到小确幸
              </span>
              <span class="price">珍惜唾手可得的小幸福</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
              <span class="title">
                断货补单王
              </span>
              <span class="price">严选必买爆款</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="https://yanxuan.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&thumbnail=150x150&quality=75" alt="">
              <span class="title">
              无限回购榜单
              </span>
              <span class="price">快消日用 超值5.9元起</span>
            </div>
          </div>
          <div class="content_item">
            <div class="cnt">
              <img src="https://yanxuan.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/8e7df18109f42349041567372bf48ccc.png?imageView&thumbnail=150x150&quality=75" alt="">
              <span class="title">
                20元内种草好物  
              </span>
              <span class="price">拔草不悔的凑单爆款</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        isShowCategory:false,
        isShow:false
      }
    },
    mounted() {
      var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      var a= new BScroll('.headernav', {
        scrollX:true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .HomeContainer
    width 100%
    overflow hidden
    .home_header
      background #fff
      .home_headers
        position relative
        height 150px
        background #fff
        z-index 21
        .header_top 
          position relative
          height 90px
          background #fff
          z-index 20
          padding 15px 30px
          display flex
          .logo
            display inline-block
            width 138px
            height 40px
            margin-right 20px
            margin-top 10px
            img
              width 138px
              height 40px
          .header_top_center
            line-height 56px
            background #EDEDED
            width 700px
            height 56px
            text-align center
            border-radius 10px
            .icon-41
              font-size 38px
              margin-right 10px
            span 
              color #666
              font-size 27px
          .loginBtn
            margin-left 16px
            width 200px
            height 40px
            border 2px solid #B4282D
            border-radius 10px
            color #b4282d
            text-align center
            line-height 39px
            margin-top 10px
        .header_bottom
          background #fff
          z-index 2
          position relative
          height 60px
          padding-right 120px
          .headernav      
            height 60px
            overflow hidden
            .header_nav_list
              width 1400px
              display flex
              padding 0 40px
              .nav_item
                display inline-block
                padding 0 16px
                width 152px
                height 60px
                font-size 28px
                line-height 60px
                color #333
                &.tj
                  width 88px
                &.nav_active
                  color #B4282d
                  border-bottom 4px solid #b4282d
          .header_jiantou
            position absolute
            right 0
            top 0
            span 
              position absolute
              right 100px
              display block
              width 60px
              height 60px
              background white
            .jiantou_icon
              width 100px
              height 60px
              text-align center
              line-height 60px
              .iconfont
                color gray 
                font-size 30px
                margin-bottom 15px
                /* margin-top 15px */
                vertical-align middle
               /*  &.fade-enter-active,&.fade-leave-active
                  transition rotate .5s
                &.fade-enter,&.fade-leave-to
                  transform rotate(-180deg) */
      .nav_categort
        background #fff
        z-index 21
        position absolute
        top 90px  
        .all_category
          width 750px
          height 60px
          font-size 28px
          color #333
          padding-left 30px
          line-height 60px
        .nav_icon 
          background pink 
          position absolute
          right 0
          top 0
          width 100px
          height 60px
          text-align center
          line-height 60px
          .iconfont
            font-size 30px 
            color gray
            vertical-align middle
        .categoryList
          width 750px
          height 312px
          padding 24px 0 0 0 
          .category_item
            display inline-block
            width 150px
            height 56px
            border 1px solid #ccc
            background #fafafa
            text-align center
            line-height 56px
            margin 0 0 40px 30px
            border-radius 5px
            &.category_active
              border 2px solid #B4282d
              color #b4282d
      .mask
        width 100%
        height 100%
        background rgba(0,0,0,0.5)
        position fixed
        z-index 20
        top 0
        bottom 0
        left 0
        right 0
    .home_swiper
      width 750px
      height 370px
      img
        width 750px
        height 370px
      /deep/.swiper-pagination
        position absolute
        top 315px
      /deep/.swiper-pagination-bullet
        width .53333rem
        height .05333rem
        display inline-block
        background black 
        opacity .4
        border-radius 0
      /deep/.swiper-pagination-bullet-active
        background white
    .autotrophy
      background #fff
      width 750px
      height 72px
      .autotrophy_list
        display flex
        padding 0 30px
        .autotrophy_item
          width 227px
          height 36px
          display inline-block
          justify-content center
          text-align center
          line-height 72px
          vertical-align middle
          img
            width 32px 
            height 32px
            display inline-block
            text-align center
            vertical-align middle
          span 
            margin-left 9px
            font-size 24px
    .home_content
      .content_category
        background #fff
        width 750px
        height 372px  
        .content_category_list
          width 750px
          height 372px
          padding 0 0 32px
          ul
            float left
            .content_category_item
              display block
              width 110px 
              height 156px
              float left
              margin 10px 20px
      .newPerson
        background #fff
        width 750px
        height 557px
        margin 20px 0
        padding 0 0 30px
        .newPerson_Title
          width 750px
          height 126.66px
          padding 0 30px
          line-height 90px
          font-size 32px
          text-align center
          span
            position relative
            &::before
              content ''
              width 24px
              height 3px
              position absolute   
              top 0.2rem
              left -.53333rem
              background #333
            &::after
              content ''
              width 24px
              height 3px
              background #333
              position absolute
              top 0.2rem
              left 2.33333rem
        .newPerson_GiftBag
          width 750px
          height 437px
          padding-left 30px
          .giftBag_Left
            float left
            width 342px
            height 434px
            background #F9E9CF
            margin-right 4px
            .text
              width 342px
              height 78px
              padding 30px 0 0 30px 
              font-size 32px 
            .imgWrap 
              width 258px
              height 257px
              margin .49333rem auto 
              text-align center
          .girtBag_right
            width 342px
            height 437px
            float left
            .girtBag_right_T
              width 342px
              height 215px
              background #F9E9CF
              margin-bottom .05333rem
              .content
                width 343px
                height 215px
                padding 20px 0 0 30px
                .picWrap
                  position absolute
                  right 0
                  width 200px 
                  height 200px
                  .pic
                    width 200px
                    height 200px  
                    position absolute
                    right .5rem
                  .discount
                    width 80px
                    height 80px
                    background #f59524
                    border-radius 50%
                    padding-top 10px
                    opacity .8
                    position absolute
                    top 0
                    right .9rem
                    color #fff
                    text-align center
                    .price
                      position absolute
                      left .2rem
                      font-size 24px
                    .oldPrice
                      font-size 20px
                      position absolute
                      left .2rem  
                      top .5rem   
                      text-decoration line-through                         
                .text
                  width 313px
                  height 84px
                  position relative
                  .title
                    font-size 32px
                  .subTitle
                    position absolute
                    top 40px
                    left 0
                    font-size 24px
                    color #7f7f7f
            .girtBag_right_B
              width 342px
              height 215px
              background #fffec2
              .content
                width 343px
                height 215px
                padding 20px 0 0 30px
                .picWrap
                  position absolute
                  right 0
                  width 200px 
                  height 200px
                  .pic
                    width 200px
                    height 200px  
                    position absolute
                    right .5rem
                  .discount
                    width 80px
                    height 80px
                    background #f59524
                    border-radius 50%
                    padding-top 10px
                    opacity .8
                    position absolute
                    top 0
                    right .9rem
                    color #fff
                    text-align center
                    .price
                      position absolute
                      left .2rem
                      font-size 24px
                    .oldPrice
                      font-size 20px
                      position absolute
                      left .2rem  
                      top .5rem   
                      text-decoration line-through                         
                .text
                  width 313px
                  height 84px
                  position relative
                  .title
                    font-size 32px
                  .toups
                      width 130px
                      height 32px
                      color #ff
                      background #cbb693
                      padding 0 10px
                      font-size 22px
                      position absolute
                      top 44px
                      left 0
      .directSupply
        background #fff
        width 750px
        height 653px
        margin-bottom 20px
        .directSupply_title
          width 750px
          height 100px
          padding 0 30px
          line-height 100px
          .left 
            float left
            font-size 32px
          .right 
            float right
            font-size 32px
        .content
          width 750px
          height 553px
          padding 0 26px 26px 30px  
          .content_item
            width 343px
            height 260px
            background #eee
            margin 0px 4px 4px 0
            display inline-block
            position relative
            .cnt
              width 100%
              height 100%
              img
                width 100%
                height 100%
              .title
                display block
                width 100%
                position absolute
                top 20px
                left 0
                font-size 28px
                text-align center
              .price
                position absolute
                top 54px
                left 0
                text-align center
                display block
                width 100%
                color #7f7f7f
      .categoryHot
        width 750px
        height 710px
        background #fff
        margin-bottom 20px
        .categoryHot_title
          width 750px
          height 100px
          padding 0 30px
          line-height 100px
          .left 
            float left
            font-size 32px
        .categoryHot_content
          width 750px
          height 610px
          padding 0 20px 20px 30px  
          .categoryHot_1
            .item-big
              width 340px
              height 200px
              background #f9f3e4
              margin 0 10px 10px 0
              float left 
              position relative
              &.item-big-2
                background #ebeff6
              .name
                width 339px
                height 41px
                font-size 28px
                margin 66px 0 0
                padding  0 0 0 24px
                position relative
                &::bfore
                  width 48px
                  height 4px
                  background #333
                  content ''
                  position absolute
                  left 0
                  bottom 50px
              .imgWrap
                width 200px
                height 200px
                position absolute
                top 0 
                right 0
                img
                  width 200px
                  height 200px 
          .categoryHot_2
            .item
              width 165px
              height 180px
              background #f5f5f5
              margin 0 10px 10px 0
              float left
              .name
                width 165px
                height 36px
                font-size 24px
                margin 10px 0 0
                text-align center
              .imgWrap
                width 120px
                height 120px
                margin 2px 0 0 23px
      .popularity
        width 750px
        height 784px
        background #fff
        margin-bottom 20px
        .popularity_title
          width 750px
          height 100px
          padding 0 30px
          line-height 100px
          .left 
            float left
            font-size 32px
          .right 
            float right
            font-size 32px
        .spItem
          width 690px
          height 280px
          background #fef0df
          margin 0 30px 20px
          position relative
          .imgWrap
            width 280px
            height 280px
            margin-right .4rem
            float left
          .imgInfo
            position absolute
            left 310px
            top 80px
            width 350px
            height 118px
            .name
              font-size 28px
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
            .info
              color #7f7f7f
              font-size 24px
            .price
              color #b4282d
              font-size 28px
        .popItem
          width 750px
          height 353px
          padding-left 10px
          .list
            width 740px
            height 100%
            .item
              width 216px
              float left
              padding 0 0 13px
              margin 0 0 0 20px
              .imgWrap
                background #f5f5f5
                margin-bottom 12px
              .name
                width 216px
                height 72px
                font-size 24px
                line-height 36px
                .text
                  width 193px
                  height 67px 
                .price
                  color #b4282d 
              .tagWraper
                width 216px
                height 33px
                margin 0 0 4px -12px
                .gradientPrice
                  color #ce2424
                  font-size 20px
                  margin 2px 0 5px 10px 
                  padding 0 12px
                  border 1px solid #ce2424
                  border-radius .18667rem
                  float left
      .deseno
        width 750px
        height 698px
        background #fff
        margin-bottom 20px
        .deseno_title
          width 750px
          height 100px
          padding 0 30px
          line-height 100px
          .left 
            float left
            font-size 32px
          .right 
            float right
            font-size 32px
        .cnt
          width 750px
          height 598px
          padding 0 10px 0 30px
          .cnt_list
            .cnt_item
              width 216px
              height 299px
              margin 0 20px 0 0
              padding 0 0 30px 
              float left
              .imgWrap
                width 216px
                height 216px
                background #f5f5f5
                border-radius 4px
                margin-bottom .16rem
              .price
                color #b4282d
                font-size 28px
                text-align center
                margin-right 10px
              .oldPrice
                color #7f7f7f
                font-size 24px
                text-decoration line-through
      .newShop
        width 750px
        height 798px
        background #fff
        margin-bottom 20px
        .newShop_title
          width 750px
          height 100px
          padding 0 30px
          line-height 100px
          .left 
            float left
            font-size 32px
          .right 
            float right
            font-size 32px  
        .cnt
          width 750px
          height 598px
          padding 0 10px 0 30px
          .cnt_list
            .cnt_item
              width 216px
              height 299px
              margin 0 20px 0 0
              padding 0 0 30px 
              float left
              .imgWrap
                width 216px
                height 216px
                background #f5f5f5
                border-radius 4px
                margin-bottom .16rem
              .name
                font-size 24px
                text-align center
                margin-right 10px
              .price
                color #b4282d
                font-size 24px
      .shoppingGuide
        box-sizing border-box
        width 750px
        height  650px
        background #fff
        padding 10px 30px 30px 26px 
        margin 0 0 20px
        .content
          width 750px
          height 553px
          .content_item
            width 343px
            height 260px
            background #f5f5f5
            margin 0px 4px 4px 0
            display inline-block
            position relative
            .cnt
              width 100%
              height 100%
              img
                width 150px
                height 150px
                margin-top 100px
              .title
                display block
                width 100%
                position absolute
                top 20px
                left 0
                font-size 28px
                text-align center
              .price
                position absolute
                top 54px
                left 0
                text-align center
                display block
                width 100%
                color #7f7f7f
</style>

