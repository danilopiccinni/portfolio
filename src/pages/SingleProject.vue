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

        <div class="d-flex justify-content-center">
            <div class="cont-iframe rounded">
                <iframe class="rounded" :src="project.link" frameborder="0" ></iframe>
            </div>
        </div>

</template>

<style scoped lang="scss">

    .cont-iframe {

        width: 90vw;
            height: 80vh;

        margin-top: 90px;

        border: 1px solid black;

        position: relative;

        &::after {
            content: '';
            width: 5px;
            height: 30px;
            background-color:  #d4d4d4;
            position: absolute;
            bottom: -1px;
            left: 50%;
            transform: translate(-50% , 100%);

            border-right: 10px ridge #d4d4d4;

        }

        &::before {
            content: '';
            width: 20vw;
            height: 20px;
            background-color:  #d4d4d4;
            position: absolute;
            bottom: -31px;
            left: 50%;
            transform: translate(-50% , 100%);
            border: 5px ridge #d4d4d4;
            border-radius: 11px 12px 0px 0px;
            -webkit-border-radius: 11px 12px 0px 0px;
            -moz-border-radius: 11px 12px 0px 0px;
        }

        iframe {
            width: 100%;
            height: 100%;
    
            border: 18px ridge #d4d4d4;
    
        }
    }


</style>