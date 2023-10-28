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

    }
</script>

<template>


    <MonitorDisplay></MonitorDisplay>


</template>

<style scoped lang="scss">


</style>