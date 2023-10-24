import { reactive } from 'vue'

export const store = reactive({

    selectedProject: {},

    visual : 1,

    checked : false,

    isNavbarHidden: false,
    prevScrollY: 0,

    offTimer : false,

    switcherTutorial : true,

    language : 'italian'

});