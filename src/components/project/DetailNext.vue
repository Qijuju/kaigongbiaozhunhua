<template>
  <div class="detailNext">
    <van-nav-bar
      v-bind:title='detailNextData.xmmc'
      left-text="返回"
      @click-left="onClickLeft"
      right-text="关闭"  @click-right="onClickRight"

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
            <span v-html="mySwitch(detailNextData.zyglrypzjsc)"/>
            <!--<van-switch v-model="detailNextData.zyglrypzjsc" disabled/>-->
          </div>

        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine">
          各参建单位建立健全管理制度
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <span v-html="mySwitch(detailNextData.jcglzd)"/>
            <!--<van-switch v-model="detailNextData.jcglzd" disabled/>-->
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18">
          施工、监理单位的主要机械设备、仪器的进场计划编制完成
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <span v-html="mySwitch(detailNextData.zyjxsb)"/>
            <!--<van-switch v-model="detailNextData.zyjxsb" disabled />-->
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine" >
          指导性施组编制完成
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <span v-html="mySwitch(detailNextData.zdxszbz)"/>
            <!--<van-switch v-model="detailNextData.zdxszbz" disabled />-->
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" class="singleLine">
          完成大临工程的规划编制
        </van-col>
        <van-col span="6">
          <div class="pSwitch">
            <span v-html="mySwitch(detailNextData.dlgc)"/>
            <!--<van-switch v-model="detailNextData.dlgc" disabled/>-->
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
              <span v-html="mySwitch(detailNextData.shzc)"/>
              <!--<van-switch v-model="detailNextData.shzc" disabled/>-->
            </div>
          </div>
        </van-col>
      </van-row>

      <p hidden>{{storeXmId}}</p>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "detailNext",
    data() {
      return {
        type:2,
        xmid:-1,
        detailNextData:{}, // 详情数据
        popupTxt:'', // 弹出层显示内容
        popupVisible:false, // 弹出层可视否

        checked:false,
      }
    },
    computed:{
      storeXmId(){  // 时时获取项目的名称
        this.xmid  = this.$store.getters.projectInfo.xmid;
        console.log("获取store存储的项目id:"+this.xmid);
        this.getDetailData();
        return this.xmid;
      }
    },
    mounted:function () {
      // 将按钮垂直居中显示
      for(var i=0;i<$('.van-row').length;i++){
        var l = $($('.van-row')[i]).height();

        $($('.pSwitch')[i]).css({
          'marginTop':(l-33)/2+'px'
        })
      };
      this.getDetailData();

    },
    methods:{

      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      getDetailData(){
        let vm = this;
        let url = 'http://tljjgxt.r93535.com/XmgckgbzhServlet?xmmcid='+vm.xmid+'&type='+vm.type;

        console.log("项目第2页详情页面："+url);
        axios.get(url).then(response => {
          vm.detailNextData = response.data[0];
          console.log("详情页第二页数据1：" +JSON.stringify(vm.detailNextData));
          vm.detailNextData.zyglrypzjsc = vm.detailNextData.zyglrypzjsc == '1'?true:false;
          vm.detailNextData.jcglzd = vm.detailNextData.jcglzd == '1'?true:false;
          vm.detailNextData.zyjxsb = vm.detailNextData.zyjxsb == '1'?true:false;
          vm.detailNextData.zdxszbz = vm.detailNextData.zdxszbz == '1'?true:false;
          vm.detailNextData.dlgc = vm.detailNextData.dlgc == '1'?true:false;
          vm.detailNextData.shzc = vm.detailNextData.shzc == '1'?true:false;

          console.log("详情页第二页数据22：" +JSON.stringify(vm.detailNextData));
        }).catch(err => {
          console.error(err.message)
        })
      },
      onClickLeft(){
        this.$router.push({path:'/project/detail'});
      },
      goPrePage(){
        this.$router.push({path:'/project/detail'});
      },
      mySwitch(date){
        console.log(date)
        if(date==='0'|date===true|date==='true'){
          return '√'
        }
        else if(date==='1'|date===false|date==='false'){
          return '×'
        }
        else{
          return '-'
        }
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
