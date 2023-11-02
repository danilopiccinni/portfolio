<script>
import 'animate.css';
import { store } from '../store';
export default {
    name : 'SectionFullScreen',

    data() {
        return {
            store,

            animationOn: false,

            column1: 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',


            column2English : [
                {
                    title: 'Solid Technical Foundations',
                    text: 'I possess solid fundamental technical skills in the field of web development.'
                },
                {
                    title: 'Continuous Learning',
                    text: 'Committed to keeping skills up-to-date through online courses and self-learning.'
                },
                {
                    title: 'Team Player',
                    text: 'Collaborative and capable of working effectively in a multidisciplinary team.'
                },
                {
                    title: 'Problem Solver',
                    text: 'Skilled at problem-solving and addressing challenges in a creative manner.'
                },
            ],

            column3English : [
                {
                    title: 'Bold Title',
                    text: "I am a young talent in the field of design and development, with a passion for continuous learning. My determination and creativity are an asset to any team."
                },
                {
                    title: 'Bold Title',
                    text: "I am a motivated and creative junior web developer. My thirst for learning and desire for constant growth can positively contribute to your company's projects."
                },
                {
                    title: 'Bold Title',
                    text: "I am a young designer with a curious mind and a fresh perspective. My innovative outlook and constant search for new solutions can bring innovation to your team."
                },
                {
                    title: 'Bold Title',
                    text: "I am a passionate junior in design and development, eager to learn and contribute to the company's success. My passion for technology and creativity is my calling card."
                },
            ],


            column2German : [
                {
                    title: 'Solide technische Grundlagen',
                    text: 'Ich habe solide grundlegende technische Fähigkeiten im Bereich der Webentwicklung.'
                },
                {
                    title: 'Kontinuierliches Lernen',
                    text: 'Engagiert, Fähigkeiten durch Online-Kurse und Selbststudium aktuell zu halten.'
                },
                {
                    title: 'Team Player',
                    text: 'Kollaborativ und in der Lage, effektiv in einem multidisziplinären Team zu arbeiten.'
                },
                {
                    title: 'Problem Solver',
                    text: 'Fähig, Probleme zu lösen und Herausforderungen kreativ anzugehen.'
                },
            ],

            column3German : [
                {
                    title: 'Fetter Titel',
                    text: "Ich bin ein junges Talent im Bereich Design und Entwicklung, mit einer Leidenschaft für kontinuierliches Lernen. Meine Entschlossenheit und Kreativität sind ein Gewinn für jedes Team."
                },
                {
                    title: 'Fetter Titel',
                    text: "Ich bin ein motivierter und kreativer junior Webentwickler. Mein Durst nach Wissen und mein Wunsch nach ständigem Wachstum können positiv zu den Projekten Ihres Unternehmens beitragen."
                },
                {
                    title: 'Fetter Titel',
                    text: "Ich bin ein junger Designer mit einem neugierigen Geist und einer frischen Perspektive. Mein innovativer Blick und die ständige Suche nach neuen Lösungen können Innovation in Ihr Team bringen."
                },
                {
                    title: 'Fetter Titel',
                    text: "Ich bin ein leidenschaftlicher Junior im Bereich Design und Entwicklung, der darauf brennt zu lernen und zum Erfolg des Unternehmens beizutragen. Meine Leidenschaft für Technologie und Kreativität ist meine Visitenkarte."
                },
            ],


            column2Italian : [
                {
                    title: 'Fondamenti Tecnici Solidi',
                    text: 'Posseggo solide competenze tecniche di base nel campo dello sviluppo web.'
                },
                {
                    title: 'Apprendimento Continuo',
                    text: 'Impegnato a mantenere le competenze aggiornate attraverso corsi online e autoapprendimento.'
                },
                {
                    title: 'Giocatore di Squadra',
                    text: 'Collaborativo e capace di lavorare in modo efficace in un team multidisciplinare.'
                },
                {
                    title: 'Risolutore di Problemi',
                    text: 'Abile nel risolvere problemi e affrontare sfide in modo creativo.'
                },
            ],

            column3Italian : [
                {
                    title: 'Titolo in Grassetto',
                    text: "Sono un giovane talento nel campo del design e dello sviluppo, con una passione per l'apprendimento costante. La mia determinazione e creatività sono un vantaggio per qualsiasi team."
                },
                {
                    title: 'Titolo in Grassetto',
                    text: "Sono un junior web developer motivato e creativo. La mia sete di apprendimento e desiderio di crescere costantemente possono contribuire positivamente ai progetti della tua azienda."
                },
                {
                    title: 'Titolo in Grassetto',
                    text: "Sono un giovane designer con una mente curiosa e una visione fresca. La mia prospettiva innovativa e la ricerca incessante di nuove soluzioni possono portare innovazione al tuo team."
                },
                {
                    title: 'Titolo in Grassetto',
                    text: "Sono un junior appassionato di design e sviluppo, desideroso di apprendere e contribuire al successo aziendale. La mia passione per la tecnologia e la creatività sono il mio biglietto da visita."
                },
            ],

        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const section1 = this.$refs.section1;


            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (this.$route.path == '/' && this.animationOn == false) {
                // Verifica quando l'utente entra in Section 1
                if (scrollPosition + 300 >= (section1.offsetTop) && scrollPosition + 300 < section1.offsetTop + section1.clientHeight) {
                    this.animationOn = true
                }
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};

</script>

<template>

    <div :style="{'--theme-gradient': store.selectedColor}" ref="section1" class="section-full-screen text-light">

        <div class="d-flex justify-content-center flex-column flex-md-row">
            <div class="col-12 col-lg-4 column-1 column d-none d-lg-block">
                <img :src="column1" class="img-fluid" alt="...">
            </div>
            <div class="column-2 d-flex flex-column col-12 col-md-6 col-lg-4 ">
                <div>
                    <h3 v-if="store.language == 'italian'" class="py-3 text-end pe-1 pe-md-5">Competenze e Qualità</h3>
                    <h3 v-if="store.language == 'german'" class="py-3 text-end pe-1 pe-md-5">Kompetenz und Qualität</h3>
                    <h3 v-if="store.language == 'english'" class="py-3 text-end pe-1 pe-md-5">Skills and quality</h3>
                </div>
                <div class="cont-list flex-grow-1">
                    <ul class="d-flex flex-column justify-content-around gap-2 p-0 pb-5 m-0">
                        <li v-if="store.language == 'italian'" v-for="row, index in column2Italian" class="d-flex flex-column justify-content-center align-items-end text-end pe-1 pe-md-5 py-2 p-md-0" :class="animationOn==true ? 'animate__animated animate__fadeInLeft': ''" :style="{'--j': (`0.${index}` * 4)}">
                            <span class="title">{{row.title}}</span>
                            <span class="text col-8">{{row.text}}</span> 
                        </li>

                        <li v-if="store.language == 'german'" v-for="row, index in column2German" class="d-flex flex-column justify-content-center align-items-end text-end pe-1 pe-md-5 py-2 p-md-0" :class="animationOn==true ? 'animate__animated animate__fadeInLeft': ''" :style="{'--j': (`0.${index}` * 4)}">
                            <span class="title">{{row.title}}</span>
                            <span class="text col-8">{{row.text}}</span> 
                        </li>

                        <li v-if="store.language == 'english'" v-for="row, index in column2English" class="d-flex flex-column justify-content-center align-items-end text-end pe-1 pe-md-5 py-2 p-md-0" :class="animationOn==true ? 'animate__animated animate__fadeInLeft': ''" :style="{'--j': (`0.${index}` * 4)}">
                            <span class="title">{{row.title}}</span>
                            <span class="text col-8">{{row.text}}</span> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column-3 d-flex flex-column ps-1 ps-md-5 col-12 col-md-6 col-lg-4">
                <div>
                    <h3 v-if="store.language == 'italian'" class="py-3">Perche scegliermi !?!?</h3>
                    <h3 v-if="store.language == 'german'" class="py-3">Warum mich wählen !?!?</h3>
                    <h3 v-if="store.language == 'english'" class="py-3">Why choose me !?!?</h3>
                </div>
                <div class="cont-list">
                    <ul class="d-flex flex-column justify-content-around gap-2 p-0 pb-5 pe-2 m-0">
                        <li v-if="store.language == 'italian'" v-for="row,index in column3Italian" class="d-flex flex-column justify-content-center py-2" :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : '' " :style="{'--k': (`0.${index}` * 4)}">
                            <strong>{{index + 1}}.</strong>
                            <span>{{row.text}}</span> 
                        </li>
                        <li v-if="store.language == 'german'" v-for="row,index in column3German" class="d-flex flex-column justify-content-center py-2" :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : '' " :style="{'--k': (`0.${index}` * 4)}">
                            <strong>{{index + 1}}.</strong>
                            <span>{{row.text}}</span> 
                        </li>
                        <li v-if="store.language == 'english'" v-for="row,index in column3English" class="d-flex flex-column justify-content-center py-2" :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : '' " :style="{'--k': (`0.${index}` * 4)}">
                            <strong>{{index + 1}}.</strong>
                            <span>{{row.text}}</span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    
</template>

<style scoped lang="scss">
        .section-full-screen {
            overflow: hidden;
            background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
        .column-1{

            img {
                height: 100%;
                object-fit: cover;
            }
        }

        .column-2 {
            border-right: 1px solid rgb(255, 255, 255);
            .cont-list {

                ul {
                    height: 100%;

                    li {
                        min-height: 20%;

                        list-style-type: none;

                        overflow: hidden;

                        position: relative;

                        -webkit-animation-delay: calc(1s * var(--j));
                        animation-delay: calc(1s * var(--j));
                        -webkit-animation-delay: calc(var(--animate-delay) * var(--j));
                        animation-delay: calc(var(--animate-delay) * var(--j));

                        &:hover {
                            cursor: pointer;
                        }

                        span{
                            z-index: 1;
                        }

                        .title {
                            font-size: 20px;

                            transition: 1s;
                        }
                        .text {
                            font-size: 12px;

                            transition: 1s;
                        }

                        &::after{
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 100%;
                            right: 0;
                            background-color: #b9b9b9;
                        
                            z-index: 0;
                            transition: 1s;
                        }
                        &:hover::after{
                        left: 0%;
                        }

                        &:hover .title,
                        &:hover .text {
                        color: black;
                        }
                    }
                }
            }
        }

        .column-3{
            border-left: 1px solid black;
            height: 100%;

            .cont-list {

                ul {
                    height: 100%;
                    
                    li {
                        min-height: 25%;

                        list-style-type: none;

                        -webkit-animation-delay: calc(1s * var(--k));
                        animation-delay: calc(1s * var(--k));
                        -webkit-animation-delay: calc(var(--animate-delay) * var(--k));
                        animation-delay: calc(var(--animate-delay) * var(--k));

                        strong {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>  
