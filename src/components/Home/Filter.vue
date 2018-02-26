<template>
  <div class="filter">
    <!--<van-nav-bar-->
    <!--v-bind:title='storeProName' fixed-->
    <!--left-text="<"-->
    <!--right-text="×"-->
    <!--@click-left="onClickLeft"-->
    <!--@click-right="onClickRight"-->
    <!--&gt;-->
    <!--</van-nav-bar>-->
    <van-nav-bar
      v-bind:title="'筛选页面'" fixed
      left-text="<"
      right-text="×"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>


  </div>
</template>

<script>
  export default {
    name: "filter",
    data(){
      return{

      }
    },
    components:{
    },
    methods:{
      onClickLeft() {
        history.back();
      },
      onClickRight() {
      }

    }
  }
</script>

<style scoped>

</style>
