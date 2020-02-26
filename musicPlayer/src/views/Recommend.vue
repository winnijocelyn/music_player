<template>
    <scroll
      class="wrapper"
          :data="uldata"
          :pulldown="pulldown"
    >
    <div class="recommend">
    <swiper height="340px" :list="list"  class="swiper" ></swiper>
    <h1 class="title">推荐歌单</h1>
    <ul class="content">
      <li v-for="(item,index) in uldata" :key="index" class="content_li">
        <div class="img_wrapper">
          <div class="decorate"></div>
          <img :src="item.src" alt="">
          <div class="play_count">
            <i class="iconfont play">&#xe62b;</i>
            <span class="count">{{item.count}}</span>
          </div>

        </div>
        <div class="desc">{{item.desc}}</div>
      </li>
    </ul>
    <div class="loading-wrapper"></div>
    </div>
    </scroll>

</template>

<script>
import swiper from '@/shares/components/Swiper'
import scroll from '@/shares/components/Scroll'
export default {
  data () {
    return {
      list: [
        {
          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/1.jpg'
        },
        {
          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/2.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/3.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/4.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/5.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/6.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/7.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/8.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/9.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/10.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/11.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/12.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/13.jpg'
        },
        {

          src:
              'https://raw.githubusercontent.com/zhangxiaoshang/va-carousel/master/static/images/14.jpg'
        }
      ],
      uldata: [
        {
          src: require('../assets/1.jpg'),
          desc: '歌手·当打之年1-3期现场及原曲合集',
          count: '160万'
        }
      ],
      pulldown: true
    }
  },
  methods: {
    jump () {
      this.$router.push('/Recommend')
    }

  },
  components: {
    swiper,
    scroll
  }
}
</script>
<style lang="less" scoped>
  .recommend{
    overflow-y:scroll;
    min-height:102%;
    overflow:-moz-scrollbars-vertical;
    width: 375px;
    .title{
      font-weight: 700;
      padding-left: 6px;
      font-size: 14px;
      line-height: 60px;
 }
 .content_li{
   position: relative;
   width: 120px;
   height: 172px;
 }
 .img_wrapper{
   width: 120px;
   height: 120px;
   margin-bottom: 3px;
   img{
     width: 100%;
     height: 100%;
     border-radius: 3px;
   }
 }
 .desc{
    height: 50px;
    text-align: left;
    font-size: 12px;
    line-height: 1.4;
    color: rgb(46, 48, 48);
    overflow: hidden;
    padding: 0px 2px;
 }
 .decorate{
   z-index: 1;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 35px;
    border-radius: 3px;
    background: linear-gradient(rgba(110, 110, 110, 0.6), rgba(255, 255, 255, 0))
 }
 .play_count{
  position: absolute;
  font-size: 12px;
  line-height: 16px;
  color: rgb(241, 241, 241);
  top: 0;
  left: 65px;
   z-index: 1;
   i{
     font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-family: iconfont !important;
   }
 }
}
</style>
