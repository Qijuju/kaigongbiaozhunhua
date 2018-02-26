<template>
  <div class="index">
    <!-- title -->
    <Header title="开工标准化"></Header>
    <!--搜索栏-->
    <div class="tabs">
      <van-tabs @click="handleTabClick">
        <van-tab :title="'待我审批('+count+')'">
        </van-tab>
        <van-tab :title="'我已审批'">
        </van-tab>
        <van-tab :title="'我发起的'">
        </van-tab>
      </van-tabs>
      <div class="search">
        <div class="condition" @click="changStyle(0)">
          <img v-if="searchTab1" src="../../assets/images/images/searchg.png" alt="searchLogo">
          <img v-else="false" src="../../assets/images/images/search.png" alt="searchLogo">
          搜索
        </div>
        <div class="condition" @click="changStyle(1)">
          <img v-if="searchTab2"src="../../assets/images/images/sxg.png" alt="searchLogo">
          <img v-else="false" src="../../assets/images/images/sx.png" alt="searchLogo">
          筛选
        </div>
      </div>
    </div>

    <!-- 要滚动的内容 -->
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
      <div class="list">
        <div class="listItem" v-for="item in ToDoWorkflowList">
          <p>{{item.requestName}}</p>
          <p>{{item.workflowName}}</p>
          <p>{{item.currentNodeName}}</p>
          <p>{{item.creatorName}}</p>
        </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios';
  import Header from '../Common/Header'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)


  export default {
    name: "index",
    data(){
      return{
        active: 0,     // 当前选中的tab的下标
        count:3,       // 待我审批的数量
        pageNo : 1,   // 请求页码
        pageSize:7, // 每页请求数据的条数
        workflowTypeId:18,// 流程分类id 。 17代表：开工标准化； 18代表：安全风险管理
        ToDoWorkflowList: [],  // 待办流程列表数据
        searchTab1:false,
        searchTab2:false,
        baseuserId:236807,
        noData: '',

      }
    },
    components:{
      Header,
      VueScroller
    },
    mounted:function () {
      this.getCount();
      this.getToDoWorkflowList(); // 获取‘待我审批’字典
    },
    methods:{
      // 获取‘待我审批’字典
      getToDoWorkflowList(){
        console.log("获取首页数据方法调用");
        let vm = this;
        vm.pageNo = 1;
//        http://whjjgc.r93535.com/GetToDoWorkflowList?baseuserId=236807&pageNo=1&workflowTypeId=18&pageSize=100
        var url = 'http://whjjgc.r93535.com/GetToDoWorkflowList?baseuserId='+ vm.baseuserId+'&pageNo='+vm.pageNo+'&workflowTypeId='+ vm.workflowTypeId+'&pageSize=' + vm.pageSize;
        axios.get(url).then(response => {
          vm.ToDoWorkflowList = response.data;
        }).catch(err => {
          console.error(err.message)
        })
      },
      // 刷新首页数据
      refresh(done) {
        let vm= this;
        vm.getToDoWorkflowList(); // 调用请求首页数据的方法
        setTimeout(() => {
          this.$refs.myscroller.resize(); // 加载图标1.5s后消失
        }, 1500)

        done() // call done
      },

      // 加载更多
      infinite(done) {
        if(this.noData) {
          setTimeout(()=>{
            this.$refs.myscroller.finishInfinite(2);
          })
          return;
        }

        let vm = this;
        vm.pageNo++;

        var url = 'http://whjjgc.r93535.com/GetToDoWorkflowList?baseuserId='+ vm.baseuserId+'&pageNo='+vm.pageNo+'&workflowTypeId='+ vm.workflowTypeId+'&pageSize=' +vm.pageSize;
        axios.get(url).then((response) => {

          let arr = response.data; // 请求数据的条数

          setTimeout(() => {
            if(arr.length < vm.pageSize) {
              vm.noData = "没有更多数据"
            }else {
              // 将新的数据源追加都数据源列表中
              if(arr!==''&&arr!==null&&arr!==undefined){
                for(var i=0;i<arr.length;i++){
                  let obj={};
                  obj["creatorName"] = arr[i].creatorName;
                  obj["currentNodeName"] = arr[i].currentNodeName;
                  obj["receiveTime"] = arr[i].receiveTime;
                  obj["requestId"] = arr[i].requestId;
                  obj["requestName"] = arr[i].requestName;
                  obj["url"] = arr[i].url;
                  obj["workflowName"] = arr[i].workflowName;
                  obj["workflowNewFlag"] = arr[i].workflowNewFlag;
                  obj["workflowTypeId"] = arr[i].workflowTypeId;
                  vm.ToDoWorkflowList.push(obj);
                }
              }else {
                return;
              }
            }
            vm.$refs.myscroller.resize();
            done()
          }, 1500);
        }, (response) => {
          console.log('error');
        });
      },
      // tabs 的点击事件
      handleTabClick(index) {
        this.active = index;
//        switch (index){
//          case 0:
//
//            break;
//          case 1:
//
//            break
//          case 2:
//
//            break
//          default:
//            break;
//        }
      },
      // 获取待我审批的数量
      getCount(){
        let vm = this;
        let url = 'http://whjjgc.r93535.com/GetToDoWorkflowCount?baseuserId=236215&workflowTypeId=17';
        vm.$http.get(url).then((response) => {
          vm.count = response.data;
        }, (response) => {
          console.log('error');
        });
      },
      // 搜索+筛选的点击事件
      changStyle(num){
        // 设置字体颜色
        $($('.condition')[num]).css({
          'color':'#0087e8',
          'borderBottom':'2px solid #0087e8'
        }).siblings().css({
          'color':'#333',
          'borderBottom':'none'
        })

        if (num===0){
          this.$router.push({path:'/Home/search'});
          this.searchTab1 = true;
          this.searchTab2 = false;

        }else if (num===1){
          this.$router.push({path:'/Home/filter'});
          this.searchTab1 = false;
          this.searchTab2 = true;
        }
      }

    }
  }
</script>

<style scoped>
  /* tabs 标签栏 start */
  .tabs{
    position: fixed;
    top:46px;
    left:0px;
    width:100%;
    z-index:3;
    background: #E5F2FA;
  }
  .search > .condition{
    display: inline-block;
    width:50%;
    height:44px;
    text-align: center;
    line-height:44px;
    border:1px solid #ccc;
  }
  .search > .condition:last-child{
    border-left:none;
    margin-left:-4px;
  }
  .search > .condition >img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }

  /* 列表 start */
  .list{
    margin-bottom:80px;
    margin-top: 50px;
  }
  .list > .listItem{
    margin:10px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding:5px;
    -webkit-box-shadow:  0px 0px 5px 1px #ccc;
    -moz-box-shadow:    0px 0px 5px 1px #ccc;
    box-shadow:    0px 0px 5px 1px #ccc;

  }
  .list > .listItem > p{
    height:20px;
    line-height:20px;
    text-align: left;
  }
  /* 列表 end */

</style>
