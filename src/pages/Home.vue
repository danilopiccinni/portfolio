<script>
import Banner from '../components/Banner.vue';
import SectionFullScreen from '../components/SectionFullScreen.vue';
import Footer from '../components/Footer.vue';
import Jumbo from '../components/Jumbo.vue';
import { store } from '../store';
    export default {

        name: 'Home',

        data() {
            return {
                store,
                animationOn: false,
            }

        },

        components: { 
            Jumbo,
            SectionFullScreen,
            Banner,
            Footer
        },
    } 
</script>

<template>
    <div :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'">

        <Jumbo></Jumbo>

        <SectionFullScreen></SectionFullScreen>

        <Banner></Banner>

        <Footer></Footer>

    </div>
</template>

<style scoped lang="scss">

</style>