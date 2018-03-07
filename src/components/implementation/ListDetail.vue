<template>
  <div class="listDetail">
  <!-- 头 -->
    <van-nav-bar
      v-bind:title='proName'  fixed
      left-text="返回"
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <!--<Header v-bind:title="proName"></Header> &lt;!&ndash; v-bind:title="proName2" 对title的值进行v-bind动态绑定&ndash;&gt;-->

    <!--内容区域-->
    <div class="content">
      <van-row>
        <van-col span="4">
          <div class="tab bg" @click="showPart(0)"><span>统计处</span></div>
          <div class="tab" @click="showPart(1)"><span>财务处</span></div>
          <div class="tab" @click="showPart(2)"><span>总工程师室</span></div>
          <div class="tab" @click="showPart(3)"><span>建设处</span></div>
        </van-col>
        <van-col span="20">
          <div class="main">
            <div class="showHide">
              <van-row>
                <van-col span="24" class="conpad">土地预审批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.tdyspfiwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.tdyspflsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.tdyspfbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>



              <van-row>
                <van-col span="24" class="conpad">环评批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.hppfwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.hppflsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.hppfbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">节能批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.jnpfwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.shwddlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.jnpfbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">社会稳定风险评估、防洪影响、通航论证、地震安全性评估、文物保护影响等其他前置腰间结论性意见</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.shwddwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.shwddlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.shwddbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">可研批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.kypfwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.kypflsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.kypfbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">项目资金计划和其他建设资金计划落实</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists1.xmzjjhwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists1.xmzjjhlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists1.xmzjjhbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24" class="conpad">银行贷款合同签订，或银行评审通过</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists2.yhdkwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists2.yhdklsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists2.yhdkbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24" class="conpad">初步设计批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists3.cbsjpfwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists3.cbsjpflsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists2.cbsjpfbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24" class="conpad">签修改算核备</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.jxgshbwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.jxgshblsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.jxgshbbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">项目法人或者项目管理机构成立</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.xmfrwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.xmfrlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.xmfrbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">建设用地或先行开工工点建设用地批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.jsydwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.jsydlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.jsydbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">与设计单位签订设计图纸交付协议</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.ysjdwwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.ysjdwlsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.ysjdwbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">施工图审核完成</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.sgtshwcwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.sgtshwcbz" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.sgtshwcbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">施工图预算核备</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.sgtyshdwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.sgtyshdlsql" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.sgtyshdbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">施组大纲编制完成</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.szdgbzwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.szdgbzwh" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.szdgbzbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">主体工程或工点施工、监理单位招标完成，并发中标通知书</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16">{{lists4.ztgcwh}}</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <van-switch v-model="lists4.ztgclsqk" /></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">{{lists4.ztgcbz}}</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>

          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../Common/Header'

  export default {
    name: "listDetail",
    data(){
      return{
        xmmc:'',
        xmid:'',
        selected:0,
        checked:true, // 开关的状态
        lists1:{},
        lists2:{},
        lists3:{},
        lists4:{}
      }
    },
    components:{
      Header
    },
    computed:{
      proName(){  // 时时获取项目的名称
        this.xmmc  = this.$route.query.xmmc;
        return this.$route.query.xmmc;
      },
      proId(){   // 时时获取项目的id
        this.xmid  = this.$route.query.xmid;
        return this.$route.query.xmid;
      }
    },
    mounted:function () {
      this.getPartOneData();
//      this.getPartTwoData();
//      this.getPartThreeData();
//      this.getPartFourData();
    },
    methods:{
      onClickLeft(){
        this.$router.push({path: '/implementation/index'});
      },
      showPart(num){

        switch (num){
          case 0:
            this.getPartOneData();
            break;
          case 1:
            this.getPartTwoData();
            break;
          case 2:
            this.getPartThreeData();
            break;
          case 3:
            this.getPartFourData();
            break;
          default:
            break;

        }
        $($('.tab')[num]).addClass('bg').siblings().removeClass('bg');
        $($('.showHide')[num]).show().siblings().hide();


      },
      // 获取列表数据
      getPartOneData(xmid){
        let vm = this;
        let url= 'http://whjjgc.r93535.com/XmkgtjlsqkServlet?type=1&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists1 = response.data[0];

          vm.lists1.tdyspflsqk = vm.lists1.tdyspflsqk == '1'?true:false;
          vm.lists1.hppflsqk = vm.lists1.hppflsqk == '1'?true:false;
          vm.lists1.jnpflsqk = vm.lists1.jnpflsqk == '1'?true:false;
          vm.lists1.shwddlsqk = vm.lists1.shwddlsqk == '1'?true:false;
          vm.lists1.kypflsqk = vm.lists1.kypflsqk == '1'?true:false;
          vm.lists1.xmzjjhlsqk = vm.lists1.xmzjjhlsqk == '1'?true:false;

          console.log("111-获取详情页免得数据源："+JSON.stringify(this.lists1));
        }).catch(err => {
          console.error(err.message)
        })
      },
      getPartTwoData(xmid){
        let vm = this;
        let url= 'http://whjjgc.r93535.com/XmkgtjlsqkServlet?type=2&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists2 = response.data[0];

          vm.lists2.yhdklsqk = vm.lists2.yhdklsqk == '1'?true:false;

          console.log("222-获取详情页免得数据源："+JSON.stringify(this.lists2));
        }).catch(err => {
          console.error(err.message)
        })
      },
      getPartThreeData(xmid){
        let vm = this;
        let url= 'http://whjjgc.r93535.com/XmkgtjlsqkServlet?type=3&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists3 = response.data[0];

          vm.lists3.cbsjpflsqk = vm.lists3.cbsjpflsqk == '1'?true:false;

          console.log("333-获取详情页免得数据源："+JSON.stringify(this.lists3));
        }).catch(err => {
          console.error(err.message)
        })
      },
      getPartFourData(xmid){
        let vm = this;
        let url= 'http://whjjgc.r93535.com/XmkgtjlsqkServlet?type=4&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists4 = response.data[0];

          vm.lists4.jxgshblsqk = vm.lists4.jxgshblsqk == '1'?true:false;
          vm.lists4.xmfrlsqk = vm.lists4.xmfrlsqk == '1'?true:false;
          vm.lists4.jsydlsqk = vm.lists4.jsydlsqk == '1'?true:false;
          vm.lists4.ysjdwlsqk = vm.lists4.ysjdwlsqk == '1'?true:false;
          vm.lists4.sgtshwclsqk = vm.lists4.sgtshwclsqk == '1'?true:false;
          vm.lists4.sgtyshdlsql = vm.lists4.sgtyshdlsql == '1'?true:false;
          vm.lists4.szdgbzlsqk = vm.lists4.szdgbzlsqk == '1'?true:false;
          vm.lists4.ztgclsqk = vm.lists4.ztgclsqk == '1'?true:false;

          console.log("444-获取详情页免得数据源："+JSON.stringify(this.lists4));
        }).catch(err => {
          console.error(err.message)
        })
      }
    }
  }
</script>

<style scoped>
  /* 内容区域 */
  .content{
    width:100%;
    margin-top:46px;
    margin-bottom:55px;
    overflow-y: auto;
    overflow-x:hidden;
  }
  .tab{
    width:100%;
    border:1px solid #ccc;
    margin-top:-1px;
  }
  .tab>span{
    position: relative;
    left:50%;
    display: block;
    width:20px;
    margin-left:-10px;
    padding:10px 0;
  }
  .bg{
    background: #ccc;
  }
  .main{
    width:100%;
    border-left:1px solid #ccc;
  }
  /* 重写 start*/
  .yo-scroll{
    top:46px;
  }
  .van-row{
    border:1px solid #ccc;
    border-bottom:none;
    margin:-1px;
  }
  .van-col{
    border-bottom:1px solid #ccc;
    border-right: 1px solid #ccc;
    line-height:39px;
    padding:0px;
  }
  .van-col.van-col-4{
    line-height:20px;
  }
  .van-col.van-col-16{
    height:40px;
    margin-bottom:-1px;
  }
  .van-switch{
    margin-top:4px;
  }
  /* 重写 end */

/*修改内容样式*/
  .conpad{
    padding: 0 10px;
  }

</style>
