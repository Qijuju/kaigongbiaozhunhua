<template>
  <div class="detailNext">
    <van-nav-bar
      v-bind:title='returnProName'
      left-text="取消"
      right-text="搜索"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>
    <div class="content">
      <button id="prePage" @click="goPrePage()">上一页</button>
      <p id="ystk">验收条款</p>
      <van-row>
        <van-col span="18">
          项目管理机构、现场设计配合组、监理、施工单位的主要管理人员配置符合要求,兑现投标承诺按时到位
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <van-switch v-model="checked" />
          </div>

        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine">
          各参建单位建立健全管理制度
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <van-switch v-model="checked" />
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18">
          施工、监理单位的主要机械设备、仪器的进场计划编制完成
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <van-switch v-model="checked" />
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine" >
          指导性施组编制完成
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <van-switch v-model="checked" />
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine">
          完成大临工程的规划编制
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <van-switch v-model="checked" />
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18">
          各参建单位编制完成“四化”支撑的推进计划和实施方案
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <div class="innerSwitch">
              <van-switch v-model="checked" />
            </div>
          </div>
        </van-col>
      </van-row>

    </div>


  </div>
</template>

<script>
  export default {
    name: "detailNext",
    data() {
      return {
        checked:false,
        proName:''
      }
    },
    computed:{
      returnProName(){  // 时时获取项目的名称
        this.proName  = this.$store.getters.projectInfo.proName;
        console.log("上一页接收的项目名称为:" + this.proName);
        return this.$store.getters.projectInfo.proName;
      }
    },
    methods:{
      onClickLeft(){
        history.back();
        console.log("取消事件");
      },
      onClickRight(){
        console.log("搜索事件");
      },
      goPrePage(){
        this.$router.push({path:'/project/detail'});
      }

    },
    mounted:function () {
      // 将按钮垂直居中显示
      for(var i=0;i<$('.van-row').length;i++){
        var l = $($('.van-row')[i]).height();
        console.log("每行的高度为：" +l)
        $($('.pSwitch')[i]).css({
          'marginTop':(l-33)/2+'px'
        })
      }
    }
  }

</script>

<style scoped>
  .content{
    margin-bottom:55px;
  }
  /* 验收条款 */
  #ystk{
    width:100%;
    height:40px;
    line-height:40px;
    text-align: left;
    padding: 0 10px;
    background: #E5F2FA;
    font-weight: 600;
  }
  /* 翻页按钮 */
  #prePage{
    position: fixed;
    top:50%;
    right:0px;
    width:30px;
    padding:5px;
    background:  rgba(0,0,0,.5);
    color: #fff;
    border:none;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius:  4px 0 0 4px;
    border-radius:  4px 0 0 4px;
    z-index: 10;
  }
  /*!* 修改栅格样式 *!*/
  /*!* 单行居中显示 *!*/
  .singleLine{
    line-height:44px;
  }
  .van-row{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:-1px;
    line-height:30px;
  }
  .van-col {
    height:100%;
    padding:0 10px;
    border-right:1px solid #ccc;
    margin-right:-1px;
  }
  .van-col.van-col-6{
    border-left:1px solid #ccc;
    border-right:none;
  }
  .pSwitch{
    height:33px;
  }

</style>
