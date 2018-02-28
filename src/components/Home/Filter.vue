<template>
  <div class="filter">
    <van-nav-bar
      v-bind:title="'筛选页面'" fixed
      left-text="返回"
      @click-left="onClickLeft"
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
        this.$router.push({path:'/Home'});
      }

    }
  }
</script>

<style scoped>

</style>
