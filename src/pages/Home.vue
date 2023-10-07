<script>
import Banner from '../components/Banner.vue';
import SectionFullScreen from '../components/SectionFullScreen.vue';
import Footer from '../components/Footer.vue';
import Jumbo from '../components/Jumbo.vue';
    export default {

        name: 'Home',

        data() {
            return {
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
    <div class="">

        <Jumbo></Jumbo>

        <SectionFullScreen></SectionFullScreen>

        <Banner></Banner>

        <Footer></Footer>

    </div>
</template>

<style scoped lang="scss">

    .cont-carousel3d {
        z-index: 100;
    }

    .jumbo {
        background-image: url('../../public/img/premium_photo.avif');
        background-repeat: no-repeat;
        background-size: 100%;
    }

    // img {
    //     position: relative;
    // }

    // .inner-jumbo {
    //     position: absolute;
    //     left: 0;
    //     top: 50%;

    //     background-color: rgba(0, 0, 0, 0.843);
    // }


</style>