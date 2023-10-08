<script>
import Carousel3d from '../components/Carousel3d.vue';
export default {
    name : 'Jumbo',

    data() {
        return {
            select : '',

            warningChooseLanguage : false
        }
    },

    components: {
        Carousel3d,
    },

    methods : {
        downloadCV(lingua) {
            if (this.select == '') {
                this.warningChooseLanguage = true

            } else {
                this.warningChooseLanguage = false
                let cvUrl = ''
                if (lingua == 'italiano') {
                    cvUrl = '../../public/img/Danilo_Piccinni_Cv.pdf'; // Sostituisci con il percorso corretto del tuo CV
                } else {
                    cvUrl = '../../public/img/Danilo_Piccinni_Lebenslauf_ (1).pdf'; // Sostituisci con il percorso corretto del tuo CV
                    
                }
                let link = document.createElement('a');
                link.href = cvUrl;
                link.target = '_blank';
                if (lingua = 'italiano') {
                    link.download = 'Danilo_Piccinni_CV.pdf'; // Il nome con cui verrà scaricato il file
                } else {
                    link.download = 'Danilo_Piccinni_Lebenslauf.pdf'; // Il nome con cui verrà scaricato il file
                }
                link.click();
            }
        },

        checkError() {
            if (this.warningChooseLanguage || this.select == '') {
                return 'error'
            } else {
                return 'no-err'
            }

        }
    }
    
}
</script>

<template>
    <div class="">
        <div class="jumbo">
            <!-- <img src="../../public/img/premium_photo.avif" alt="asdasdaasasasdasdsa" class="w-100"> -->
            <div class="inner-jumbo container py-3 d-flex flex-column-reverse flex-md-row">
                <div class="col-12 col-md-6 d-flex flex-column-reverse flex-md-column justify-content-center align-items-center ">
                    <div >
                        <h1 class="align-self-start">Hi, I'm Danilo</h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start greeting">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum similique harum quasi? Nesciunt expedita sapiente placeat aperiam repudiandae adipisci, distinctio similique ipsum, officia architecto, exercitationem fugiat corrupti corporis fugit?</p>
                        <div class="d-flex flex-column">
                            <!-- <button @click="downloadCV('italiano')" class="btn btn-secondary">download CV</button> -->
                            <label for="">Choose a language and download my CV</label>
                            <div class="d-flex flex-row">
                                
                                <div class="col-2">
                                    <select v-model="select" @change="checkError()" class="form-select" :class="checkError()" aria-label="Default select example">
                                        <option value="italiano">IT</option>
                                        <option value="tedesco">DE</option>
                                    </select>
                                </div>
                                <button @click="downloadCV('tedesco')" class="btn btn-secondary"><i class="fa-solid fa-download"></i></button>
                            </div>
                            <div v-if="warningChooseLanguage" class="text-danger">
                                Choose a language
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cont-img col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img class="greeting z-2" src="../../public/img/selfie.png" alt="">
                    <div class="carousel-3d z-1">
                        <Carousel3d></Carousel3d>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">

img {
    width: 65%;
    height: 100%;
    min-height: 200px;
    object-fit: contain;
    object-position: 80%;
}
.jumbo {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    .error {
        border: 2px solid red;
    }

    .no-err {
        border: none;
    }

}

@media  screen and (max-width: 768px) {
    .jumbo {
    padding-top: 100px;
    height: calc(100% - 100px);


}
}
</style>