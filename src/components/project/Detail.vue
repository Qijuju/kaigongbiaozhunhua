<template>
  <div class="search">
    <van-nav-bar
      v-bind:title='routeProName' fixed
      left-text="<"
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <div class="content">
      <button id="nextPage" @click="goNextPage(routeProName)">下一页</button>
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
        <van-col span="8">监理名称</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">设计单位</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目基本情况</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划开工日期</van-col>
        <van-col span="16" >
          <span @click='popupClick()'>{{}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">项目管理机构自验结果</van-col>
      </van-row>
      <van-row>
        <van-col span="24">自验结果</van-col>
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
      <van-row>
        <van-col span="24">建设管理处验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">验收意见</van-col>
      </van-row>
      <van-row>
        <van-col span="8">验收成员</van-col>
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
        proName:'',
        popupTxt:'点击的内容',
        popupVisible:false
      }
    },
    components:{
    },
    computed:{
      routeProName(){  // 时时获取项目的名称
        this.proName  = this.$store.getters.projectInfo.proName;
        return this.$store.getters.projectInfo.proName;
      }
    },
    methods:{
      // 返回首页调取方法
      onClickLeft(){
        this.$router.push({path:'/project'});
        console.log("取消事件");
      },
      popupClick(){
        this.popupVisible = true;
        console.log("弹出层");
      },
      goNextPage(proName){
        console.log("点击下一页的传值项目名称："+proName);
        this.$router.push({path:'/project/detailNext',query:{proName:proName}});
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
