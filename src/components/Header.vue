<script>

import { store } from '../store.js';
    export default {
        name: 'Header',

        data() {
            return {
                store,

                hover : false,
                nameHover : '',
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

 


        },
    }


</script>

<template>
    <div class="container h-100 nav-bar">
        <div class="h-100 d-flex justify-content-between align-items-center">
            <div class="d-flex col-1">
                <a class="navbar-brand" href="#">DP</a>
            </div>

            <div class="h-100">
                <ul class="h-100 navbar-nav d-flex flex-row align-items-end gap-1 gap-md-3">
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'home' }" class="nav-link text-center" @mouseover="hover = true, nameHover = 'home'" @mouseleave="hover = false, nameHover = ''" :class="pageControl('home') ? store.checked ? 'bg-light text-dark' : 'bg-dark' : '' ,  hover && nameHover == 'home' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-solid fa-house-chimney me-1"></i>
                            <span class="d-none d-md-block">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end cont-switcher">
                        <router-link :to="{ name: 'projects' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'projects'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('projects') ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''  ,  hover && nameHover == 'projects' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-solid fa-diagram-project me-1"></i>
                            <span v-if="store.language == 'italian'" class="d-none d-md-block">Progetti</span>
                            <span v-if="store.language == 'german'" class="d-none d-md-block">Projekte</span>
                            <span v-if="store.language == 'english'" class="d-none d-md-block">Projects</span>

                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'contact' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'contact'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('contact')  ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''  ,  hover && nameHover == 'contact' ? store.checked ? 'bg-light text-dark' : 'bg-dark' : ''">
                            <i class="fa-regular fa-comments me-1"></i>
                            <span v-if="store.language == 'italian'" class="d-none d-md-block">Contatto</span>
                            <span v-if="store.language == 'german'" class="d-none d-md-block">Kontakt</span>
                            <span v-if="store.language == 'english'" class="d-none d-md-block">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            
            <div class="d-none d-md-block d-flex gap-2 col-2 flex-wrap">

                <div class="container d-flex justify-content-end align-items-center gap-3">

                    <div class="one-quarter" id="switch">
                        <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                        <label class="label" for="chk">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>

                    <select v-model="store.language" class="form-select bg-transparent text-light" aria-label="Default select example" name="" id="">
                        <option selected value="italian">It</option>
                        <option value="german">De</option>
                        <option value="english">En</option>
                    </select>

                </div>
            </div>

            <div class="d-md-none d-flex gap-2 col-1 flex-wrap">

                <div class="container d-flex justify-content-end align-items-center gap-3">
                    
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars"></i></button>

                    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 v-if="store.language == 'italian'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Impostazioni pagina</h5>
                            <h5 v-if="store.language == 'german'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Seiteneinstellungen</h5>
                            <h5 v-if="store.language == 'english'" class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Page Settings</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body pt-4" :class="store.checked ? '' : 'bg-dark text-light'">
                            <div class="d-flex flex-column align-items-start gap-3">

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

                                <div class="d-flex justify-content-center align-items-center gap-2">
                                    <label v-if="store.language == 'italian'" for="form-select">Cambia lingua: </label>
                                    <label v-if="store.language == 'german'" for="form-select">Sprache ändern: </label>
                                    <label v-if="store.language == 'english'" for="form-select">Change Language: </label>
                                    <select v-model="store.language" class="form-select" aria-label="Default select example" name="form-select" id="form-select">
                                        <option selected value="italian">It</option>
                                        <option value="german">De</option>
                                        <option value="english">En</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">

.offcanvas-header {
    background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, rgba(0,212,255,1) 100%);
    color: white;
}

select {
    width: auto;
}

.nav-bar {
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