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

        <div>
            <Jumbo></Jumbo>
        </div>

        <div class="mt-5 p-5 p-md-0">
            <TheThreeCardsVue></TheThreeCardsVue>
        </div>

        <div class="container py-5">
            <h6>About</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure itaque ipsam odit voluptates ullam modi error soluta, in, ducimus facere officiis. Repudiandae fugit eligendi, rerum sunt tempore culpa officiis impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae voluptate. Ea a vitae maxime consequatur porro tempora, nobis odio amet nulla explicabo ad optio dicta dignissimos magnam doloremque. Aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam, deserunt possimus quaerat molestias, officia saepe magnam, ex temporibus animi nam veritatis sint ratione commodi porro debitis perferendis dolores molestiae!</p>
        </div>

        <div>
            <SectionFullScreen></SectionFullScreen>
        </div>

        <div>
            <Banner></Banner>
        </div>

        <div>
            <Footer></Footer>
        </div>

    </div>
</template>

<style scoped lang="scss">

</style>