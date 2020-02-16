import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const HelloWorld = () => import('@/views/HelloWorld')
const Home = () => import('@/views/Home')
const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const RankingList = () => import('@/views/RankingList')
const Search = () => import('@/views/Search')
const Header = () => import('@/layout/header')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
