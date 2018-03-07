<template>
  <div class="search">

    <van-nav-bar
      v-bind:title='detailData.dwgcmc'  fixed
      left-text="返回"
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <div class="content">
      <button id="nextPage" @click="goNextPage()">下一页</button>
      <van-row>
        <van-col span="8">单位工程</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.dwgcmc)'>{{detailData.dwgcmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目名称</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmmc)'>{{detailData.xmmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工单位</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.sgdw)'>{{detailData.sgdw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">单位工程基本情况</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmjbqk)'>{{detailData.xmjbqk}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">标段工程</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.bdgc)'>{{detailData.bdgc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划开工时间</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.jhkgrq)'>{{detailData.jhkgrq}}</span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">施工单位自验结果</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.sgdwzj)'>{{detailData.sgdwzj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目部</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmb)'>{{detailData.xmb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqshdw)'>{{detailData.rqshdw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">监理单位审查意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.jldwysyj)'>{{detailData.jldwysyj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">监理站</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.jlz)'>{{detailData.jlz}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqjl)'>{{detailData.rqjl}}</span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">建设单位验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span class="idea" @click='popupClick(detailData.jsdwyj)'>{{detailData.jsdwyj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目管理机构</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.zhb)'>{{detailData.zhb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqxmgl)'>{{detailData.rqxmgl}}</span>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>
      <p hidden>{{storeDwgcId}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "search",
    data() {
      return {
        type:1, // 移动端
        dwgcId:-1,
        detailData:{},
        popupTxt:'',
        popupVisible:false,
      }
    },
    computed:{
      storeDwgcId(){  // 时时获取存储到点击的单位工程的id
        this.dwgcId  = this.$store.getters.unitProjectInfo.dwgcId;
        this.getDetailData();
        return this.dwgcId;
      }
    },
    mounted:function () {
      this.dwgcId  = this.$store.getters.unitProjectInfo.dwgcId;
      this.getDetailData();
    },
    methods:{
      // 根据单位工程的id获取详情数据
      getDetailData(){
        let vm = this;
        console.log("走进来了吗？"+vm.dwgcId);
        let url = 'http://whjjgc.r93535.com/DwgckgbzhServlet?type='+vm.type+'&dwgcid='+vm.dwgcId;
        console.log("获取单位工程请求的url为："+ url);

        axios.get(url).then(response => {
          vm.detailData = response.data[0];
          console.log("获取单位工程详情第一页的数据："+JSON.stringify(vm.detailData));
        }).catch(err => {
          console.error(err.message)
        })
      },
      // 返回单位工程首页
      onClickLeft(){
        this.$router.push({path:'/unitProject'});
      },
      popupClick(popupTxt){
        this.popupVisible = true;
        this.popupTxt=popupTxt;
      },
      goNextPage(dwgcId){
        this.$router.push({path:'/unitProject/detailNext',query:{dwgcId:dwgcId}});
      }
    }
  }

</script>

<style scoped>
  .content{
    margin-top:46px;
    margin-bottom:55px;
  }
  #nextPage{
    position: fixed;
    top:50%;
    right:0px;
    width:30px;
    padding:5px;
    background: rgba(0,0,0,.5);
    color: #fff;
    border:none;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
  }
  /* popup */
  .mint-popup{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding:5px;
  }
  /* 修改栅格样式 */
  .van-row{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:-1px;
  }
  .van-col{
    height:44px;
    padding:0 5px;
    line-height:44px;
    /* 折行显示 */
    white-space: normal;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
  }
  .van-col:nth-child(odd){
    background: #E5F2FA;
    border-right:1px solid #ccc;
    text-align: center;
  }
  .van-col:nth-child(even){
    border-right:1px solid #ccc;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .van-col.van-col-24 span{
    display: inline-block;;
    width:100%;
    height:100%;
    background: #fff;
  }



</style>
