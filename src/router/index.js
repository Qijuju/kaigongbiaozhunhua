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
import Project from '../components/project/Index'
import ProjectDetail from '../components/project/Detail'
import ProjectDetailNext from '../components/project/DetailNext'

// 标段
import SectionIndex from '../components/section/Index'
import SectionSearch from '../components/section/Search'
import SectionDetail from '../components/section/Detail'
import SectionDetailNext from '../components/section/DetailNext'

// 单位工程
import UnitIndex from '../components/unitProject/Index'
import UnitSearch from '../components/unitProject/Search'
import UnitDetail from '../components/unitProject/Detail'
import UnitDetailNext from '../components/unitProject/DetailNext'

// 待办流程
import ToDoWork from '../components/todowork/ToDoWork'
import ToDoWorkSearch from '../components/todowork/ToDoWorkSearch'
import ToDoWorkScreen from '../components/todowork/ToDoWorkScreen'
// 已办流程
import DoWork from '../components/dowork/DoWork'
import DoWorkSearch from '../components/dowork/DoWorkSearch'
import DoWorkScreen from '../components/dowork/DoWorkScreen'
// 我发起的流程
import ICreate from '../components/icreate/ICreate'
import ICreateSearch from '../components/icreate/ICreateSearch'
import ICreateScreen from '../components/icreate/ICreateScreen'

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
    // 待办流程
    {
      path: '/ToDoWork',
      name: 'ToDoWork',
      component: ToDoWork
    },
    {
      path: '/ToDoWorkScreen',
      name: 'ToDoWorkScreen',
      component: ToDoWorkScreen
    },
    {
      path: '/ToDoWorkSearch',
      name: 'ToDoWorkSearch',
      component: ToDoWorkSearch
    },
    // 已办流程
    {
      path: '/DoWork',
      name: 'DoWork',
      component: DoWork
    },
    {
      path: '/DoWorkScreen',
      name: 'DoWorkScreen',
      component: DoWorkScreen
    },
    {
      path: '/DoWorkSearch',
      name: 'DoWorkSearch',
      component: DoWorkSearch
    },
    // 我发起的流程
    {
      path: '/ICreate',
      name: 'ICreate',
      component: ICreate
    },
    {
      path: '/ICreateScreen',
      name: 'ICreateScreen',
      component: ICreateScreen
    },
    {
      path: '/ICreateSearch',
      name: 'ICreateSearch',
      component: ICreateSearch
    },{
      path: '*',
      redirect: '/Home'
    }]
})

export default router
