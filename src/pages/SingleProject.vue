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
    <div class="pt-5">
        <div class="d-flex m-auto w-75 pt-5">
            <iframe :src="project.link" frameborder="0" ></iframe>
        </div>
    </div>
</template>

<style scoped lang="scss">

    iframe {
        width: 100%;
        height: 100vh;
    }

</style>