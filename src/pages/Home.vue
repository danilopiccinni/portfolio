<script>
import Technologies from '../components/Technologies.vue';
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
            Technologies
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

        <div v-if="store.language == 'italian'" class="container py-5">
            <h3>Riguardo me:</h3>
            <p>
                "Sono un giovane junior web developer appassionato di tecnologia e desideroso di apprendere. Attraverso il mio impegno e la mia creatività, 
                cerco costantemente nuove sfide e opportunità per crescere professionalmente. 
                Con la determinazione di un principiante e il desiderio di padroneggiare le sfide del mondo dello sviluppo web, 
                sono pronto a contribuire a progetti innovativi e a migliorare costantemente le mie competenze."
            </p>
        </div>
        <div v-if="store.language == 'german'" class="container py-5">
            <h3>Über mich:</h3>
            <p>
                "Ich bin ein junger Junior-Webentwickler, der von Technologie begeistert ist und sich nach Wissen sehnt. 
                Durch meine Hingabe und Kreativität suche ich ständig nach neuen Herausforderungen und Gelegenheiten, um beruflich zu wachsen. 
                Mit der Entschlossenheit eines Anfängers und dem Wunsch, die Herausforderungen der Webentwicklungswelt zu meistern, 
                bin ich bereit, zu innovativen Projekten beizutragen und meine Fähigkeiten kontinuierlich zu verbessern."
            </p>
        </div>
        <div v-if="store.language == 'english'" class="container py-5">
            <h3>About me:</h3>
            <p>
                "I am a young junior web developer passionate about technology and eager to learn. Through my dedication and creativity, 
                I constantly seek new challenges and opportunities for professional growth. 
                With the determination of a beginner and the desire to master the challenges of the web development world, 
                I am ready to contribute to innovative projects and continuously enhance my skills."
            </p>
        </div>

        <div>
            <SectionFullScreen></SectionFullScreen>
        </div>

        <div>
            <Technologies></Technologies>
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