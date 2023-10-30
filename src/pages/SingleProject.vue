<script>
    import MonitorDisplay from '../components/MonitorDisplay.vue';
    import { store } from '../store.js';
    export default {
        name: 'SingleProject',

        data() {
            return {
                store,
                project : {}
            }
        },

        components : {
            MonitorDisplay,
        },

        created() {
            this.project = this.store.selectedProject
        }

    }
</script>

<template>

    <div :class="store.checked ? 'bg-white text-dark' : 'bg-dark text-white'" class="single-project">
        <div class="cont-project container-fluid d-flex flex-wrap">
            <div class="ps-lg-5 ps-0 mx-auto mx-lg-0">
                <div class="cont-monitor mb-5">
                    <MonitorDisplay></MonitorDisplay>
                </div>
            </div>

            <div class="container d-flex flex-column col-12 col-md-6 my-5 flex-grow-1">
                
                <!-- info -->
                <div class="pt-0 pt-md-5 pb-5">
                    <h1>
                        {{project.title}}
                    </h1>

                    <h4 class="type" :style="{color : project.type.color}">
                        {{ project.type.name }}
                    </h4>
                    
                    <ul class="p-0 d-flex gap-3  flex-wrap technologies">
                        <li v-for="technology in project.technologies"  class="list-group-item">
                            <span :class="store.checked ? 'badge-dark' : 'badge-white'" class="badge rounded-pill text-dark" :style="{backgroundColor : technology.color}">
                                {{ technology.name + ' '}} 
                            </span>
                        </li>
                    </ul>
    
                    <div class="d-flex gap-3">
                        <div class="mb-2" >
                            <span>Link: </span>
                            <a :href="project.repo" class="repo" target="_blank">Git-Hub</a>
                        </div>
                        <div v-if="project.link != ''" class="mb-2" >
                            <span>Link: </span>
                            <a :href="project.link" class="repo" target="_blank">Web-Site</a>
                        </div>
    
                    </div>
                    
                    <p class="description">
                        {{ project.description }}
                    </p>
                </div>

                <!-- cover -->
                <div class="w-100 d-flex flex-column align-items-center gap-5 mb-5" >
                    <img :class="store.checked ? 'shadow-dark' : 'shadow-white'" class="rounded border cont-image mt-5'" :src="project.cover" alt="">
                </div>
                
                <!-- v-for images  -->
                <div class="w-100 d-flex flex-column align-items-center gap-5">
                    <div v-for="image in project.images" class="mt-3 d-flex flex-column align-items-center">
                        <img :class="store.checked ? 'shadow-dark' : 'shadow-white'" class="cont-image rounded border" :src="image.src" alt="">
                        <p class="mb-5 pt-3 text-center">{{ image.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<style scoped lang="scss">

.badge-dark {
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,1);
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,1);
}

.badge-white {
    box-shadow: 0px 0px 5px 3px rgba(255,255,255,1);
    -webkit-box-shadow: 0px 0px 5px 3px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(255,255,255,1);
}



.shadow-dark{
    box-shadow: 6px 2px 13px 6px rgba(0,0,0,0.49);
    -webkit-box-shadow: 6px 2px 13px 6px rgba(0,0,0,0.49);
    -moz-box-shadow: 6px 2px 13px 6px rgba(0,0,0,0.49);
}

.shadow-white {
    box-shadow: 6px 2px 13px 6px rgba(255, 255, 255, 0.49);
    -webkit-box-shadow: 6px 2px 13px 6px rgba(255, 255, 255, 0.49);
    -moz-box-shadow: 6px 2px 13px 6px rgba(255, 255, 255, 0.49); 
}

.cont-monitor {
    position: sticky;
    top: -20px;
}

img {
    max-width: 100%;
}

</style>