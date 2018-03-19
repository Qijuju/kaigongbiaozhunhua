<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" @click-left="onClickLeft"  right-text="关闭"  @click-right="onClickRight" fixed></van-nav-bar>
    <iframe  style="margin-top:44px;width:100%;height:1000px;border: 0px" :src="url"></iframe>
  </div>
</template>

<script>
    export default {
        name: "HomeDetail",
      data() {
        return {
          url:''
        }
      },

      mounted: function() {
        var data = this.$route.query
        this.url=data.url
      },
      watch: {
        $route: function (to, from) {
          console.log("watch函数............")
          if(to.path==='/Home/detail'){
            var data = to.query;
            this.url=data.url
          }
        }
      },
      methods: {

        // 表头返回按钮事件
        getUrl() {
          // Toast('返回');
          this.$router.push({path: '/Home'});
        },
        onClickLeft() {
          this.$router.push({path: '/Home'});
        },
        //  关闭应用程序。调取JSAPI,关闭应用程序
        onClickRight(){
          RPM.closeApplication();
        },

      }
    }
</script>

<style scoped>

</style>
