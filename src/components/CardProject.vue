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
        <!-- <div class="large-card  cont-cover h-100 " :style="{ backgroundImage : `url(${project.cover})` }"> -->
            <div class="large-card cont-cover h-100 " :style="{ backgroundImage : `url(${project.cover})` }">
                <div class="thumbs  d-flex align-items-center justify-content-center">
                    <div :id="'carouselExampleDark' + project.slug" class="carousel carousel-dark slide w-100">
  
                            <!-- <div class="carousel-indicators p-2 bg-dark">
                                <button class="active bg-light " type="button" :data-bs-target="'#carouselExampleDark' + project.slug" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                <button class="bg-light" type="button" :data-bs-target="'#carouselExampleDark' + project.slug" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button class="bg-light" type="button" :data-bs-target="'#carouselExampleDark' + project.slug" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div> -->



                        <div class="carousel-inner d-flex">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="../../public/img/4.jpeg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <!-- <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p> -->
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="../../public/img/5.jpeg" class="d-block w-100" alt="../../public/img/4.jpeg">
                                <div class="carousel-caption d-none d-md-block">
                                    <!-- <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p> -->
                                </div>
                            </div>
                            
                            <div class="carousel-item" >
                                <img src="../../public/img/6.jpeg" class="d-block w-100" alt="../../public/img/4.jpeg">
                                <div class="carousel-caption d-none d-md-block">
                                    <!-- <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p> -->
                                </div>
                            </div>
                        3</div>

                        <button class="carousel-control-prev bg-dark" type="button" :data-bs-target="'#carouselExampleDark' + project.slug" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next bg-dark" type="button" :data-bs-target="'#carouselExampleDark' + project.slug" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="details-project d-flex flex-column container ">
                <span class="text-light info animate__animated animate__zoomInLeft animate__slower animate__infinite "><i class="fa-solid fa-hand-point-right fs-2"></i><i class="fa-solid fa-circle-info"></i> </span>
                <h1 class="title">
                    {{project.title}}
                </h1>
                <h3 class="repo">
                    {{ project.repo }}
                </h3>
                <h5 class="type">
                    {{ project.type }}
                </h5>
                
                <ul class="p-0 d-flex gap-2 flex-wrap technologies">
                    <li v-for="technology in project.technologies" class="list-group-item">
                        <span class="badge rounded-pill text-bg-light">
                            {{ technology + ' '}} 
                        </span>
                    </li>
                </ul>
                
                <p class="description" v-if="store.visual == 1">
                    {{ project.description }}
                </p>
                <button class="details">
                    <router-link :to="{ name: 'singleProjects' , params : {title : project.title}}" v-on:click="selectProject(project)" class="nav-link" href="#">
                        Visualizza dettagli
                    </router-link>
                </button>
            </div>

        </div>
        

    </div>
</template>

<style scoped lang="scss">



    img {
        padding-top: 65px;
        object-position: top ;
        object-fit: contain;
    }

    .carousel-item {

    }
    .cont-cover {

        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;

        position: relative;

        overflow: hidden;
        
    }

    .thumbs{
        position: absolute;
        top: 0px;
        left: 0px;



        
        min-width: 200px;
        width: 25%;
        height: 20%;

        overflow: hidden;

        color: white;
        background-color: rgba(0, 0, 0, 0.914);

        -webkit-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        -moz-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        -o-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);

        transition: all 2s;

        &:hover {
            
            z-index: 5;
            width: 100%;
            height: 80%;

            top: 0px;

            overflow: hidden;
        }
    }

    .details-project {
   
        color: white;
        background-color: rgba(0, 0, 0, 0.914);

        -webkit-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        -moz-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        -o-box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);
        box-shadow: 0px 0px 70px 100px rgba(0, 0, 0, 0.914);


        
        position: absolute;
        bottom: 0px;
        right: 0px;
        max-width: 50%;
        max-height: 30%;
        min-height: 150px;

        transition: all 2.5s;
        

        .description,
        .repo,
        .details{
            display: none;
        }

 

        &:hover {
            max-width: 70%;
            max-height: 50%;
            padding: 10px;
            bottom: 50px;
            right: 50px;

            overflow: auto;
            & .info {
                display: none;
            }
            
            & * {
                display: block;
            }

            & .description,
            .repo,
            .details{
                display: block;

            }
        }
    }
</style>