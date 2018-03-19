<template>
  <div class="search">
    <van-nav-bar
      v-bind:title='detailData.xmmc' fixed
      left-text="返回"
      @click-left="onClickLeft"
      right-text="关闭"  @click-right="onClickRight"

    >
    </van-nav-bar>

    <div class="content">
      <button id="nextPage" @click="goNextPage()">下一页</button>
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
        <van-col span="8">监理名称</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.jldw)'>{{detailData.jldw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">设计单位</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.sjdw)'>{{detailData.sjdw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目基本情况</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmjbqk)'>{{detailData.xmjbqk}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划开工日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.jhkgrq)'>{{detailData.jhkgrq}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">项目管理机构自验结果</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.xmglzy)'>{{detailData.xmglzy}}</span>
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
      <van-row>
        <van-col span="24">建设管理处验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.jscysyj)'>{{detailData.jscysyj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">验收成员</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.yscy)'>{{detailData.yscy}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqjsc)'>{{detailData.rqjsc}}</span>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>
      <p hidden>{{storeXmId}}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "search",
    data() {
      return {
        type:1, // 第一页数据
        xmid:-1,// 项目id
        detailData:{},
        popupTxt:'',
        proName:'',
        popupVisible:false
      }
    },
    computed:{
      storeXmId(){  // 时时获取项目的名称
        this.xmid  = this.$store.getters.projectInfo.xmid;
        this.getDetailData();
        return this.xmid;
      }
    },
    mounted:function () {
      this.getDetailData();
    },
    methods:{

      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      getDetailData(){
        let vm = this;
        let url='http://tljjgxt.r93535.com/XmgckgbzhServlet?xmmcid='+vm.xmid+'&type='+vm.type;
        console.log("项目详情数据第一页数据的url："+url);
        axios.get(url).then(response => {
          console.log("项目详情第一页的数据："+JSON.stringify(response.data));
          vm.detailData = response.data;

        }).catch(err => {
          console.error(err.message)
        })
      },
      // 返回首页调取方法
      onClickLeft(){
        this.$router.push({path:'/project'});
        console.log("取消事件");
      },
      popupClick(txt){
        this.popupTxt =txt;
        this.popupVisible = true;
      },
      goNextPage(){
        this.$router.push({path:'/project/detailNext'});
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
