<template>
  <div class="index">
    <Header title="项目工程开工标准化"></Header>
    <div class="content">
      <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
        <div class="box">
            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-30</p>
              </div>
              <div class="item " @click="goDetail('测试项目名称1')">1京能十堰热电铁路专用线工程</div>
            </div>

            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-29</p>
              </div>
              <div class="item" @click="goDetail('测试项目名称2')">2京广线孟庙至蒲圻段牵引供电设施改造工程（南线）</div>
              <div class="item" @click="goDetail('测试项目名称3')">3滠口物流基地工程</div>
            </div>

            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-28</p>
              </div>
              <div class="item" @click="goDetail('测试项目名称4')">4京能十堰热电铁路专用线工程</div>
              <div class="item" @click="goDetail('测试项目名称5')">5京广线孟庙至蒲圻段牵引供电设施改造工程（南线）</div>
              <div class="item" @click="goDetail('测试项目名称6')">6滠口物流基地工程</div>
            </div>

            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-27</p>
              </div>
              <div class="item" @click="goDetail('测试项目名称7')">7京能十堰热电铁路专用线工程</div>
            </div>

            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-26</p>
              </div>
              <div class="item" @click="goDetail('测试项目名称8')">8京广线孟庙至蒲圻段牵引供电设施改造工程（南线）</div>
              <div class="item" @click="goDetail('测试项目名称9')">9滠口物流基地工程</div>
            </div>

            <div class="innerBox clearfix">
              <div class="time">
                <p>2018-01-26</p>
              </div>
              <div class="item" @click="goDetail('测试项目名称8')">8京广线孟庙至蒲圻段牵引供电设施改造工程（南线）</div>
              <div class="item" @click="goDetail('测试项目名称9')">9滠口物流基地工程</div>
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
        baseuserId:'235739', // 人员id（基础平台的）
        page:1, // 当前页码
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
        let url = getUrl(xmjgglId,xmmcId,htbdId,vm.baseuserId,vm.page);

        axios.get(url)
          .then(response => {
            this.lists = response.data.data;
            let thisCount = response.data.thisCount; // 当前请求的数据的条数
            if(thisCount < vm.pageSize) {
              vm.noData = "没有更多数据"
            }else {
              vm.noData ='';
            }
            console.log("请求的数据llalllalall："+JSON.stringify(response.data));
          }).catch(err => {
          console.error(err.message)
        })
      },

      // 刷新首页数据
      refresh(done) {
        let vm= this;
        vm.getList('','',''); // 调用请求首页数据的方法
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
        vm.page++;
        console.log("我的页码为：" +vm.page);
        let url = getUrl(vm.xmjgglSearchCondId , vm.xmmcSearchCondId,vm.htbdSearchCondId,vm.baseuserId,vm.page);

        axios.get(url).then((response) => {
          let thisCount = response.data.thisCount; // 当前请求的数据的条数
          let newData = response.data.data; // 请求数据

          setTimeout(() => {
            if(thisCount < vm.pageSize) {
              vm.noData = "没有更多数据"
            }
            // 将新的数据源追加到数据源列表中
            // 如何新数据的第一条的日期===老数据的最后一条数据的日期，删除新数据的第一条数据，同时将删除的数据添加到老数据的最后一条中，反之直接追加数据
              if (vm.lists[vm.lists.length-1].date === newData[0].date){
                vm.lists[vm.lists.length-1].data = vm.lists[vm.lists.length-1].data.concat(newData[0].data);
                if (newData.length-1>0){
                  newData.splice(0,1);
                  for(var i=1;i<newData.length;i++){
                    let obj={};
                    obj["data"] = newData[i].data;
                    obj["date"] = newData[i].date;
                    vm.lists.push(obj);
                  }
                }
              }else { //
                for(var i=0;i<newData.length;i++){
                  // 如何新数据的第一条的日期===老数据的最后一条数据的日期，删除新数据的第一条数据，同时将删除的数据添加到老数据的最后一条中
                  let obj={};
                  obj["data"] = newData[i].data;
                  obj["date"] = newData[i].date;
                  vm.lists.push(obj);
                }
              }
            vm.$refs.myscroller.resize();
            done()
          }, 1000);
        }, (response) => {
          console.log('error');
        });
      },
      // 跳转详情页面
      goDetail(proName){
        console.log("点击的项目是："+ proName);
        this.$store.commit('setProjectInfo',{proName:proName});
        this.$router.push({path:'/project/detail'});
      }
    }
  }

  // 定义函数，返回请求的 url
  function getUrl(xmjgglId,xmmcId,htbdId,baseuserId,page) {
    let url='';
    // http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&bd=109&baseuserid=235739&page=1;
    // 全部非空
    if (xmjgglId !== ''&& xmmcId !== ''&& htbdId !== ''){
      console.log("全部非空");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&xmmc='+xmmcId+'&bd='+htbdId+'&xmgljg='+xmjgglId+'&baseuserid='+baseuserId+'&page='+page;
    }

    // 一个空值
    if(xmjgglId === ''&& xmmcId !== ''&& htbdId !== ''){
      console.log("一个空值 xmjgglId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&xmmc='+xmmcId+'&bd='+htbdId+'&baseuserid='+baseuserId+'&page='+page;
    }

    if (xmjgglId !== ''&& xmmcId === ''&& htbdId !== ''){
      console.log("一个空值 xmmcId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&bd='+htbdId+'&xmgljg='+xmjgglId+'&baseuserid='+baseuserId+'&page='+page;
    }

    if (xmjgglId !== ''&& xmmcId !== ''&& htbdId === ''){
      console.log("一个空值 htbdId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&xmmc='+xmmcId+'&xmgljg='+xmjgglId+'&baseuserid='+baseuserId+'&page='+page;
    }

    // 两个空值
    if (xmjgglId === ''&& xmmcId === ''&& htbdId !== ''){
      console.log("两个空值 xmjgglId +xmmcId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&bd='+htbdId+'&baseuserid='+baseuserId+'&page='+page;
    }
    if (xmjgglId === ''&& xmmcId !== ''&& htbdId === ''){
      console.log("两个空值 xmjgglId +htbdId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&xmmc='+xmmcId+'&baseuserid='+baseuserId+'&page='+page;
    }
    if (xmjgglId !== ''&& xmmcId === ''&& htbdId === ''){
      console.log("两个空值 xmmcId +htbdId");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&xmgljg='+xmjgglId+'&baseuserid='+baseuserId+'&page='+page;
    }

    // 全部空值
    if (xmjgglId === ''&& xmmcId === ''&& htbdId === ''){
      console.log("全部空值");
      url ='http://whjjgc.r93535.com/BdgckgbzhListServlet?type=1&baseuserid='+baseuserId+'&page='+page;
    }

    return url;
  }



</script>

<style scoped>
  .content{
    margin-top:92px;
    margin-bottom:55px;
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
