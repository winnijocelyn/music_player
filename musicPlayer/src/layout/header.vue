<template>
  <div class="header">
      <div class="header_top">
          <i class="iconfont menu">&#xe65c;</i>
          <span>云音悦</span>
          <i @click="search" class="search iconfont">&#xe62b;</i>
      </div>
      <div class="header_bottom">
          <div class="header_bottom_tab">
            <span  @click="tab('Recommend')" :class="this.subassembly=='Recommend'?'header_bottom_active':''">推荐</span>
            <span @click="tab('Singer')" :class="this.subassembly=='Singer'?'header_bottom_active':''">歌手</span>
            <span  @click="tab('RankingList')" :class="this.subassembly=='RankingList'?'header_bottom_active':''">排行榜</span>
          </div>
          <div :is="subassembly" keep-alive class="header_bottom_content"></div>
      </div>
  </div>
</template>

<script>
const Recommend = () => import('../views/Recommend')
const Singer = () => import('../views/Singer')
const RankingList = () => import('../views/RankingList')
export default {
  name: 'Header',
  data () {
    return {
      subassembly: 'Recommend'// 默认推荐
    }
  },
  components: {
    Recommend,
    Singer,
    RankingList
  },
  methods: {
    jump () {
      this.$router.push('/Header')
    },
    tab (component) {
      this.subassembly = component// 点击事件传来的标签名
    },
    search () {
      this.$router.push('/Search')
    }

  }
}
</script>

<style lang="less" scope>
.header{
    width:375px;
    height: 228px;
    background-color: rgb(212,68,57);
    &_top{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items:center;
        height: 60px;
        border-bottom: 0.5px solid #fff;
        .menu {
          font-size: 25px;
          color: #fff;
        }
        .search {
           font-size: 25px;
           color: #fff;
        }
        span{
            font-size: 20px;
            margin: 0 auto;
            color:#fff;
            }
    }
    &_bottom{
        &_tab{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        font-size: 14px;
        color:#fff;
        margin-top: 15px;
        }
        &_active{
            font-weight: 700;
            border-bottom: 1px solid #fff;
        }
        &_content{
            margin-top: 12px;
        }
    }
}

</style>
