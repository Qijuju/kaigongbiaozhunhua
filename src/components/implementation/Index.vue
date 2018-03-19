<template>
  <div class="index">

    <!--<Header title="项目开工条件落实情况"></Header>-->
    <van-nav-bar
      v-bind:title="'项目开工条件落实情况'"  right-text="关闭"  @click-right="onClickRight"  fixed
    >
    </van-nav-bar>

    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
      <div class="list">
        <div v-for="item in lists" @click="goListDetail(item)">{{item.xmmc}}</div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../Common/Header'
  import Scroll from '../Common/PullRefresh';

  export default {
    name: "index",
    components: {
      Header,
      'v-scroll': Scroll
    },
    data(){
      return{
        baseuserid:102300,
        page:1,
        lists:[{'xmmc':'测试项目名称一','id':1},{'xmmc':'测试项目名称二','id':2},{'xmmc':'测试项目名称三','id':3}]
      }
    },
    mounted:function () {
      this.getList();
    },
    methods:{

      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      // 获取落实情况的列表数据
      getList(){
        let vm = this;
        let url ='http://tljjgxt.r93535.com/XmkgtjlsqkListServlet?baseuserid='+vm._GLOBAL.baseUserId+'&page='+vm.page;
        axios.get(url).then(response => {
          this.lists = response.data.data;
        }).catch(err => {
          console.error(err.message)
        })
      },
      // 跳转列表详情页面
      goListDetail(item){
        this.$router.push({path: '/implementation/LSQKListDetail',query:{xmmc:item.xmmc,xmid:item.xmid}}); // 路由信息传值
      },
      onRefresh(done) {
        this.getList();
        done() // call done
      },
      onInfinite(done) {

      },

      // 跳转到搜索页面
      goSearchPage(date,slectProjectId,selectProjectName){

      },

      // 跳转到列表详情页1
      goDetail(planItem){

      },

      // 获取可选项目列表数据
      getProjects(){

      }
    }
  }
</script>

<style scoped>
  /* 重写 start*/
  .yo-scroll{
    top:46px;
  }
  /* 重写 end */
  /* 列表 start*/
  .list > div{
    width:100%;
    height:40px;
    padding:0 10px;
    text-align:left;
    line-height:40px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .list > div:nth-child(odd){
    background-color: #E5F2FA
  }
  /* 列表 end */

</style>
