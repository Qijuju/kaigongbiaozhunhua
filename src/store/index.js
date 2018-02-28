/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    implementation:{
      projectInfo:{
        xmmc:'',
        xmid:''
      }
    },
    projectInfo:{
      proName:''
    },
    sectionInfo:{
      xmgljg:'',// 项目管理机构
      xmmc:'',  // 项目名称
      htbd:'',   // 合同标段
      bdid:'',
      id:'',
      xmjgglId:'', // 搜索项目管理机构id
      xmmcId:'', // 搜索项目名称id
      htbdId:''  // 搜索合同标段id

    },
    unitProjectInfo:{
      xmgljg:'' ,
      xmmc:'',
      htbd:'',
      dwgcId:''
    }
  },
  getters: {
    implementation:state => state.implementation,
    projectInfo:state => state.projectInfo,
    sectionInfo:state => state.sectionInfo,
    unitProjectInfo:state => state.unitProjectInfo
  },
  mutations: {
    setImplementation:(state,{xmmc,xmid}) =>{

      state.implementation.projectInfo.xmmc = xmmc
      state.implementation.projectInfo.xmid = xmid
    },
    setProjectInfo:(state,{proName,xmid}) =>{
      console.log("store存储的项目id："+xmid);
      state.projectInfo.proName = proName
      state.projectInfo.xmid = xmid
    },
    setSectionInfo:(state,{xmgljg,xmmc,htbd,bdid,id,xmjgglId,xmmcId,htbdId}) =>{
      console.log("stor标段存储的项目机构管理id：" + xmjgglId+'项目id：'+xmmcId+"合同标段id："+htbdId);
      state.sectionInfo.xmgljg = xmgljg;
      state.sectionInfo.xmmc = xmmc;
      state.sectionInfo.htbd = htbd;
      state.sectionInfo.bdid = bdid;
      state.sectionInfo.id = id;
      state.sectionInfo.xmjgglId = xmjgglId;
      state.sectionInfo.xmmcId = xmmcId;
      state.sectionInfo.htbdId = htbdId;
    },
    setUnitProjectInfo:(state,{xmgljg,xmmc,htbd,dwgcId}) =>{
      console.log("store设置的单位工程为："+dwgcId);
      state.unitProjectInfo.xmgljg = xmgljg;
      state.unitProjectInfo.xmmc = xmmc;
      state.unitProjectInfo.htbd = htbd;
      state.unitProjectInfo.dwgcId = dwgcId;

    }
  },
  actions: {
    getSong({commit, state}, hash){
      commit('toggleAudioLoadding', true)
      axios.get(`/bproxy/yy/index.php?r=play/getdata&hash=${hash}`).then(({data}) => {
        data = data.data
        const songUrl = data.play_url
        const imgUrl = data.img
        const title = data.audio_name
        const songLength = data.timelength / 1000
        const singer = data.author_name
        const currentLength = 0;
        const lrc = data.lyrics
        const	audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
        commit('setAudio', audio)
        commit('setLrc', lrc)
        commit('toggleAudioLoadding', false)
      })
    },
    prev({dispatch, state}){
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == 0) {
        state.listInfo.songIndex = list.length
      } else {
        state.listInfo.songIndex--
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    },
    next({dispatch, state}){
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == list.length - 1) {
        state.listInfo.songIndex = 0
      } else {
        ++state.listInfo.songIndex
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    }
  }
})

export default store
