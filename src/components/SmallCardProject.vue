<script>
    import { store } from '../store.js';
    export default {

        name: 'SmallCardProject',

        data() {
            return {
                store,

                onOffSelectEffect : false,

                isLeave : false,

            }
        },

        props : {
            project : Object,
            index: Number,
        },

        methods : {
            selectProject(project) {  
                this.store.selectedProject = project
                localStorage.setItem('selectedProject', JSON.stringify(project))

            },

        }
    }
</script>

<template>
    <div :style="{'--i': (`${index / 8}`)}" class="project rounded" :class="onOffSelectEffect == true ? 'animate__animated animate__bounceOut' : ' animate__animated animate__fadeInRight'">
        <router-link :to="{ name: 'singleProject' , params : {title : project.title}}" @mouseleave="isLeave = true" @mouseover="isLeave = false" v-on:click="selectProject(project) , onOffSelectEffect=true" class="nav-link" href="#">
            <div class=" cont-cover  rounded" :style="{ backgroundImage : `url(${project.cover})` }">
                <div class="cont-details" :style="isLeave ? {opacity : 0} : ''">
                    <div class="details-project container">
                        <h3 class="title">
                            {{project.title}}
                        </h3>
    
                        <h5 class="type" :style="{ color : project.type.color}">
                            {{ project.type.name }}
                        </h5>
    
                        <!-- <a class="repo" :href="project.repo">
                            GithubLink
                        </a>

                        <a v-if="project.link != ''" :href="project.link">
                            WebLink
                        </a> -->
                        
                        <ul class="p-0 d-flex gap-2 justify-content-center flex-wrap technologies">
                            <li v-for="technology in project.technologies"  class="list-group-item">
                                <span class="badge rounded-pill text-dark" :style="{backgroundColor : technology.color}">
                                    {{ technology.name + ' '}} 
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">

.project {
    position: relative;

    -webkit-box-shadow: 5px 5px 10px 0px #000000;
    -moz-box-shadow: 5px 5px 10px 0px #000000;
    -o-box-shadow: 5px 5px 10px 0px #000000;
    box-shadow: 5px 5px 10px 0px #000000;

    transition: all 0.3s;

    -webkit-animation-delay: calc(1s * var(--i));
    animation-delay: calc(1s * var(--i));
    -webkit-animation-delay: calc(var(--animate-delay) * var(--i));
    animation-delay: calc(var(--animate-delay) * var(--i));


    &:hover {
        z-index: 5;

        -webkit-box-shadow: 0px 0px 10px 4px #ffffff;
        -moz-box-shadow: 0px 0px 10px 4px #ffffff;
        -o-box-shadow: 0px 0px 10px 4px #ffffff;
        box-shadow: 0px 0px 10px 4px #ffffff;
        
        & .details-project {
            opacity: 1;
        }
    }

   .cont-cover {
        height: 200px;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: top left;
  


        position: relative;

        overflow: auto;

        .cont-details {
            height: 100%;
        }
    }
    .details-project {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 1.8s;
        transition-delay: 0.5s;
    
        color: white;
        background-color: rgba(10, 10, 10, 0.914);
    
        -webkit-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
        -moz-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
        -o-box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
        box-shadow: 0px 0px 70px 100px rgba(10, 10, 10, 0.914);
        
    }
}
</style>