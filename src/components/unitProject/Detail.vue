<template>
  <div class="search">

    <van-nav-bar
      v-bind:title="'单位工程详情第一页'"  fixed
      left-text="<"
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <div class="content">
      <button id="nextPage" @click="goNextPage(storeUnitName)">下一页</button>
      <van-row>
        <van-col span="8">单位工程</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目名称</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工单位</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">单位工程基本情况</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">标段工程</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划开工时间</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
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
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
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
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">建设单位验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目管理机构</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{}}</p>
      </mt-popup>
    </div>
  </div>
</template>

<script>

  export default {
    name: "search",
    data() {
      return {
        unitName:'',
        popupTxt:'点击的内容',
        popupVisible:false
      }
    },
    components:{

    },
    computed:{
      storeUnitName(){  // 时时获取项目的名称 storeUnitName
        this.unitName  = this.$store.getters.unitProjectInfo.clickDWGC;
        console.log("详情页面拿到的单位工程为：" + this.$store.getters.unitProjectInfo.clickDWGC);
        return this.$store.getters.unitProjectInfo.clickDWGC;
      }
    },
    methods:{
      // 返回单位工程首页
      onClickLeft(){
        this.$router.push({path:'/unitProject'});
      },
      popupClick(){
        this.popupVisible = true;
        console.log("弹出层");
      },
      goNextPage(unitName){
        console.log("点击下一页的传值项目名称："+unitName);
        this.show = true; // ?因为页面跳转的原因，点击样式效果不明显
        this.$router.push({path:'/unitProject/detailNext',query:{unitName:unitName}});
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
