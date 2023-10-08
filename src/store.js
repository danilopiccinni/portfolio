import { reactive } from 'vue'

export const store = reactive({

    selectedProject: {},

    visual : 2,

    checked : false,

    isNavbarHidden: false,
    prevScrollY: 0,

});