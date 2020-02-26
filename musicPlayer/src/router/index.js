import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('@/views/Home')
const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const RankingList = () => import('@/views/RankingList')
const Search = () => import('@/views/Search')
const Header = () => import('@/layout/header')
const Swiper = () => import('@/shares/components/Swiper')
export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/RankingList',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
