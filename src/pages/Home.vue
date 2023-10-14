<script>

import Banner from '../components/Banner.vue';
import SectionFullScreen from '../components/SectionFullScreen.vue';
import Footer from '../components/Footer.vue';
import Jumbo from '../components/Jumbo.vue';
import { store } from '../store';
import TheThreeCardsVue from '../components/TheThreeCards.vue';
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
            Footer,
            TheThreeCardsVue,

        },
    } 
</script>

<template>
    <div :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'">

        <Jumbo></Jumbo>

        <div class="p-5 p-md-0">
            <TheThreeCardsVue></TheThreeCardsVue>
        </div>

        <SectionFullScreen></SectionFullScreen>

        <Banner></Banner>

        <Footer></Footer>

    </div>
</template>

<style scoped lang="scss">

</style>