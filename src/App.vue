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
      <router-view class="router-view" v-slot="{ Component }">
        <Transition name="page-opacity" mode="out-in">
          <component :is="Component"/>
        </Transition>
      </router-view>
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

  .page-opacity-enter-active,
  .page-opacity-leave-active {
    transition: 400ms ease all;
  }

  .page-opacity-enter-from,
  .page-opacity-leave-to {
    opacity: 0;
  }
</style>  
