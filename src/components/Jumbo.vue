<script>
import Carousel3d from '../components/Carousel3d.vue';
import { store } from '../store';
export default {
    name : 'Jumbo',

    data() {
        return {
            store,

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
    <div :style="{'--theme-gradient': store.selectedColor}">
        <div class="jumbo">
            <div class="inner-jumbo container py-3 d-flex flex-column-reverse flex-md-row">
                <div class="col-12 col-md-6 d-flex flex-column-reverse flex-md-column justify-content-center align-items-center ">

                    <div v-if="store.language == 'italian'" class="text-center text-md-start">
                        <h1 class="align-self-start">Ciao, sono <strong class="my-name">Danilo</strong></h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start greeting">
                            Benvenuto nel mio portfolio! Sono entusiasta di condividere con te il mio lavoro e le mie esperienze. 
                            Grazie per dedicare del tempo a esplorare i miei progetti. 
                            Spero che tu possa trarre ispirazione e scoprire il mio impegno nel mondo del design e dello sviluppo
                        </p>
                        <div class="d-flex flex-column gap-2">

                            <label for="">Scegli una lingua e scarica il mio CV</label>
                            <div class="d-flex flex-row gap-2 justify-content-center justify-content-md-start">
                                
                                <div class="col-3 col-lg-2">
                                    <select v-model="select" @change="checkError()" class="form-select" :class="checkError()" aria-label="Default select example">
                                        <option value="italiano">IT</option>
                                        <option value="tedesco">DE</option>
                                    </select>
                                </div>
                                <button @click="downloadCV('tedesco')" class="btn btn-secondary"><i class="fa-solid fa-download"></i></button>
                            </div>
                            <div v-if="warningChooseLanguage" class="text-danger">
                                Scegli una lingua
                            </div>
                        </div>
                    </div>

                    <div v-if="store.language == 'german'" class="text-center text-md-start">
                        <h1 class="align-self-start">Hallo, ich bin  <strong class="my-name">Danilo</strong></h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start greeting">
                            Willkommen in meinem Portfolio! Ich freue mich, meine Arbeit und Erfahrungen mit Ihnen zu teilen. Vielen Dank, 
                            dass Sie sich die Zeit nehmen, meine Projekte zu erkunden. 
                            Ich hoffe, dass Sie Inspiration finden und mein Engagement in der Welt des Designs und der Entwicklung entdecken können
                        </p>
                        <div class="d-flex flex-column gap-2">

                            <label for="">Wählen Sie eine Sprache und laden Sie meinen Lebenslauf herunter</label>
                            <div class="d-flex flex-row gap-2 justify-content-center justify-content-md-start">
                                
                                <div class="col-3 col-lg-2">
                                    <select v-model="select" @change="checkError()" class="form-select" :class="checkError()" aria-label="Default select example">
                                        <option value="italiano">IT</option>
                                        <option value="tedesco">DE</option>
                                    </select>
                                </div>
                                <button @click="downloadCV('tedesco')" class="btn btn-secondary"><i class="fa-solid fa-download"></i></button>
                            </div>
                            <div v-if="warningChooseLanguage" class="text-danger">
                                Wähle eine Sprache
                            </div>
                        </div>
                    </div>

                    <div v-if="store.language == 'english'" class="text-center text-md-start">
                        <h1 class="align-self-start">Hello, I'm <strong class="my-name">Danilo</strong></h1>
                        <h3 class="align-self-start">Junior Web Developer</h3>
                        <p class="align-self-start greeting">
                            Welcome to my portfolio! I'm excited to share my work and experiences with you. 
                            Thank you for taking the time to explore my projects. 
                            I hope you can find inspiration and discover my commitment in the world of design and development
                        </p>
                        <div class="d-flex flex-column gap-2">

                            <label for="">Choose a language and download my CV</label>
                            <div class="d-flex flex-row gap-2 justify-content-center justify-content-md-start">
                                
                                <div class="col-3 col-lg-2">
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

        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.147);


        font-size: 45px;
    }

    button {
        background: rgb(0,44,99);
        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
}

    .error {
        border: 2px solid red;
    }

    .no-err {
        border: none;
    }

    .selfie {    
        transform: translateY(20%);

        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
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