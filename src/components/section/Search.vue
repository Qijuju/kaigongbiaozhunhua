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

    <!-- 选项框:项目管理机构-->
    <div id="xmgljgIsShow" v-if="xmgljgIsShow">
      <van-picker
                  show-toolbar
                  v-bind:visible-item-count='visibleItemCount'
                  :columns="xmgljgNameArr"
                  @cancel="onCancel"
                  @confirm="onXMGLJGConfirm"
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

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "search",
    data() {
      return {

        baseuserId:102300,

        xmgljgIsShow:false,// 项目管理机构选项是否显示
        xmmcIsShow:false, // 项目名称选项是否显示
        htbdIsShow:false, // 合同标段选项是否显示
        xmgljg:'', // 选中一条的数据
        xmgljgId:'', // 选中一条数据的id
        xmmc:'',
        xmmcId:'',
        htbd:'',
        htbdId:'',
        xmgljgNameArr: [], // 只有name字段的数据
        xmgljgArr:[], // 全部数据id+name
        xmmcNameArr:[],
        xmmcArr:[],
        htbdNameArr:['合同标段（01）','合同标段（02）','合同标段（03）','合同标段（04）','合同标段（05）'],
        htbdArr:[
          {
            "id": "1",
            "xmmc": "合同标段（01）"
          },
          {
            "id": "2",
            "xmmc": "合同标段（02）"
          },
          {
            "id": "3",
            "xmmc": "合同标段（03）"
          },
          {
            "id": "4",
            "xmmc": "合同标段（04）"
          },
          {
            "id": "5",
            "xmmc": "合同标段（05）"
          },
        ],
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
        this.$router.push({path:'/section'});
      },
      onClickRight(){
        let obj ={
          xmjgglSearchCondId:this.xmgljgId,
          xmmcSearchCondId:this.xmmcId,
          htbdSearchCondId:this.htbdId
        };
        this.$store.commit('setSectionInfo',obj);
        // 跳转到标段列表页面，根据搜索条件锅炉列表数据
        this.$router.push({path:'/section',});
      },
      // 选择器：确认调取方法：项目管理机构
      onXMGLJGConfirm(value, index) {
        this.xmgljg = value;
        this.xmgljgId= this.xmgljgArr[index].id;
        this.xmgljgIsShow =false;

        // 将选中的项目管理机构的id存储起来
        this.$store.commit('setSectionInfo',{xmjgglId:this.xmgljgArr[index].id});
//        console.log(`项目管理机构当前值：${value}, 当前索引：${index},id:${this.xmgljgArr[index].id}`);
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
      // 选择器：确认调取方法：项目名称
      onHTBDConfirm(value,index) {
        this.htbd = value;
        this.htbdId= this.htbdArr[index].id;
        this.htbdIsShow =false;
        console.log(`项目名称当前值：${value}, 当前索引：${index}`);
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
      //  项目管理机构字典
      getXMGLLGData(){
        let vm=this;
        let url ='http://whjjgc.r93535.com/XmgljgServlet?baseuserid='+vm.baseuserid;
        axios.get(url)
          .then(response => {
            vm.xmgljgArr = response.data;
            var temp =[];
            for(var i=0;i<response.data.length;i++){
              temp.push(response.data[i].subcompanyname)
            }
            this.xmgljgNameArr = temp;
          }).catch(err => {
          console.error(err.message)
        })
      },
      // 项目名称字典数据
      getXMMCData(){
        let vm=this;
        console.log("获取项目字典数据的参数：机构id："+vm.xmgljgId);
        let url='http://whjjgc.r93535.com/KgbzhPCServlet?baseuserid='+vm.baseuserId+'&gljg='+this.xmgljgId;
        console.log("获取项目字典请求的url："+url);

        axios.get(url)
          .then(response => {
            vm.xmmcArr = response.data;
            console.log("获取标段字典请求数据："+JSON.stringify(vm.xmmcArr));
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
      getHTBDData(){
        let vm=this;
        console.log("获取标段字典数据的参数：项目id："+vm.xmmcId+",机构id："+vm.xmgljgId);
        let url='http://whjjgc.r93535.com/BiaoduanServlet?xmmcid='+vm.xmmcId+'&xmgljg='+vm.xmgljgId+'&baseuserid='+vm.baseuserId;
        console.log("获取标段字典请求的url："+url);

        axios.get(url)
          .then(response => {
            vm.htbdArr = response.data;
            console.log("获取标段字典请求数据："+JSON.stringify(vm.htbdArr));

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
