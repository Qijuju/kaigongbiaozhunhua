<template>
  <div class="listDetail">
  <!-- 头 -->
    <van-nav-bar
      v-bind:title='proName'  fixed
      left-text="返回"
      @click-left="onClickLeft" right-text="关闭"  @click-right="onClickRight"
    >
    </van-nav-bar>

    <!--内容区域-->
    <div class="content">

      <select v-model="selected" @change="showPart(selected)" style="width: 100%;height:35px;">
        <option v-for="(item,index) in headData" :value="index">
          {{ item.value }}
        </option>
      </select>
      <van-row>
        <van-col span="24">
          <div class="main">
            <div class="showHide">
              <van-row>
                <van-col span="24" class="conpad">土地预审批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8">文号</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.tdyspfiwh)'>{{lists1.tdyspfiwh}}</span>
                    </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists1.tdyspflsqk)"/> <!--<van-switch v-model="lists1.tdyspflsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.tdyspfbz)'> {{lists1.tdyspfbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists1.hppfwh)'>{{lists1.hppfwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists1.hppflsqk)"/></van-col><!--<van-switch v-model="lists1.hppflsqk" />-->
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.hppfbz)'>{{lists1.hppfbz}}</span>
                      </van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">节能批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8" >文号</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.jnpfwh)'>{{lists1.jnpfwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16" ><span v-html="mySwitch(lists1.shwddlsqk)"/> <!--<van-switch v-model="lists1.shwddlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.jnpfbz)'> {{lists1.jnpfbz}}</span>
                     </van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">社会稳定风险评估、防洪影响、通航论证、地震安全性评估、文物保护影响等其他前置腰间结论性意见</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8" >文号</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.shwddwh)'> {{lists1.shwddwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists1.shwddlsqk)"/> <!--<van-switch v-model="lists1.shwddlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.shwddbz)'> {{lists1.shwddbz}}</span>
                     </van-col>
                  </van-row>
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24" class="conpad">可研批复</van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <van-row>
                    <van-col span="8" >文号</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.kypfwh)'>{{lists1.kypfwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists1.kypflsqk)"/><!--<van-switch v-model="lists1.kypflsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.kypfbz)'> {{lists1.kypfbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists1.xmzjjhwh)'>{{lists1.xmzjjhwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists1.xmzjjhlsqk)"/> <!--<van-switch v-model="lists1.xmzjjhlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists1.xmzjjhbz)'>{{lists1.xmzjjhbz}}</span>
                      </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists2.yhdkwh)'> {{lists2.yhdkwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists2.yhdklsqk)"/> <!--<van-switch v-model="lists2.yhdklsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16">
                      <span  @click='popupClick(lists2.yhdkbz)'>{{lists2.yhdkbz}}</span>
                      </van-col>
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
                    <van-col span="8" >文号</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists3.cbsjpfwh)'> {{lists3.cbsjpfwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists3.cbsjpflsqk)"/><!--<van-switch v-model="lists3.cbsjpflsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists3.cbsjpfbz)'>{{lists3.cbsjpfbz}}</span>
                      </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.jxgshbwh)'>{{lists4.jxgshbwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.jxgshblsqk)"/><!--<van-switch v-model="lists4.jxgshblsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.jxgshbbz)'>{{lists4.jxgshbbz}}</span>
                      </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.xmfrwh)'> {{lists4.xmfrwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists4.xmfrlsqk)"/> <!--<van-switch v-model="lists4.xmfrlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.xmfrbz)'>{{lists4.xmfrbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.jsydwh)'>{{lists4.jsydwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.jsydlsqk)"/><!--<van-switch v-model="lists4.jsydlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.jsydbz)'> {{lists4.jsydbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.ysjdwwh)'>{{lists4.ysjdwwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.ysjdwlsqk)"/><!--<van-switch v-model="lists4.ysjdwlsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.ysjdwbz)'>{{lists4.ysjdwbz}}</span>
                      </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.sgtshwcwh)'>{{lists4.sgtshwcwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.sgtshwclsqk)"/><!--<van-switch v-model="lists4.sgtshwcbz" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.sgtshwcbz)'> {{lists4.sgtshwcbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.sgtyshdwh)'> {{lists4.sgtyshdwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"><span v-html="mySwitch(lists4.sgtyshdlsql)"/> <!--<van-switch v-model="lists4.sgtyshdlsql" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.sgtyshdbz)'>{{lists4.sgtyshdbz}}</span>
                      </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.szdgbzwh)'>{{lists4.szdgbzwh}}</span>
                      </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.szdgbzlsqk)"/><!--<van-switch v-model="lists4.szdgbzwh" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.szdgbzbz)'> {{lists4.szdgbzbz}}</span>
                     </van-col>
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
                    <van-col span="16" >
                      <span @click='popupClick(lists4.ztgcwh)'> {{lists4.ztgcwh}}</span>
                     </van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">落实情况</van-col>
                    <van-col span="16"> <span v-html="mySwitch(lists4.ztgclsqk)"/><!--<van-switch v-model="lists4.ztgclsqk" />--></van-col>
                  </van-row>
                  <van-row>
                    <van-col span="8">备注</van-col>
                    <van-col span="16" >
                      <span @click='popupClick(lists4.ztgcbz)'>{{lists4.ztgcbz}}</span>
                      </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>

          </div>
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
  import axios from 'axios'
  import Header from '../Common/Header'
  import { Row, Col,Field,Picker } from 'vant';

  export default {
    name: "listDetail",
    data(){
      return{
        showPicker:false,
        mytab:'统计处',
        tabs:['统计处','财务处','总工程师室','建设处'],
        headData: [{
          value: '统计处'
        }, {
          value: '财务处'
        },{
          value: '总工程师室'
        },{
          value: '建设处'
        }],
//        selected: '',
        xmmc:'',
        xmid:'',
        selected:0,
        checked:true, // 开关的状态
        lists1:{},
        lists2:{},
        lists3:{},
        lists4:{},
        popupTxt:'',
        popupVisible:false
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
      popupClick(txt){
        this.popupTxt =txt;
        if(txt==''||txt==null||txt==undefined){
          this.popupVisible = false;
        }else {
          this.popupVisible = true;
        }
      },

      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      onClickLeft(){
        this.lists1={};
        this.lists2={};
        this.lists3={};
        this.lists4={};
        this.$router.push({path: '/implementation/index'});
      },
      showPart(num){
        switch (num){
          case 0:
            this.getPartOneData(0);
            break;
          case 1:
            this.getPartTwoData(1);
            break;
          case 2:
            this.getPartThreeData(2);
            break;
          case 3:
            this.getPartFourData(3);
            break;
          default:
            break;
        }
        // $($('.tab')[num]).addClass('bg').siblings().removeClass('bg');
        $($('.showHide')[num]).show().siblings().hide();
      },
      // 获取列表数据
      getPartOneData(xmid){
        let vm = this;
        let url= 'http://tljjgxt.r93535.com/XmkgtjlsqkServlet?type=1&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists1 = response.data[0];

          vm.lists1.tdyspflsqk = vm.lists1.tdyspflsqk == '1'?true:false;
          vm.lists1.hppflsqk = vm.lists1.hppflsqk == '1'?true:false;
          vm.lists1.jnpflsqk = vm.lists1.jnpflsqk == '1'?true:false;
          vm.lists1.shwddlsqk = vm.lists1.shwddlsqk == '1'?true:false;
          vm.lists1.kypflsqk = vm.lists1.kypflsqk == '1'?true:false;
          vm.lists1.xmzjjhlsqk = vm.lists1.xmzjjhlsqk == '1'?true:false;

        }).catch(err => {
          console.error(err.message)
        })
      },
      getPartTwoData(xmid){
        let vm = this;
        let url= 'http://tljjgxt.r93535.com/XmkgtjlsqkServlet?type=2&xmmcid='+vm.$route.query.xmid;

        axios.get(url).then(response => {
          vm.lists2 = response.data[0];

          vm.lists2.yhdklsqk = vm.lists2.yhdklsqk == '1'?true:false;

        }).catch(err => {
          console.error(err.message)
        })
      },
      getPartThreeData(xmid){
        let vm = this;
        let url= 'http://tljjgxt.r93535.com/XmkgtjlsqkServlet?type=3&xmmcid='+vm.$route.query.xmid;

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
        let url= 'http://tljjgxt.r93535.com/XmkgtjlsqkServlet?type=4&xmmcid='+vm.$route.query.xmid;

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
      },
      isShowPicker(){
        this.showPicker=!this.showPicker
      },
      onChange(picker, value, index) {
        this.mytab=value
        this.showPart(index)
        //Toast(`当前值：${value}, 当前索引：${index}`);
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
    /*border:1px solid #ccc;*/
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
    border-bottom:none;
    margin:-1px;
    border-right:0px;
    border-left:0px;
    border-top:1px solid #ccc;
    border-bottom:0px;
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
    height:39px;
    margin-bottom:-1px;
    padding: 0 5px;
    border-right:0px;
    border-bottom:0px;
  }
  .van-switch{
    margin-top:4px;
  }
  /* 重写 end */



  .van-col:nth-child(odd){
    background: #E5F2FA;
    border-right:1px solid #ccc;
    text-align: center;
  }
  .van-col:nth-child(even){
    border-right:1px solid #ccc;
    text-align: left;
    text-overflow: ellipsis;
    /*white-space: nowrap;*/
    overflow: hidden;
    background-color: #fff;
  }

  .van-col.van-col-24 span{
    display: inline-block;;
    width:100%;
    height:100%;
    background: #fff;
  }
  /*修改内容样式*/
  .conpad{
    padding: 0 10px;
  }

</style>
