<template>
  <div class="detailNext">
    <!--storeProName-->
    <van-nav-bar
      v-bind:title='detailNextData.bdmc' fixed
      left-text="返回"
      @click-left="onClickLeft"
      right-text="关闭"  @click-right="onClickRight"

    >
    </van-nav-bar>
    <div class="content">
      <button id="prePage" @click="onClickLeft()">上一页</button>
      <p id="ystk">验收条款</p>
      <van-row>
        <van-col span="24">
          施工单位项目部完成组建，主要管理人员兑现投标承诺已到位；监理单位监理站驻地完成建设，主要监理人员已到位
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwxmwczjsgsp)"/>
            <!--<van-switch v-model="detailNextData.sgdwxmwczjsgsp" disabled  />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwxmwczjjlsp)"/>
            <!--<van-switch v-model="detailNextData.sgdwxmwczjjlsp" disabled  />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgdwxmwczjjsdwsp)"/>
            <!--<van-switch v-model="detailNextData.sgdwxmwczjjsdwsp" disabled  />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          施工单位建立健全技术、质量、安全等各项管理制度；监理单位编制完成监理规划，建立健全各项管理制度
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jljqjssgsp)"/>
            <!--<van-switch v-model="detailNextData.jljqjssgsp"  disabled />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jljqjsjlsp)"/>
            <!--<van-switch v-model="detailNextData.jljqjsjlsp" disabled  />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jljqjsxmglsp)"/>
            <!--<van-switch v-model="detailNextData.jljqjsxmglsp" disabled  />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          编制完成机械设备配置及进场计划，临时工程所需的材料、机具已到场，具备施工条件
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbpzsg)"/>
            <!--<van-switch v-model="detailNextData.jxsbpzsg" disabled  />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbpzjl)"/>
            <!--<van-switch v-model="detailNextData.jxsbpzjl" disabled  />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.jxsbpzxmgl)"/>
            <!--<van-switch v-model="detailNextData.jxsbpzxmgl" disabled  />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          标段实施性施工组织设计完成编制，并经审批；试验室、拌和站、制（存）梁场、钢筋加工场、施工便道等临时工程的专项方案编制完成并已经过审批
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgzisjsg)"/>
            <!--<van-switch v-model="detailNextData.sgzisjsg" disabled  />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgzisjjl)"/>
            <!--<van-switch v-model="detailNextData.sgzisjjl" disabled  />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgzisjjs)"/>
            <!--<van-switch v-model="detailNextData.sgzisjjs" disabled  />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          制定本项目的工厂化实施方案；专业化架子队组建方案编制完成并经项目管理机构批准；编制完成信息化实施方案
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gchssasg)"/>
            <!--<van-switch v-model="detailNextData.gchssasg" disabled />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gchssfajl)"/>
            <!--<van-switch v-model="detailNextData.gchssfajl" disabled />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch ">
            <span v-html="mySwitch(detailNextData.gchssfaxmgl)"/>
            <!--<van-switch v-model="detailNextData.gchssfaxmgl" disabled />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          复测、施工放样已完成并具备开工条件
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgfysg)"/>
            <!--<van-switch v-model="detailNextData.sgfysg" disabled />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgfyjl)"/>
            <!--<van-switch v-model="detailNextData.sgfyjl" disabled  />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.sgfyxmgl)"/>
            <!--<van-switch v-model="detailNextData.sgfyxmgl" disabled />-->
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          涉及营业线施工的项目，防护员、安全员、带班人员、工班长经路局岗前培训考试，并合格发证
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">施工单位自验</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gqpxkssg)"/>
            <!--<van-switch v-model="detailNextData.gqpxkssg" disabled />-->
          </div>
        </van-col>
        <van-col span="6">监理单位审查</van-col>
        <van-col span="2">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gqpxksjl)"/>
            <!--<van-switch v-model="detailNextData.gqpxksjl" disabled />-->
          </div>
        </van-col>
        <van-col span="6" class="line">建设单位验收审批</van-col>
        <van-col span="2" class="br">
          <div class="switch">
            <span v-html="mySwitch(detailNextData.gqpxksxm)"/>
            <!--<van-switch v-model="detailNextData.gqpxksxm" disabled />-->
          </div>
        </van-col>
      </van-row>
      <p hidden>{{storeId}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "detailNext",
    data() {
      return {
        type:2, // 移动端
        id:-1, // 标段id
        detailNextData:{}, // 详情数据
        popupTxt:'', // 弹出层显示内容
        popupVisible:false // 弹出层可视否
      }
    },
    computed:{
      storeId(){  // 时时获取存储到单位工程的id
        this.id  = this.$store.getters.sectionInfo.id;
        this.getDetailData();
        return this.dwgcId;
      },
    },
    mounted:function () {
//      this.setLineHeight(); // 设置行高
      this.getDetailData(); // 获取详情数据
    },
    methods:{

      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      getDetailData(){    // 根据标段id获取详情页数据
        let vm = this;
        let url = 'http://tljjgxt.r93535.com/BdgckgbzhServlet?bdid='+vm.id+'&type=2';

        axios.get(url).then(response => {
          vm.detailNextData = response.data[0];

          vm.detailNextData.sgdwxmwczjsgsp = vm.detailNextData.sgdwxmwczjsgsp == '1'?true:false;
          vm.detailNextData.sgdwxmwczjjlsp = vm.detailNextData.sgdwxmwczjjlsp == '1'?true:false;
          vm.detailNextData.sgdwxmwczjjsdwsp = vm.detailNextData.sgdwxmwczjjsdwsp == '1'?true:false;

          vm.detailNextData.jljqjssgsp = vm.detailNextData.jljqjssgsp == '1'?true:false;
          vm.detailNextData.jljqjsjlsp = vm.detailNextData.jljqjsjlsp == '1'?true:false;
          vm.detailNextData.jljqjsxmglsp = vm.detailNextData.jljqjsxmglsp == '1'?true:false;

          vm.detailNextData.jxsbpzsg = vm.detailNextData.jxsbpzsg == '1'?true:false;
          vm.detailNextData.jxsbpzjl = vm.detailNextData.jxsbpzjl == '1'?true:false;
          vm.detailNextData.jxsbpzxmgl = vm.detailNextData.jxsbpzxmgl == '1'?true:false;

          vm.detailNextData.sgzisjsg = vm.detailNextData.sgzisjsg == '1'?true:false;
          vm.detailNextData.sgzisjjl = vm.detailNextData.sgzisjjl == '1'?true:false;
          vm.detailNextData.sgzisjjs = vm.detailNextData.sgzisjjs == '1'?true:false;

          vm.detailNextData.gchssasg = vm.detailNextData.gchssasg == '1'?true:false;
          vm.detailNextData.gchssfajl = vm.detailNextData.gchssfajl == '1'?true:false;
          vm.detailNextData.gchssfaxmgl = vm.detailNextData.gchssfaxmgl == '1'?true:false;

          vm.detailNextData.sgfysg = vm.detailNextData.sgfysg == '1'?true:false;
          vm.detailNextData.sgfyjl = vm.detailNextData.sgfyjl == '1'?true:false;
          vm.detailNextData.sgfyxmgl = vm.detailNextData.sgfyxmgl == '1'?true:false;

          vm.detailNextData.gqpxkssg = vm.detailNextData.gqpxkssg == '1'?true:false;
          vm.detailNextData.gqpxksjl = vm.detailNextData.gqpxksjl == '1'?true:false;
          vm.detailNextData.gqpxksxm = vm.detailNextData.gqpxksxm == '1'?true:false;
          console.log("详情页第二页数据22：" +JSON.stringify(vm.detailNextData));
        }).catch(err => {
          console.error(err.message)
        })
      },
     /* setLineHeight(){
        // 将按钮垂直居中显示
        for(var i=0;i<$('.van-row').length;i++){
          var l = $($('.van-row')[i]).height();
          $($('.switch')[i]).css({
            'marginTop':(l-33)/2+'px'
          })
        }
      },*/
      // 返回上一页
      onClickLeft(){
        this.$router.push({path:'/section/detail'});
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
    text-align: center;
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
