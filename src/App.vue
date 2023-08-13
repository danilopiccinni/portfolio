<script>
  import { def } from '@vue/shared';
import Header from './components/Header.vue';
import Footer from './components/Footer.Vue';

  export default {

    data() {
      return {

      }
    },

    components: {
      Header,
      Footer,
    }
  }
</script>

<template>
  <div>

    <Header></Header>

    <main>
      <router-view></router-view>
    </main>

    <Footer></Footer>

  </div>
</template>

<style scoped lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
</style>  
