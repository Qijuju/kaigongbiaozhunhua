<template>
  <div class="search">
    <van-nav-bar
      title="单位工程开工标准化"
      left-text="返回"
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

        baseuserid:102300,
        visibleItemCount:3,

        xmgljgIsShow:false,// 项目管理机构选项是否显示
        xmgljg:'', // 选中一条的数据
        xmgljgId:'', // 选中一条数据的id
        xmgljgNameArr: [], // 只有name字段的数据
        xmgljgArr:[], // 全部数据id+name

        xmmcIsShow:false, // 项目名称选项是否显示
        xmmc:'',
        xmmcId:'',
        xmmcNameArr:[],
        xmmcArr:[],

        htbdIsShow:false, // 合同标段选项是否显示
        htbd:'',
        htbdId:'',
        htbdNameArr:[],
        htbdArr:[],

        dwgcIsShow:false, // 单位工程选项是否显示
        dwgc:'',
        dwgcId:'',
        dwgcNameArr:[],
        dwgcArr:[]

      }
    },
    mounted:function () {
      this.getXMGLLGDict();
      this.getXMMCDict();
      this.getHTBDDict();
      this.getDWGCDict();
    },
    methods:{
      onClickLeft(){
        this.$router.push({path: '/unitProject'});
      },
      onClickRight(){
        var query = {
          xmgljgId:this.xmgljgId,
          xmmcId:this.xmmcId,
          htbdId:this.htbdId,
          dwgcId:this.dwgcId,
        };

        this.$router.push({path: '/unitProject', query: query});

        this.xmgljg='';
        this.xmmc='';
        this.htbd='';
        this.dwgc='';
      },
      // 确认项目管理机构
      onXMGLLGConfirm(value, index) {
        this.xmgljg = value;
        this.xmgljgId= this.xmgljgArr[index].id;
        this.xmgljgIsShow =false;
//        console.log(`项目管理机构当前值：${value}, 当前索引：${index}`);
        // 根据选择的项目管理机构重新请求项目名称列表数据
        this.getXMMCDict();
      },
      // 确认项目名称
      onCMMCConfirm(value, index) {
        this.xmmc = value;
        this.xmmcId= this.xmmcArr[index].id;
        this.xmmcIsShow =false;
//        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
        this.getHTBDDict();
      },
      // 确认合同标段
      onHTBDConfirm(value, index) {

        this.htbd = value;
        this.htbdIsShow =false;

        var i =index-1;

        if(index===0){
          console.log("下标==0" +index);
          this.htbdId='';
        }else {
          console.log("下标！=0：" + index);
          this.htbdId= this.htbdArr[i].id;// 获取选中项的id
        }

        console.log("玄功的标段为：" + value +':' + index+';id== '+ this.htbdId);

        this.getDWGCDict();

//        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
      },
      //  确认单位工程
      onDWGCConfirm(value,index){
        this.dwgc = value;
        this.dwgcIsShow =false;

        var i =index-1;

        if(index===0){
          console.log("下标==0" +index);
          this.dwgcId='';
        }else {
          console.log("下标！=0：" + index);
          this.dwgcId= this.dwgcArr[i].id;// 获取选中项的id
        }


        console.log(`单位工程当前值：${value}, 当前索引：${index},当前的id：${this.dwgcId}` );
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
      // 项目管理机构字典
      getXMGLLGDict(){
        let vm=this;
        let url ='http://tljjgxt.r93535.com/XmgljgServlet?baseuserid='+vm._GLOBAL.baseUserId;
        axios.get(url)
          .then(response => {
            this.xmgljgArr = response.data;

            var obj={};
            obj.id='';
            obj.subcompanyname='全部';
            vm.xmgljgArr.unshift(obj);

            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].subcompanyname)
            }
            this.xmgljgNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 项目名称字典
      getXMMCDict(){
        let vm=this;
        let url ='http://tljjgxt.r93535.com/XiangmuServlet?baseuserid='+vm._GLOBAL.baseUserId+'&orgid=265&xmgljg='+vm.xmgljgId;

        axios.get(url)
          .then(response => {
            this.xmmcArr = response.data;

            var obj={};
            obj.id='';
            obj.xmmc='全部';
            vm.xmmcArr.unshift(obj);

            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].xmmc)
            }
            this.xmmcNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 合同标段字典
      getHTBDDict(){
        let vm=this;
        let url='http://tljjgxt.r93535.com/BiaoduanServlet?xmmcid='+vm.xmmcId+'&xmgljg='+vm.xmgljgId+'&baseuserid='+vm._GLOBAL.baseUserId;

        axios.get(url)
          .then(response => {
            this.htbdArr = response.data;

            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].bdmc)
            }

            // 追加全部字段
            temp.unshift('全部');

            this.htbdNameArr = temp;

          }).catch(err => {
          console.error(err.message)
        })
      },
      // 单位工程字典
      getDWGCDict(){
        let vm=this;
        let url='http://tljjgxt.r93535.com/DanweiServlet?bdid='+vm.htbdId+'&xmmcid='+vm.xmmcId+'&xmgljg='+vm.xmgljgId+'&baseuserid='+vm._GLOBAL.baseUserId;

        console.log("单位工程字典--url:"+url);

        axios.get(url)
          .then(response => {
            this.dwgcArr = response.data;

            console.log("单位工程字典--1:"+JSON.stringify(this.dwgcArr));

            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].dwgc)
            }
            // 追加全部字段
            temp.unshift('全部');
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
