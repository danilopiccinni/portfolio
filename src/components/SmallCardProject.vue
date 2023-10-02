<script>
    import { store } from '../store.js';
    export default {

        name: 'SmallCardProject',

        data() {
            return {
                store,

                onOffSelectEffect : false,
            }
        },

        props : {
            project : Object,
        },

        methods : {
            selectProject(project) {  
                this.store.selectedProject = project

            },

        }
    }
</script>

<template>
    <div class="project rounded" :class="onOffSelectEffect == true ? 'animate__animated animate__bounceOut' : 'animate__animated animate__rollIn'">
        <router-link :to="{ name: 'singleProjects' , params : {title : project.title}}" v-on:click="selectProject(project) , onOffSelectEffect=true" class="nav-link" href="#">
            <div class=" cont-cover  rounded" :style="{ backgroundImage : `url(${project.cover})` }">
                <div class="details-project container">
                        <!-- <h2 class="bg-dark text-center text-light rounded-bottom ">
                            {{project.title}}
                        </h2> -->
                    </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">

.project {
    -webkit-box-shadow: 5px 5px 10px 0px #000000;
    -moz-box-shadow: 5px 5px 10px 0px #000000;
    -o-box-shadow: 5px 5px 10px 0px #000000;
    box-shadow: 5px 5px 10px 0px #000000;

    transition: all 0.3s;
    &:hover {

   
            zoom: 1;
            z-index: 5;

            -webkit-box-shadow: 0px 0px 10px 4px #ffffff;
            -moz-box-shadow: 0px 0px 10px 4px #ffffff;
            -o-box-shadow: 0px 0px 10px 4px #ffffff;
            box-shadow: 0px 0px 10px 4px #ffffff;


        }


}

   .cont-cover {
    height: 250px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    position: relative;

}
</style>