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


    .cont-cover {


        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;

        position: relative;
        
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

        transition: all 1s;
        

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