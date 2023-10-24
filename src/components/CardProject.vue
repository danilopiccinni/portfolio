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
            },

            switchTutorial() {
                if (this.store.switcherTutorial) {
                    this.store.switcherTutorial = false
                } else {
                    this.store.switcherTutorial = true

                }
            }
        },
    }
</script>

<template>
    <div class="project">
        <div class="large-card cont-cover h-100" :style="{ backgroundImage : `url(${project.cover})` }" >


            <!-- tutorial container -->
            <div v-if="store.switcherTutorial" class="window-tutorial">
                <div class="square">

                    <!-- corner -->
                    <div class="corner a d-flex justify-content-center align-items-center gap-2">
                        <i class="fa-solid fa-photo-film icon"></i>
                        <strong>Previews</strong>
                        
                    </div>
                    <div class="corner b d-flex justify-content-center align-items-center gap-2">
                        <strong>Details</strong>
                        <i class="fa-solid fa-clipboard icon"></i>
                    </div>
                     <!-- corner -->

                    <!-- pointer -->
                    <i class="fa-regular fa-hand-pointer pointer"></i>
                    <!-- pointer -->
                    
                    <!-- scroll icons -->
                    <div class="cont-scroll-icon icons-down  animate__animated animate__fadeInTopRight animate_infinite">
                        <div class="d-flex flex-column justify-content-center align-items-center animate__animated animate__pulse animate__infinite">
                            <strong class="fs-3 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3">SCROLL</strong>
                            <span class="mb-2 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3">to the next project</span>
                            <i class="fa-solid fa-angles-down fs-6 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3"></i>
                            <i class="fa-solid fa-angles-down fs-3 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3"></i>
                        </div>
                    </div>
        
                    <div class="cont-scroll-icon icons-up animate__animated animate__fadeInBottomLeft">
                        <div class="d-flex flex-column justify-content-center align-items-center animate__animated animate__pulse animate__infinite">
                            <i class="fa-solid fa-angles-up fs-3 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3"></i>
                            <i class="fa-solid fa-angles-up fs-6 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3"></i>
                            <strong class="fs-3 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3">SCROLL</strong>
                            <span class="mb-2 animate__animated animate__heartBeat animate__slower animate__delay-2s animate__repeat-3">to the previous project</span>
                        </div>
                    </div>
                    <!-- scroll icons -->

                    <!-- understand-button -->
                    <div>
                        <button @click="switchTutorial()" class="btn btn-primary understand-button">Ok, I understand</button>
                    </div>
                    <!-- understand-button -->

                </div>
            </div>
            <!-- tutorial container -->


            <!-- tutorial require -->
            <div>
                <button @click="switchTutorial()" class="">
                    <i class="tutorial-request fa-solid fa-circle-question"></i>
                </button>
            </div>
            <!-- tutorial require -->


            <!-- container carouselThumbsDark -->
            <div class="cont-carouselThumbsDark d-flex  justify-content-center rounded animate__animated animate__fadeInBottomRight">

                <!-- gallery-icon -->
                <div class="cont-thumbs-icon">
                    <div class="text-light info-icon animate__animated animate__zoomInLeft animate__slower animate__repeat-1 ">
                        <i class="fa-solid fa-photo-film fs-2 animate__animated animate__flash animate__infinite animate__delay-2s animate__slower"></i>
                    </div>
                </div>
                <!-- gallery-icon -->


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

                        <!-- <div  class="carousel-item" data-bs-interval="10000">
                            <video class="d-block w-100"  controls>
                                <source src="../../public/img/vid1.mp4" type="video/mp4">
                            </video>
                        </div> -->

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
            <!-- container carouselThumbsDark -->

                            
            <!-- details-project -->
            <div class="details-project d-flex flex-column  container animate__animated animate__fadeInTopLeft">

                <!-- details-icon -->
                <div class="cont-info-icon">
                    <div class="text-light info-icon animate__animated animate__zoomInLeft animate__slower animate__repeat-1 ">
                        <i class="fa-solid fa-clipboard fs-2 animate__animated animate__flash animate__infinite animate__delay-2s animate__slower"></i>
                    </div>
                </div>
                <!-- details-icon -->

                
                <h1 class="title">
                    {{project.title}}
                </h1>

                <h4 class="type" :style="{color : project.type.color}">
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

                <div>
                    <button class="details btn btn-primary">
                        <router-link :to="{ name: 'singleProjects' , params : {title : project.title}}" v-on:click="selectProject(project)" class="nav-link" href="#">
                            Apri progetto
                        </router-link>
                    </button>
                </div>
                    
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

        .tutorial-request {
            position: absolute;
            bottom: 15px;
            left: 15px;
            font-size: 50px;
            background-color: white;

            border-radius: 50%;

            -webkit-box-shadow: 0px 0px 70px 50px rgba(10, 10, 10, 0.914);
            -moz-box-shadow: 0px 0px 70px 50px rgba(10, 10, 10, 0.914);
            -o-box-shadow: 0px 0px 70px 50px rgba(10, 10, 10, 0.914);
            box-shadow: 0px 0px 70px 50px rgba(10, 10, 10, 0.914);
        }

        .window-tutorial {
            position: absolute;
            left: 0;
            top: 0;

            color: white;

            width: 100%;
            height: 100%;

            z-index: 100;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: rgba(10, 10, 10, 0.914);

            .square {
                border: 2px outset gray;
                width: 70%;
                height: 70%;

                border-radius: 12px;

                position: relative;
                
                .understand-button {
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translate(-50%,100%);
                }

                .pointer {
                    position: absolute;
                    top: 50%;
                    left: 50%;

                    transform: translate(-50%, -50%);

                    font-size: 30px;

                    animation: movePointer 10s  infinite;
                    animation-delay: 4.5s;

                    @keyframes movePointer {
                        0%{
                            top: 50%;
                            left: 50%;

                        }
                        20% {
                            top: 20%;
                            left: 20%;
                            opacity: 0;
                        }

                        50% {
                            top: 50%;
                            left: 50%;
                            opacity: 1;
                        }
                        80%{
                            top: 80%;
                            left: 80%;
                            opacity: 0;
                        }
                        100%{
                            top: 50%;
                            left: 50%;
                        }
                    }
                }


                .icons-up {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                }

                .icons-down {
                    position: absolute;
                    bottom: 12px;
                    left: 12px;
                }

                .corner {
                    position: absolute;

                    width: 50%;
                    height: 50%;

                    background: transparent;
                    color: transparent;

                    transition: 0.5s;

                    .icon {
                        font-size: 100px;
                    }

                }
                .a {
                    top: 0;
                    left: 0;

                    border-right: 10px solid red;

                    border-radius: 0 0 100% 0 ;

                    animation: luminateSx 10s  infinite;
                    animation-delay: 5s;

                    @keyframes luminateSx {
                        0%{
                            background: transparent;
                            color: transparent;
                        }
                        15% {                            
                            background: rgba(255, 255, 255, 0.318);
                            color: red;
                        }

                        50% {
                            background: transparent;
                            color: transparent;
                        }
                        75%{
                            background: transparent;
                            color: transparent;
                        }
                        100%{
                            background: transparent;
                            color: transparent;
                        }
                    }
                }

                .b {
                    bottom: 0;
                    right: 0;

                    border-left: 10px solid red;

                    border-radius: 100% 0 0 0 ;

                    animation: luminateDx 10s  infinite;
                    animation-delay: 5s;

                    @keyframes luminateDx {
                        0%{
                            background: transparent;
                            color: transparent;
                            
                        }
                        15% {
                            background: transparent;
                            color: transparent;
                        }

                        50% {
                            background: transparent;
                            color: transparent;
                        }
                        75%{
                            background: rgba(255, 255, 255, 0.318);
                            color: red;
                        }
                        100%{
                            background: transparent;
                            color: transparent;
                        }
                    }
                }
            }
        }

        
        .cont-carouselThumbsDark {
            position: absolute;
            top: 60px;
            left: 0px;
    
            min-width: 200px;
            width: 25%;
            max-height: 25%;

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
                max-height: 80%;

    
                overflow: hidden;

                & .cont-thumbs-icon {
                    display: none;
                }

                & .carousel-button,
                & img {
                    opacity: 1;
                }
                & img {
                    border-radius: 80px 0px 300px 0px;
                }
            }    

            video {
                width: 100%;
                height: 100%;
                aspect-ratio: 16/9;

                object-fit: contain;         
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 80px 0px 300px 0px;
                aspect-ratio: 16 / 9;

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

            .cont-thumbs-icon {
                position: absolute;
                bottom: 0;
                right: 0px;
            }
        }
    
        .details-project {
    
            position: absolute;
            bottom: 0px;
            right: 0px;
            
            max-width: 50%;
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