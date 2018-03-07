import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
import Home from '../components/Home/Index'
import HomeSearch from '../components/Home/Search'
import HomeFifter from '../components/Home/Filter'

// 落实情况
import LSQKIndex from '../components/implementation/Index'
import LSQKListDetail from '../components/implementation/ListDetail'

// 项目
import Project from '../components/project/ProjectIndex'
import ProjectDetail from '../components/project/Detail'
import ProjectDetailNext from '../components/project/DetailNext'

// 标段
import SectionIndex from '../components/section/SectionIndex'
import SectionSearch from '../components/section/Search'
import SectionDetail from '../components/section/Detail'
import SectionDetailNext from '../components/section/DetailNext'

// 单位工程
import UnitIndex from '../components/unitProject/UnitProjectIndex'
import UnitSearch from '../components/unitProject/Search'
import UnitDetail from '../components/unitProject/Detail'
import UnitDetailNext from '../components/unitProject/DetailNext'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
    // 首页
	  {
      path: '/Home',
      name: 'Home',
      component: Home
     },
    {
      path: '/Home/search',
      name: 'HomeSearch',
      component: HomeSearch
    },
    {
      path: '/Home/filter',
      name: 'HomeFifter',
      component: HomeFifter
    },
    //  落实情况
    {
      path: '/implementation/index',
      name: 'LSQKIndex',
      component: LSQKIndex
    },
    {
      path: '/implementation/LSQKListDetail',
      name: 'LSQKListDetail',
      component: LSQKListDetail
    },
    // 项目
    {
		path: '/project',
    name: 'Project',
		component: Project
    },
    {
      path: '/project/detail',
      name: 'ProjectDetail',
      component: ProjectDetail
    },
    {
      path: '/project/detailNext',
      name: 'ProjectDetailNext',
      component: ProjectDetailNext
    },
    // 标段
    {
      path: '/section',
      name: 'SectionIndex',
      component: SectionIndex
    },
    {
      path: '/section/search',
      name: 'SectionSearch',
      component: SectionSearch
    },
    {
      path: '/section/detail',
      name: 'SectionDetail',
      component: SectionDetail
    },
    {
      path: '/section/detailNext',
      name: 'SectionDetailNext',
      component: SectionDetailNext
    },
    // 单位工程
    {
      path: '/unitProject',
      name: 'UnitIndex',
      component: UnitIndex
    },
    {
      path: '/unitProject/search',
      name: 'UnitSearch',
      component: UnitSearch
    },
    {
      path: '/unitProject/detail',
      name: 'UnitDetail',
      component: UnitDetail
    },
    {
      path: '/unitProject/detailNext',
      name: 'UnitDetailNext',
      component: UnitDetailNext
    },
    {
      path: '*',
      redirect: '/Home'
    }]
})

export default router
