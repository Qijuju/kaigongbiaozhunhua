<template>
  <div class="search">
    <van-nav-bar
      v-bind:title='storeProName' fixed
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
    name: "search",
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
