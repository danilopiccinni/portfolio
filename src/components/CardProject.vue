<script>
    import { store } from '../store.js';
    export default {

        name: 'CardProject',

        data() {
            return {
                store,
            }
        },

        props : {
            project : Object,
        },

        methods : {
            selectProject(project) {  
                this.store.selectedProject = project
            }
        }
    }
</script>

<template>
    <div class="project">
        <div class="large-card cont-cover h-100 " :style="{ backgroundImage : `url(${project.cover})` }" >

        <!-- container carouselThumbsDark -->
            <div class="cont-carouselThumbsDark d-flex align-items-center justify-content-center rounded animate__animated animate__fadeInTopLeft">

            <!-- carouselThumbsDark -->
                <div :id="'carouselThumbsDark' + project.slug" class="carousel carousel-dark slide w-100">
                    <!-- <div class="carousel-indicators p-2 bg-dark">
                        <button class="active bg-light " type="button" :data-bs-target="'#carouselThumbsDark' + project.slug" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button class="bg-light" type="button" :data-bs-target="'#carouselThumbsDark' + project.slug" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button class="bg-light" type="button" :data-bs-target="'#carouselThumbsDark' + project.slug" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> -->
                    <div class="carousel-inner d-flex">

                        <div  class="carousel-item active" data-bs-interval="10000">
                            <img :src="project.cover" class="d-block w-100" alt="...">
                        </div>
        
                        <div v-for="image in project.images" class="carousel-item" data-bs-interval="2000">
                            <img :src="image" class="d-block w-100" alt="../../public/img/4.jpeg">
                        </div>

                    </div>

                    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselThumbsDark' + project.slug" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon carousel-button rounded" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next " type="button" :data-bs-target="'#carouselThumbsDark' + project.slug" data-bs-slide="next">
                        <span class="carousel-control-next-icon carousel-button rounded" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            <!-- /carouselThumbsDark -->

            </div>
                            
            <!-- details-project -->
            <div class="details-project d-flex flex-column container animate__animated animate__fadeInBottomRight">

                <div class="cont-info-icon">
                    <div class="text-light info-icon animate__animated animate__zoomInLeft animate__slower animate__repeat-1 ">
                        <i class="fa-solid fa-clipboard fs-2 animate__animated animate__flash animate__infinite animate__delay-2s animate__slower"></i>
                    </div>
                </div>
                
                <h1 class="title">
                    {{project.title}}
                </h1>

                <h4 class="type" :style="{backgroundColor : project.type.color}">
                    {{ project.type.name }}
                </h4>

                <h6 class="repo">
                    {{ project.repo }}
                </h6>
                
                <ul class="p-0 d-flex gap-2 justify-content-center flex-wrap technologies">
                    <li v-for="technology in project.technologies"  class="list-group-item">
                        <span class="badge rounded-pill" :style="{backgroundColor : technology.color}">
                            {{ technology.name + ' '}} 
                        </span>
                    </li>
                </ul>
                
                <p class="description">
                    {{ project.description }}
                </p>
                
                <button class="details">
                    <router-link :to="{ name: 'singleProjects' , params : {title : project.title}}" v-on:click="selectProject(project)" class="nav-link" href="#">
                        Visualizza dettagli
                    </router-link>
                </button>
            </div>
            <!-- /details-project -->

        </div>
    </div>
</template>


<style scoped lang="scss">

    .cont-cover {

        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;

        position: relative;

        overflow: hidden;
        
        .cont-carouselThumbsDark {
            position: absolute;
            top: 100px;
            left: 0px;
    
            min-width: 200px;
            width: 25%;
            height: 20%;

            overflow: hidden;
    
            color: white;
            background-color: rgba(10, 10, 10, 0.914);
    
            -webkit-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            -moz-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            -o-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
    
            transition: all 2s;
    
            &:hover {
                
                z-index: 5;
    
                width: 100%;
                height: 80%;
    
                overflow: hidden;
            }
    
            &:hover .carousel-button,
            &:hover img {
                opacity: 1;
            }
            &:hover img {
                border-radius: 0px 0px 0px 0px;
            }

            img {
                border-radius: 0px 0px 300px 0px;

                opacity: 0.6;

                object-position: top ;
                object-fit: contain;

                transition: 2.5s;
            }
            .carousel-button {
                opacity: 0;

                background-color: gray;

                -webkit-box-shadow: 0px 0px 10px 8px #000000;
                -moz-box-shadow: 0px 0px 10px 8px #000000;
                -o-box-shadow: 0px 0px 10px 8px #000000;
                box-shadow: 0px 0px 10px 8px #000000;

                transition: 1.5s;
            }
        }
    
        .details-project {
    
            position: absolute;
            bottom: 0px;
            right: 0px;
            
            max-width: 35%;
            max-height: 25%;
            min-height: 150px;
    
            padding-bottom: 80px;
       
            text-align: center;
    
            color: white;
            background-color: rgba(10, 10, 10, 0.914);
    
            -webkit-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            -moz-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            -o-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
            box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
    
            transition: all 2.5s;
                    
            &:hover {
                bottom: 50px;
                right: 50px;
    
                max-width: 70%;
                max-height: 50%;

                padding: 10px;
    
                overflow: auto;

                & .info-icon {
                    display: none;
                }
            }

            .cont-info-icon {
                position: relative;

                .info-icon {
                    position: absolute;
                    top: 0;
                    left: 0px;
                }
            }

        }
    }
</style>