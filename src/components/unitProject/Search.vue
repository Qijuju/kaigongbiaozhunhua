<template>
  <div class="search">
    <van-nav-bar
      title="单位工程开工标准化"
      left-text="取消"
      right-text="搜索"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>

    <div @click="isShowXMGLLG()">
      <van-cell-group>
        <van-field
          label="项目管理机构"
          v-model="xmgljg"
          placeholder="全部"
          disabled
        />
      </van-cell-group>
    </div>
    <div @click="isShowXMMC()">
      <van-cell-group>
        <van-field
          label="项目名称"
          v-model="xmmc"
          placeholder="全部"
          disabled
        />
      </van-cell-group>
    </div>
    <div @click="isShowHTBD()">
      <van-cell-group>
        <van-field
          label="合同标段"
          v-model="htbd"
          placeholder="全部"
          disabled
        />
      </van-cell-group>
    </div>

    <div @click="isShowDWGC()">
      <van-cell-group>
        <van-field
          label="单位工程"
          v-model="dwgc"
          placeholder="全部"
          disabled
        />
      </van-cell-group>
    </div>

    <!-- 选项框:项目管理机构-->
    <div id="xmgljgIsShow" v-if="xmgljgIsShow">
      <van-picker
        show-toolbar
        v-bind:visible-item-count='visibleItemCount'
        :columns="xmgljgNameArr"
        @cancel="onCancel"
        @confirm="onXMGLLGConfirm"
      />
    </div>

    <!-- 选项框:项目名称-->
    <div id="xmmcIsShow" v-if="xmmcIsShow">
      <van-picker
        show-toolbar
        v-bind:visible-item-count='visibleItemCount'
        :columns="xmmcNameArr"
        @cancel="onCancel"
        @confirm="onCMMCConfirm"
      />
    </div>

    <!-- 选项框:合同标段-->
    <div id="htbdIsShow" v-if="htbdIsShow">
      <van-picker
        show-toolbar
        v-bind:visible-item-count='visibleItemCount'
        :columns="htbdNameArr"
        @cancel="onCancel"
        @confirm="onHTBDConfirm"
      />
    </div>

    <!-- 选项框:单位工程-->
    <div id="dwgcIsShow" v-if="dwgcIsShow">
      <van-picker
        show-toolbar
        v-bind:visible-item-count='visibleItemCount'
        :columns="dwgcNameArr"
        @cancel="onCancel"
        @confirm="onDWGCConfirm"
      />
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "search",
    data() {
      return {
        xmgljgIsShow:false,// 项目管理机构选项是否显示
        xmmcIsShow:false, // 项目名称选项是否显示
        htbdIsShow:false, // 合同标段选项是否显示
        dwgcIsShow:false, // 单位工程选项是否显示
        xmgljg:'', // 选中一条的数据
        xmgljgId:-1, // 选中一条数据的id
        xmgljgNameArr: [], // 只有name字段的数据
        xmgljgArr:[], // 全部数据id+name
        xmmc:'',
        xmmcId:-1,
        xmmcNameArr:[],
        xmmcArr:[],
        htbd:'',
        htbdId:-1,
        htbdNameArr:[],
        htbdArr:[],
        dwgc:'',
        dwgcId:-1,
        dwgcNameArr:[],
        dwgcArr:[],
        visibleItemCount:3

      }
    },
    mounted:function () {
      this.getXMGLLGData();
      this.getXMMCData();
      this.getHTBDData();
    },
    methods:{
      onClickLeft(){
        console.log("取消事件");
      },
      onClickRight(){
        // 跳转到标段列表页面，根据搜索条件锅炉列表数据
        this.$router.push({path:'/unitProject'});
        this.$store.commit('setUnitProjectInfo',{xmgljg:this.xmgljg ,xmmc:this.xmmc ,htbd:this.htbd});
        console.log("搜索事件");
      },
      // 选择器：确认调取方法：项目管理机构
      onXMGLLGConfirm(value, index) {
        this.xmgljg = value;
        this.xmgljgId= this.xmgljgArr[index].id;
        this.xmgljgIsShow =false;
        console.log(`项目管理机构当前值：${value}, 当前索引：${index}`);
        // 根据选择的项目管理机构重新请求项目名称列表数据
        this.getXMMCData();
      },
      // 选择器：确认调取方法：项目名称
      onCMMCConfirm(value, index) {
        this.xmmc = value;
        this.xmmcId= this.xmmcArr[index].id;
        this.xmmcIsShow =false;
        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
        this.getHTBDData();
      },
      // 选择器：确认调取方法：合同标段
      onHTBDConfirm(value, index) {
        this.htbd = value;
        this.htbdId= this.htbdArr[index].id;
        this.htbdIsShow =false;
        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
      },
      //  选择器：确认调取方法：单位工程
      onDWGCConfirm(value,index){
        this.dwgc = value;
        this.dwgcId= this.dwgcArr[index].id;
        this.dwgcIsShow =false;
        console.log(`单位工程当前值：${value}, 当前索引：${index}`);
      },
      // 选择器：取消调取方法,隐藏选项框
      onCancel() {
        this.xmgljgIsShow = false;
        this.xmmcIsShow = false;
        this.htbdIsShow = false;
        this.dwgcIsShow = false;
      },
      isShowXMGLLG(){
        this.xmgljgIsShow = !this.xmgljgIsShow;
        this.xmmcIsShow = false;
        this.htbdIsShow = false;
        this.dwgcIsShow = false;
      },
      isShowXMMC(){
        this.xmmcIsShow = !this.xmmcIsShow;
        this.xmgljgIsShow = false;
        this.htbdIsShow = false;
        this.dwgcIsShow = false;
      },
      isShowHTBD(){
        this.htbdIsShow = !this.htbdIsShow;
        this.xmgljgIsShow = false;
        this.xmmcIsShow = false;
        this.dwgcIsShow = false;
      },
      isShowDWGC(){
        this.dwgcIsShow = !this.dwgcIsShow;
        this.xmgljgIsShow = false;
        this.xmmcIsShow = false;
        this.htbdIsShow = false;
      },
      // 调取接口数据:项目管理机构字典
      getXMGLLGData(){
        let url ='http://whjjgc.r93535.com/XmgljgServlet?baseuserid=223906';
        axios.get(url)
          .then(response => {
            this.xmgljgArr = response.data;
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].subcompanyname)
            }
            this.xmgljgNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 调取接口数据:项目名称字典
      getXMMCData(){
        let url='';
        if(this.xmgljgId >= 0){
          url='http://whjjgc.r93535.com/KgbzhPCServlet?baseuserid=222412&gljg='+this.xmgljgId;
        }else {
          url='http://whjjgc.r93535.com/KgbzhPCServlet?baseuserid=222412';
        }
        axios.get(url)
          .then(response => {
//            console.log("项目名称列表数据为：" +JSON.stringify(response.data));
            this.xmmcArr = response.data;
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].xmmc)
            }
            this.xmmcNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 调取接口数据:合同标段字典
      getHTBDData(){
        let url='';
        if(this.xmgljgId >= 0 && this.xmmcId < 0){
          url='http://whjjgc.r93535.com/BiaoduanServlet?xmgljg='+this.xmgljgId+'&baseuserid=223906'
        }else if (this.xmmcId >= 0 && this.xmgljgId < 0){
          url='http://whjjgc.r93535.com/BiaoduanServlet?xmmcid='+this.xmmcId +'&baseuserid=223906';
        }else if ( this.xmgljgId >= 0 && this.xmmcId >= 0){
          url='http://whjjgc.r93535.com/BiaoduanServlet?xmmcid='+this.xmmcId+'&xmgljg='+this.xmgljgId +'&baseuserid=223906';
        }else {
          url='http://whjjgc.r93535.com/BiaoduanServlet?baseuserid=223906';
        }

        console.log("2项目机构id：：" +  this.xmgljgId);
        console.log("2项目名称id：：" +  this.xmmcId);
        console.log("2合成的url为：" +url);
        axios.get(url)
          .then(response => {
            this.htbdArr = response.data;
            console.log("标段信息：" +JSON.stringify(this.htbdArr));
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].bdmc)
            }
            this.htbdNameArr = temp;
            console.log("标段可选项：" +JSON.stringify(this.htbdNameArr));
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 调取接口数据:单位工程字典
      getDWGCData(){
        let url='http://whjjgc.r93535.com/DanweiServlet?bdid=100&xmmcid=36&xmgljg=8&baseuserid=223906';
//        if(this.xmgljgId >= 0 && this.xmmcId < 0){
//          url='http://whjjgc.r93535.com/BiaoduanServlet?xmgljg='+this.xmgljgId+'&baseuserid=223906'
//        }else if (this.xmmcId >= 0 && this.xmgljgId < 0){
//          url='http://whjjgc.r93535.com/BiaoduanServlet?xmmcid='+this.xmmcId +'&baseuserid=223906';
//        }else if ( this.xmgljgId >= 0 && this.xmmcId >= 0){
//          url='http://whjjgc.r93535.com/BiaoduanServlet?xmmcid='+this.xmmcId+'&xmgljg='+this.xmgljgId +'&baseuserid=223906';
//        }else {
//          url='http://whjjgc.r93535.com/BiaoduanServlet?baseuserid=223906';
//        }

        axios.get(url)
          .then(response => {
//            console.log("项目名称列表数据为：" +JSON.stringify(response.data));
            this.dwgcArr = response.data;
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].dwgc)
            }
            this.dwgcNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      }
    }
  }

</script>

<style scoped>
  #xmgljgIsShow,
  #xmmcIsShow,
  #htbdIsShow,
  #dwgcIsShow
  {
    position: fixed;
    left:0px;
    bottom:55px;
    width:100%;
  }
  .van-picker__toolbar.van-hairline--top-bottom{
    background:#E5F2FA;
  }

</style>
