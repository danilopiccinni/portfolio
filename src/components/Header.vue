<script>

import { store } from '../store.js';
    export default {
        name: 'Header',

        data() {
            return {
                store,

                hover : false,
                nameHover : '',

                selectedColor: '#00D4FF',
            }
        },

        methods :  {

            pageControl(name) {
                if (this.$route.name == name) {
                    return true
                } else {
                    return false
                }
            },

            changeColor() {
                document.documentElement.style.setProperty('--theme-gradient', this.store.selectedColor);
                localStorage.setItem('selectedColor', JSON.stringify(this.store.selectedColor))
            },

            changeLanguage() {
                localStorage.setItem('selectedLanguage', JSON.stringify(this.store.language))
            }
        },
    }


</script>

<template>
    <div :style="{'--theme-gradient': store.selectedColor}" class="h-100 nav-bar">
        <div class="container h-100 d-flex justify-content-between align-items-center">

            <!-- logo -->
            <div class="d-flex align-items-center flex-grow-1">
                <a class="navbar-brand p-0 logo" href="#">
                    <img src="/img/logo.png" alt="">
                </a>
                <!-- language-switcher -->
                <select v-model="store.language" @change="changeLanguage()" class="form-select d-none d-md-block py-0" aria-label="Default select example" name="form-select" id="form-select">
                    <option selected value="italian">It</option>
                    <option value="german">De</option>
                    <option value="english">En</option>
                </select>
            </div>

            
            <!-- nav-links -->
            <div class="h-100">
                <ul class="h-100 navbar-nav d-flex flex-row justify-content-center align-items-end gap-1 gap-md-3 ">
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'home' }" class="nav-link text-center" @mouseover="hover = true, nameHover = 'home'" @mouseleave="hover = false, nameHover = ''" :class="pageControl('home') ? store.checked ? 'bg-light text-dark' : 'bg-dark' : '' ,  hover && nameHover == 'home' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-solid fa-house-chimney"></i>
                            <span class="d-none d-md-block">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end cont-switcher">
                        <router-link :to="{ name: 'projects' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'projects'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('projects') ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''  ,  hover && nameHover == 'projects' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-solid fa-diagram-project"></i>
                            <span v-if="store.language == 'italian'" class="d-none d-md-block">Progetti</span>
                            <span v-if="store.language == 'german'" class="d-none d-md-block">Projekte</span>
                            <span v-if="store.language == 'english'" class="d-none d-md-block">Projects</span>

                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'contact' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'contact'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('contact')  ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''  ,  hover && nameHover == 'contact' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-regular fa-comments"></i>
                            <span v-if="store.language == 'italian'" class="d-none d-md-block">Contatto</span>
                            <span v-if="store.language == 'german'" class="d-none d-md-block">Kontakt</span>
                            <span v-if="store.language == 'english'" class="d-none d-md-block">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            
            <!--  -->
            <div class=" d-flex flex-grow-1  justify-content-end align-items-center">

                <!-- darkMode-switcher -->
                <div class="d-none d-md-block one-quarter me-2" id="switch">
                    <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                    <label class="label" for="chk">
                        <i class="fas fa-moon"></i>
                        <i class="fas fa-sun"></i>
                        <div class="ball"></div>
                    </label>
                </div>
                
                <!-- button to open offcanvas -->
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars text-white"></i></button>

                <!-- offcanvas -->
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 v-if="store.language == 'italian'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Impostazioni pagina</h5>
                        <h5 v-if="store.language == 'german'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Seiteneinstellungen</h5>
                        <h5 v-if="store.language == 'english'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Page Settings</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body pt-4" :class="store.checked ? '' : 'bg-dark text-light'">
                        <div class="d-flex flex-column align-items-start gap-3">

                            <!-- darkMode-switcher with label (3language) -->
                            <div class="d-flex justify-content-center align-items-center gap-3">
                                <label v-if="store.language == 'italian'">Modalità notte/giorno:</label>
                                <label v-if="store.language == 'german'">Dark Mode Ein/Aus:</label>
                                <label v-if="store.language == 'english'">Dark Mode On/Off:</label>
                                <div class="one-quarter" id="switch">
                                    <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                                    <label class="label" for="chk">
                                        <i class="fas fa-moon"></i>
                                        <i class="fas fa-sun"></i>
                                        <div class="ball"></div>
                                    </label>
                                </div>
                            </div>

                            <!-- language-switcher with label (3language) -->
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <label v-if="store.language == 'italian'" for="form-select">Cambia lingua: </label>
                                <label v-if="store.language == 'german'" for="form-select">Sprache ändern: </label>
                                <label v-if="store.language == 'english'" for="form-select">Change Language: </label>
                                <select v-model="store.language" @change="changeLanguage()" class="form-select" aria-label="Default select example" name="form-select" id="form-select">
                                    <option selected value="italian">It</option>
                                    <option value="german">De</option>
                                    <option value="english">En</option>
                                </select>
                            </div>
                                                            
                            <!-- theme-changer with label (3language) -->
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <label v-if="store.language == 'italian'" for="form-select">Cambia tema: </label>
                                <label v-if="store.language == 'german'" for="form-select">Thema ändern: </label>
                                <label v-if="store.language == 'english'" for="form-select">Change Theme: </label>
                                <input @input="changeColor()" type="color" v-model="store.selectedColor"/>

                                <!--  pre-set themes -->
                                <!-- <select @change="changeColor()" v-model="selectedColor" class="form-select bg-transparent text-light" aria-label="Default select example" name="" id="">
                                    <option value="#00D4FF" selected>Blue</option>
                                    <option value="#ff0000">rosso</option>
                                    <option value="#00ff00">verde</option>
                                </select> -->
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
                                    


<style scoped lang="scss">

.logo {
    img {
        width: 42px;
        height: 42px;
    }
}

.offcanvas-header {
    background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
    color: white;
}

select {
    width: auto;
}

.nav-bar {
    background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, var(--theme-gradient) 100%);
    color: white;
}

    .router-link-active{
        transform: translateY(30%);
        transition: 400ms ease all;

        z-index: 50;
    }
    a {
        height: 100%;
        display: flex;
        align-items: center;
        transition: 0.5s;
        padding: 0 30px;
        border-radius: 50% 50% 0 0;
    }

    i {
        font-size: 1.2em;
    }
    
    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        background-color: rgb(255, 255, 255);
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 18px;
        width: 35px;
        transform: scale(1.5);

        transition: 1s;
    }

    .label .ball {
        background-color: #f39c12;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 18px;
        width: 18px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }

    .checkbox:checked + .label .ball {
        transform: translateX(18px);
        background-color: #1d12f3;

    }

        .checkbox:checked + .label {

        background-color: #050505;

    }


    .fa-moon {
        font-size: 0.7em;
        color: #f1c40f;
    }

    .fa-sun {
        font-size: 0.7em;
        color: #f39c12;
    }


    @media  screen and (max-width: 400px) {
        a {
            padding: 0 20px;
        }

        i {
            font-size: 1.2em;
        }
    }
</style>