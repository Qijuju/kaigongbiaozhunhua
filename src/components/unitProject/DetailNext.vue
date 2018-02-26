<template>
  <div class="detailNext">

    <!--<van-nav-bar-->
      <!--v-bind:title='storeUnitName' fixed-->
      <!--left-text="<"-->
      <!--@click-left="onClickLeft"-->
    <!--&gt;-->
    <!--</van-nav-bar>-->
    <van-nav-bar
      v-bind:title="'单位工程详情第2页'" fixed
      left-text="<"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="content">
      <button id="prePage" @click="onClickLeft()">上一页</button>
      <p id="ystk">验收条款-标段-{{unitName}}</p>
      <van-row>
        <van-col span="24">
          施工单位架子队按照批准的方案组建完成，管理人员已经到位，建立健全架子队各项管理制度，现场监理人员到位，专业配置、人员数量满足施工需要
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled />
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch ">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled />
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled />
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <van-switch v-model="checked" disabled/>
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
        unitName:''
      }
    },
    computed:{
      storeUnitName(){  // 时时获取项目的名称
        this.unitName  = this.$store.getters.unitProjectInfo.clickDWGC;
        console.log("上一页接收的项目名称为:" + this.unitName);
        return this.$store.getters.unitProjectInfo.clickDWGC;
      }
    },
    methods:{
      // 返回详情第一页
      onClickLeft(){
       this.$router.push({path:'/unitProject/detail'});
      }
    },
    mounted:function () {
      // 将按钮垂直居中显示
      for(var i=0;i<$('.van-row').length;i++){
        var l = $($('.van-row')[i]).height();
        console.log("每行的高度为：" +l)
        $($('.switch')[i]).css({
          'marginTop':(l-33)/2+'px'
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
