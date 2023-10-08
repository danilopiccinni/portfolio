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
                <ul class="h-100 navbar-nav d-flex flex-row align-items-end gap-3">
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'home' }" class="nav-link text-center" @mouseover="hover = true, nameHover = 'home'" @mouseleave="hover = false, nameHover = ''" :class="pageControl('home') ? store.checked ? 'bg-light' : 'bg-dark' : '' ,  hover && nameHover == 'home' ? store.checked ? 'bg-light' : 'bg-dark' : ''">
                            <i class="fa-solid fa-house-chimney"></i>
                            <span class="d-none d-md-block">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end cont-switcher">
                        <router-link :to="{ name: 'projects' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'projects'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('projects') ? store.checked ? 'bg-light' : 'bg-dark' : ''  ,  hover && nameHover == 'projects' ? store.checked ? 'bg-light' : 'bg-dark' : ''">
                            <i class="fa-solid fa-diagram-project"></i>
                            <span class="d-none d-md-block">Projects</span>

                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'contact' }" class="nav-link text-center" @mouseover="hover = true , nameHover = 'contact'" @mouseleave="hover = false , nameHover = ''" :class="pageControl('contact')  ? store.checked ? 'bg-light' : 'bg-dark' : ''  ,  hover && nameHover == 'contact' ? store.checked ? 'bg-light' : 'bg-dark' : ''">
                            <i class="fa-regular fa-comments"></i>
                            <span class="d-none d-md-block">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            
            <div class="d-flex gap-2 col-1 flex-wrap">

                <div class="container d-flex justify-content-end align-items-center">
                    <div class="one-quarter" id="switch">
                        <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                        <label class="label" for="chk">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">

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
</style>