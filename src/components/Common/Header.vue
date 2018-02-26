<template>
  <div class="header">
    <van-nav-bar :title="title"></van-nav-bar>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  export default {
    props:["title"],
    name: "header",
    components: {
      NavBar
    },
    methods: {
    }
  }
</script>

<style scoped>
  .header{
    position: fixed;
    top:0px;
    left:0px;
    width:100%;
    height:46px;
    z-index:2;
  }
  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  /* 设置头部 style end */
</style>
