<template>
  <div class="search">
    <van-nav-bar
      v-bind:title='detailData.bdmc' fixed
      left-text="<"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="content">
      <button id="nextPage" @click="goNextPage()">下一页</button>
      <van-row>
        <van-col span="8">合同标段</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.bd)'>{{detailData.bd}}</span>
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
        <van-col span="8">标段基本情况</van-col>
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
        <van-col span="24">施工单位自验结果</van-col>
      </van-row>
      <van-row>
        <van-col span="24">自验结果</van-col>
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
          <span @click='popupClick(detailData.rqsg)'>{{detailData.rqsg}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">监理单位审查意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="8">监理站</van-col>
        <van-col span="16">
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
        <van-col span="24">建设单位审查意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">验收意见</van-col>
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
          <span @click='popupClick(detailData.rixmgl)'>{{detailData.rixmgl}}</span>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>
    </div>

  </div>
</template>

<script>

  import axios from 'axios';
  import Header from '../Common/Header'
  export default {
    name: "search",
    data() {
      return {
        proName:'',
        popupTxt:'点击的内容',
        popupVisible:false,
        bdid:'3',
        detailData:[]
      }
    },
    components:{
      Header
    },
  /*  computed:{
      storeBdid(){  // 时时获取项目的名称
        this.bdid  = this.$store.getters.sectionInfo.bdid;
        return this.bdid;
      }
    },*/
    mounted:function () {
      this.getDetailData();
    },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/section'});
      },
      popupClick(txt){
        this.popupVisible = true;
        this.popupTxt = txt;
      },
      goNextPage(){
        this.$router.push({path:'/section/detailNext'});
      },
      // 根据标段id获取详情页数据
      getDetailData(){
        let vm = this;
        let url = 'http://whjjgc.r93535.com/BdgckgbzhServlet?bdid='+this.bdid+'&type=1';

        axios.get(url).then(response => {
          vm.detailData = response.data[0];
          console.log("详情第一页的数据："+JSON.stringify(vm.detailData));
        }).catch(err => {
          console.error(err.message)
        })
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
    padding:0;
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


</style>
