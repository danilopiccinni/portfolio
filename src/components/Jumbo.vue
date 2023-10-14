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
                    cvUrl = '../../public/img/Danilo_Piccinni_Cv.pdf';
                } else {
                    cvUrl = '../../public/img/Danilo_Piccinni_Lebenslauf_ (1).pdf';
                    
                }
                let link = document.createElement('a');
                link.href = cvUrl;
                link.target = '_blank';
                if (lingua = 'italiano') {
                    link.download = 'Danilo_Piccinni_CV.pdf';
                } else {
                    link.download = 'Danilo_Piccinni_Lebenslauf.pdf';
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
            <div class="inner-jumbo container py-3 d-flex flex-column-reverse flex-md-row">
                <div class="col-12 col-md-6 d-flex flex-column-reverse flex-md-column justify-content-center align-items-center ">
                    <div class="text-center text-md-start">
                        <h1 class="align-self-start">Hi, I'm <strong class="my-name">Danilo</strong></h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start greeting">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum similique harum quasi? Nesciunt expedita sapiente placeat aperiam repudiandae adipisci, distinctio similique ipsum, officia architecto, exercitationem fugiat corrupti corporis fugit?</p>
                        <div class="d-flex flex-column gap-2">

                            <label for="">Choose a language and download my CV</label>
                            <div class="d-flex flex-row gap-2 justify-content-center justify-content-md-start">
                                
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
                    <img class="selfie z-2" src="../../public/img/Danilo.png" alt="">
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

    .my-name {

        background: rgb(0,44,99);
background: linear-gradient(52deg, rgba(0,44,99,1) 0%, rgba(0,113,255,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    button {
        background: rgb(0,44,99);
background: linear-gradient(52deg, rgba(0,44,99,1) 0%, rgba(0,113,255,1) 100%);   
}

    .error {
        border: 2px solid red;
    }

    .no-err {
        border: none;
    }

    .selfie {    
        transform: translateY(20%);

        background: rgb(0,44,99);
background: linear-gradient(52deg, rgba(0,44,99,1) 38%, rgba(0,113,255,1) 100%);
        border-radius: 67% 33% 67% 33% / 32% 71% 29% 68% ;
        animation: bubble 25s linear infinite;

        rotate: -5deg;

    }

    @keyframes bubble {

    0% {
		border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
	}

	10% {
		border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
	}

	20% {
		border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
	}

	30% {
		border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
	}

	40% {
		border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
	}

	50% {
		border-radius: 100%;
	}

	60% {
		border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
	}

	70% {
		border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
	}

	80% {
		border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
	}

	90% {
		border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
	}

    100% {
		border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
	}
}
    }



@media  screen and (max-width: 768px) {
    .jumbo {
    padding-top: 100px;
    height: calc(100% - 100px);


}
}
</style>