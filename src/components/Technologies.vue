<script>
import { store } from '../store';
export default {
    name: 'Technologies',

    data() {
        return {
            store,

            arrayTechnologies : [
                    {
                        name : 'HTML',
                        color: '#ff7500',
                        src : '/img/icons8-html-5-480.png'
                    },                    
                    {
                        name : 'CSS',
                        color: '#00b9e4',
                        src : '/img/icons8-css-480.png'
                    },                    
                    {
                        name : 'Sass',
                        color: '#f06292',
                        src : '/img/icons8-sass-480.png'
                    },
                    {
                        name : 'JS',
                        color: '#fcd602',
                        src : '/img/icons8-js-480.png'
                    },
                    {
                        name : 'PHP',
                        color: '#7fabff',
                        src : '/img/icons8-php-480.png'
                    },
                    {
                        name : 'MySQL',
                        color: '#0c7a6b',
                        src : '/img/icons8-mysql-480.png'
                    },
                    {
                        name : 'VsCode',
                        color: '#1c89d1',
                        src : '/img/icons8-visual-studio-code-2019-480.png'
                    },
                    {
                        name : 'Figma',
                        color: '#b6df00',
                        src : '/img/figma_logo_icon_170157.png'
                    },
                    {
                        name : 'Bootstrap',
                        color: '#8c11fc',
                        src : '/img/Bootstrap_logo.svg.png'
                    },
                    {
                        name : 'Postman',
                        color: '#be5328',
                        src : '/img/postman_macos_bigsur_icon_189815.png'
                    },
                    {
                        name : 'VueJs',
                        color : '#81c784',
                        src : '/img/icons8-vue-js-480.png'
                    },
                    {
                        name : 'Vite+Vue3js',
                        color : '#f8a803',
                        src : '/img/vite.svg'
                    },
                    {
                        name : 'Laravel',
                        color : '#ff0000',
                        src : '/img/icons8-laravel-48.png'
                    },
                    {
                        name : 'Axios',
                        color : '#edd9c5',
                        src : '/img/axios_logo_icon_168545.png'
                    },
                    {
                        name : 'GitHub',
                        color : '#edd9c5',
                        src : '/img/kisspng-github-social-media-computer-icons-logo-android-5b348490ab20f1.548940641530168464701.png'
                    },

                ],
        }
    },
}
</script>

<template>
    <div class=" container my-5 pb-5">

        <h3 v-if="store.language == 'italian'" class="text-center pt-5 my-5">Tecnologie Incontrate</h3>
        <h3 v-if="store.language == 'german'" class="text-center pt-5 my-5">Begegnete Technologien</h3>
        <h3 v-if="store.language == 'english'" class="text-center pt-5 my-5">Technologies I've Encountered</h3>

        <div class="cont-cards d-flex flex-wrap justify-content-center gap-3 p-2 rounded">
            <div v-for="technology in arrayTechnologies" :style="{ backgroundImage : `url(${technology.src})`}" :class="store.checked ? 'dark-shadow' : 'white-shadow'" class="card rounded border-0 col-2 d-flex justify-content-center align-items-center">
                <span :style="{color: technology.color}">
                    <!-- {{ technology.name }} -->
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">


.card {
    aspect-ratio: 1/1;
    
    background-color: transparent;
    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    transition: 0.1s; 

    &:hover {
        transition: 0.5s;
    }

    &.white-shadow {
        box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.803) inset;
        -webkit-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.803) inset;
        -moz-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.803) inset;

        &:hover {
            box-shadow: 0px 0px 49px 0px rgba(255, 255, 255, 0.803) inset;
            -webkit-box-shadow: 0px 0px 49px 0px rgba(255, 255, 255, 0.803) inset;
            -moz-box-shadow: 0px 0px 49px 0px rgba(255, 255, 255, 0.803) inset;
        }
    }
    
    &.dark-shadow {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.803) inset;
        -webkit-box-shadow: 0px 0px 0px 0px rgba(3, 3, 3, 0.803) inset;
        -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.803) inset;
    
        &:hover {
            box-shadow: 0px 0px 49px 0px rgba(0, 0, 0, 0.803) inset;
            -webkit-box-shadow: 0px 0px 49px 0px rgba(0, 0, 0, 0.803) inset;
            -moz-box-shadow: 0px 0px 49px 0px rgba(0, 0, 0, 0.803) inset;
        }
    }
    
}
</style>