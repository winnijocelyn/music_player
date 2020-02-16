<template>
  <div class="home">
    home
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapMutations, mapGetters, mapState} from 'vuex' // 引入map方法
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    jump () {
      this.$router.push('/Home')
    },
    ...mapMutations({ // 调用setNum方法
      setNum: 'SET_NUM'
    })

  },
  computed: {
    // ...mapGetters([           // 通过getters获取state数据
    //   'number'
    // ]),
    ...mapState({ // 通过state获取state数据
      number: state => state.home.number
    })
  }
}
</script>

<style scoped>
.home{
  height: 200px;
  width: 200px;
}
</style>
