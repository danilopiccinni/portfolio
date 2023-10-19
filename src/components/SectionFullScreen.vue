<script>
import 'animate.css';
export default {
    name : 'SectionFullScreen',

    data() {
        return {
            animationOn: false,

            column1: 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',

            column2: [
                    {
                        title: 'Titolo in Grassetto',
                        text: 'un po di testo per prendere misure'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'un po di testo per prendere misure'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'un po di testo per prendere misure'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'un po di testo per prendere misure'
                    },

            ],

            column3: [
                    {
                        title: 'Titolo in Grassetto',
                        text: 'elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.'
                    },
                    {
                        title: 'Titolo in Grassetto',
                        text: 'elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.'
                    },
            ]
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

            // Verifica quando l'utente entra in Section 1
            if (scrollPosition + 300 >= (section1.offsetTop) && scrollPosition + 300 < section1.offsetTop + section1.clientHeight) {
                this.animationOn = true
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};

</script>

<template>

    <div ref="section1" class="section-full-screen text-light">

        <div class="d-flex justify-content-center flex-column flex-md-row">
            <div class="col-12 col-lg-4 column-1 column d-none d-lg-block">
                <img :src="column1" class="img-fluid" alt="...">
            </div>
            <div class="column-2 col-12 col-md-6 col-lg-4 text-center text-md-end">
                <div>
                    <h3 class="p-3">Titolo delle liste</h3>
                </div>
                <div class="cont-list">
                    <ul class="d-flex flex-column p-0  gap-1 gap-lg-5">
                        <li v-for="row, index in column2" class="d-flex flex-column justify-content-center align-items-md-end pe-lg-5" :class="animationOn==true ? 'animate__animated animate__fadeInLeft': ''" :style="{'--j': (`0.${index}` * 4)}">
                            <span>{{row.title}}</span>
                            <span>{{row.text}}</span> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column-3 col-12 col-md-6 col-lg-4 column text-center text-md-start">
                <div>
                    <h3 class="p-3">Perche scegliermi</h3>
                </div>
                <div class="cont-list" >
                    <ul class="d-flex flex-column p-0 gap-5">
                        <li v-for="row,index in column3" class="d-flex flex-column justify-content-center ps-lg-5" :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : '' " :style="{'--k': (`0.${index}` * 4)}">
                            <strong>{{index + 1}}</strong>
                            <span>{{row.title}}</span>
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

            background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, rgba(0,212,255,1) 100%);


        .column-1{
            overflow: hidden;
            img {
                height: 100%;
                object-fit: cover;
    
            }
        }

        .column-2 {
            border-right: 1px solid rgb(255, 255, 255);

            h3{

            }

            .cont-list {
                height: 80%;
                ul {
                    height: 100%;

        
                    li {
                        min-height: 150px;

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

                        &::after{
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 100%;
                            right: 0;
                            background-color: #f56f61;
                        
                            z-index: 0;
                            transition: 1s;
                        }
                        &:hover::after{
                        left: 0%;
                        }
                    }
                }
            }
        }

        .column-3{
            border-left: 1px solid black;

            .cont-list {
                height: 80%;
                ul {
                    height: 100%;
                    
                    li {
                        max-width: 80%;
                        min-height: 150px;

                        list-style-type: none;

                        -webkit-animation-delay: calc(1s * var(--k));
                        animation-delay: calc(1s * var(--k));
                        -webkit-animation-delay: calc(var(--animate-delay) * var(--k));
                        animation-delay: calc(var(--animate-delay) * var(--k));
                    }
                }
            }
        }
    }

</style>  
