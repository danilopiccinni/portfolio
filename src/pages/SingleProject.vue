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
        <iframe src="https://tiny-profiterole-07944e.netlify.app" frameborder="0" ></iframe>
    </div>
</template>

<style scoped lang="scss">

    iframe {
        width: 100%;
        height: 100vh;
    }

</style>