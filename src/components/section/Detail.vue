<template>
  <div class="detail">
    <van-nav-bar
      v-bind:title='detailData.bdmc' fixed
      left-text="返回"
      @click-left="onClickLeft"
      right-text="关闭"  @click-right="onClickRight"

    >
    </van-nav-bar>
    <div class="content">
      <!--<button id="nextPage" @click="goNextPage()">下一页</button>-->
      <div id="nextPage">下一页</div>'

      <van-row>
        <van-col span="8">合同标段</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.bdmc)'>{{detailData.bdmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目名称</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmmc)'>{{detailData.xmmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工单位</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.sgdw)'>{{detailData.sgdw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">标段基本情况</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmjbqk)'>{{detailData.xmjbqk}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划开工日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.jhkgrq)'>{{detailData.jhkgrq}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">施工单位自验结果</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.sgdwzyjg)'>{{detailData.sgdwzyjg}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目部</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.xmb)'>{{detailData.xmb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqsg)'>{{detailData.rqsg}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">监理单位审查意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.jldwscyj)'>{{detailData.jldwscyj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">监理站</van-col>
        <van-col span="16">
          <span @click='popupClick(detailData.jlz)'>{{detailData.jlz}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rqjl)'>{{detailData.rqjl}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">建设单位审查意见</van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <span @click='popupClick(detailData.jsdwysyj)'>{{detailData.jsdwysyj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">项目管理机构</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.zhb)'>{{detailData.zhb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">日期</van-col>
        <van-col span="16" >
          <span @click='popupClick(detailData.rixmgl)'>{{detailData.rixmgl}}</span>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>
      <p hidden>{{storeId}}</p>
    </div>

  </div>
</template>

<script>

  import axios from 'axios';
  import Header from '../Common/Header'

  window.onload=function(){

    var flag = 0; //标记是拖曳还是点击
    var oDiv = document.getElementById('nextPage');
    var disX,moveX,L,T,starX,starY,starXEnd,starYEnd,moveY;
    oDiv.addEventListener('touchstart',function(e){
      flag = 0;
      e.preventDefault();//阻止触摸时页面的滚动，缩放
      disX = e.touches[0].clientX - this.offsetLeft;
      disY = e.touches[0].clientY - this.offsetTop;
      //手指按下时的坐标
      starX = e.touches[0].clientX;
      starY = e.touches[0].clientY;

    });
    oDiv.addEventListener('touchmove',function(e){
      flag = 1;
      L = e.touches[0].clientX - disX ;
      T = e.touches[0].clientY - disY ;
//移动时 当前位置与起始位置之间的差值
      starXEnd = e.touches[0].clientX - starX;
      starYEnd = e.touches[0].clientY - starY;
//console.log(L);
      if(L<0){//限制拖拽的X范围，不能拖出屏幕
        L = 0;
      }else if(L > document.documentElement.clientWidth - this.offsetWidth){
        L=document.documentElement.clientWidth - this.offsetWidth;
      }
      if(T<0){//限制拖拽的Y范围，不能拖出屏幕
        T=0;
      }else if(T>document.documentElement.clientHeight - this.offsetHeight){
        T = document.documentElement.clientHeight - this.offsetHeight;
      }
      moveX = L + 'px';
      moveY = T + 'px';

      this.style.left = moveX;
      this.style.top = moveY;
    });
    window.addEventListener('touchend',function(e){

//判断滑动方向
      if(flag === 0) {//点击
        alert("点击跳转");
//        this.$router.push({path:'/section/detailNext'});

//              window.location.href='http://www.baidu.com';
      }
    });
  }


  export default {
    name: "detail",
    data() {
      return {
        id:-1, // 标段id
        type:1, // 移动端
        detailData:{}, // 详情数据
        popupTxt:'', // 弹出层显示内容
        popupVisible:false, // 弹出层可视否
      }
    },
    components:{
      Header
    },
    computed:{
      storeId(){  // 时时获取项目的名称
        this.id  = this.$store.getters.sectionInfo.id;
        this.getDetailData();
        return this.id;
      }
    },
    activated:function () {
      this.getDetailData();
      this.drag();
    },
    methods:{
      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

      onClickLeft(){
        // 清空数据
        this.detailData={};
        this.$router.push({path:'/section'});
      },
      popupClick(txt){
        this.popupVisible = true;
        this.popupTxt = txt;
      },
      goNextPage(){
        this.$router.push({path:'/section/detailNext'});
      },
      // 根据标段id获取详情页数据
      getDetailData(){

        let vm = this;
        let url='http://tljjgxt.r93535.com/BdgckgbzhServlet?bdid='+vm.id+'&type='+vm.type;
        console.log("请求标段详情数据第一页数据的url："+url);
        axios.get(url).then(response => {
          vm.detailData = response.data[0];
          console.log("标段详情第一页的数据："+JSON.stringify(vm.detailData));
        }).catch(err => {
          console.error(err.message)
        })
      },
      drag(){

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
    width: 100px;
    height: 100px;
    position:fixed;
    background-color: rgba(62, 255, 146, 0.5);
    border-radius:25px;
    color: #fff;
    /*position: fixed;*/
    /*top:50%;*/
    /*right:0px;*/
    /*width:30px;*/
    /*padding:5px;*/
    /*background: rgba(0,0,0,.5);*/
    /*color: #fff;*/
    /*border:none;*/
    /*-webkit-border-radius: 4px 0 0 4px;*/
    /*-moz-border-radius: 4px 0 0 4px;*/
    /*border-radius: 4px 0 0 4px;*/
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
    padding:0 5px;
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

  .van-col.van-col-24 span{
    display: inline-block;;
    width:100%;
    height:100%;
    background: #fff;
  }


</style>
