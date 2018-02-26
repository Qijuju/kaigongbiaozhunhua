<script src="router/index.js"></script>

<template>
  <div id="app">

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/Common/Footer'

  export default {
    components: {
      Footer
    },
    data(){
      return{

      }
    }
  }
</script>

