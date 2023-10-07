<script>
import Carousel3d from '../components/Carousel3d.vue';
export default {
    name : 'Jumbo',

    data() {
        return {

        }
    },

    components: {
        Carousel3d,
    }
}
</script>

<template>
    <div class="">
        <div class="jumbo my-5">
            <!-- <img src="../../public/img/premium_photo.avif" alt="asdasdaasasasdasdsa" class="w-100"> -->
            <div class="inner-jumbo container d-flex flex-column-reverse flex-md-row">
                <div class="col-12 col-md-6 d-flex flex-column-reverse flex-md-column justify-content-center align-items-center ">
                    <div>
                        <h1 class="align-self-start">Hi, I'm Danilo</h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum similique harum quasi? Nesciunt expedita sapiente placeat aperiam repudiandae adipisci, distinctio similique ipsum, officia architecto, exercitationem fugiat corrupti corporis fugit?</p>
                        <button class="btn btn-secondary">Download CV</button>
                    </div>
                    <div>
                        <Carousel3d></Carousel3d>
                    </div>
                </div>

                <div class="cont-img col-12 col-md-6 d-flex justify-content-center">
                    <!-- foto personale  -->
                    <img src="../../public/img/selfie.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">

img {
    width: 50%;
    height: 100%;
    min-height: 200px;
    object-fit: cover;
    object-position: 80%;
}
        .jumbo {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 100vh;
            max-height: 600px;
        }
</style>