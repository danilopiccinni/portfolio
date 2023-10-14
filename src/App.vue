<script>
  import { def } from '@vue/shared';
import Header from './components/Header.vue';
import { store } from './store.js';

  export default {

    data() {
      return {
        store,

      }
    },

    components: {
      Header,
    },

      methods : {
        handleScroll() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > this.store.prevScrollY) {
              // Scroll verso il basso
              this.store.isNavbarHidden = true;
            } else {
              // Scroll verso l'alto
              this.store.isNavbarHidden = false;
            }
            
            this.store.prevScrollY = currentScrollY;
          }
    },

    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },

  }
</script>

<template>
  <div  >
    <div class="header" :class="{ 'navbar-hidden': store.isNavbarHidden }">
      <Header></Header>
    </div>


      <main :class="store.checked ? 'bg-light' : 'bg-dark'">
        <router-view class="router-view" v-slot="{ Component }">
          <Transition name="page-opacity" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </router-view>
      </main>

  </div>
</template>

<style scoped lang="scss">

  body {
    position: relative;

  } 

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 100;

    overflow: hidden;

    transition: top 0.5s ease;

   
    background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, rgba(0,212,255,1) 100%);
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  .navbar-hidden {
  top: -100px; /* Nascondi la barra di navigazione fuori dallo schermo */
  }


  main {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: calc(100vh);
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
