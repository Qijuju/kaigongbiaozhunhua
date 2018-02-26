<template>
  <div class="listDetail">
  <!-- 头 -->
    <Header v-bind:title="proName"></Header> <!-- v-bind:title="proName2" 对title的值进行v-bind动态绑定-->

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
                <van-col span="24">土地预审批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">环评批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">节能批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">社会稳定风险评估、防洪影响、通航论证、地震安全性评估、文物保护影响等其他前置腰间结论性意见</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">可研批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">项目资金计划和其他建设资金计划落实</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24">银行贷款合同签订，或银行评审通过</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24">初步设计批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>
            </div>

            <div class="showHide" hidden>
              <van-row>
                <van-col span="24">签修改算核备</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">项目法人或者项目管理机构成立</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">建设用地或先行开工工点建设用地批复</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">与设计单位签订设计图纸交付协议</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">施工图审核完成</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">施工图预算核备</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">施组大纲编制完成</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
                </van-col>
              </van-row>

              <van-row>
                <van-col span="24">主体工程或工点施工、监理单位招标完成，并发中标通知书</van-col>
              </van-row>
              <van-row>
                <van-col span="8">
                  <van-row>
                    <van-col span="24">文号</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">落实情况</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="24">备注</van-col>
                  </van-row>
                </van-col>
                <van-col span="16">
                  <van-switch v-model="checked" />
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
    methods:{
      showPart(num){
        $($('.tab')[num]).addClass('bg').siblings().removeClass('bg');
        $($('.showHide')[num]).show().siblings().hide();
      },
//      seeData(){
//        console.log("查看数据的方法调用了吗？");
//        console.log("获取的数据为22：" + this.xmmc +'-' +this.xmid);
//      },
      // 获取列表数据
      getList(){
        let vm = this;
        let url ='http://whjjgc.r93535.com/XmkgtjlsqkListServlet?baseuserid='+vm.baseuserid;
        axios.get(url).then(response => {
          this.lists = response.data;
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
    line-height:30px;
    padding:0px;
  }
  .van-col.van-col-4{
    line-height:20px;
  }
  .van-col.van-col-16{
    height:93px;
    margin-bottom:-1px;
  }
  .van-switch{
    margin-top:30px;
  }
  /* 重写 end */


</style>
