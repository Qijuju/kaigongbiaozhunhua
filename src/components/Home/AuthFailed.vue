<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" @click-left="onClickLeft" right-text="关闭"  @click-right="onClickRight" fixed></van-nav-bar>
    <div class="content">
      当前用户无授权
    </div>
  </div>
</template>

<script>
  import {NavBar} from 'vant';

  export default {
    name: "authfailed",
    data() {
      return {}
    },
    components: {
      NavBar
    },
    methods: {
      onClickLeft() {
        history.back();
      },
      //  关闭应用程序。调取JSAPI,关闭应用程序
      onClickRight(){
        RPM.closeApplication();
      },

    }
  }
</script>

<style scoped>
  .content {
    padding-top: 10px;
    margin-top: 44px;
    margin-left: 10px;
    font-size: medium;
  }

  /* 设置头部 style start */
  .van-nav-bar {
    background: #2196F3;
    color: #fff;
  }

  .van-nav-bar .van-icon {
    color: #fff;
  }
</style>
