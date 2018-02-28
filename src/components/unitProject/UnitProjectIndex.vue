<template>
  <div class="index">
    <Header title="单位工程开工标准化"></Header>
    <div class="content">
      <div class="search">
        <div id="condition" @click="goSearch()">
          <img v-if="searchTab" src="../../assets/images/images/searchg.png" alt="searchLogo">
          <img v-else="false" src="../../assets/images/images/search.png" alt="searchLogo">
          搜索
        </div>
      </div>

      <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myUnitProjectScroller">
        <div class="box">
          <div class="innerBox clearfix" v-for="list in lists">
            <div class="time">
              <p>{{list.date}}</p>
            </div>
            <div class="item" v-for="item in list.data" @click="goDetail(item.dwgcId)">
              <p>{{item.dwgc}}</p>
              <p>{{item.xmmc}}</p>
              <p>{{item.bdgc}}</p>
              <p hidden>{{storeHtbdSearchCondId}}</p>
            </div>
          </div>
        </div>
      </scroller>
    </div>
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
    components:{
      Header,VueScroller
    },
    data() {
      return {
        baseuserId:102300, // 人员id（基础平台的）
        type:1,
        page:1, // 当前页码

        searchTab:false,

        pageSize:10, // 每页显示的数据
        noData:'',
        lists:[],
        xmjgglSearchCondId:'', // 获取搜索的项目管理机构id
        xmmcSearchCondId:'', // 获取搜索的项目名称id
        htbdSearchCondId:''  // 获取搜索的合同标段id
      }
    },
    computed: {
      storeHtbdSearchCondId() {
        let vm=this;
        vm.xmjgglSearchCondId = vm.$store.state.sectionInfo.xmjgglSearchCondId;
        vm.xmmcSearchCondId = vm.$store.state.sectionInfo.xmmcSearchCondId;
        vm.htbdSearchCondId = vm.$store.state.sectionInfo.htbdSearchCondId;

        // 获取新的搜索条件之后重新请求数据
        vm.getList(vm.xmjgglSearchCondId , vm.xmmcSearchCondId,vm.htbdSearchCondId );
        return vm.xmjgglSearchCondId;
      }
    },
    mounted:function () {
      this.getList('','',''); // 获取列表数据
    },
    methods:{
      // 获取首页数据
      getList(xmjgglId,xmmcId,htbdId){
        let vm=this;
        vm.page=1;
        // 函数调用，获取请求的url
        let url ='http://whjjgc.r93535.com/DwgckgbzhListServlet?type='+vm.type+'&baseuserid='+vm.baseuserId+'&page='+vm.page;

        axios.get(url)
          .then(response => {
            this.lists = response.data.data;

            console.log("单位工程列表首页数据："+JSON.stringify(this.lists));

            let thisCount = response.data.thisCount; // 当前请求的数据的条数
            if(thisCount < vm.pageSize) {
              vm.noData = "没有更多数据"
            }else {
              vm.noData ='';
            }

          }).catch(err => {
          console.error(err.message)
        })
      },

      // 刷新首页数据
      refresh(done) {
        let vm= this;
        vm.getList('','',''); // 调用请求首页数据的方法
        setTimeout(() => {
          this.$refs.myUnitProjectScroller.resize(); // 加载图标1.5s后消失
        }, 1500)

        done() // call done
      },
      // 加载更多
      infinite(done) {
        if(this.noData) {
          setTimeout(()=>{
            this.$refs.myUnitProjectScroller.finishInfinite(2);
          });
          return;
        }
        let vm = this;
        vm.page++;
        let url ='http://whjjgc.r93535.com/DwgckgbzhListServlet?type='+vm.type+'&baseuserid='+vm.baseuserId+'&page='+vm.page;

        axios.get(url).then((response) => {
          let thisCount = response.data.thisCount; // 当前请求的数据的条数
          let newData = response.data.data; // 请求数据

          setTimeout(() => {
            if(thisCount < vm.pageSize) {
              vm.noData = "没有更多数据了"
            }
            vm.$refs.myUnitProjectScroller.resize();
            done()
          }, 1000);
        }, (response) => {
          console.log('error');
        });
      },
      // 跳转搜索页面
      goSearch(){
        this.$router.push({path:'/unitProject/search'});

        $('#condition').css({
          'color':'#0087e8'
        })

        this.searchTab = true;

      },
      // 点击进入详情页面
      goDetail(dwgcId){
        console.log("点击的单位工程是："+ dwgcId);
        this.$store.commit('setUnitProjectInfo',{dwgcId:dwgcId});
        this.$router.push({path:'/unitProject/detail'});
      }
    }
  }

</script>

<style scoped>
  .content{
    margin-top:92px;
    margin-bottom:55px;
  }
  /* 搜索 */
  .search{
    position: fixed;
    top:46px;
    left:0px;
    width:100%;
    height:44px;
    z-index: 99;
    background: #fff;
  }
  .search > #condition{

    display: inline-block;
    width:100%;
    height:44px;
    text-align: center;
    line-height:44px;
    border:1px solid #ccc;
    background: #fff;
  }
  .search > #condition:last-child{
    border-left:none;
  }
  .search > #condition >img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }

  /* 列表 */
  .box{
    width:50%;
    border-right:1px dashed #ccc;
    margin-bottom:55px;
  }
  .innerBox{
    width:100%;
  }
  .innerBox:nth-child(odd){
    margin-left:0px;
  }
  .innerBox:nth-child(even){
    margin-left:100%;
  }
  .innerBox .item{
    width:85%;
    margin:10px;
    padding:5px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: #E5F2FA;
  }
  .innerBox:nth-child(odd) .item{
    float: left;
  }
  .innerBox:nth-child(even) .item{
    float: right;
  }
  .innerBox .item >p:first-child{
    font-weight:bold;
    font-size:14px;
  }
  .time>p{
    width:80px;
    height:20px;
    text-align: center;
    line-height:20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: #fff;
    color: #0087e8;
  }
  .innerBox:nth-child(odd) .time>p{
    float: right;
    margin-right:-40px;
  }
  .innerBox:nth-child(even) .time>p{
    float: left;
    margin-left:-40px;
  }

</style>
