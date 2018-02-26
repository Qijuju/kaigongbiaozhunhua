<template>
  <div class="footer">

    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="首页">
        <img v-if="selectedTab==='首页'" slot="icon" src="../../assets/images/images/homeg.png" >
        <img v-else slot="icon" src="../../assets/images/images/home.png" >
        首页
      </mt-tab-item>
      <mt-tab-item id="落实情况">
        <img v-if="selectedTab==='落实情况'" slot="icon" src="../../assets/images/images/lsqkg.png" >
        <img v-else slot="icon" src="../../assets/images/images/lsqk.png" >
        落实情况
      </mt-tab-item>
      <mt-tab-item id="项目">
        <img v-if="selectedTab==='项目'" slot="icon" src="../../assets/images/images/xmg.png">
        <img v-else slot="icon" src="../../assets/images/images/xm.png" >
        项目
      </mt-tab-item>
      <mt-tab-item id="标段">
        <img v-if="selectedTab==='标段'" slot="icon" src="../../assets/images/images/bdg.png" >
        <img v-else slot="icon" src="../../assets/images/images/bd.png" >
        标段
      </mt-tab-item>
      <mt-tab-item id="单位工程">
        <img v-if="selectedTab==='单位工程'" slot="icon" src="../../assets/images/images/dwgcg.png" >
        <img v-else slot="icon" src="../../assets/images/images/dwgc.png" >
        单位工程
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
      name: "footer",
      data() {
        return {
          selectedTab:'首页',
          selected:false
        }
      },
      watch:{
        selectedTab(newVal,oldVal){
          switch (newVal){
            case '首页':
              this.$router.push({path: '/Home'});
              break;
            case '落实情况':
              this.$router.push({path: '/implementation/index'});
              break;
            case '项目':
              this.$router.push({path: '/project'});
              break;
            case '标段':
              this.$router.push({path: '/section'});
              break;
            case '单位工程':
              this.$router.push({path: '/unitProject'});
              break;

          }

          console.log("电机的对象：" + newVal +'-' +oldVal);
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color:#fff;
  }
  .van-tabbar{
    z-index: 8;
  }

</style>
