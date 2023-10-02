<script>
    import { store } from '../store.js';
    export default {
        name: 'SingleProject',

        data() {
            return {
                store,
                project : {}
            }
        },

        mounted() {
            this.project = this.store.selectedProject
        }

    }
</script>

<template>
    <div>

        <img :src="project.cover" alt="">
        <!-- <h1>{{ project.title }}</h1>
        <p>
            {{ project.description }}
        </p> -->
    </div>
</template>

<style scoped lang="scss">

    img {
        width: 100%;
        max-height: 100vh;
        object-position: top center;
        object-fit: cover;

    }
</style>