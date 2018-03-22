<template>
  <div class="search">

    <van-nav-bar
      title="标段工程开工标准化"
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

    <div id="xmgljgIsShow" v-if="xmgljgIsShow">
      <van-picker
                  show-toolbar
                  v-bind:visible-item-count='visibleItemCount'
                  :columns="xmgljgNameArr"
                  @cancel="onCancel"
                  @confirm="onXMGLJGConfirm"
      />
    </div>

    <div id="xmmcIsShow" v-if="xmmcIsShow">
      <van-picker
                  show-toolbar
                  v-bind:visible-item-count='visibleItemCount'
                  :columns="xmmcNameArr"
                  @cancel="onCancel"
                  @confirm="onCMMCConfirm"
      />

    </div>

    <div id="htbdIsShow" v-if="htbdIsShow">
      <van-picker
                  show-toolbar
                  v-bind:visible-item-count='visibleItemCount'
                  :columns="htbdNameArr"
                  @cancel="onCancel"
                  @confirm="onHTBDConfirm"
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
        baseuserId:102300,
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

      }
    },
    mounted:function () {
      this.getXMGLLGDict();
//      this.getXMMCDict();
//      this.getHTBDDict();
    },

    methods:{
      onClickLeft(){
        this.$router.push({path:'/section'});
      },
      onClickRight(){
        let query ={
          xmgljgId:this.xmgljgId,
          xmmcId:this.xmmcId,
          htbdId:this.htbdId
        };

        this.$router.push({path:'/section',query: query});
      },
      // 项目管理机构
      onXMGLJGConfirm(value, index) {
        this.xmgljg = value;
        this.xmgljgId= this.xmgljgArr[index].id; // 获取选中项的id
        this.xmgljgIsShow =false;
        // 调取获取项目字典接口
        this.getXMMCDict();

//        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
      },
      // 选择器：确认调取方法：项目名称
      onCMMCConfirm(value, index) {
        this.xmmc = value;
        this.xmmcId= this.xmmcArr[index].id;// 获取选中项的id
        this.xmmcIsShow =false;
        // 调取获取合同标段接口
        this.getHTBDDict();
      },
      // 选择器：确认调取方法：项目名称
      onHTBDConfirm(value,index) {
        this.htbd = value;
        this.htbdId= this.htbdArr[index].id;// 获取选中项的id
        this.htbdIsShow =false;
      },
      // 选择器：取消调取方法,隐藏选项框
      onCancel() {
        this.xmgljgIsShow = false;
        this.xmmcIsShow = false;
        this.htbdIsShow = false;
      },
      isShowXMGLLG(){
        this.xmgljgIsShow = !this.xmgljgIsShow;
        this.xmmcIsShow = false;
        this.htbdIsShow = false;
      },
      isShowXMMC(){
        this.xmmcIsShow = !this.xmmcIsShow;
        this.xmgljgIsShow = false;
        this.htbdIsShow = false;
      },
      isShowHTBD(){
        this.htbdIsShow = !this.htbdIsShow;
        this.xmgljgIsShow = false;
        this.xmmcIsShow = false;
      },
      //  项目管理机构字典数据
      getXMGLLGDict(){
        let vm=this;
        let url ='http://tljjgxt.r93535.com/XmgljgServlet?baseuserid='+vm._GLOBAL.baseUserId;
        console.log("项目管理机构字典数据url:"+url);
        axios.get(url)
          .then(response => {
            vm.xmgljgArr = response.data;
            console.log("项目字典数据:"+JSON.stringify(vm.xmgljgArr));
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].subcompanyname)
            }
            this.xmgljgNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },

      // 项目字典数据
      getXMMCDict(){
        let vm=this;
        console.log("获取项目时候的项目管理机构的id为：" + this.xmgljgId);
        let url ='http://tljjgxt.r93535.com/XiangmuServlet?baseuserid='+vm._GLOBAL.baseUserId+'&orgid=265&xmgljg='+vm.xmgljgId;
        console.log("项目字典数据url:"+url);
        axios.get(url)
          .then(response => {
            vm.xmmcArr = response.data;
            console.log("项目字典数据:"+JSON.stringify(vm.xmmcArr));
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].xmmc)
            }

            this.xmmcNameArr = temp;

          }).catch(err => {
          console.error(err.message)
        })
      },
      //  合同标段字典
      getHTBDDict(){
        let vm=this;
        console.log("获取合同标段字典上连个id：：" + this.xmgljgId+':'+vm.xmmcId);
        let url='http://tljjgxt.r93535.com/BiaoduanServlet?xmmcid='+vm.xmmcId+'&xmgljg='+vm.xmgljgId+'&baseuserid='+vm._GLOBAL.baseUserId;
        console.log("合同标段字典的url:"+url);
        axios.get(url)
          .then(response => {
            vm.htbdArr = response.data;
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].bdmc)
            }
            this.htbdNameArr = temp;
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
  #htbdIsShow
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
