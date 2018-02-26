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
      xmjgglSearchCondId:'', // 项目管理机构id
      xmmcSearchCondId:'', // 项目名称id
      htbdSearchCondId:''  // 合同标段id

    },
    unitProjectInfo:{
      xmgljg:'' ,
      xmmc:'',
      htbd:'',
      clickDWGC:''
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
    setProjectInfo:(state,{proName}) =>{
      state.projectInfo.proName = proName
    },
    setSectionInfo:(state,{xmgljg,xmmc,htbd,bdid,xmjgglSearchCondId,xmmcSearchCondId,htbdSearchCondId}) =>{
      console.log("store保存的标段的搜索条件：" + xmjgglSearchCondId +'- '+ xmmcSearchCondId+' - ' +htbdSearchCondId);
      state.sectionInfo.xmgljg = xmgljg;
      state.sectionInfo.xmmc = xmmc;
      state.sectionInfo.htbd = htbd;
      state.sectionInfo.bdid = bdid;
      state.sectionInfo.xmjgglSearchCondId = xmjgglSearchCondId;
      state.sectionInfo.xmmcSearchCondId = xmmcSearchCondId;
      state.sectionInfo.htbdSearchCondId = htbdSearchCondId;


    },
    setUnitProjectInfo:(state,{xmgljg,xmmc,htbd,clickDWGC}) =>{
      console.log("store设置的单位工程为："+clickDWGC);
      state.unitProjectInfo.xmgljg = xmgljg;
      state.unitProjectInfo.xmmc = xmmc;
      state.unitProjectInfo.htbd = htbd;
      state.unitProjectInfo.clickDWGC = clickDWGC;

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
