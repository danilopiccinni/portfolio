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
                this.store.name ='suca'
            }
        }
    }
</script>

<template>
    <div>
        <div class="large-card  cont-cover h-100" :style="{ backgroundImage : `url(${project.cover})` }">
            <div class="d-flex">
                <h1>
                    {{project.title}}
                </h1>
                <h3>
                    {{ project.repo }}
                </h3>
                <h5>
                    {{ project.typologie }}
                </h5>
                <h6>
                    <span v-for="technology in project.tecnologies">
                        {{ technology }}
                    </span>
                </h6>
                <p class="d-none d-md-block" v-if="store.visual == 1">
                    {{ project.description }}
                </p>
            </div>

                <button>
                    <router-link :to="{ name: 'singleProjects' , params : {title : project.title}}" v-on:click="selectProject(project)" class="nav-link" href="#">
                        Visualizza dettagli
                    </router-link>
                </button>
        </div>
        
        <!-- <div class="small-card d-md-none d-flex cont-cover col-12" :style="{ backgroundImage : `url(${project.cover})` }">
            <div class="">
                <h1>
                    {{project.title}}
                </h1>
                <h3>
                    {{ project.repo }}
                </h3>
                <h5>
                    {{ project.typologie }}
                </h5>
                <h6>
                    {{ project.technologies }} {{ project.technologies }}
                </h6>
            </div>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
    .cont-cover {


        background-repeat: no-repeat;
        background-size: cover;
        
    }

    .small-card {

    }
</style>