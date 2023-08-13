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
    <div class="header">
      <Header></Header>
    </div>


      <main>
        <router-view class="router-view" v-slot="{ Component }">
          <Transition name="page-opacity" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </router-view>
      </main>


    <!-- <Footer></Footer> -->

  </div>
</template>

<style scoped lang="scss">
  .header {
    height: 56px;
  }

  .main {

  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
  }

  .page-opacity-enter-active,
  .page-opacity-leave-active {
    transition: 400ms ease all;
  }

  .page-opacity-enter-from,
  .page-opacity-leave-to {
    opacity: 0;
  }
</style>  
