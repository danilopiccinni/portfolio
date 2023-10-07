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

</style>