<template>
  <div class="detailNext">
    <van-nav-bar
      v-bind:title='detailNextData.dwgcmc' fixed
      left-text="返回"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="content">
      <button id="prePage" @click="onClickLeft()">上一页</button>
      <p id="ystk">验收条款</p>
      <van-row>
        <van-col span="24">
          施工单位架子队按照批准的方案组建完成，管理人员已经到位，建立健全架子队各项管理制度，现场监理人员到位，专业配置、人员数量满足施工需要
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwjzsg)"/>
            <!--<van-switch v-model="detailNextData.sgdwjzsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwjzsg)"/>
            <!--<van-switch v-model="detailNextData.sgdwjzsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwjzjs)"/>
            <!--<van-switch v-model="detailNextData.sgdwjzjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          临时用地、征地拆迁及“三电”迁改满足单位工程的施工条件，施工便道、便桥、钢筋加工场、小型构件预制厂等完工的临时工程满足阶段性施工需求
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.lsydsg)"/>
            <!--<van-switch v-model="detailNextData.lsydsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.lsydjl)"/>
            <!--<van-switch v-model="detailNextData.lsydjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.lsydjs)"/>
            <!--<van-switch v-model="detailNextData.lsydjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          单位工程的施工图完成现场核对，工点测量放样已经完成；施工方案已编制并经过审批
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgtwchdsg)"/>
            <!--<van-switch v-model="detailNextData.sgtwchdsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgtwchdjl)"/>
            <!--<van-switch v-model="detailNextData.sgtwchdjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgtwchdjs)"/>
            <!--<van-switch v-model="detailNextData.sgtwchdjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          各工种作业人员到岗到位，经过技术、安全教育并考试合格；特种作业人员按照有关规定通过专门的安全专业培训，持证上岗
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.tzzyrysg)"/>
            <!--<van-switch v-model="detailNextData.tzzyrysg" disabled />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.tzzyryjl)"/>
            <!--<van-switch v-model="detailNextData.tzzyryjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.tzzyryjs)"/>
            <!--<van-switch v-model="detailNextData.tzzyryjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          单位工程使用的物资、材料已进场，储备满足阶段性施工的需求
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.wzcljcsg)"/>
            <!--<van-switch v-model="detailNextData.wzcljcsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.wzcljcjl)"/>
            <!--<van-switch v-model="detailNextData.wzcljcjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch ">
            <span v-html="mySwitch(detailNextData.wzcljcjs)"/>
            <!--<van-switch v-model="detailNextData.wzcljcjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          机械设备已履约进场，满足工程阶段施工需求，特种设备经安监部门检验合格，上道运行车辆相关资料齐备、人员资质满足要求；对未进场的编制进场计划并报项目管理机构批准
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbsg)"/>
            <!--<van-switch v-model="detailNextData.jxsbsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbjl)"/>
            <!--<van-switch v-model="detailNextData.jxsbjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbjs)"/>
            <!--<van-switch v-model="detailNextData.jxsbjs" disabled />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          按照规定通过首件评估或完成工艺性试验；各工序作业指导书已编制并发布；三级技术交底已经完成
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gystsg)"/>
            <!--<van-switch v-model="detailNextData.gystsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gystjl)"/>
            <!--<van-switch v-model="detailNextData.gystjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gystjs)"/>
            <!--<van-switch v-model="detailNextData.gystjs" disabled/>-->
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          试验室、拌和站按照投标承诺或指导性施组完成建设，并验收合格；拌和站、试验室、调度指挥、电子工程日志、视频监控等按照总公司、铁路局的要求纳入信息化平台管理
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sysbhzsg)"/>
            <!--<van-switch v-model="detailNextData.sysbhzsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sysbhzjl)"/>
            <!--<van-switch v-model="detailNextData.sysbhzjl" disabled />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sysbhzjs)"/>
            <!--<van-switch v-model="detailNextData.sysbhzjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          涉及营业线施工的单位工程，施工方案经过审批，相关安全协议已签订；防护备品（含物理隔离材料）数量满足施工需求；其他各级管理人员按照规定，经过营业线施工岗前培训
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.yyxsgsg)"/>
            <!--<van-switch v-model="detailNextData.yyxsgsg" disabled/>-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.yyxsgjl)"/>
            <!--<van-switch v-model="detailNextData.yyxsgjl" disabled/>-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.yyxsgjs)"/>
            <!--<van-switch v-model="detailNextData.yyxsgjs" disabled/>-->
          </div>
        </van-col>
      </van-row>

      <p hidden>{{storeDwgcId}}</p>


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
        dwgcId:-1,
        checked:false,
        unitName:'',
        detailNextData:{}
      }
    },
    computed:{
      storeDwgcId(){  // 时时获取存储到单位工程的id
        this.dwgcId  = this.$store.getters.unitProjectInfo.dwgcId;
        this.getDetailData();
        return this.dwgcId;
      },
    },
    mounted:function () {
      this.getDetailData();
    },
    methods:{
      // 根据单位工程的id获取详情数据
      getDetailData(){
        let vm = this;
        console.log("走进来了吗？"+vm.dwgcId);
        let url = 'http://tljjgxt.r93535.com/DwgckgbzhServlet?type='+vm.type+'&dwgcid='+vm.dwgcId;
        console.log("获取单位工程第2页请求的url为："+ url);

        axios.get(url).then(response => {
          vm.detailNextData = response.data[0];
          console.log("获取单位工程详情第2页的数据："+JSON.stringify(vm.detailNextData));

          // 施工单位架子队
          vm.detailNextData.sgdwjzsg = vm.detailNextData.sgdwjzsg == '1'?true:false;
          vm.detailNextData.sgdwjzjl = vm.detailNextData.sgdwjzjl == '1'?true:false;
          vm.detailNextData.sgdwjzjs = vm.detailNextData.sgdwjzjs == '1'?true:false;

          // 临时用地
          vm.detailNextData.lsydsg = vm.detailNextData.lsydsg == '1'?true:false;
          vm.detailNextData.lsydjl = vm.detailNextData.lsydjl == '1'?true:false;
          vm.detailNextData.lsydjs = vm.detailNextData.lsydjs == '1'?true:false;

          // 施工图完成现场核对
          vm.detailNextData.sgtwchdsg = vm.detailNextData.sgtwchdsg == '1'?true:false;
          vm.detailNextData.sgtwchdjl = vm.detailNextData.sgtwchdjl == '1'?true:false;
          vm.detailNextData.sgtwchdjs = vm.detailNextData.sgtwchdjs == '1'?true:false;
          // 种作业人员
          vm.detailNextData.tzzyrysg = vm.detailNextData.tzzyrysg == '1'?true:false;
          vm.detailNextData.tzzyryjl = vm.detailNextData.tzzyryjl == '1'?true:false;
          vm.detailNextData.tzzyryjs = vm.detailNextData.tzzyryjs == '1'?true:false;
          // 物资材料已进场
          vm.detailNextData.wzcljcsg = vm.detailNextData.wzcljcsg == '1'?true:false;
          vm.detailNextData.wzcljcjl = vm.detailNextData.wzcljcjl == '1'?true:false;
          vm.detailNextData.wzcljcjs = vm.detailNextData.wzcljcjs == '1'?true:false;
          // 机械设备已履约进场
          vm.detailNextData.jxsbsg = vm.detailNextData.jxsbsg == '1'?true:false;
          vm.detailNextData.jxsbjl = vm.detailNextData.jxsbjl == '1'?true:false;
          vm.detailNextData.jxsbjs = vm.detailNextData.jxsbjs == '1'?true:false;
          // 工艺性试验
          vm.detailNextData.gystsg = vm.detailNextData.gystsg == '1'?true:false;
          vm.detailNextData.gystjl = vm.detailNextData.gystjl == '1'?true:false;
          vm.detailNextData.gystjs = vm.detailNextData.gystjs == '1'?true:false;
          // 试验室拌和站
          vm.detailNextData.sysbhzsg = vm.detailNextData.sysbhzsg == '1'?true:false;
          vm.detailNextData.sysbhzjl = vm.detailNextData.sysbhzjl == '1'?true:false;
          vm.detailNextData.sysbhzjs = vm.detailNextData.sysbhzjs == '1'?true:false;
          // 营业线施工
          vm.detailNextData.yyxsgsg = vm.detailNextData.yyxsgsg == '1'?true:false;
          vm.detailNextData.yyxsgjl = vm.detailNextData.yyxsgjl == '1'?true:false;
          vm.detailNextData.yyxsgjs = vm.detailNextData.yyxsgjs == '1'?true:false;

          console.log("获取单位工程详情第222页的数据："+JSON.stringify(vm.detailNextData));
        }).catch(err => {
          console.error(err.message)
        })
      },

      // 返回详情第一页
      onClickLeft(){
       this.$router.push({path:'/unitProject/detail'});
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
    margin-top:46px;
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
    background: rgba(0,0,0,.5);
    color: #fff;
    border:none;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius:  4px 0 0 4px;
    border-radius:  4px 0 0 4px;
    z-index: 10;
  }
  .van-row{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:-1px;
  }
  .van-col {
    border-left:1px solid #ccc;
    margin-right:-1px;
  }
  .van-col.van-col-6,
  .van-col.van-col-2
  {
    height:48px;
    line-height:48px;
  }
  .van-col.van-col-2{
    position: relative;
  }
  /* iPhone 5*/
  @media only screen and (max-device-width :480px){
    .van-col.van-col-6{
      line-height:24px;
    }
  }

  @media screen and (min-device-width : 375px){
    .van-col.van-col-6{
      line-height:48px;
    }
    .van-col.van-col-6.line{
      line-height:24px;
    }
  }
  /* iPhone 5*/
  @media only screen and (max-device-width :480px){
    .van-switch{
      position: absolute;
      top:50%;
      left:50%;
      width:25px;
      height:20px;
      margin-top:-10px;
      margin-left:-12px;
    }
  }
  /* iPhone 6*/
  @media (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
    .van-switch{
      position: absolute;
      top:50%;
      left:50%;
      width:28px;
      height:20px;
      margin-top:-10px;
      margin-left:-14px;
    }
  }

  /*6+*/
  @media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
    .van-switch{
      position: absolute;
      top:50%;
      left:50%;
      width:32px;
      height:20px;
      margin-top:-10px;
      margin-left:-16px;
    }
  }

</style>
