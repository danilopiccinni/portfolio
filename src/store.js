import { reactive } from 'vue'

export const store = reactive({

    selectedProject: {},

    visual : 2,

    checked : false,

    isNavbarHidden: false,
    prevScrollY: 0,

    offTimer : false,

    switcherTutorial : true,

    language : JSON.parse(localStorage.getItem('selectedLanguage')) || 'english',
    
    selectedColor: JSON.parse(localStorage.getItem('selectedColor')) || '#00D4FF',

});