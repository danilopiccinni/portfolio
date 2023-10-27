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
    <div class="">
        <div class="d-flex justify-content-center">
            <iframe :src="project.link" frameborder="0" ></iframe>
        </div>
    </div>
</template>

<style scoped lang="scss">

    iframe {
        width: 90%;
        padding-top: 150px;
        padding-bottom: 50px;
        aspect-ratio: 16/9;
    }

</style>